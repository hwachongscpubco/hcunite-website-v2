<!--
  HeroPicture.vue — the picture of a full-screen hero (the homepage's
  two screens, and PageHero.vue on every other page). It covers the
  whole screen, so it must sit inside a position: relative box the size
  of the screen. Opening the "More about us" menu shrinks it, whole,
  into the left half to make room for the menu (lg+).
-->
<script setup>
import { useUiStore } from '../stores/uiStore'

const ui = useUiStore()
</script>

<template>
  <div
    class="absolute inset-0 overflow-hidden origin-center transition-[translate,scale] duration-[900ms] ease-enter"
    :class="ui.menuOpen ? 'lg:-translate-x-1/4 lg:scale-[0.42]' : ''"
  >
    <slot />
  </div>
</template>
