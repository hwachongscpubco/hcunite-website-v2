<!--
  LinkCategoryCarousel.vue

  A single "link rectangle" used on the homepage's links section (one
  per category — Official Links / Others). Cycles through that
  category's links (data/links.js) one at a time, autoplaying on an
  interval, swipeable on touch, and jumpable via the position dots.
  Add/remove links by editing data/links.js — no changes needed here.
-->
<template>
    <div
        class="relative rounded-2xl overflow-hidden border border-hairline bg-[#F4EADB] p-3.5 flex"
    >
        <div
            class="relative flex-1 min-w-0 h-[120px] rounded-xl border border-hairline bg-[#FBF3E8] flex items-stretch gap-3.5 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
        >
            <div class="flex-none w-[3px] bg-hwachred"></div>

            <div class="flex-1 min-w-0 flex flex-col justify-center gap-2 py-4">
                <div class="flex items-center gap-2">
                    <span class="font-poppins text-[9.5px] tracking-[0.14em] uppercase text-hwachred">{{ title }}</span>
                    <span class="font-poppins text-[9.5px] text-mute-light">{{ links.length }} LINKS</span>
                </div>

                <!--
                  All links are stacked in the same grid cell at once (rather than
                  swapped one at a time) so the cell auto-sizes to the tallest
                  entry in the category — the box never resizes or truncates text
                  as the carousel cycles. Only the current one is visible.
                -->
                <div class="grid">
                    <div
                        v-for="(link, i) in links"
                        :key="link.title"
                        class="col-start-1 row-start-1 min-w-0 transition-opacity duration-300 ease-in-out"
                        :class="i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'"
                    >
                        <div class="font-poppins font-medium text-lg sm:text-xl text-ink truncate">{{ link.title }}</div>
                        <div class="font-poppins text-xs sm:text-sm text-mute mt-1 truncate">{{ link.description }}</div>
                    </div>
                </div>
            </div>

            <div class="flex-none flex flex-col items-end justify-between gap-2 py-4 pr-4">
                <a
                    :href="current.href"
                    target="_blank"
                    class="font-poppins text-[10px] text-hwachred hover:text-coral transition-colors shrink-0"
                >OPEN →</a>

                <div class="flex items-center gap-1">
                    <button
                        v-for="(link, i) in links"
                        :key="link.title"
                        type="button"
                        @click="goTo(i)"
                        class="h-[5px] rounded-full transition-all duration-300 cursor-pointer"
                        :class="i === index ? 'w-3.5 bg-hwachred' : 'w-[5px] bg-khaki'"
                        :aria-label="`Show ${link.title}`"
                    ></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    links: { type: Array, required: true },
})

const AUTOPLAY_MS = 4000

const index = ref(0)
const current = computed(() => props.links[index.value])
let timer = null

function next() {
    index.value = (index.value + 1) % props.links.length
}

function startTimer() {
    clearInterval(timer)
    timer = setInterval(next, AUTOPLAY_MS)
}

function goTo(i) {
    index.value = i
    startTimer()
}

let touchStartX = 0
function onTouchStart(e) {
    touchStartX = e.changedTouches[0].clientX
}
function onTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchStartX
    if (Math.abs(dx) < 40) return
    goTo(dx < 0
        ? (index.value + 1) % props.links.length
        : (index.value - 1 + props.links.length) % props.links.length)
}

onMounted(startTimer)
onUnmounted(() => clearInterval(timer))
</script>
