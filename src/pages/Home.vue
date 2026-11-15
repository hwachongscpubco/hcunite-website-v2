<!--
  Home.vue — the / page, in two parts:
    1. A pinned full-screen stage. Scrolling the first screen cross-fades
       the council picture into the SODACHE picture while App.vue fades
       the whole theme from light to dark and SiteHeader swaps
       "WELCOME TO" for the SO/DA/CHE tabs.
    2. The SODACHE list (#sodache-list): the active tab's songs (cards),
       or dances/cheers (video + description), filtered by the Search
       field in the right-hand rail. Content lives in data/sodache.js.
-->
<script setup>
import { computed } from 'vue'
import HeroPicture from '../components/HeroPicture.vue'
import SodacheItem from '../components/SodacheItem.vue'
import { sodache } from '../data/sodache'
import { useUiStore } from '../stores/uiStore'
import { useSodacheStore } from '../stores/sodacheStore'
import councilPic from '../assets/home/council_pic.jpg'

const ui = useUiStore()
const sodacheStore = useSodacheStore()

const clamp = (v) => Math.min(1, Math.max(0, v))
const smooth = (t) => t * t * (3 - 2 * t)

// 0 → 1 across the first screen of scrolling.
const p = computed(() => (ui.vh ? clamp(ui.scrollY / ui.vh) : 0))
const firstStyle = computed(() => ({
  opacity: 1 - smooth(clamp(p.value / 0.55)),
  transform: `translateY(${-p.value * 5}vh) scale(${1 - p.value * 0.04})`,
}))
const secondStyle = computed(() => ({
  opacity: smooth(clamp((p.value - 0.45) / 0.55)),
  transform: `translateY(${(1 - p.value) * 5}vh)`,
}))

const SECTION_LABEL = { song: 'songs', dance: 'dances', cheer: 'cheers' }
const section = computed(() => sodacheStore.activeSection)
const query = computed(() => ui.search.trim().toLowerCase())
const items = computed(() => {
  const all = sodache[section.value]
  if (!query.value) return all
  return all.filter((item) =>
    [item.title, item.composer, item.artist, item.description].some(
      (text) => text && text.toLowerCase().includes(query.value),
    ),
  )
})

// The data mixes youtube.com/watch, m.youtube.com and /embed links;
// only /embed URLs are allowed inside an iframe.
function embedUrl(link) {
  const id = link.match(/(?:[?&]v=|embed\/|youtu\.be\/)([\w-]{11})/)
  return id ? `https://www.youtube.com/embed/${id[1]}` : link
}
</script>

<template>
  <!-- the stage: two screens tall, pinned for the first -->
  <section class="relative h-[200svh]">
    <div class="absolute top-0 h-px w-px snap-start"></div>
    <div id="sodache" class="absolute top-[100svh] h-px w-px snap-start"></div>

    <div class="sticky top-0 h-[100svh] min-h-[480px] overflow-hidden">
      <HeroPicture>
        <img
          :src="councilPic"
          alt="The Hwa Chong Students' Council"
          class="hero-in absolute inset-0 w-full h-full object-cover will-change-transform"
          :style="firstStyle"
        >
        <img
          src="/images/sodache/sodache_pic.jpg"
          alt="SODACHE at Hwa Chong"
          class="absolute inset-0 w-full h-full object-cover will-change-transform"
          :style="secondStyle"
        >
      </HeroPicture>

      <p class="hidden lg:block absolute left-(--gutter) bottom-[6vh] eyebrow" :style="{ opacity: 1 - clamp(p * 3) }">
        Scroll — SODACHE
      </p>
    </div>
  </section>

  <!-- SODACHE -->
  <section id="sodache-list" class="list relative min-h-screen px-(--gutter)">
    <aside class="hidden lg:block absolute inset-y-0 right-0 w-(--rail)">
      <div
        class="search sticky pr-(--gutter) pl-4 transition-opacity duration-500 ease-standard"
        :class="ui.menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'"
      >
        <input v-model="ui.search" type="search" placeholder="Search" aria-label="Search SODACHE" class="search-input">
      </div>
    </aside>

    <div class="lg:hidden mb-8">
      <input v-model="ui.search" type="search" placeholder="Search" aria-label="Search SODACHE" class="search-input">
    </div>

    <Transition name="fade" mode="out-in">
      <div :key="section">
        <div v-if="section === 'song'" class="grid grid-cols-2 lg:grid-cols-3 gap-x-[clamp(12px,2.1vw,30px)] gap-y-10">
          <SodacheItem v-for="item in items" :key="item.title" :item="item" />
        </div>

        <div v-else>
          <article
            v-for="item in items"
            :key="item.title"
            class="grid md:grid-cols-2 gap-x-[clamp(16px,3vw,44px)] gap-y-4 py-7 border-t border-line first:border-t-0 first:pt-0"
          >
            <iframe
              class="w-full aspect-video rounded-[10px] bg-black"
              :src="embedUrl(item.link)"
              :title="item.title"
              loading="lazy"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div>
              <h2 class="!text-2xl lg:!text-4xl">{{ item.title }}</h2>
              <p v-if="item.artist" class="eyebrow mt-3">{{ item.artist }}</p>
              <p class="text-soft mt-4 max-w-md">{{ item.description }}</p>
            </div>
          </article>
        </div>

        <p v-if="!items.length" class="text-soft py-16">
          No {{ SECTION_LABEL[section] }} match “{{ ui.search }}”.
        </p>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.list {
  padding-top: calc(var(--header-h) + 6px);
  padding-bottom: 6rem;
}
@media (min-width: 1024px) {
  .list {
    padding-right: calc(var(--rail) + var(--gutter));
  }
}
.search {
  top: calc(var(--gutter) + 13.2vw);
}
.search-input {
  display: block;
  width: 100%;
  padding-bottom: 0.55rem;
  background: transparent;
  border-bottom: 1px solid var(--line);
  color: var(--fg);
  font-family: var(--font-inter);
  font-weight: 300;
  font-size: clamp(1.15rem, 2vw, 1.8rem);
  outline: none;
  transition: border-color 400ms var(--ease-standard);
}
@media (min-width: 1024px) {
  .search-input {
    text-align: right;
  }
}
.search-input::placeholder {
  color: var(--mute);
}
.search-input:focus {
  border-color: var(--fg);
}
.search-input::-webkit-search-cancel-button {
  display: none;
}
</style>
