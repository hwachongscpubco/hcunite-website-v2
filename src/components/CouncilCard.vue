<!--
  CouncilCard.vue — one councillor's portrait + position + bio, used
  inside CouncilCommittee.vue. Builds its own image URL from `year`,
  `council` and `name` — see public/images/README.md for the exact
  filename convention this depends on (tries .jpg, then .png, then .webp).
-->
<template>
    <div>
        <div class="overflow-hidden">
            <img :src="imageUrl" @error="onImgError" :alt="name" loading="lazy" class="w-full aspect-3/4 object-cover transition-transform duration-[900ms] ease-enter hover:scale-[1.03]">
        </div>
        <div class="pt-4 pb-2 w-full">
            <h3 class="!text-base sm:!text-xl uppercase tracking-[0.02em] text-ink">{{ name }}</h3>
            <p class="eyebrow mt-1.5 leading-relaxed">{{ position }}</p>
            <p v-html="formattedDescription" class="!text-xs sm:!text-[13px] text-ink-soft break-words pt-4"></p>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'

const props = defineProps({
    name: String,
    council: String,
    year: String,
    position: String,
    description: String,
})

// Council portrait filenames use "+" for spaces and drop commas/slashes
// entirely (see public/images/README.md for the full naming convention).
const formattedName = props.name
  .replace(/,/g, '')
  .replace(/\//g, '')
  .replace(/\s+/g, '+')

const exts = ['.jpg', '.png', '.webp']
const currentIndex = ref(0)

const imageUrl = computed(() => {
  const base = `/images/${props.year}/${props.council}_${formattedName}`
  return base + exts[currentIndex.value]
})

function onImgError() {
  if (currentIndex.value < exts.length - 1) {
    currentIndex.value++
  }
}

const formattedDescription = computed(() => {
  if (!props.description) return ''
  return props.description.replace(/\n/g, '<br>')
})

</script>