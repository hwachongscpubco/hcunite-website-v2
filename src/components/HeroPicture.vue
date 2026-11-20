<!--
  HeroPicture.vue — the picture of a full-screen hero. Must sit inside a
  position: relative box the size of the screen.
    - `fill`: the picture covers the whole screen (the homepage's two
      screens). Opening the "More about us" menu shrinks it, whole, into
      the left half to make room for the menu (lg+).
    - otherwise: a centred frame (PageHero.vue on every other page),
      shaped by `ratio` — 'landscape' (default) | 'portrait' | 'square' —
      which slides into the left half when the menu opens (lg+).
-->
<script setup>
import { useUiStore } from '../stores/uiStore'

defineProps({
  ratio: { type: String, default: 'landscape' },
  fill: { type: Boolean, default: false },
})

const ui = useUiStore()

const FRAME = {
  landscape: 'w-[min(86vw,62vh)] lg:w-[min(40vw,62vh)] aspect-[4/3] sm:aspect-[3/2]',
  portrait: 'w-[min(72vw,40vh)] lg:w-[min(40vw,40vh)] aspect-[4/5]',
  square: 'w-[min(82vw,48vh)] lg:w-[min(42vw,48vh)] aspect-square',
}
</script>

<template>
  <div
    v-if="fill"
    class="absolute inset-0 overflow-hidden origin-center transition-[translate,scale] duration-[900ms] ease-enter"
    :class="ui.menuOpen ? 'lg:-translate-x-1/4 lg:scale-[0.42]' : ''"
  >
    <slot />
  </div>
  <div
    v-else
    class="absolute left-1/2 top-[44%] -translate-y-1/2 transition-transform duration-[900ms] ease-enter"
    :class="[FRAME[ratio], ui.menuOpen ? '-translate-x-1/2 lg:-translate-x-[calc(50%_+_25vw)]' : '-translate-x-1/2']"
  >
    <slot />
  </div>
</template>
