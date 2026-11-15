<!--
  App.vue — the root layout: the fixed chrome (SiteHeader, LinksOverlay,
  Wordmark), the routed page, and the footer. It also owns the two
  things the chrome and pages share:
    - the single scroll/resize listener, mirrored into uiStore
    - the theme: --bg/--fg/--mute/--line/--hc on <html>, which fade from
      the light palette to the dark one as the homepage scrolls from
      its first screen into SODACHE (every other page is light)
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import LinksOverlay from './components/LinksOverlay.vue'
import Wordmark from './components/Wordmark.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useUiStore } from './stores/uiStore'

const route = useRoute()
const router = useRouter()
const ui = useUiStore()
const isHome = computed(() => route.path === '/')

let ticking = false
function measure() {
  ticking = false
  ui.scrollY = window.scrollY
  ui.vw = document.documentElement.clientWidth
  ui.vh = window.innerHeight
  ui.docH = document.documentElement.scrollHeight
}
function requestMeasure() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(measure)
}

// 0 on the light first screen → 1 once SODACHE fills the screen.
const progress = computed(() => {
  if (!isHome.value || !ui.vh) return 0
  const t = Math.min(1, Math.max(0, (ui.scrollY / ui.vh - 0.12) / 0.76))
  return t * t * (3 - 2 * t)
})

// `shown` follows `progress` exactly while scrolling, but eases to it
// across a route change so leaving the dark SODACHE section for a light
// page fades rather than snaps.
const shown = ref(0)
let switching = false
let raf = 0
watch(progress, (value) => {
  if (!switching) shown.value = value
})
function easeToProgress() {
  cancelAnimationFrame(raf)
  switching = true
  const from = shown.value
  const start = performance.now()
  const step = (now) => {
    const k = Math.min(1, (now - start) / 600)
    shown.value = from + (progress.value - from) * (1 - Math.pow(1 - k, 3))
    if (k < 1) raf = requestAnimationFrame(step)
    else switching = false
  }
  raf = requestAnimationFrame(step)
}

router.afterEach((to, from) => {
  ui.closeAll()
  if (to.path !== from.path) easeToProgress()
  nextTick(requestMeasure)
})

const LIGHT = { bg: [247, 242, 235], fg: [17, 17, 17], mute: [138, 130, 121], line: [217, 208, 195], hc: [255, 224, 0] }
const DARK = { bg: [14, 14, 14], fg: [255, 255, 255], mute: [150, 150, 150], line: [64, 64, 64], hc: [206, 34, 34] }
function mix(key, p) {
  const a = LIGHT[key]
  const b = DARK[key]
  return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * p)).join(' ')})`
}

watchEffect(() => {
  const p = shown.value
  const root = document.documentElement
  root.style.setProperty('--p', p.toFixed(3))
  root.style.setProperty('--bg', mix('bg', p))
  // Text flips quickly around the midpoint instead of fading through the
  // same mid-grey as the background, so it never disappears into it.
  const ink = Math.min(1, Math.max(0, (p - 0.42) / 0.16))
  for (const key of ['fg', 'mute', 'line']) root.style.setProperty(`--${key}`, mix(key, ink))
  // Faculty pages tint the wordmark's "HC" with their own colour (meta.hc).
  root.style.setProperty('--hc', isHome.value ? mix('hc', p) : route.meta.hc || mix('hc', 0))
  root.classList.toggle('snap-home', isHome.value)
})

let resizeObserver = null
onMounted(() => {
  measure()
  window.addEventListener('scroll', requestMeasure, { passive: true })
  window.addEventListener('resize', requestMeasure)
  // Page height changes without a scroll or resize (images loading, a
  // SODACHE tab or search changing the list) — the wordmark needs it.
  resizeObserver = new ResizeObserver(requestMeasure)
  resizeObserver.observe(document.body)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', requestMeasure)
  window.removeEventListener('resize', requestMeasure)
  resizeObserver?.disconnect()
  cancelAnimationFrame(raf)
})
</script>

<template>
  <!--
    No background, transform or overflow on this wrapper: the page colour
    lives on <html> (style.css) so SiteHeader's z-index:-1 tint can sit
    between it and the content, and sticky/fixed children keep resolving
    against the real viewport.
  -->
  <div class="text-fg">
    <SiteHeader :progress="shown" />
    <LinksOverlay />
    <Wordmark />

    <main class="min-h-screen">
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <!-- Pages are multi-root; Transition needs one real element. -->
          <div :key="route.path" :class="route.meta.plain ? 'page-body page-body--plain' : ''">
            <component :is="Component" />
          </div>
        </Transition>
      </router-view>
    </main>

    <SiteFooter />
  </div>
</template>
