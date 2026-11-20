<!--
  SiteHeader.vue — the fixed chrome along the top of every page:
    - top-left: the page's own title (route meta.title, see main.js). The
      homepage has none here: its WELCOME TO and SODACHE titles belong
      to its two screens (Home.vue) and scroll with them.
    - top-right: SCHOOL LINKS / OTHERS (open LinksOverlay.vue — on the
      homepage they belong to its first screen instead) and "More about
      us", whose two lines cross into an X and drop the menu
      (data/nav.js) down the right-hand rail.
  The header turns white while a dark picture is under it — the
  homepage's SODACHE screen, or a dark-topped hero (uiStore.chromeDark,
  set by App.vue).
-->
<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUiStore } from '../stores/uiStore'
import { menuItems } from '../data/nav'

const route = useRoute()
const ui = useUiStore()

const isHome = computed(() => route.path === '/')
const title = computed(() => route.meta.title || '')

// The backdrop keeps scrolling content from running under the header
// text; heroes are left clear so their picture sits on an open page.
// The homepage's SODACHE screen draws its own (Home.vue).
const barVisible = computed(() => {
  if (isHome.value) return false
  if (route.meta.hero) {
    // once the full-screen picture (100svh, at least 520px) has left the header
    const headerH = Math.min(136, Math.max(92, ui.vw * 0.094))
    return ui.scrollY > Math.max(ui.vh, 520) - headerH
  }
  return true
})

// White text while a dark picture is under the header (App.vue).
const tone = computed(() => (ui.chromeDark ? 'theme-dark' : ''))

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
  <!-- header backdrop -->
  <div
    class="header-bar fixed inset-x-0 top-0 z-30 bg-bg pointer-events-none transition-opacity duration-500"
    :class="barVisible ? 'opacity-100' : 'opacity-0'"
  ></div>

  <!--
    The open menu's panel: fades in over whatever is on screen, without
    moving it — on lg+ the page shows through on the left and blends into
    a solid panel on the right; below lg it covers the screen. Clicking
    it closes the menu.
  -->
  <Transition name="panel">
    <div v-if="ui.menuOpen" class="menu-panel fixed inset-0 z-[45]" :class="tone" @click="ui.menuOpen = false"></div>
  </Transition>

  <!-- top-left -->
  <Transition name="fade" mode="out-in">
    <div v-if="!isHome" :key="title" class="fixed z-50 left-(--gutter) top-(--gutter) text-fg transition-colors duration-300 ease-standard" :class="tone">
      <router-link to="/" class="chrome-title block" :aria-label="title + ' — back to home'">
        {{ title }}
      </router-link>

      <!-- below sm the two link buttons sit under the title instead -->
      <div class="sm:hidden mt-3 flex gap-6 font-inter font-light uppercase text-[13px] tracking-[0.12em]">
        <button type="button" class="uppercase cursor-pointer" @click="ui.openLinks('school')">School Links</button>
        <button type="button" class="uppercase cursor-pointer" @click="ui.openLinks('others')">Others</button>
      </div>
    </div>
  </Transition>

  <!-- top-right -->
  <nav
    class="fixed z-50 right-(--gutter) top-(--gutter) flex flex-col items-end font-inter font-light text-fg transition-colors duration-300 ease-standard pointer-events-none"
    :class="tone"
    aria-label="Main"
  >
    <div class="flex items-center gap-[5.3vw]">
      <Transition name="fade">
        <div v-if="!isHome" class="chrome-nav hidden sm:flex gap-[5.3vw] uppercase pointer-events-auto">
          <button type="button" class="nav-item uppercase cursor-pointer" @click="ui.openLinks('school')">School Links</button>
          <button type="button" class="nav-item uppercase cursor-pointer" @click="ui.openLinks('others')">Others</button>
        </div>
      </Transition>
      <button
        type="button"
        class="chrome-more nav-item text-right cursor-pointer pointer-events-auto"
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
.menu-panel {
  background: var(--bg);
}
@media (min-width: 1024px) {
  .menu-panel {
    background: linear-gradient(to right, transparent 36%, var(--bg) 64%);
  }
}
.panel-enter-active, .panel-leave-active {
  transition: opacity 800ms var(--ease-standard);
}
.panel-enter-from, .panel-leave-to {
  opacity: 0;
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
  line-height: 2.2;
}
@media (min-width: 1024px) {
  .header-menu {
    font-size: clamp(1.1rem, 1.9vw, 1.7rem);
    line-height: 2.05;
  }
}
</style>
