<!--
  LinkCategoryCarousel.vue

  A single "category rectangle" used on the homepage's links section (one
  per category — Official Links / Others). Left side is a red panel naming
  the category; right side is a white panel that cycles through that
  category's links (data/links.js) one at a time, autoplaying on an
  interval and also swipeable on touch devices. Add/remove links by editing
  data/links.js — no changes needed here.
-->
<template>
    <div
        class="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg shadow-hwachred/10 border border-black/5"
    >
        <!-- category label -->
        <div class="lg:w-2/5 bg-hwachred flex items-center px-8 py-10 lg:px-12 lg:py-12">
            <div>
                <h3 class="text-white">{{ title }}</h3>
                <p class="text-white/85 mt-3">{{ description }}</p>
            </div>
        </div>

        <!-- current link -->
        <div
            class="lg:w-3/5 bg-white flex flex-col justify-between gap-8 px-8 py-10 lg:px-12 lg:py-12 h-[300px] lg:h-[340px]"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
        >
            <transition name="link-fade" mode="out-in">
                <div :key="index" class="flex-1 min-h-0 flex flex-col justify-center overflow-hidden">
                    <h3 class="text-black text-2xl lg:text-3xl line-clamp-2">{{ links[index].title }}</h3>
                    <p class="mt-3 text-gray-500 text-base sm:text-lg line-clamp-3">{{ links[index].description }}</p>
                    <a
                        :href="links[index].href"
                        target="_blank"
                        class="text-white font-poppins text-md inline-block bg-black hover:bg-hwachred rounded-full p-6 mt-6 lg:text-lg transition-colors duration-300 shrink-0"
                    >
                        Visit
                    </a>
                </div>
            </transition>

            <button
                type="button"
                class="flex items-center gap-2 text-gray-400 self-start sm:self-end shrink-0 select-none cursor-pointer hover:text-hwachred transition-colors duration-300"
                @click="onArrowClick"
                aria-label="See next link"
            >
                <span class="font-poppins text-sm">Swipe to see more</span>
                <svg
                    class="w-4 h-4 animate-swipe-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    links: { type: Array, required: true },
})

const AUTOPLAY_MS = 4500

const index = ref(0)
let timer = null

function next() {
    index.value = (index.value + 1) % props.links.length
}

function startTimer() {
    clearInterval(timer)
    timer = setInterval(next, AUTOPLAY_MS)
}

function onArrowClick() {
    next()
    startTimer()
}

let touchStartX = 0
function onTouchStart(e) {
    touchStartX = e.changedTouches[0].clientX
}
function onTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchStartX
    if (Math.abs(dx) < 40) return
    index.value = dx < 0
        ? (index.value + 1) % props.links.length
        : (index.value - 1 + props.links.length) % props.links.length
    startTimer()
}

onMounted(startTimer)
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.link-fade-enter-active,
.link-fade-leave-active {
    transition: opacity 0.35s ease;
}
.link-fade-enter-from,
.link-fade-leave-to {
    opacity: 0;
}

@keyframes swipe-arrow {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(6px); }
}
.animate-swipe-arrow {
    animation: swipe-arrow 1.4s ease-in-out infinite;
}
</style>
