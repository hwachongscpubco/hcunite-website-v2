<!--
  HeroPicture.vue — the picture of a full-screen hero (the homepage's
  two screens, and PageHero.vue on every other page). It covers the
  whole screen, so it must sit inside a position: relative box the size
  of the screen. Opening the "More about us" menu leaves it as it is:
  the menu's panel fades in over it instead (SiteHeader.vue).
-->
<template>
  <div class="absolute inset-0 overflow-hidden">
    <slot />
  </div>
</template>
