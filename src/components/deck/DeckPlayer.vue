<!--
  DeckPlayer.vue — the homepage's interactive CD player (Home.vue only).
  A binder of cases (one per data/tracks.js entry) beside a platter.
  Hovering/dragging a case previews it on the platter's readout; a
  click — or a drag dropped on the platter — navigates there via a real
  <router-link> (DeckRow.vue), so keyboard/screen-reader users get plain
  navigation and dragging is a nicety layered on top, not a requirement.
  The platter otherwise always shows the empty-deck state: home is the
  one page the deck is never "loaded" — see the docked DeckRail.vue for
  what every other page looks like.
-->
<template>
  <div class="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 w-full max-w-[1180px] mx-auto" @pointerleave="onRowLeave">
    <!-- binder -->
    <div class="order-2 lg:order-1 flex flex-col gap-3.5 w-full lg:w-[300px] shrink-0">
      <div class="font-poppins text-[11px] tracking-[0.14em] uppercase text-mute">Binder — pick a disc</div>
      <div
        class="grain rounded-2xl border border-hairline p-3 flex gap-2 lg:flex-col overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none"
        style="background: linear-gradient(180deg, #F3E6D3, #EADBC5); box-shadow: inset 0 2px 6px rgba(120,90,55,0.18);"
      >
        <DeckRow
          v-for="t in TRACKS"
          :key="t.key"
          :track="t"
          mode="case"
          class="shrink-0 w-[240px] lg:w-auto snap-center"
          @pointerenter="onRowEnter(t)"
          @pointerdown="onRowPointerDown(t, $event)"
          @click="onRowClick"
        />
      </div>
    </div>

    <!-- platter -->
    <div class="order-1 lg:order-2 flex flex-col gap-4 w-full">
      <div
        ref="platterEl"
        class="relative rounded-2xl border border-hairline p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-[minmax(180px,240px)_1fr] gap-6 sm:gap-7 items-center"
        style="background:
          linear-gradient(168deg, #FDF8F0 0%, #F3E7D5 46%, #EADCC6 100%);
          box-shadow: 0 22px 44px -32px rgba(70,45,22,0.6), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -18px 30px -22px rgba(120,90,55,0.35);"
      >
        <div class="grain absolute inset-0 rounded-2xl pointer-events-none opacity-70"></div>

        <!-- well + disc -->
        <div
          class="relative mx-auto w-[220px] h-[220px] sm:w-full sm:h-auto sm:aspect-square rounded-full grid place-items-center"
          style="background: radial-gradient(circle at 50% 50%, #E7DBC8 0 30%, #DFD2BC 30% 96%, #D3C4AB 100%); box-shadow: inset 0 6px 18px -6px rgba(90,62,32,0.45), inset 0 0 0 1px #D8C9B1;"
        >
          <!--
            [grid-area:1/1] on both the disc and the empty-well dot: the
            well is a `grid place-items-center` box sized off its own
            aspect-ratio, not its content. Without this, the outgoing
            and incoming <Disc> mid-crossfade are two auto-placed grid
            items (two implicit rows), and a percentage-sized child
            resolves against its *row's* auto height rather than the
            well's — which briefly halves it into a squashed capsule.
            Pinning every child to the same cell keeps it a one-item
            grid at all times, so the percentage always resolves off
            the well itself.
          -->
          <Transition name="disc-fade">
            <Disc
              v-if="previewTrack"
              :key="previewTrack.key"
              :size="180"
              :color="previewTrack.color"
              :image="previewTrack.image"
              :spinning="true"
              class="!w-[92%] !h-[92%] [grid-area:1/1]"
            />
          </Transition>
          <div v-if="!previewTrack" class="w-3 h-3 rounded-full bg-hairline [grid-area:1/1]"></div>
        </div>

        <!-- readout -->
        <div class="relative flex flex-col gap-3 min-w-0">
          <Transition name="readout-fade" mode="out-in">
            <div :key="previewTrack?.key || 'empty'" class="flex flex-col gap-3">
              <div class="font-poppins text-[11px] tracking-[0.16em] uppercase text-mute">
                {{ previewTrack ? previewTrack.label + ' · NOW PREVIEWING' : 'NO DISC LOADED' }}
              </div>
              <div class="font-poppins font-semibold text-2xl sm:text-3xl text-ink leading-tight">
                {{ previewTrack ? previewTrack.title : 'Pick a disc' }}
              </div>
              <p class="text-sm sm:text-base text-ink-soft leading-relaxed min-h-[64px] max-w-[420px]">
                {{ previewTrack ? previewTrack.blurb : 'The deck is empty. Hover or drag a case from the binder onto the platter, or click one, and its page loads below.' }}
              </p>
            </div>
          </Transition>
          <div class="flex items-center gap-3">
            <component
              :is="previewTrack ? 'router-link' : 'span'"
              :to="previewTrack?.to"
              class="shrink-0 w-9 h-9 rounded-full grid place-items-center transition-[transform,background] duration-[180ms] ease-standard"
              :class="previewTrack
                ? 'bg-gradient-to-b from-hwachred to-[#B81C1C] shadow-[0_4px_10px_-4px_rgba(140,20,20,0.7)] hover:scale-105 cursor-pointer'
                : 'bg-khaki/40'"
              :aria-label="previewTrack ? `Play ${previewTrack.title}` : 'No disc loaded'"
            >
              <span
                class="w-0 h-0 border-y-[7px] border-y-transparent border-l-[11px] ml-0.5"
                :class="previewTrack ? 'border-l-ivory' : 'border-l-mute-light'"
              ></span>
            </component>
            <div class="flex-1 h-1 rounded-full bg-khaki/60 overflow-hidden">
              <div
                class="h-full rounded-full transition-[width] duration-[560ms] ease-enter"
                style="background: linear-gradient(180deg, #E4483F, #B81C1C);"
                :style="{ width: previewTrack ? '34%' : '0%' }"
              ></div>
            </div>
            <span class="font-poppins text-[11px] text-mute">{{ previewTrack ? previewTrack.time : '—' }}</span>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2.5 font-poppins text-[11px] text-mute">
        <span class="w-2 h-2 rounded-full bg-seafoam"></span>
        <span>Click, tap, or drag a case onto the deck — every case is a real link.</span>
      </div>

      <!-- Home.vue's link carousels land here, in the platter's own
           column, right under it — not a full-width section below the
           whole deck, so they sit snugly beside the binder instead of
           padding out the page with a near-empty row. -->
      <slot name="below" />
    </div>
  </div>

  <!-- drag ghost -->
  <Teleport to="body">
    <div
      v-if="dragging"
      class="fixed z-[999] pointer-events-none flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-ivory/95 border border-hairline shadow-lg"
      :style="{ left: dragging.x + 14 + 'px', top: dragging.y + 14 + 'px', transform: 'rotate(4deg)' }"
    >
      <Disc :size="24" :color="dragging.track.color" :spinning="true" />
      <span class="font-poppins text-xs text-ink">{{ dragging.track.title }}</span>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import Disc from './Disc.vue'
import DeckRow from './DeckRow.vue'
import { TRACKS } from '../../data/tracks'

const router = useRouter()
const platterEl = ref(null)

const previewKey = ref(null)
const previewTrack = computed(() => TRACKS.find((t) => t.key === previewKey.value) || null)

const dragging = ref(null) // { track, x, y }

function onRowEnter(track) {
  if (!dragging.value) previewKey.value = track.key
}
function onRowLeave() {
  if (!dragging.value) previewKey.value = null
}
function onRowClick(e) {
  // Plain click: DeckRow's own <router-link>/<a> already navigates —
  // nothing extra to do, this just keeps the click from being mistaken
  // for a drag by callers that might listen for both.
}

function onRowPointerDown(track, e) {
  if (track.external || e.pointerType !== 'mouse') return
  dragging.value = { track, x: e.clientX, y: e.clientY }
  previewKey.value = track.key
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp, { once: true })
}

function onPointerMove(e) {
  if (!dragging.value) return
  dragging.value = { ...dragging.value, x: e.clientX, y: e.clientY }
}

function onPointerUp(e) {
  window.removeEventListener('pointermove', onPointerMove)
  if (!dragging.value) return
  const track = dragging.value.track
  const overPlatter = platterEl.value && isPointOverEl(e.clientX, e.clientY, platterEl.value)
  dragging.value = null
  if (overPlatter) router.push(track.to)
}

function isPointOverEl(x, y, el) {
  const r = el.getBoundingClientRect()
  return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
}

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove)
})
</script>

<style scoped>
.disc-fade-enter-active, .disc-fade-leave-active { transition: opacity 320ms ease; }
.disc-fade-enter-from, .disc-fade-leave-to { opacity: 0; }
.readout-fade-enter-active { transition: opacity 320ms ease, transform 320ms ease; }
.readout-fade-leave-active { transition: opacity 240ms ease, transform 240ms ease; }
.readout-fade-enter-from { opacity: 0; transform: translateY(8px); }
.readout-fade-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
