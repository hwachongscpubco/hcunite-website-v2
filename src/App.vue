<!--
  App.vue — the root layout. The word navbar is gone: DeckRail.vue (the
  docked CD-spine rail) is the site's navigation on every page except
  the homepage, which renders its own full DeckPlayer.vue inline
  instead (see src/components/deck/README notes in
  src/components/README.md). This file now only wires up: the
  page-swap transition around <router-view>, the right-hand gutter
  DeckRail sticks in, and the footer (unchanged content, recoloured
  per-route/per-sodache-tab exactly as before via footerClass).
-->
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DeckRail from './components/deck/DeckRail.vue'
import { useSodacheStore } from './stores/sodacheStore'

const route = useRoute()
const sodacheStore = useSodacheStore()
const isHome = computed(() => route.path === '/')

// Per-faculty theme classes, keyed by route path, shared by the footer
// colour computeds below (each faculty page used to repeat its own
// text-<faculty>/bg-<faculty> class in separate switch statements).
const FACULTY_ROUTE_THEME = {
  '/apollo':  { footer: 'bg-apollo text-black', icon: 'text-apollo' },
  '/ares':    { footer: 'bg-ares text-white',   icon: 'text-ares' },
  '/artemis': { footer: 'bg-artemis text-white',icon: 'text-artemis' },
  '/athena':  { footer: 'bg-athena text-white', icon: 'text-athena' },
}

const footerClass = computed(() => {
  const theme = FACULTY_ROUTE_THEME[route.path]
  if (theme) return theme.footer

  if (route.path === '/sodache') {
    switch (sodacheStore.activeSection) {
      case 'song': return 'bg-song text-black'
      case 'dance': return 'bg-dance text-white'
      case 'cheer': return 'bg-cheer text-white'
      default: return 'bg-hwachred text-white'
    }
  }

  return 'bg-hwachred text-white'
})

const footerIconClass = computed(() => {
  const theme = FACULTY_ROUTE_THEME[route.path]
  if (theme) return theme.icon

  if (route.path === '/sodache') {
    switch (sodacheStore.activeSection) {
      case 'song': return 'text-song'
      case 'dance': return 'text-dance'
      case 'cheer': return 'text-cheer'
      default: return 'text-hwachred'
    }
  }

  return 'text-hwachred'
})

const bgClass = computed(() => {
  switch (route.path) {
    case '/sodache':
      return 'bg-[#141414]'
    default:
      return 'bg-ivory'
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden overflow-y-scroll custom-scroll-hide" :class="bgClass">
    <div
      class="flex-grow w-full px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8"
      :class="isHome ? '' : 'pt-[58px] lg:pt-8 lg:grid lg:grid-cols-[1fr_216px] lg:gap-2'"
    >
      <main class="min-w-0">
        <router-view v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <!--
              The wrapping div (not the route component's own root) is
              what <Transition> tracks. Page components render several
              top-level sections (a Fragment) — animating a Fragment
              directly isn't supported and silently drops the page on
              route change, so every page gets funnelled through this
              single real element instead, keyed on the path.
            -->
            <div :key="route.path">
              <component :is="Component" />
            </div>
          </Transition>
        </router-view>
      </main>
      <DeckRail />
    </div>

    <footer class="text-inter text-center transition-all duration-500 mt-16" :class="footerClass">
      <div class="flex flex-row gap-4 px-[3vw] py-8">
        <div class="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
          <div class="bg-white rounded-full p-1">
            <a :class="footerIconClass" class="" target="_blank" href="https://www.instagram.com/hcunite/">
              <svg class="fill-current w-full h-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/>
                <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
          <div class="bg-white rounded-full p-2">
            <a :class="footerIconClass" class="" target="_blank" href="https://www.youtube.com/channel/UCPz0DNqC6i1pyJvKYhSHlKw">
              <svg class="fill-current w-full h-full" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>youtube [#168]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div class="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
          <div class="bg-white rounded-full p-2">
            <a :class="footerIconClass" class="" target="_blank" href="https://www.facebook.com/hcunite/">
            <svg class="fill-current h-full w-full" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" fill="none" width="20" height="20"/>
              <g>
                <path d="M2.89 2h14.23c.49 0 .88.39.88.88v14.24c0 .48-.39.88-.88.88h-4.08v-6.2h2.08l.31-2.41h-2.39V7.85c0-.7.2-1.18 1.2-1.18h1.28V4.51c-.22-.03-.98-.09-1.86-.09-1.85 0-3.11 1.12-3.11 3.19v1.78H8.46v2.41h2.09V18H2.89c-.49 0-.89-.4-.89-.88V2.88c0-.49.4-.88.89-.88z"/>
              </g>
            </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="px-[3vw] flex flex-col gap-8 lg:flex-row">
        <div class="max-w-[800px] w-full grid grid-cols-2">
          <div class="text-left flex flex-col gap-1">
            <p class="mb-2 font-bold">Resources</p>
            <router-link to="/council52">
              <p>52nd HCSC</p>
            </router-link>
            <router-link to="/sodache">
              <p>SODACHE</p>
            </router-link>
            <router-link to="/common">
              <p>Common Room</p>
            </router-link>
            <router-link to="/leaders">
              <p>Leader Groups</p>
            </router-link>
          </div>
          <div class="text-left flex flex-col gap-1">
            <p class="mb-2 font-bold">Faculties</p>
            <router-link to="/apollo">
              <p>Apollo</p>
            </router-link>
            <router-link to="/ares">
              <p>Ares</p>
            </router-link>
            <router-link to="/artemis">
              <p>Artemis</p>
            </router-link>
            <router-link to="/athena">
              <p>Athena</p>
            </router-link>
          </div>
        </div>
        <div class="w-full text-left lg:text-right">
          <p>CREDIT: STUDIO ARDENT FOR RELEVANT IMAGES</p>
          <p>WEBSITE UPDATED BY NG XU THONG AND PUBCO</p>
        </div>
      </div>

      <div class="mt-16 w-full flex items-center justify-center overflow-hidden">
        <h1 class="text-[21vw]">HCUNITE</h1>
      </div>
    </footer>
  </div>
</template>
