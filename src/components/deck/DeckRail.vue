<!--
  DeckRail.vue — the site's navigation on every page except the
  homepage. Two renderings of the same data (data/tracks.js), mounted
  once in App.vue outside <router-view>:

  - Desktop (lg+): the docked spine rail, `position: sticky` so it
    tracks the viewport with no scroll listeners, 208px wide to fit the
    216px right gutter App.vue reserves on non-home routes. The active
    track's spine sits proud in red with its disc spinning (DeckRow.vue).
    Below the spines, a big "now playing" disc fills the rest of the
    rail down to the bottom of the screen — same sticky box, so it
    scrolls with the rail — printed with the current *route's* own hero
    photo (imageForPath, not just its track's default: /apollo and
    /ares both read as the "faculties" track but show their own photo).
  - Mobile (<lg): DeckRow's case/spine sizing assumes a side rail, so
    below lg it collapses to a slim horizontal scroll-snap strip
    (colour dot + name) pinned to the top instead — same tracks, same
    active/eject behaviour, just laid out for a narrow viewport. `fixed`
    (not `sticky`) — DeckRail is mounted after <router-view> in App.vue
    so it can land in the right-hand grid column on desktop, but that
    puts it after the *entire* page in source order, so on mobile (no
    grid, plain block flow) a sticky element there wouldn't stick until
    you'd already scrolled past all of the page's content. `fixed`
    pins it to the viewport regardless of DOM position; App.vue adds
    matching top padding on mobile so it doesn't cover the page start.
    No "now playing" disc here — the rail itself already relocated to
    the top, so there's no bottom-of-screen space for one to sit in.

  "Eject to deck" (both layouts) returns to `/`, the permanent
  empty-deck home state. On mobile it's `sticky left-0` within the
  scroll strip (with its own opaque backdrop) so it can never scroll
  out of view behind the track list, the one way back to the deck.
-->
<template>
  <!-- mobile strip — separate <Transition> (not just a `lg:hidden` sibling
       of the desktop <aside> under one wrapper) because a shared wrapper
       would need display:contents to avoid an extra grid cell, and
       transform/opacity don't apply to display:contents boxes — that
       would silently kill the slide-in animation. -->
  <Transition name="rail-mobile">
    <nav
      v-if="!isHome"
      class="lg:hidden fixed top-0 inset-x-0 z-40 bg-ivory/95 backdrop-blur border-b border-hairline"
    >
      <div class="flex items-center gap-4 px-4 sm:px-6 py-2.5 overflow-x-auto custom-scroll-hide snap-x snap-mandatory">
        <router-link
          to="/"
          class="sticky left-0 z-10 shrink-0 font-poppins text-[10px] tracking-[0.1em] uppercase text-mute-light border border-hairline rounded-full px-2.5 py-1 bg-ivory/95 backdrop-blur"
        >Eject</router-link>
        <component
          :is="t.external ? 'a' : 'router-link'"
          v-for="t in TRACKS"
          :key="t.key"
          v-bind="t.external ? { href: t.to, target: '_blank', rel: 'noopener' } : { to: t.to }"
          class="shrink-0 flex items-center gap-1.5 snap-start font-poppins text-xs whitespace-nowrap"
          :class="activeTrack?.key === t.key ? 'text-hwachred font-medium' : 'text-ink-soft'"
        >
          <span class="w-2 h-2 rounded-full shrink-0" :style="{ background: t.color }"></span>
          {{ t.title }}
        </component>
      </div>
    </nav>
  </Transition>

  <Transition name="rail">
    <aside
      v-if="!isHome"
      class="hidden lg:flex lg:flex-col sticky top-6 h-[calc(100vh-3rem)] w-[208px] shrink-0 self-start gap-1.5 py-3.5"
    >
      <router-link to="/" class="group flex items-center gap-2.5 mb-2 ml-3.5">
        <span class="w-[30px] h-[30px] rounded-full grid place-items-center bg-gradient-to-b from-white to-card border border-hairline shadow-[0_4px_10px_-7px_rgba(60,40,20,0.8)] transition-colors duration-[180ms] group-hover:border-hwachred">
          <span class="flex flex-col items-center gap-[2px]">
            <span class="w-0 h-0 border-x-[5px] border-x-transparent border-b-[6px] border-b-ink-soft"></span>
            <span class="w-[10px] h-[2px] rounded-[1px] bg-ink-soft"></span>
          </span>
        </span>
        <span class="font-poppins font-medium text-[10px] tracking-[0.14em] uppercase text-mute-light">Eject to deck</span>
      </router-link>

      <DeckRow
        v-for="t in TRACKS"
        :key="t.key"
        :track="t"
        mode="spine"
        :active="activeTrack?.key === t.key"
      />

      <!-- now playing: fills the rest of the rail down to the bottom
           of the screen, `justify-center` giving it natural breathing
           room instead of sitting flush under the last spine. -->
      <div class="flex-1 min-h-0 flex items-center justify-center pt-5">
        <Disc
          :size="164"
          :color="activeTrack?.color"
          :image="nowPlayingImage"
          :spinning="true"
          class="shrink-0 [filter:drop-shadow(0_18px_30px_rgba(60,40,20,0.35))]"
        />
      </div>
    </aside>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Disc from './Disc.vue'
import DeckRow from './DeckRow.vue'
import { TRACKS, imageForPath } from '../../data/tracks'
import { useActiveTrack } from '../../composables/useActiveTrack'

const route = useRoute()
const isHome = computed(() => route.path === '/')
const { activeTrack } = useActiveTrack()
const nowPlayingImage = computed(() => imageForPath(route.path))
</script>
