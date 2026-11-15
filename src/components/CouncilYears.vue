<!--
  CouncilYears.vue — the year switcher at the top of every Council##.vue
  page (data/nav.js's councilYears). The "Council Archives" menu entry
  lands on the newest archived year; this is how the rest are reached.
-->
<script setup>
import { councilYears } from '../data/nav'
</script>

<template>
  <nav class="flex flex-wrap items-baseline gap-x-7 gap-y-3 pb-12" aria-label="Council years">
    <span class="eyebrow">Council</span>
    <router-link
      v-for="year in councilYears"
      :key="year.to"
      :to="year.to"
      class="year font-inter font-light uppercase text-sm tracking-[0.12em] text-mute"
      exact-active-class="year--active"
    >{{ year.label }}</router-link>
  </nav>
</template>

<style scoped>
.year {
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  transition: color 300ms var(--ease-standard), border-color 300ms var(--ease-standard);
}
.year:hover, .year--active {
  color: var(--color-ink);
}
.year--active {
  border-color: currentColor;
}
</style>
