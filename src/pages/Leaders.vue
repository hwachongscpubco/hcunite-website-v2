<!--
  Leaders.vue — /leaders: every student leadership body in one place, as
  a grid of cards (the same shape as the SODACHE cards), each showing the
  group's Instagram profile picture and linking out to its Instagram.
  `groups` is local (this is the only page that needs it — see
  src/data/README.md for when something graduates to src/data).

  Profile pictures live at public/images/leaders/<handle>.jpg, the handle
  without its @ (e.g. hcunite.jpg) — see public/images/README.md. A card
  whose picture hasn't been added yet shows the group's colour and
  `short` name instead.
-->
<script setup>
import { reactive } from 'vue'
import PageHero from '../components/PageHero.vue'
import councilPic from '../assets/informal_council_pic.jpg'
import { useRevealOnScroll } from '../composables/useRevealOnScroll'

const groups = [
  { name: "Students' Council", short: 'HCSC', color: '#CE2222', handle: '@hcunite', href: 'https://www.instagram.com/hcunite/' },
  { name: 'CCA Council', short: 'CCA', color: '#0F3C6E', handle: '@hcccas', href: 'https://www.instagram.com/hcccas/' },
  { name: 'Apollo Faculty', short: 'Apollo', color: '#FFCC02', handle: '@apollofaculty', href: 'https://www.instagram.com/apollofaculty/' },
  { name: 'Ares Faculty', short: 'Ares', color: '#C9102D', handle: '@aresfaculty', href: 'https://www.instagram.com/aresfaculty/' },
  { name: 'Artemis Faculty', short: 'Artemis', color: '#06048D', handle: '@artemisfaculty', href: 'https://www.instagram.com/artemisfaculty/' },
  { name: 'Athena Faculty', short: 'Athena', color: '#027B3E', handle: '@athenafaculty', href: 'https://www.instagram.com/athenafaculty/' },
  { name: 'Green Council', short: 'Green', color: '#4E7A3A', handle: '@hc_greencouncil', href: 'https://www.instagram.com/hc_greencouncil/' },
  { name: 'Values-In-Action Council', short: 'VIA', color: '#87D7CD', handle: '@viacouncil', href: 'https://www.instagram.com/viacouncil/' },
  { name: "Students' National Education Council", short: 'SNEC', color: '#F0C35F', handle: '@hcisnec', href: 'https://www.instagram.com/hcisnec/' },
]

const picture = (group) => `/images/leaders/${group.handle.slice(1)}.jpg`
const noPicture = reactive({})

// Dark text on the light group colours (Apollo, VIA, SNEC), white on the rest.
function textOn(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))
  return 0.299 * r + 0.587 * g + 0.114 * b > 160 ? '#111111' : '#FFFFFF'
}

const { setEl } = useRevealOnScroll()
</script>

<template>
  <PageHero :image="councilPic" alt="Hwa Chong student leaders" />

  <div class="page-body">
    <section class="split mb-(--space)">
      <h2>Every leadership body, in one place</h2>
      <p class="split-text">
        The Students' Council, the CCA Council, the four Faculty Committees and the Extended Councils.
        Each one links out to that group's Instagram.
      </p>
    </section>

    <ul class="grid grid-cols-2 lg:grid-cols-3 gap-x-[clamp(12px,2.1vw,30px)] gap-y-10">
      <li
        v-for="(group, i) in groups"
        :key="group.name"
        :ref="setEl(i)"
        class="reveal"
        :style="{ transitionDelay: (i % 3) * 70 + 'ms' }"
      >
        <a :href="group.href" target="_blank" rel="noopener" class="group block">
          <div class="relative aspect-square overflow-hidden rounded-[10px]" :style="{ background: group.color }">
            <img
              v-if="!noPicture[group.handle]"
              :src="picture(group)"
              :alt="group.name + ' on Instagram'"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-[900ms] ease-enter group-hover:scale-[1.04]"
              @error="noPicture[group.handle] = true"
            >
            <span
              v-else
              class="absolute inset-0 flex items-center justify-center font-inter font-extralight text-3xl sm:text-5xl tracking-[-0.02em] transition-transform duration-[900ms] ease-enter group-hover:scale-[1.04]"
              :style="{ color: textOn(group.color) }"
            >{{ group.short }}</span>
            <div class="hidden lg:flex absolute inset-0 items-end p-5 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-standard">
              <span class="text-link text-white">Instagram</span>
            </div>
          </div>

          <div class="pt-4">
            <span class="block font-jakarta font-bold text-base sm:text-lg leading-snug">{{ group.name }}</span>
            <span class="block meta mt-1">{{ group.handle }}</span>
            <span class="lg:hidden text-link !text-xs mt-2.5">Instagram</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
