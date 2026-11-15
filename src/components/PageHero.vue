<!--
  PageHero.vue — the full-screen opening of every page other than the
  homepage: one centred picture on an open page, with the page title
  top-left (SiteHeader.vue) and HCUNITE bottom-right (Wordmark.vue), the
  same composition as the homepage. Pass `image`, or use the default
  slot to put something else in the frame (see Faculties.vue).
  Routes using this must set `meta: { hero: true }` in main.js.
-->
<script setup>
import HeroPicture from './HeroPicture.vue'

defineProps({
  image: { type: String, default: '' },
  alt: { type: String, default: '' },
  ratio: { type: String, default: 'landscape' },
})
</script>

<template>
  <section class="relative h-[100svh] min-h-[520px] overflow-hidden">
    <HeroPicture :ratio="ratio" class="hero-in">
      <slot>
        <img :src="image" :alt="alt" class="w-full h-full object-cover">
      </slot>
    </HeroPicture>
    <p class="hidden lg:block absolute left-(--gutter) bottom-[6vh] eyebrow">Scroll</p>
  </section>
</template>
