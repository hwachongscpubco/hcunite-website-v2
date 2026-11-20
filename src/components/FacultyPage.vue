<!--
  FacultyPage.vue

  Shared page layout for the 4 Faculty pages (Apollo, Ares, Artemis,
  Athena). Every faculty page follows the exact same structure — a
  full-screen hero with the committee's group photo, the name roster, a
  blurb about the Faculty's sacred animal, an events carousel and a
  cheers carousel — so the markup lives here once, and each
  src/pages/<Faculty>.vue file just supplies that faculty's content.

  Usage (see src/pages/Apollo.vue for a full example):
    <FacultyPage
      name="APOLLO"
      instagram="https://www.instagram.com/apollofaculty/"
      hero-image="/images/Apollo/apollo_photo.jpg"
      hero-position="50% 45%"
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

  `accent-class` must be a complete class string (e.g. "bg-apollo")
  passed in from the calling page rather than built dynamically here —
  Tailwind only generates CSS for class names it can find as literal
  text. The page title (top-left), and whether the header turns white
  over the hero photo (`tone`), come from the route's meta in main.js.
-->
<template>
  <PageHero :image="heroImage" :alt="name + ' Faculty Committee'" :position="heroPosition" />

  <div class="page-body">
    <section class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 lg:gap-12">
      <div>
        <p class="eyebrow mb-5">Faculty Committee</p>
        <a :href="instagram" target="_blank" rel="noopener" class="text-link">Instagram</a>
      </div>
      <p class="centered-text-block">
        <slot name="roster" />
      </p>
    </section>

    <div class="h-px w-full my-12 sm:my-16" :class="accentClass"></div>

    <section class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 lg:gap-12">
      <div>
        <p class="eyebrow mb-4">Sacred animal</p>
        <h2>{{ animalTitle }}</h2>
        <img :src="animalImage" :alt="animalTitle" class="aspect-square w-full max-w-[420px] object-cover mt-8">
      </div>
      <p class="centered-text-block">
        <slot name="blurb" />
      </p>
    </section>

    <div class="section-divider"></div>

    <section>
      <h2>Events</h2>
      <p class="eyebrow mt-3">Click on the images to learn more</p>
      <div class="mt-8">
        <MultiCarousel :events="events" :faculty="faculty"></MultiCarousel>
      </div>
    </section>

    <div class="section-divider"></div>

    <section>
      <h2>Faculty Cheers</h2>
      <div class="mt-4">
        <Carousel :cheers="cheers"></Carousel>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from './PageHero.vue'
import MultiCarousel from './Multicarousel.vue'
import Carousel from './Carousel.vue'

defineProps({
  name: { type: String, required: true },
  instagram: { type: String, required: true },
  heroImage: { type: String, required: true },
  // Which part of the photo the full-screen hero keeps (CSS
  // object-position) — set it so nobody is cropped out.
  heroPosition: { type: String, default: '50% 50%' },
  accentClass: { type: String, required: true },
  animalTitle: { type: String, required: true },
  animalImage: { type: String, required: true },
  faculty: { type: String, required: true },
  events: { type: Array, required: true },
  cheers: { type: Array, required: true },
})
</script>
