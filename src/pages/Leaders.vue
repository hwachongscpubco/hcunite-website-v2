<!--
  Leaders.vue — /leaders: every student leadership body in one place,
  each row linking out to its Instagram. `groups` is local (this is the
  only page that needs it — see src/data/README.md for when something
  graduates to src/data).
-->
<script setup>
import PageHero from '../components/PageHero.vue'
import councilPic from '../assets/informal_council_pic.jpg'
import { useRevealOnScroll } from '../composables/useRevealOnScroll'

const groups = [
  { name: "Students' Council", note: 'HCSC · 53rd Council', color: '#CE2222', handle: '@hcunite', href: 'https://www.instagram.com/hcunite/' },
  { name: 'CCA Council', note: 'CCAs', color: '#0F3C6E', handle: '@hcccas', href: 'https://www.instagram.com/hcccas/' },
  { name: 'Apollo Faculty', note: 'The Bull', color: '#FFCC02', handle: '@apollofaculty', href: 'https://www.instagram.com/apollofaculty/' },
  { name: 'Ares Faculty', note: 'The Horse', color: '#C9102D', handle: '@aresfaculty', href: 'https://www.instagram.com/aresfaculty/' },
  { name: 'Artemis Faculty', note: 'The Wolf', color: '#06048D', handle: '@artemisfaculty', href: 'https://www.instagram.com/artemisfaculty/' },
  { name: 'Athena Faculty', note: 'The Owl', color: '#027B3E', handle: '@athenafaculty', href: 'https://www.instagram.com/athenafaculty/' },
  { name: 'Green Council', note: 'Environmental', color: '#4E7A3A', handle: '@hc_greencouncil', href: 'https://www.instagram.com/hc_greencouncil/' },
  { name: 'Values-In-Action Council', note: 'Values-In-Action', color: '#87D7CD', handle: '@viacouncil', href: 'https://www.instagram.com/viacouncil/' },
  { name: "Students' National Education Council", note: 'National Education', color: '#F0C35F', handle: '@hcisnec', href: 'https://www.instagram.com/hcisnec/' },
]

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

    <ul class="border-t border-hairline">
      <li
        v-for="(group, i) in groups"
        :key="group.name"
        :ref="setEl(i)"
        class="reveal"
        :style="{ transitionDelay: (i % 4) * 60 + 'ms' }"
      >
        <a
          :href="group.href"
          target="_blank"
          rel="noopener"
          class="group grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] items-baseline gap-x-6 gap-y-1 py-5 sm:py-6 border-b border-hairline"
        >
          <span class="flex items-baseline gap-4 min-w-0 transition-transform duration-700 ease-enter group-hover:translate-x-3">
            <span class="w-2.5 h-2.5 rounded-full shrink-0 -translate-y-0.5" :style="{ background: group.color }"></span>
            <span class="font-inter font-light text-xl sm:text-3xl tracking-[-0.01em]">{{ group.name }}</span>
          </span>
          <span class="meta hidden sm:block">{{ group.note }}</span>
          <span class="meta !text-ink text-right transition-opacity duration-300 group-hover:opacity-50">{{ group.handle }} ↗</span>
        </a>
      </li>
    </ul>
  </div>
</template>
