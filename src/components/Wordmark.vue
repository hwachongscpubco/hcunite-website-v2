<!--
  Wordmark.vue — the big HCUNITE, fixed to the bottom-right corner of
  every page. It never leaves that corner while you scroll; it only
  changes size/place between three states, always with one smooth
  transform transition:
    - big:    full size (the homepage always; other pages at their hero
              and again at the very bottom, where the footer leaves
              room for it)
    - corner: shrunk into the corner so it never covers what you're
              reading (other pages, mid-scroll)
    - dock:   small, top-left, as the heading of the SCHOOL LINKS /
              OTHERS overlay — HC lights up for school links, UNITE
              for others, and each half switches tab when clicked
  On the homepage it's drawn twice, stacked exactly: the first screen's
  colours (yellow HC) and SODACHE's (all red), the second cut off at the
  line where the two screens meet, so the colour changes along that same
  line as you scroll rather than fading.
-->
<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUiStore } from '../stores/uiStore'

const route = useRoute()
const router = useRouter()
const ui = useUiStore()

const el = ref(null)
const w = ref(0)
const h = ref(0)
let observer = null

onMounted(() => {
  observer = new ResizeObserver(() => {
    w.value = el.value.offsetWidth
    h.value = el.value.offsetHeight
  })
  observer.observe(el.value)
})
onBeforeUnmount(() => observer?.disconnect())

const isHome = computed(() => route.path === '/')
const desktop = computed(() => ui.vw >= 1024)
const gutter = computed(() => Math.min(40, Math.max(16, ui.vw * 0.026)))
const bottom = computed(() => Math.max(18, ui.vh * 0.06))

const dock = computed(() => {
  const width = desktop.value ? ui.vw * 0.388 : ui.vw * 0.62
  const scale = w.value ? width / w.value : 1
  const left = desktop.value ? ui.vw * 0.035 : gutter.value
  const top = desktop.value ? ui.vw * 0.033 : 22
  return { scale, left, top, bottom: top + h.value * scale }
})

const state = computed(() => {
  if (ui.linksOpen) return 'dock'
  if (isHome.value) return 'big'
  const nearBottom = ui.docH - (ui.scrollY + ui.vh) < h.value * 0.6
  if (nearBottom) return 'big'
  if (route.meta.hero && ui.scrollY < ui.vh * 0.25) return 'big'
  return 'corner'
})

const transform = computed(() => {
  if (!w.value) return 'none'
  if (state.value === 'dock') {
    const { scale, left, top } = dock.value
    const dx = left - (ui.vw - gutter.value - w.value * scale)
    const dy = top - (ui.vh - bottom.value - h.value * scale)
    return `translate(${dx}px, ${dy}px) scale(${scale})`
  }
  if (state.value === 'corner') {
    const width = desktop.value ? ui.vw * 0.17 : ui.vw * 0.3
    return `scale(${width / w.value})`
  }
  return 'none'
})

// The footer and the links overlay lay themselves out around these.
watchEffect(() => {
  const s = document.documentElement.style
  s.setProperty('--wm-h', `${h.value}px`)
  s.setProperty('--dock-bottom', `${dock.value.bottom}px`)
})

// Where the homepage's two screens meet, in the wordmark's own
// coordinates (0 = its top edge); Infinity when there's no seam to show.
// Re-measured on every scroll and resize.
const seam = computed(() => {
  void ui.scrollY
  if (!isHome.value || ui.linksOpen || ui.settling || !h.value) return Infinity
  const second = document.getElementById('sodache')
  if (!second) return Infinity
  const top = ui.vh - bottom.value - h.value
  return second.getBoundingClientRect().top - top
})
const lowerClip = computed(() => {
  const y = `${seam.value}px`
  return `polygon(-50% ${y}, 150% ${y}, 150% 300%, -50% 300%)`
})

const hcColor = computed(() => {
  if (ui.linksOpen) return ui.linksTab === 'school' ? '#FFE000' : '#FFFFFF'
  return '#FFE000'
})
const uniteColor = computed(() => {
  if (!ui.linksOpen) return '#CE2222'
  return ui.linksTab === 'others' ? '#CE2222' : '#FFFFFF'
})

const interactive = computed(() => ui.linksOpen || !isHome.value)

function onClick(part) {
  if (ui.linksOpen) ui.linksTab = part
  else if (!isHome.value) router.push('/')
}
</script>

<template>
  <div
    ref="el"
    class="wordmark fixed z-[60] grid font-inter font-black leading-[0.74] tracking-[-0.03em] whitespace-nowrap select-none text-[20.5vw] sm:text-[18vw] lg:text-[16vw]"
    :class="interactive ? 'cursor-pointer' : 'pointer-events-none'"
    :style="{ right: gutter + 'px', bottom: bottom + 'px', transform }"
    :role="interactive ? 'link' : undefined"
    :aria-label="ui.linksOpen ? 'Switch between school links and others' : 'HCUnite home'"
  >
    <div class="[grid-area:1/1]">
      <span :style="{ color: hcColor }" @click="onClick('school')">HC</span><span :style="{ color: uniteColor }" @click="onClick('others')">UNITE</span>
    </div>
    <div
      v-show="Number.isFinite(seam)"
      class="[grid-area:1/1] text-hwachred pointer-events-none"
      aria-hidden="true"
      :style="{ clipPath: lowerClip }"
    >HCUNITE</div>
  </div>
</template>

<style scoped>
.wordmark {
  transform-origin: bottom right;
  transition: transform 900ms var(--ease-enter);
  will-change: transform;
}
.wordmark span {
  transition: color 300ms var(--ease-standard);
}
</style>
