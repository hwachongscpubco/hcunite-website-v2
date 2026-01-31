<template>
  <div
    ref="el"
    :style="style"
    class="will-change-transform"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  scrollY: Number,
  speed: {
    type: Number,
    default: 0.3,
  },
  limit: Number,
})

const el = ref(null)
const elementTop = ref(0)

onMounted(() => {
  elementTop.value =
    el.value.getBoundingClientRect().top + window.scrollY
})

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))
const style = computed(() => {
    const relativeScroll = props.scrollY - elementTop.value
    const yOffset = clamp(relativeScroll* props.speed, -props.limit, props.limit);
    return {
        transform: `translateY(${yOffset}px)`
    }
})
</script>
