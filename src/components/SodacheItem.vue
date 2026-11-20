<!--
  SodacheItem.vue — one card in the homepage's SODACHE grid: a song, a
  dance or a cheer (see data/sodache.js). Spotify / YouTube / Chords
  links appear over the cover on hover (and sit under the title on touch
  screens) — each only when that entry has one.
    - The cover is the entry's `image`, or else its YouTube video's
      thumbnail (dances and cheers have no artwork of their own).
    - `describe`: clicking the card opens its description (songs only).
-->
<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  item: { type: Object, required: true },
  describe: { type: Boolean, default: false },
})

const open = ref(false)
const expandable = computed(() => props.describe && !!props.item.description)
function toggle() {
  if (expandable.value) open.value = !open.value
}

const videoId = computed(() => props.item.link?.match(/(?:[?&]v=|embed\/|youtu\.be\/)([\w-]{11})/)?.[1])
// /embed/ links play bare, outside YouTube — send people to the watch page
const videoHref = computed(() => {
  const link = props.item.link
  if (!link) return null
  return link.includes('/embed/') && videoId.value ? `https://www.youtube.com/watch?v=${videoId.value}` : link
})

// Not every video has a full-size (maxres) thumbnail; fall back to the
// standard one, which is 4:3 with the 16:9 picture letterboxed inside —
// .letterboxed zooms past those black bars.
const thumb = ref('maxresdefault')
const cover = computed(() => props.item.image || (videoId.value ? `https://i.ytimg.com/vi/${videoId.value}/${thumb.value}.jpg` : ''))
const letterboxed = computed(() => !props.item.image && thumb.value === 'hqdefault')
function onCoverError() {
  if (!props.item.image && thumb.value !== 'hqdefault') thumb.value = 'hqdefault'
}
// YouTube answers a missing maxres thumbnail with a 120×90 grey
// placeholder (and a 404 that browsers still render), not an error.
function onCoverLoad(e) {
  if (!props.item.image && thumb.value === 'maxresdefault' && e.target.naturalWidth <= 120) thumb.value = 'hqdefault'
}

const links = computed(() => [
  { label: 'Spotify', href: props.item.spotify },
  { label: 'YouTube', href: videoHref.value },
  { label: 'Chords', href: props.item.chords },
].filter((l) => l.href))
</script>

<template>
  <article class="group">
    <div class="relative aspect-square overflow-hidden rounded-[10px] bg-black" :class="{ 'cursor-pointer': expandable }" @click="toggle">
      <div class="w-full h-full" :class="{ 'scale-[1.34]': letterboxed }">
        <img
          :src="cover"
          :alt="item.title"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-[900ms] ease-enter group-hover:scale-[1.04]"
          @load="onCoverLoad"
          @error="onCoverError"
        >
      </div>
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

    <div class="pt-4">
      <component
        :is="expandable ? 'button' : 'div'"
        v-bind="expandable ? { type: 'button', 'aria-expanded': open } : {}"
        class="block w-full text-left"
        :class="{ 'cursor-pointer': expandable }"
        @click="toggle"
      >
        <span class="block font-jakarta font-bold text-base sm:text-lg leading-snug">{{ item.title }}</span>
        <span v-if="item.composer || item.artist" class="block meta mt-1">{{ item.composer || item.artist }}</span>
      </component>

      <div class="lg:hidden flex flex-wrap gap-x-4 gap-y-1 mt-2.5">
        <a v-for="l in links" :key="l.label" :href="l.href" target="_blank" rel="noopener" class="text-link !text-xs">{{ l.label }}</a>
      </div>

      <div
        v-if="expandable"
        class="grid transition-[grid-template-rows,opacity] duration-700 ease-enter"
        :class="open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
      >
        <div class="overflow-hidden">
          <p class="!text-sm text-soft pt-3">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </article>
</template>
