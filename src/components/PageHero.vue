<!--
  PageHero.vue — the full-screen opening of every page other than the
  homepage: one picture filling the screen, with the page title on it
  top-left (SiteHeader.vue) and HCUNITE bottom-right (Wordmark.vue), the
  same composition as the homepage. Pass `image`, or use the default
  slot to fill the screen with something else (see Faculties.vue).
    - `position`: which part of the photo to keep when the screen's
      shape crops it (CSS object-position, e.g. '50% 70%' keeps more of
      the bottom — useful when the people are low in the frame)
  Routes using this must set `meta: { hero: true }` in main.js, plus
  `tone: 'dark'` when the top of the picture is dark, so the header
  turns white over it.
-->
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeroPicture from './HeroPicture.vue'

defineProps({
  image: { type: String, default: '' },
  alt: { type: String, default: '' },
  position: { type: String, default: '50% 50%' },
})

const route = useRoute()
const theme = computed(() => (route.meta.tone === 'dark' ? 'theme-dark' : 'theme-light'))
</script>

<template>
  <section class="relative h-[100svh] min-h-[520px] overflow-hidden bg-bg" :class="theme">
    <HeroPicture>
      <slot>
        <img :src="image" :alt="alt" class="hero-in w-full h-full object-cover" :style="{ objectPosition: position }">
      </slot>
    </HeroPicture>
    <div class="hero-scrim"></div>
  </section>
</template>
