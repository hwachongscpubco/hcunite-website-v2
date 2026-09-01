<!--
  CouncilCommittee.vue

  Renders the grid of CouncilCard portraits for one committee within a
  Council##.vue page (e.g. all of NSE, or all of PubCo). This exists purely
  to avoid repeating the same grid + v-for markup for every committee on
  every council page (each Council##.vue page has ~6-7 committees).

  Usage (inside a Council##.vue <template>):
    <CouncilCommittee :committee="councillors['NSE']" council="NSE" year="52nd" />

  Props:
    - committee: the object of { "Councillor Name": { position, description } }
      for this committee, taken from the page's local `councillors` data object.
    - council: short code used to build each councillor's image filename
      (must match the prefix used in public/images/<year>/<council>_<Name>.<ext>).
    - year: council year folder under public/images (e.g. "52nd"), also passed
      straight through to CouncilCard for building the image path.
-->
<template>
  <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
    <CouncilCard
      v-for="(data, name, i) in committee"
      :key="name"
      :ref="setEl(i)"
      :style="{ transitionDelay: (i % 3) * 60 + Math.floor(i / 3) * 60 + 'ms' }"
      class="reveal"
      :name="name"
      :council="council"
      :year="year"
      :position="data['position']"
      :description="data['description']"
    />
  </div>
</template>

<script setup>
import CouncilCard from './CouncilCard.vue'
import { useRevealOnScroll } from '../composables/useRevealOnScroll'

defineProps({
  committee: { type: Object, required: true },
  council: { type: String, required: true },
  year: { type: String, required: true },
})

const { setEl } = useRevealOnScroll()
</script>
