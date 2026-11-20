<!--
  Home.vue — the / page: two full-screen screens stacked one on top of
  the other, then the SODACHE list. Scrolling only moves the view down
  the stack; nothing fades or animates between the two screens.
    1. WELCOME TO (light) — the council picture, SCHOOL LINKS / OTHERS
    2. SODACHE (dark, #sodache) — the SODACHE picture. Its SO/DA/CHE
       title rides up with it, then sticks to the top over the list.
  The list (#sodache-list) shows the active tab's songs (cards), or
  dances/cheers (video + description), filtered by the Search field in
  the right-hand rail. Content lives in data/sodache.js.
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
  <!-- 1 · WELCOME TO -->
  <section class="screen theme-light relative overflow-hidden bg-bg text-fg snap-start">
    <div class="menu-tint" :class="{ 'is-open': ui.menuOpen }"></div>

    <div class="absolute left-(--gutter) top-(--gutter)">
      <h1 class="chrome-title">Welcome to<span class="sr-only"> HCUnite</span></h1>
      <div class="sm:hidden mt-2.5 flex gap-5 font-inter font-light uppercase text-[11px] tracking-[0.14em]">
        <button type="button" class="uppercase cursor-pointer" @click="ui.openLinks('school')">School Links</button>
        <button type="button" class="uppercase cursor-pointer" @click="ui.openLinks('others')">Others</button>
      </div>
    </div>

    <!--
      Laid out exactly like SiteHeader's fixed top-right row (the hidden
      copy of "More about us" holds its place), so these two line up
      with it but scroll away with this screen.
    -->
    <div class="hidden sm:flex absolute right-(--gutter) top-(--gutter) items-center gap-[5.3vw] font-inter font-light">
      <div class="chrome-nav flex gap-[5.3vw] uppercase">
        <button type="button" class="nav-item uppercase cursor-pointer" @click="ui.openLinks('school')">School Links</button>
        <button type="button" class="nav-item uppercase cursor-pointer" @click="ui.openLinks('others')">Others</button>
      </div>
      <span class="chrome-more invisible" aria-hidden="true">More<br>about us</span>
    </div>

    <HeroPicture>
      <img :src="councilPic" alt="The Hwa Chong Students' Council" class="hero-in w-full h-full object-cover">
    </HeroPicture>

    <p class="hidden lg:block absolute left-(--gutter) bottom-[6vh] eyebrow">Scroll — SODACHE</p>
  </section>

  <!-- 2 · SODACHE, then its list -->
  <div class="theme-dark relative bg-bg text-fg">
    <div class="menu-tint" :class="{ 'is-open': ui.menuOpen }"></div>

    <!-- Zero height, so it takes no room: rides up with this screen, then sticks. -->
    <div class="sticky top-0 z-40 h-0">
      <div class="title-bar absolute inset-x-0 top-0 bg-bg pointer-events-none">
        <div class="menu-tint" :class="{ 'is-open': ui.menuOpen }"></div>
      </div>
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
        <img src="/images/sodache/sodache_pic.jpg" alt="SODACHE at Hwa Chong" class="w-full h-full object-cover">
      </HeroPicture>
    </section>

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
