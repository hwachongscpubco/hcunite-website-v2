<!--
  HeroPicture.vue — the centred picture frame of a full-screen hero
  (the homepage's two slides, and PageHero.vue on every other page).
  Opening the "More about us" menu slides it into the left half of the
  screen to make room for the menu (lg+). Must sit inside a
  position: relative box the size of the screen.
  `ratio`: 'landscape' (default) | 'portrait' | 'square'.
-->
<script setup>
import { useUiStore } from '../stores/uiStore'

defineProps({
  ratio: { type: String, default: 'landscape' },
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
    class="absolute left-1/2 top-[44%] -translate-y-1/2 transition-transform duration-[900ms] ease-enter"
    :class="[FRAME[ratio], ui.menuOpen ? '-translate-x-1/2 lg:-translate-x-[calc(50%_+_25vw)]' : '-translate-x-1/2']"
  >
    <slot />
  </div>
</template>
