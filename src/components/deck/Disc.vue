<!--
  Disc.vue — the CD visual used throughout the "Now Playing" redesign:
  binder mini-discs, the homepage platter disc, docked spine mini-discs,
  the /leaders group discs and the Sodache side disc. A spectral sheen +
  mirror-band + gloss-sweep layered look, a coloured hub in the middle,
  and a centre hole — same recipe at every size, just scaled by `size`.

  Props:
    - size: disc diameter in px (default 32).
    - color: CSS colour or gradient for the hub (default hwachred).
    - spinning: whether the disc is rotating (JS-driven — spine active state, platter preview).
    - hoverSpin: pure-CSS alternative — spins only while an ancestor with
      class="group" is hovered (used by the /leaders cards, so 9 discs
      never spin at once without any JS). Ignored if `spinning` is true.
    - speed: one full turn duration, e.g. "4.2s" (default) / "5.2s" (Sodache).
    - image: optional photo (that page's hero image, see data/tracks.js)
      printed on the disc in place of the plain spectral sheen — a
      picture disc. Still spins with the same layer, so the photo
      visibly turns with it; the colour hub + hole sit on top, static,
      like a printed centre label.
  Slot: optional content laid over the disc (used by the platter for its
  filename-pill readout label).
-->
<template>
  <div
    class="relative rounded-full shrink-0 overflow-hidden"
    :style="{ width: size + 'px', height: size + 'px', boxShadow: '0 3px 6px -3px rgba(60,40,20,0.75), inset 0 0 0 1px rgba(255,255,255,0.65)' }"
  >
    <div
      class="absolute inset-0 bg-cover bg-center"
      :class="hoverSpin && !spinning ? 'group-hover:[animation:disc-spin_3s_linear_infinite]' : ''"
      :style="[
        image
          ? { backgroundImage: `url(${image})` }
          : { background: 'conic-gradient(from 0deg, #7FE0C0, #F6E27A 12%, #FF8A6A 25%, #B08CFF 38%, #6FD9E8 50%, #FFC178 62%, #E38CFF 75%, #7FE0C0 100%)', opacity: .62 },
        spinning ? { animation: `disc-spin ${speed} linear infinite` } : {},
      ]"
    ></div>
    <!--
      Data rings — a real CD/vinyl's fine concentric grooves. A
      repeating-radial-gradient centred on the disc is rotationally
      symmetric, so it reads identically whether or not it's on the
      spinning layer; `mix-blend-mode: overlay` etches it into
      whatever's underneath (colour or photo) instead of painting flat
      rings over it. Band width scales with `size` so tiny spines and
      the huge sidebar disc both show a similar ring *count*, not the
      same fixed groove width.
    -->
    <div
      class="absolute inset-0 pointer-events-none mix-blend-overlay"
      :style="{
        background: `repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) ${ringWidth}px, rgba(40,28,16,0.16) ${ringWidth}px, rgba(40,28,16,0.16) ${ringWidth * 2}px)`,
      }"
    ></div>
    <div
      class="absolute inset-0"
      style="background:
        radial-gradient(circle at 50% 50%, rgba(250,244,234,0.94) 0 24%, rgba(250,244,234,0.16) 33%, rgba(255,255,255,0) 58%, rgba(255,255,255,0.4) 92%, rgba(140,118,92,0.5) 100%),
        linear-gradient(118deg, rgba(255,255,255,0.6) 26%, rgba(255,255,255,0) 54%);"
    ></div>
    <div
      class="absolute rounded-full"
      :style="{
        left: '50%', top: '50%',
        width: hubSize + 'px', height: hubSize + 'px',
        margin: `-${hubSize / 2}px 0 0 -${hubSize / 2}px`,
        background: color,
        transition: 'background 320ms var(--ease-standard)',
      }"
    ></div>
    <div
      class="absolute rounded-full"
      style="box-shadow: inset 0 0 0 1px rgba(120,100,78,0.55);"
      :style="{
        left: '50%', top: '50%',
        width: holeSize + 'px', height: holeSize + 'px',
        margin: `-${holeSize / 2}px 0 0 -${holeSize / 2}px`,
        background: '#F1E6D6',
      }"
    ></div>
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: { type: Number, default: 32 },
  color: { type: String, default: 'var(--color-hwachred)' },
  spinning: { type: Boolean, default: false },
  hoverSpin: { type: Boolean, default: false },
  speed: { type: String, default: '4.2s' },
  image: { type: String, default: null },
})

const hubSize = computed(() => Math.round(props.size * 0.44))
const holeSize = computed(() => Math.round(props.size * 0.25))
const ringWidth = computed(() => Math.max(0.6, props.size / 34))
</script>
