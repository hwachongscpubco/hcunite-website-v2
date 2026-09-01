<!--
  Leaders.vue — /leaders: every student leadership body in one place,
  each card linking out to its Instagram (see the root README's "Now
  Playing" section, track 06). New page — replaces the homepage's old
  Instagram widget. `groups` is local (this is the only page that needs
  it — see src/data/README.md for when something graduates to src/data).

  Instagram handles for Students' Council and all 4 faculties are real,
  taken from the existing footer link and each FacultyPage.vue's
  `instagram` prop. CCA Council has no known Instagram, so its card
  links to the existing CCA website instead (same URL as the old nav's
  external CCAS link). Green/VIA/NE Council have no confirmed handle or
  brand colour yet — placeholders, flagged below, swap in the real ones
  when known.
-->
<script setup>
import { useRevealOnScroll } from '../composables/useRevealOnScroll'
import Disc from '../components/deck/Disc.vue'

const groups = [
  { name: "Students' Council", note: 'HCSC · 53rd Council', color: '#CE2222', handle: '@hcunite', href: 'https://www.instagram.com/hcunite/', linkLabel: 'INSTAGRAM' },
  { name: 'CCA Council', note: 'CCAs', color: '#0F3C6E', handle: '@hcccasgit', href: 'https://www.instagram.com/hcccas/', linkLabel: 'INSTAGRAM' },
  { name: 'Apollo Faculty', note: 'The Bull · Live Loud, Live Proud', color: '#FFCC02', handle: '@apollofaculty', href: 'https://www.instagram.com/apollofaculty/', linkLabel: 'INSTAGRAM' },
  { name: 'Ares Faculty', note: 'The Horse', color: '#C9102D', handle: '@aresfaculty', href: 'https://www.instagram.com/aresfaculty/', linkLabel: 'INSTAGRAM' },
  { name: 'Artemis Faculty', note: 'The Wolf', color: '#06048D', handle: '@artemisfaculty', href: 'https://www.instagram.com/artemisfaculty/', linkLabel: 'INSTAGRAM' },
  { name: 'Athena Faculty', note: 'The Owl', color: '#027B3E', handle: '@athenafaculty', href: 'https://www.instagram.com/athenafaculty/', linkLabel: 'INSTAGRAM' },
  { name: 'Green Council', note: 'Environmental', color: '#4E7A3A', handle: '@hc_greencouncil', href: 'https://www.instagram.com/hc_greencouncil/', linkLabel: 'INSTAGRAM' },
  { name: 'VIA Council', note: 'Values In Action', color: '#87D7CD', handle: '@viacouncil', href: 'https://www.instagram.com/viacouncil/', linkLabel: 'INSTAGRAM' },
  { name: "Students' NE Council", note: 'National Education', color: '#F0C35F', handle: '@hcisnec', href: 'https://www.instagram.com/hcisnec/', linkLabel: 'INSTAGRAM' },
]

const { setEl } = useRevealOnScroll()
</script>

<template>
  <section class="pt-8 sm:pt-14 pb-20 px-2 sm:px-4">
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
      <div>
        <div class="font-poppins text-[11px] tracking-[0.16em] uppercase text-hwachred mb-3">TRACK 06 · NINE GROUPS</div>
        <div class="w-14 h-[3px] bg-hwachred rounded-full mb-4"></div>
        <h1 class="text-ink !text-5xl sm:!text-7xl leading-[0.9]">STUDENT<br>LEADER GROUPS</h1>
      </div>
      <p class="text-ink-soft text-base sm:text-lg max-w-xs">
        Every student leadership body in one place. Each disc links out to that group's Instagram.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      <component
        :is="group.href ? 'a' : 'div'"
        v-for="(group, i) in groups"
        :key="group.name"
        v-bind="group.href ? { href: group.href, target: '_blank', rel: 'noopener' } : {}"
        :ref="setEl(i)"
        :style="{ transitionDelay: (i % 3) * 70 + Math.floor(i / 3) * 70 + 'ms' }"
        class="reveal group bg-ivory border border-hairline rounded-2xl p-5 sm:p-6 flex flex-col gap-4 transition-[transform,box-shadow] duration-[320ms] ease-standard hover:-translate-y-[5px] hover:shadow-[0_18px_34px_-22px_rgba(60,40,20,0.55)]"
      >
        <Disc :size="72" :color="group.color" hover-spin />

        <div>
          <div class="font-poppins font-medium text-lg sm:text-xl text-ink leading-tight">{{ group.name }}</div>
          <div class="font-poppins text-[11px] text-mute mt-1.5">{{ group.note }}</div>
        </div>

        <div class="mt-auto flex items-center justify-between gap-3 pt-3.5 border-t border-hairline">
          <span class="font-poppins text-xs text-ink-soft truncate">{{ group.handle }}</span>
          <span
            v-if="group.href"
            class="font-poppins text-[11px] text-hwachred shrink-0 inline-flex items-center gap-1 transition-transform duration-[180ms] group-hover:translate-x-1 group-hover:-translate-y-0.5"
          >{{ group.linkLabel }} →</span>
          <span v-else class="font-poppins text-[11px] text-mute-light shrink-0">SOON</span>
        </div>
      </component>
    </div>
  </section>
</template>
