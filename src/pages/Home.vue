<!--
  Home.vue — the / page: two full-screen screens stacked one on top of
  the other, then the SODACHE list. Scrolling only moves the view down
  the stack; nothing fades or animates between the two screens. Each
  screen's picture fills it edge to edge (HeroPicture.vue).
    1. WELCOME TO (light) — the council picture, SCHOOL LINKS / OTHERS
    2. SODACHE (dark, #sodache) — the SODACHE picture. Its SO/DA/CHE
       title rides up with it, then sticks to the top over the list.
  The list (#sodache-list) shows the active tab's songs, dances or
  cheers as cards (SodacheItem.vue), filtered by the Search field
  (inline below lg; on lg+ it's part of SiteHeader.vue, under "More
  about us"). Content lives in data/sodache.js.
  HCUNITE and "More about us" are the site's fixed chrome (App.vue),
  over both screens.
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

const tabs = [
  { key: 'song', text: 'SO', color: 'var(--color-song)' },
  { key: 'dance', text: 'DA', color: 'var(--color-dance)' },
  { key: 'cheer', text: 'CHE', color: 'var(--color-cheer)' },
]

function pickSection(key) {
  sodacheStore.activeSection = key
  ui.search = ''
  const list = document.getElementById('sodache-list')
  if (list) window.scrollTo({ top: list.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })
}

// The SODACHE title's backdrop only shows once the list (not the
// picture) is running under it. Screens are 100svh, at least 480px.
const overList = computed(() => {
  const screen = Math.max(ui.vh, 480)
  const headerH = Math.min(136, Math.max(92, ui.vw * 0.094))
  return ui.scrollY > screen * 2 - headerH
})

const SECTION_LABEL = { song: 'songs', dance: 'dances', cheer: 'cheers' }
const section = computed(() => sodacheStore.activeSection)
const query = computed(() => ui.search.trim().toLowerCase())
const items = computed(() => {
  const all = sodache[section.value]
  if (!query.value) return all
  return all.filter((item) =>
    [item.title, item.composer, item.artist, section.value === 'song' && item.description].some(
      (text) => text && text.toLowerCase().includes(query.value),
    ),
  )
})
</script>

<template>
  <!-- 1 · WELCOME TO -->
  <section class="screen theme-light relative overflow-hidden bg-bg text-fg snap-start">

    <div class="absolute z-[46] left-(--gutter) top-(--gutter)">
      <h1 class="chrome-title">Welcome to<span class="sr-only"> HCUnite</span></h1>
      <div class="sm:hidden mt-3 flex gap-6 font-inter font-light uppercase text-[13px] tracking-[0.12em]">
        <button type="button" class="uppercase cursor-pointer" @click="ui.openLinks('school')">School Links</button>
        <button type="button" class="uppercase cursor-pointer" @click="ui.openLinks('others')">Others</button>
      </div>
    </div>

    <!--
      Laid out exactly like SiteHeader's fixed top-right row (the hidden
      copy of "More about us" holds its place), so these two line up
      with it but scroll away with this screen.
    -->
    <div class="hidden sm:flex absolute z-[46] right-(--gutter) top-(--gutter) items-center gap-[5.3vw] font-inter font-light">
      <div class="chrome-nav flex gap-[5.3vw] uppercase">
        <button type="button" class="nav-item uppercase cursor-pointer" @click="ui.openLinks('school')">School Links</button>
        <button type="button" class="nav-item uppercase cursor-pointer" @click="ui.openLinks('others')">Others</button>
      </div>
      <span class="chrome-more invisible" aria-hidden="true">More<br>about us</span>
    </div>

    <HeroPicture>
      <img :src="councilPic" alt="The Hwa Chong Students' Council" class="hero-in w-full h-full object-cover">
    </HeroPicture>
    <div class="hero-scrim"></div>

  </section>

  <!-- 2 · SODACHE, then its list -->
  <div class="theme-dark relative bg-bg text-fg">
    <!-- Zero height, so it takes no room: rides up with this screen, then sticks. -->
    <div class="sticky top-0 z-40 h-0">
      <div
        class="title-bar absolute inset-x-0 top-0 bg-bg pointer-events-none transition-opacity duration-300"
        :class="overList ? 'opacity-100' : 'opacity-0'"
      ></div>
      <h2 class="chrome-title absolute left-(--gutter) top-(--gutter) flex">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          type="button"
          class="relative cursor-pointer transition-colors duration-500 ease-standard"
          :style="{ color: section === tab.key ? tab.color : 'var(--fg)' }"
          :aria-pressed="section === tab.key"
          @click="pickSection(tab.key)"
        >
          {{ tab.text }}
          <span
            class="absolute left-0 right-[0.04em] -bottom-[0.14em] h-px bg-fg origin-left transition-transform duration-500 ease-enter"
            :class="section === tab.key ? 'scale-x-100' : 'scale-x-0'"
          ></span>
        </button>
      </h2>
    </div>

    <section id="sodache" class="screen relative overflow-hidden snap-start">
      <HeroPicture>
        <img src="/images/sodache/sodache_pic.jpg" alt="SODACHE at Hwa Chong" class="w-full h-full object-cover object-[33%_50%]">
      </HeroPicture>
      <div class="hero-scrim"></div>
    </section>

    <section id="sodache-list" class="list relative min-h-screen px-(--gutter)">
      <div class="lg:hidden mb-8">
        <input v-model="ui.search" type="search" placeholder="Search" aria-label="Search SODACHE" class="search-input">
      </div>

      <Transition name="fade" mode="out-in">
        <div :key="section">
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-[clamp(12px,2.1vw,30px)] gap-y-10">
            <SodacheItem v-for="item in items" :key="item.title" :item="item" :describe="section === 'song'" />
          </div>

          <p v-if="!items.length" class="text-soft py-16">
            No {{ SECTION_LABEL[section] }} match “{{ ui.search }}”.
          </p>
        </div>
      </Transition>
    </section>
  </div>
</template>

<style scoped>
.screen {
  height: 100svh;
  min-height: 480px;
}
.title-bar {
  height: var(--header-h);
  -webkit-mask-image: linear-gradient(#000 86%, transparent);
  mask-image: linear-gradient(#000 86%, transparent);
}
.list {
  padding-top: calc(var(--header-h) + 2rem);
  padding-bottom: 6rem;
}
@media (min-width: 1024px) {
  .list {
    padding-right: calc(var(--rail) + var(--gutter));
  }
}
</style>
