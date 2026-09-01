<!--
  DeckRow.vue — one case (homepage binder, via DeckPlayer.vue) or one
  spine (docked rail, via DeckRail.vue) for a single data/tracks.js
  entry. `mode` switches sizing/markup between the two; `active` is the
  spine's "this is the current page" state (proud, red, spinning disc).
  Internal CSS-only hover (translate/margin) — any *preview* behaviour
  (case hover updating the platter readout) is the parent's job: listen
  for `pointerenter`/`pointerleave`/`pointerdown`, which fall through to
  this row's root link element automatically since they aren't declared
  as emits here.
-->
<template>
  <component
    :is="tag"
    v-bind="linkProps"
    class="group relative flex items-center overflow-hidden select-none"
    :class="mode === 'case' ? caseClasses : spineClasses"
  >
    <div class="grain absolute inset-0 pointer-events-none" :class="mode === 'case' || active ? 'opacity-50' : 'opacity-80'"></div>

    <span
      class="absolute left-0 inset-y-0 pointer-events-none"
      :class="mode === 'case' ? 'w-[7px] rounded-l-[3px]' : 'w-[5px]'"
      :style="{ background: track.spine || track.color }"
    ></span>
    <span
      v-if="mode === 'case'"
      class="absolute left-[7px] inset-y-0 w-[2px] bg-white/70 pointer-events-none"
    ></span>

    <Disc
      :size="mode === 'case' ? 30 : 26"
      :color="track.color"
      :spinning="mode === 'spine' && active"
      class="relative"
    />

    <span class="relative min-w-0">
      <span
        class="block font-poppins font-medium truncate"
        :class="[
          mode === 'case' ? 'text-[13.5px] leading-tight text-ink' : 'text-xs leading-tight',
          mode === 'spine' && active ? 'text-ivory' : mode === 'spine' ? 'text-ink-soft' : '',
        ]"
      >{{ track.title }}</span>
      <span
        v-if="mode === 'case'"
        class="block font-poppins text-[10px] text-mute-light mt-0.5 truncate"
      >{{ track.label }} · {{ track.time }}</span>
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import Disc from './Disc.vue'

const props = defineProps({
  track: { type: Object, required: true },
  mode: { type: String, default: 'case' }, // 'case' | 'spine'
  active: { type: Boolean, default: false },
})

const tag = computed(() => (props.track.external ? 'a' : 'router-link'))
const linkProps = computed(() =>
  props.track.external
    ? { href: props.track.to, target: '_blank', rel: 'noopener' }
    : { to: props.track.to }
)

const caseClasses = computed(() => [
  'gap-3 pl-[18px] pr-3 py-2.5 rounded-[3px] cursor-grab border border-hairline',
  'bg-gradient-to-br from-white/90 via-ivory/70 to-card/70',
  'shadow-[0_6px_14px_-10px_rgba(60,40,20,0.65),inset_0_1px_0_rgba(255,255,255,0.9)]',
  'transition-transform duration-[180ms] ease-standard hover:translate-x-[7px]',
])

const spineClasses = computed(() => [
  'gap-2.5 h-[46px] pl-[9px] pr-3.5 rounded-l-md border border-hairline border-r-0',
  'transition-[margin] duration-[320ms] ease-mech',
  props.active
    ? '-ml-3.5 bg-gradient-to-r from-hwachred to-[#B81C1C] border-[#B81C1C] shadow-[-6px_6px_18px_-10px_rgba(140,20,20,0.85),inset_0_1px_0_rgba(255,255,255,0.7)]'
    : 'ml-0 hover:-ml-2.5 bg-gradient-to-r from-white/95 via-ivory/80 to-card/85 shadow-[-4px_4px_12px_-9px_rgba(60,40,20,0.6),inset_0_1px_0_rgba(255,255,255,0.7)]',
])
</script>
