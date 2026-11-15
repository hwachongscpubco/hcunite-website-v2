<!--
  SodacheItem.vue — one song card in the homepage's SODACHE grid (song
  entries only; dance/cheer entries render inline in Home.vue). Click
  the card to open its description. Spotify / YouTube / Chords links
  appear over the cover on hover (and sit under the title on touch
  screens) — each only when that song has one (see data/sodache.js).
-->
<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  item: { type: Object, required: true },
})

const open = ref(false)

const links = computed(() => [
  { label: 'Spotify', href: props.item.spotify },
  { label: 'YouTube', href: props.item.link },
  { label: 'Chords', href: props.item.chords },
].filter((l) => l.href))
</script>

<template>
  <article class="group">
    <div class="relative aspect-square overflow-hidden rounded-[10px] cursor-pointer" @click="open = !open">
      <img
        :src="item.image"
        :alt="item.title"
        loading="lazy"
        class="w-full h-full object-cover transition-transform duration-[900ms] ease-enter group-hover:scale-[1.04]"
      >
      <div class="hidden lg:flex absolute inset-0 items-end gap-5 p-5 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-standard">
        <a
          v-for="l in links"
          :key="l.label"
          :href="l.href"
          target="_blank"
          rel="noopener"
          class="text-link text-white"
          @click.stop
        >{{ l.label }}</a>
      </div>
    </div>

    <div class="pt-3.5 px-1 sm:px-3">
      <button type="button" class="block w-full text-left cursor-pointer" :aria-expanded="open" @click="open = !open">
        <span class="block font-jakarta font-bold text-[15px] sm:text-lg leading-snug">{{ item.title }}</span>
        <span v-if="item.composer" class="block font-jakarta text-xs sm:text-[13px] text-soft mt-0.5">{{ item.composer }}</span>
      </button>

      <div class="lg:hidden flex flex-wrap gap-x-4 gap-y-1 mt-2.5">
        <a v-for="l in links" :key="l.label" :href="l.href" target="_blank" rel="noopener" class="text-link !text-[10px]">{{ l.label }}</a>
      </div>

      <div class="grid transition-[grid-template-rows,opacity] duration-700 ease-enter" :class="open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
        <div class="overflow-hidden">
          <p class="!text-[13px] text-soft pt-3">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </article>
</template>
