<!--
  FacultyPage.vue

  Shared page layout for the 4 Faculty pages (Apollo, Ares, Artemis,
  Athena). Every faculty page follows the exact same structure — a
  tap-to-reveal hero photo, a group photo with a name roster, a blurb
  about the Faculty's sacred animal, an events carousel and a cheers
  carousel — so the markup lives here once, and each src/pages/<Faculty>.vue
  file just supplies that faculty's content and colour.

  Usage (see src/pages/Apollo.vue for a full example):
    <FacultyPage
      name="APOLLO"
      instagram="https://www.instagram.com/apollofaculty/"
      hero-image="/images/Apollo/apollo_photo.jpg"
      border-class="border-apollo"
      hover-class="hover:bg-apollo"
      accent-class="bg-apollo"
      animal-title="The Bull"
      animal-image="/images/Apollo/apollo.jpg"
      faculty="apollo"
      :events="events"
      :cheers="cheers"
    >
      <template #roster>(FROM LEFT TO RIGHT) <br>...</template>
      <template #blurb>Roaming through Apollo Faculty's spirit...</template>
    </FacultyPage>

  Note on the colour props: Tailwind only generates CSS for class names it
  can find as literal text somewhere in the project, so `border-class`,
  `hover-class` and `accent-class` must be passed in as complete class
  strings (e.g. "border-apollo") from the calling page rather than built
  dynamically here — that keeps them visible to Tailwind's scanner.
-->
<template>
  <section
    class="relative w-full overflow-hidden rounded-b-3xl custom-cursor-eye-open"
    :class="{ 'custom-cursor-eye-close': showOverlay }"
  >
    <div
      class="w-full h-auto bg-cover bg-center flex"
      @click="handleDesktopClick"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div class="w-full">
        <img class="w-full aspect-auto" :src="heroImage" alt="">
      </div>

      <div class="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent pointer-events-none"></div>

      <div class="absolute left-4 bottom-4 md:left-10 md:bottom-10 pointer-events-none">
        <div class="font-poppins text-[11px] tracking-[0.16em] uppercase mb-2.5" :class="labelClass">TRACK 03 · {{ name }}</div>
        <h1 class="text-ivory !leading-[0.88]">{{ name }}</h1>
      </div>

      <div
        class="absolute inset-0 bg-black transition-opacity duration-500"
        :class="showOverlay ? 'opacity-50' : 'opacity-0'"
      ></div>

      <div
        class="absolute inset-0 flex flex-col items-center justify-center w-full transition-all duration-500 text-white text-center opacity-0"
        :class="{ 'backdrop-blur-xl opacity-100': showOverlay }"
      >
        <h1>{{ name }}</h1>
        <a
          @click.stop
          @touchstart.stop
          @touchend.stop
          target="blank"
          :href="instagram"
          class="text-white font-poppins text-md inline-block border-1 rounded-full py-3 px-6 mt-6 lg:text-lg transition-colors duration-300"
          :class="[borderClass, hoverClass, { 'pointer-events-auto opacity-100': showOverlay, 'pointer-events-none opacity-0': !showOverlay }]"
        >
          Instagram
        </a>
      </div>

      <div
        class="absolute bottom-8 lg:bottom-12 w-full text-center text-white text-base md:text-xl font-poppins pointer-events-none z-20 transition-all duration-500"
        :class="showOverlay ? 'opacity-50' : 'opacity-0'"
      >
        Tap to reveal image
      </div>
    </div>
  </section>

  <section class="p-6 md:p-12">
    <p class="centered-text-block text-ink-soft leading-relaxed">
      <slot name="roster" />
    </p>
  </section>

  <div class="h-px w-[60%] max-w-[900px] m-auto" :class="accentClass"></div>

  <section class="text-justify p-6 md:p-12">
    <img :src="animalImage" alt="" class="aspect-square w-[70%] max-w-[500px] m-auto rounded-2xl object-cover">
    <div class="w-14 h-[3px] bg-hwachred rounded-full mx-auto mt-10 mb-3"></div>
    <div class="font-poppins text-[11px] tracking-[0.16em] uppercase text-hwachred text-center">SACRED ANIMAL</div>
    <h2 class="mt-2 text-center text-ink">{{ animalTitle }}</h2>
    <p class="centered-text-block text-ink-soft leading-relaxed mt-6">
      <slot name="blurb" />
    </p>
  </section>

  <section class="w-full py-6 px-4">
    <h2 class="text-center text-ink">Events</h2>
    <p class="text-center mt-2 text-mute">Click on the images to learn more</p>
    <div class="mt-4 lg:px-12">
      <MultiCarousel :events="events" :faculty="faculty"></MultiCarousel>
    </div>
  </section>

  <section class="w-full py-6">
    <h2 class="text-center text-ink">Faculty Cheers</h2>
    <div class="mt-4">
      <Carousel :cheers="cheers"></Carousel>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import MultiCarousel from './Multicarousel.vue'
import Carousel from './Carousel.vue'
import { useTapToReveal } from '../composables/useTapToReveal'

const props = defineProps({
  name: { type: String, required: true },
  instagram: { type: String, required: true },
  heroImage: { type: String, required: true },
  borderClass: { type: String, required: true },
  hoverClass: { type: String, required: true },
  accentClass: { type: String, required: true },
  animalTitle: { type: String, required: true },
  animalImage: { type: String, required: true },
  faculty: { type: String, required: true },
  events: { type: Array, required: true },
  cheers: { type: Array, required: true },
})

// Apollo's yellow is too light to read on a dark scrim as a label —
// every other faculty's label uses its own colour directly.
const LABEL_CLASS = {
  apollo: 'text-white',
  ares: 'text-ares',
  artemis: 'text-artemis',
  athena: 'text-athena',
}
const labelClass = computed(() => LABEL_CLASS[props.faculty] || 'text-coral')

const { showOverlay, handleTouchStart, handleTouchEnd, handleDesktopClick } = useTapToReveal()
</script>
