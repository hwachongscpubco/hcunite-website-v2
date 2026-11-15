<!--
  SiteHeader.vue — the fixed chrome along the top of every page:
    - top-left: "WELCOME TO" on the homepage, cross-fading into the
      SO/DA/CHE tabs as the page scrolls into SODACHE; the page's own
      title everywhere else (route meta.title, see main.js)
    - top-right: SCHOOL LINKS / OTHERS (open LinksOverlay.vue) and
      "More about us", whose two lines cross into an X and drop the
      menu (data/nav.js) down the right-hand rail
  `progress` is the homepage's light→dark scroll progress (0–1), owned
  by App.vue.
-->
<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUiStore } from '../stores/uiStore'
import { useSodacheStore } from '../stores/sodacheStore'
import { menuItems } from '../data/nav'

const props = defineProps({
  progress: { type: Number, default: 0 },
})

const route = useRoute()
const ui = useUiStore()
const sodacheStore = useSodacheStore()

const isHome = computed(() => route.path === '/')
const title = computed(() => route.meta.title || '')

const clamp = (v) => Math.min(1, Math.max(0, v))
const welcomeOpacity = computed(() => clamp(1 - props.progress * 2.2))
const sodacheOpacity = computed(() => clamp((props.progress - 0.55) * 2.2))
const inSodache = computed(() => props.progress > 0.6)

// SCHOOL LINKS / OTHERS belong to the light first screen only.
const linksOpacity = computed(() => (isHome.value ? welcomeOpacity.value : 1))

const sections = [
  { key: 'song', text: 'SO', color: 'var(--color-song)' },
  { key: 'dance', text: 'DA', color: 'var(--color-dance)' },
  { key: 'cheer', text: 'CHE', color: 'var(--color-cheer)' },
]

function pickSection(key) {
  sodacheStore.activeSection = key
  ui.search = ''
  const list = document.getElementById('sodache-list')
  if (list) window.scrollTo({ top: list.offsetTop, behavior: 'smooth' })
}

// The backdrop keeps scrolling content from running under the header
// text; heroes are left clear so their picture sits on an open page.
const barVisible = computed(() => {
  if (isHome.value) return ui.scrollY > ui.vh * 1.15
  if (route.meta.hero) return ui.scrollY > ui.vh * 0.3
  return true
})

function toggleMenu() {
  ui.menuOpen = !ui.menuOpen
}

function withOrdinal(label) {
  return label.replace(/(\d+)(st|nd|rd|th)/, '$1<sup class="text-[0.55em] align-super">$2</sup>')
}

