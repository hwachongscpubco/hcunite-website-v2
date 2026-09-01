<!--
  CouncilCard.vue — one councillor's portrait + position + bio, used
  inside CouncilCommittee.vue. Builds its own image URL from `year`,
  `council` and `name` — see public/images/README.md for the exact
  filename convention this depends on (tries .jpg, then .png, then .webp).
-->
<template>
    <div>
        <img :src="imageUrl" @error="onImgError" alt="" class="rounded-[10px] m-auto w-full aspect-3/4 object-cover border border-hairline">
        <div class="py-4 sm:py-6 w-full m-auto font-poppins">
            <h2 class="text-2xl sm:text-3xl text-ink">{{ name }}</h2>
            <h4 class=" text-sm sm:text-xl text-mute">{{ position }}</h4>
            <p v-html="formattedDescription" class="text-xs sm:text-sm text-ink-soft text-justify break-words pt-4"></p>
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