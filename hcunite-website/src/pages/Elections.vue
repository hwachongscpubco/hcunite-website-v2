<template>
    

    <section class="w-full h-[70vh] lg:h-[110vh] overflow-hidden">
        <Parallax :scrollY="scrollY"  :speed="parallaxSpeed">
            <img class="w-full h-full lg:h-auto aspect-auto object-cover object-top" src="/images/elections/eleco_banner.jpg" alt="">
        </Parallax>
    </section>
    <section class="w-full py-12">
        <div class="max-w-[900px] mx-auto">
            <h2>Foreword</h2>
            <p class="mt-4 text-left">
                Entering a new chapter often comes with uncertainty. As a C1, you may still be finding 
                your footing and getting used to new routines, new expectations, and a new community. 
                In the midst of this transition, the idea of joining the Students’ Council may feel unfamiliar, even daunting.<br><br>
                That is entirely natural. The Students’ Council is not reserved for those who already see themselves 
                as leaders. It is a place for those who are willing to learn, and serve. Many Councillors begin their 
                journey without complete confidence and certainty, but with a simple desire to contribute meaningfully 
                to the school community.<br><br>
                The Students’ Council offers opportunities for one to work closely with others, and engage with people 
                from different walks of life with different perspectives. Through this journey, 
                Councillors develop not only leadership skills, but also empathy, resilience, and a deeper understanding 
                of what it means to serve others.<br><br>
                More importantly, Council is a space for growth. Growth in terms of one’s confidence and the 
                ability to work collaboratively towards a shared vision. While it may be an experience that is demanding 
                at times, Council will be deeply fulfilling for those who step out of their comfort zones to be a 
                part of this community. <br><br>
                If you are someone who believes in caring for the people around you, who hopes to make a positive difference, 
                and who is open to learning along the way, the Students’ Council would be a meaningful path to consider. 
                Should you choose to step forward, we will be ready to walk the journey with you. <br><br>
                To find out more about what the Students’ Council entails, you may join us at our Tea Session 
                on 11 February 2026 (1600h to 1800h) and 20 and 23 Febrary 2026 (1630h to 1800h) at the Common Room. Sign ups are at the bottom of the page!<br><br>
                
                All the best! <br>
                Elections Committee <br>
                52nd Hwa Chong Students’ Council <br>
            </p>
        </div>
    </section>
    <section class="w-full p-8">
        <img src="/images/elections/timeline.png" alt="">
    </section>
    <section class="w-full p-8">
        <h2>What are you waiting for?</h2>
        <div class="mt-8 w-full flex flex-col lg:flex-row lg:flex-wrap gap-4">
            <a class="flex-1 flex flex-col lg:flex-row hover:drop-shadow-lg drop-shadow-sm transition-all ease-in-out duration-200" href="https://forms.gle/qSmmL5UVmxGaFBzW7" target="_blank">
                <div class="relative group p-4 lg:p-8 bg-gray-100 rounded-xl overflow-hidden">
                    <h3 class="text-2xl lg:text-4xl relative z-10 group-hover:text-white transition-color duration-300 ease-in-out">Tea Session Sign Ups</h3>
                    <p class="pt-2 relative z-10 group-hover:text-white transition-color duration-300 ease-in-out">Learn more about us!</p>
                    <div 
                    class="z-0 absolute inset-0 bg-hwachred -translate-x-full group-hover:translate-x-0 transform transition-transform duration-300 ease-in-out"
                    ></div>
                </div>
                <div class=""></div>
            </a>
            <a class="flex-1 flex flex-col lg:flex-row hover:drop-shadow-lg drop-shadow-sm transition-all ease-in-out duration-200" href="https://drive.google.com/file/d/1PLRe9VKhTxwXQaOYieaRIv922lAtSmCV/preview" target="_blank">
                <div class="relative group p-4 lg:p-8 bg-gray-100 rounded-xl overflow-hidden">
                    <h3 class="text-2xl lg:text-4xl relative z-10 group-hover:text-white transition-color duration-300 ease-in-out">Elections Information Booklet</h3>
                    <p class="pt-2 relative z-10 group-hover:text-white transition-color duration-300 ease-in-out">Find out more!</p>
                    <div 
                    class="z-0 absolute inset-0 bg-hwachred -translate-x-full group-hover:translate-x-0 transform transition-transform duration-300 ease-in-out"
                    ></div>
                </div>
                <div class=""></div>
            </a>
            <a class="flex-1 flex flex-col lg:flex-row hover:drop-shadow-lg drop-shadow-sm transition-all ease-in-out duration-200" href="https://forms.gle/5Bc7sro9NoG5zezu6" target="_blank">
                <div class="relative group p-4 lg:p-8 bg-gray-100 rounded-xl overflow-hidden">
                    <h3 class="text-2xl lg:text-4xl relative z-10 group-hover:text-white transition-color duration-300 ease-in-out">53rd HCSC Sign Ups</h3>
                    <p class="pt-2 relative z-10 group-hover:text-white transition-color duration-300 ease-in-out">Ready to join us?</p>
                    <div 
                    class="z-0 absolute inset-0 bg-hwachred -translate-x-full group-hover:translate-x-0 transform transition-transform duration-300 ease-in-out"
                    ></div>
                </div>
                <div class=""></div>
            </a>
        </div>
    </section>
</template>

<script setup>
import Parallax from '../components/Parallax.vue'
import {ref, watch, computed, onMounted, onUnmounted } from 'vue'


const scrollY = ref(0)
let ticking = false;

const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      scrollY.value = window.scrollY
      ticking = false
    })
    ticking = true
  }
}

const parallaxSpeed = computed(() =>
  window.matchMedia('(min-width: 1024px)').matches ? -0.7 : 0
)

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>