function onKey(e) {
  if (e.key === 'Escape') ui.closeAll()
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <!-- left-half tint behind the page while the menu is open (lg+) -->
  <div
    class="fixed inset-y-0 left-0 w-1/2 -z-10 hidden lg:block pointer-events-none transition-opacity duration-700 ease-standard"
    :class="ui.menuOpen ? 'opacity-100' : 'opacity-0'"
    style="background: rgb(0 0 0 / calc(0.035 + var(--p) * 0.9))"
  ></div>

  <!-- header backdrop -->
  <div
    class="header-bar fixed inset-x-0 top-0 z-30 bg-bg pointer-events-none transition-opacity duration-500"
    :class="barVisible ? 'opacity-100' : 'opacity-0'"
  ></div>

  <!-- click-away (lg+) / full-screen panel (below lg) behind the open menu -->
  <Transition name="layer">
    <div v-if="ui.menuOpen" class="fixed inset-0 z-40 bg-bg lg:bg-transparent" @click="ui.menuOpen = false"></div>
  </Transition>

  <!-- top-left -->
  <div class="fixed z-50 left-(--gutter) top-(--gutter) text-fg">
    <Transition name="fade" mode="out-in">
      <div v-if="isHome" key="home" class="header-title relative">
        <span class="block" :style="{ opacity: welcomeOpacity }" :aria-hidden="inSodache">WELCOME TO</span>
        <span
          class="absolute left-0 top-0 flex"
          :style="{ opacity: sodacheOpacity, pointerEvents: inSodache ? 'auto' : 'none' }"
          :aria-hidden="!inSodache"
        >
          <button
            v-for="s in sections"
            :key="s.key"
            type="button"
            class="relative cursor-pointer transition-colors duration-500 ease-standard"
            :style="{ color: sodacheStore.activeSection === s.key ? s.color : 'var(--fg)' }"
            :tabindex="inSodache ? 0 : -1"
            :aria-pressed="sodacheStore.activeSection === s.key"
            @click="pickSection(s.key)"
          >
            {{ s.text }}
            <span
              class="absolute left-0 right-[0.04em] -bottom-[0.14em] h-px bg-fg origin-left transition-transform duration-500 ease-enter"
              :class="sodacheStore.activeSection === s.key ? 'scale-x-100' : 'scale-x-0'"
            ></span>
          </button>
        </span>
      </div>
      <router-link v-else :key="title" to="/" class="header-title block" :aria-label="title + ' — back to home'">
        {{ title }}
      </router-link>
    </Transition>

    <!-- below sm the two link buttons sit under the title instead -->
    <div
      class="sm:hidden mt-2.5 flex gap-5 font-inter font-light uppercase text-[11px] tracking-[0.14em] transition-opacity duration-300"
      :style="{ opacity: linksOpacity, pointerEvents: linksOpacity > 0.5 ? 'auto' : 'none' }"
    >
      <button type="button" class="uppercase cursor-pointer" @click="ui.openLinks('school')">School Links</button>
      <button type="button" class="uppercase cursor-pointer" @click="ui.openLinks('others')">Others</button>
    </div>
  </div>

  <!-- top-right -->
  <nav class="fixed z-50 right-(--gutter) top-(--gutter) flex flex-col items-end font-inter font-light text-fg pointer-events-none" aria-label="Main">
    <div class="flex items-center gap-[5.3vw]">
      <div
        class="hidden sm:flex gap-[5.3vw] uppercase header-nav"
        :style="{ opacity: linksOpacity, pointerEvents: linksOpacity > 0.5 ? 'auto' : 'none' }"
      >
        <button type="button" class="nav-item uppercase cursor-pointer" @click="ui.openLinks('school')">School Links</button>
        <button type="button" class="nav-item uppercase cursor-pointer" @click="ui.openLinks('others')">Others</button>
      </div>
      <button
        type="button"
        class="header-more nav-item text-right cursor-pointer pointer-events-auto"
        :aria-expanded="ui.menuOpen"
        aria-controls="site-menu"
        @click="toggleMenu"
      >
        More<br>about us
      </button>
    </div>

    <button
      type="button"
      class="burger relative cursor-pointer pointer-events-auto"
      :aria-label="ui.menuOpen ? 'Close menu' : 'Open menu'"
      @click="toggleMenu"
    >
      <span class="top-[5px]" :class="ui.menuOpen ? 'translate-y-[8px] rotate-[10deg]' : ''"></span>
      <span class="top-[21px]" :class="ui.menuOpen ? '-translate-y-[8px] -rotate-[10deg]' : ''"></span>
    </button>

    <TransitionGroup
      id="site-menu"
      tag="ul"
      name="stagger"
      class="group/menu mt-5 flex flex-col items-end text-right header-menu"
      :class="ui.menuOpen ? 'pointer-events-auto' : ''"
    >
      <li
        v-for="(item, i) in (ui.menuOpen ? menuItems : [])"
        :key="item.label"
        :style="{ '--i': i }"
        class="transition-opacity duration-300 group-hover/menu:opacity-40 hover:!opacity-100"
      >
        <a v-if="item.external" :href="item.to" target="_blank" rel="noopener" v-html="withOrdinal(item.label)"></a>
        <router-link v-else :to="item.to" v-html="withOrdinal(item.label)"></router-link>
      </li>
    </TransitionGroup>
  </nav>
</template>

<style scoped>
.header-bar {
  height: var(--header-h);
  -webkit-mask-image: linear-gradient(#000 86%, transparent);
  mask-image: linear-gradient(#000 86%, transparent);
}
.header-title {
  font-family: var(--font-inter);
  font-weight: 200;
  text-transform: uppercase;
  white-space: nowrap;
  line-height: 1;
  letter-spacing: -0.01em;
  font-size: clamp(1.6rem, 4.55vw, 4.5rem);
}
.header-nav, .header-more {
  transition: opacity 300ms var(--ease-standard);
}
.header-nav {
  font-size: clamp(0.8rem, 2.05vw, 1.95rem);
}
.header-more {
  font-size: clamp(1.05rem, 2.35vw, 2.2rem);
  line-height: 1.36;
}
.nav-item:hover {
  opacity: 0.55;
}
.burger {
  width: clamp(64px, 9.4vw, 132px);
  height: 27px;
  margin-top: clamp(4px, 0.9vw, 14px);
}
.burger span {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: currentColor;
  transition: translate 600ms var(--ease-enter), rotate 600ms var(--ease-enter);
}
.header-menu {
  font-size: clamp(1.4rem, 1.9vw, 1.7rem);
  line-height: 2.1;
}
@media (min-width: 1024px) {
  .header-menu {
    font-size: clamp(1.1rem, 1.9vw, 1.7rem);
    line-height: 1.75;
  }
}
</style>
