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

  Structure note: the round *clip* lives on an inner div, one level
  below the component's actual root. A <Transition> (the platter's
  disc-fade) applies its enter/leave classes straight onto whatever
  it's wrapped around — this component's root element — so if that
  same element were also the one clipping the circle, an
  opacity/transform transition and a rounded overflow-hidden clip would
  be fighting for the same compositor layer. Browsers occasionally
  resolve that by promoting the layer *without* its clip for a frame,
  which reads as the disc flashing square. Keeping the root a plain
  (unclipped) box and clipping one div in means the transition can
  never touch the clip.
-->
<template>
  <div
    class="relative rounded-full shrink-0"
    :style="{ width: size + 'px', height: size + 'px', boxShadow: '0 3px 6px -3px rgba(60,40,20,0.75), inset 0 0 0 1px rgba(255,255,255,0.65)' }"
  >
    <!--
      isolate scopes the ring layer's mix-blend-mode to inside this
      box — without it, some browsers let a blended descendant ignore
      its ancestor's overflow-hidden clip and bleed past the circle.
      [clip-path:circle(50%)] is a second, independent clip alongside
      overflow-hidden/rounded-full — belt and suspenders against either
      one alone failing to clip a blended/animated layer in some
      browser.
    -->
    <div class="absolute inset-0 rounded-full overflow-hidden isolate [clip-path:circle(50%)]">
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
        Data rings — a real CD/vinyl's fine concentric grooves, drawn
        as thin lines (not solid bands): a short highlight+shadow pair
        every `ringGap` px, mostly transparent in between. A
        repeating-radial-gradient centred on the disc is rotationally
        symmetric, so it reads identically whether or not it's on the
        spinning layer; `mix-blend-mode: overlay` etches it into
        whatever's underneath (colour or photo) instead of painting
        flat lines over it. Both dimensions scale with `size` so tiny
        spines and the huge sidebar disc show a similar ring density,
        not the same fixed line spacing.
      -->
      <div
        class="absolute inset-0 pointer-events-none mix-blend-overlay"
        :style="{
          background: `repeating-radial-gradient(circle at 50% 50%,
            rgba(255,255,255,0.55) 0px, rgba(255,255,255,0.55) ${ringLine}px,
            rgba(40,28,16,0.2) ${ringLine}px, rgba(40,28,16,0.2) ${ringLine * 2}px,
            transparent ${ringLine * 2}px, transparent ${ringGap}px)`,
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
// Thin line, not a thick band: ~1px even on the huge sidebar disc.
const ringLine = computed(() => Math.max(0.4, props.size / 480))
const ringGap = computed(() => Math.max(2.2, props.size / 20))
</script>
