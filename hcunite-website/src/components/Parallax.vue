<template>
    <div
        ref="el"
        :style="style"
        class="will-change-transform w-full h-full"
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
    let yOffset = relativeScroll* props.speed
    if (props.limit !=null) yOffset = clamp(yOffset, -props.limit, props.limit)

    return {
        transform: `translateY(${yOffset}px)`
    }
})
</script>
