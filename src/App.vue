<!--
  App.vue — the root layout: the fixed chrome (SiteHeader, LinksOverlay,
  Wordmark), the routed page, and the footer. It also owns the two
  things the chrome and pages share:
    - the single scroll/resize listener, mirrored into uiStore
    - .theme-dark on <html> once the homepage's dark SODACHE screen has
      reached the top, so the fixed chrome and the footer match it (the
      homepage's two screens carry their own colours; every other page
      is light)
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, watchEffect } from 'vue'
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

// main.js's scrollBehavior resets the scroll ~340ms after a page change;
// until then scrollY is the old page's and mustn't drive the theme.
let settleTimer = 0
router.afterEach((to, from) => {
  ui.closeAll()
  if (to.path !== from.path) {
    ui.settling = true
    clearTimeout(settleTimer)
    settleTimer = setTimeout(() => {
      ui.settling = false
      requestMeasure()
    }, 420)
  }
  nextTick(requestMeasure)
})

// The fixed header flips to the dark theme as soon as the SODACHE screen
// (top edge = first screen's height − scrollY; screens are 100svh, at
// least 480px) reaches the first line of "More about us".
const dark = computed(() => {
  if (!isHome.value || ui.settling) return false
  const gutter = Math.min(40, Math.max(16, ui.vw * 0.026))
  const moreLine = Math.min(35.2, Math.max(16.8, ui.vw * 0.0235)) * 1.36
  return ui.scrollY > Math.max(ui.vh, 480) - gutter - moreLine
})

watchEffect(() => {
  const root = document.documentElement
  root.classList.toggle('theme-dark', dark.value)
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
  clearTimeout(settleTimer)
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
    <SiteHeader />
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
