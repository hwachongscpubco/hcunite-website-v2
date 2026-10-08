<!--
  SodacheItem.vue — one song card on the Sodache page (song entries only
  — dance/cheer entries render inline in Sodache.vue instead). Click to
  expand the description; Spotify/YouTube icons appear on image hover,
  plus a guitar icon to that song's chords PDF when `data.chords` is
  set (see Sodache.vue — only the 7 songs covered by the SODACHE lyrics
  + chords booklet have one; it's omitted from the rest, not blank).
-->
<template>
    <div class="lg:h-full">
        <div class="group/card z-10 relative flex flex-row items-center w-full h-auto lg:h-auto overflow-hidden lg:flex-col transition-colors duration-300 ease-in-out gap-4 rounded-xl px-2 py-2 sm:py-4 lg:py-2 hover:bg-[#1E1E1E]" @click="toggleExpand">
            
            <div class="group/image relative max-w-[60%] lg:w-full lg:max-w-none self-stretch aspect-square rounded-xl overflow-hidden transition-all duration-500 ease-in-out" :style="isMobile? { width: textDivScrollHeight + 'px'}:{}">
                <a :href="isMobile? data.spotify: null">
                    <img class="w-full h-full object-cover object-center group-hover/image:blur-xl transition-all duration-300 ease-in-out" :src="data.image" alt="" >
                    
                    <div class="absolute inset-0 p-[20%] flex items-center justify-around opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 ease-in-out" >
                        <a v-if="section=='song' && data.spotify" :href="data.spotify" target="_blank">
                            <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            class="w-12 aspect-square text-green-500 hover:text-white transition-color duration-500" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                            >
                              <path d="M12 0C5.371 0 0 5.371 0 12c0 6.628 5.371 12 12 12s12-5.372 12-12c0-6.629-5.371-12-12-12zm5.481 17.366a.747.747 0 01-1.029.242c-2.815-1.722-6.364-2.111-10.54-1.156a.746.746 0 01-.328-1.458c4.568-1.027 8.486-.578 11.657 1.313a.747.747 0 01.24 1.059zm1.466-3.276a.934.934 0 01-1.284.302c-3.229-1.98-8.15-2.556-11.958-1.397a.933.933 0 01-.526-1.781c4.264-1.26 9.676-.615 13.346 1.602a.932.932 0 01.422 1.274zm.125-3.431c-3.854-2.286-10.216-2.5-13.908-1.365a1.12 1.12 0 11-.627-2.146c4.265-1.246 11.264-1.002 15.75 1.642a1.12 1.12 0 01-1.215 1.869z"/>
                            </svg>
                        </a>
                        
                        <a v-if="section=='song' && data.link" :href="data.link" target="_blank">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-12 aspect-square text-green-500 hover:text-white transition-color duration-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M10 14a3 3 0 004.243 0l3-3a3 3 0 00-4.243-4.243l-1.06 1.06M14 10a3 3 0 00-4.243 0l-3 3a3 3 0 004.243 4.243l1.06-1.06" />
                            </svg>
                        </a>

                        <!--
                          Chords PDF (guitar icon) — only for songs with a `chords`
                          entry (a page-range extract of the SODACHE lyrics+chords
                          booklet). Same size/colour/hover treatment as the
                          Spotify/YouTube icons above; path is Font Awesome Free's
                          "guitar" solid icon (CC BY 4.0, fontawesome.com/license/free),
                          kept filled like the Spotify icon rather than outlined like
                          the link icon since a hand-drawn guitar outline at this size
                          read as a lollipop, not an instrument.
                        -->
                        <a v-if="section=='song' && data.chords" :href="data.chords" target="_blank">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-12 aspect-square text-green-500 hover:text-white transition-color duration-500"
                            fill="currentColor"
                            viewBox="0 0 512 512">
                              <path d="M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6c-11 11-18 24.6-21.4 39.6c-3.7 16.6-19.1 30.7-36.1 31.6c-25.6 1.3-49.3 10.7-67.3 28.6C-16 328.4-7.6 409.4 47.5 464.5s136.1 63.5 180.9 18.7c17.9-17.9 27.4-41.7 28.6-67.3c.9-17 15-32.3 31.6-36.1c15-3.4 28.6-10.5 39.6-21.4c31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                            </svg>
                        </a>

                    </div>
                </a>
            </div>
            <div class="flex flex-col flex-1 justify-left lg:px-4 min-w-0 lg:w-full" ref="textDiv">
                <h2 class="truncate text-white text-lg sm:text-2xl">{{ data.title }}</h2>
                <h3 class="text-base text-white/80">{{ data.composer }}</h3>


                <div class="z-10 relative w-full flex flex-col transition-all duration-500 overflow-hidden" :style="{ maxHeight: expand ? paraDivScrollHeight + 'px' : '0px' }" ref="paraDiv">
                    <div class="pt-4">
                        <p class="transition-all duration-500 text-justify text-white">{{ data.description }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, nextTick, watchEffect, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
    propData: {
        type: Object,
        default: () => ({})
    },
    section: String,
})

const defaultData = {
  title: 'Error',
  composer: 'Hwa Chong',
  description: '',
  image: '',
  link: ''
}

const data = computed(() => {
  return { ...defaultData, ...props.propData }
})

const expand = ref(false)
const textDiv = ref(null)
const paraDiv = ref(null)

const textDivScrollHeight = ref(0)
const paraDivScrollHeight = ref(0)

const isMobile = ref(false)
const isSuperSmall = ref(false)

function checkBreakpoints() {
  const width = window.innerWidth
  isMobile.value = width < 1024  // Tailwind 'lg' breakpoint
  isSuperSmall.value = width < 640 // Example: Tailwind 'sm' breakpoint
}

const toggleExpand = () => {
  expand.value = !expand.value
}

function updateParaHeight() {
  nextTick(() => {
    if (paraDiv.value) {
      paraDivScrollHeight.value = paraDiv.value.scrollHeight + 30
    }
  })
}

function updateTextDivHeight() {
  nextTick(() => {
    if (textDiv.value) {
      textDivScrollHeight.value = textDiv.value.offsetHeight
    }
  })
}

onMounted(() => {
  checkBreakpoints()

  // Always measure once on mount
  updateParaHeight()
  updateTextDivHeight()

  // Re-measure para height after transition ends
  if (paraDiv.value && !isSuperSmall.value) {
    paraDiv.value.addEventListener('transitionend', updateTextDivHeight)
  }
})

watchEffect(() => {
  if (expand.value) {
    updateParaHeight()
  }
})

</script>