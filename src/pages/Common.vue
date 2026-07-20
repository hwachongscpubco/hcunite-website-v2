<script setup>
import {ref, watch, nextTick} from 'vue'

const guidelines = {
    "General Conduct":[
        "All students utilising the Common Room are expected to conduct themselves in a manner that respects the rights and comfort of others.",
        "Keep noise levels at a reasonable volume to avoid disruption to fellow students and classes ongoing in the same block.",
        "Clean up after yourself and maintain the common areas in a tidy and organised manner.",
        "Students are to minimally be in half uniform (College PE Shirt/Faculty Shirt + School Pants/Skirt). Shoes and socks are to be worn in the room at all times.",
        "Students are expected to conform to pre-existing school rules prescribed by the school management.",
    ],
    "Shared Resources":[
        "Respect the shared resources and equipment in the Common Room.",
        "Do not remove or relocate furniture belonging to the Common Room without prior authorisation, or unless otherwise mentioned by the Common Room posters.",
        "Report any damage or malfunctioning equipment promptly."
    ],
    "Food and Beverage Policies":[
        "Be mindful of consumption of food and beverages in the Common Room.",
        "Only dry snacks and non-sugary drinks are allowed.",
        "Clean up spills and dispose of waste properly."
    ],
    "Security and Safety":[
        "Do not attempt to break into the room or perform any acts that compromise the security of the Common Room and the student body.",
        "The playing of sports in the Common Room is strictly prohibited to prevent the breakage of items and to ensure the safety of Common Room users.",
        "Report any security concerns or incidents to the school security team."
    ],
    "Personal Belongings":[
        "Any personal items left in the room after one day would be stored in a delineated lost-and-found corner outside the Common Room.",
        "Personal items not retrieved after one week will be discarded."
    ],
    "Compliance and Consequences":[
        "Students found to break any of the above regulations may be subjected to demerit points issued to them by the Council’s Teacher-Advisors.",
        "Councillors found to break any of the above regulations will be subjected to Council demerit points issued to them by DisCo or Council’s Teacher-Advisors.",
        "Failure to comply with these rules may result in temporary or permanent restrictions on Common Room access.",
        "We reserve the right to change the rules and regulations at any point of time."
    ],
}

const selectedWelcoItem = ref("General Conduct")
const selectWelcoItem = (index) => {
    selectedWelcoItem.value = index
    rules.value = []
}

const guidelineBox = ref(null)
const rules = ref([])
const ruleCenters = ref([])

const maxDistance = 300
const minScale = 0.95
const maxScale = 1.10

const computeBoxCenters = () => {
  ruleCenters.value = rules.value.map(rule => {
    if (!rule) return 0
    const rect = rule.getBoundingClientRect()
    return rect.top + rect.height / 2
  })
}

const onMouseEnter = () => computeBoxCenters()
window.addEventListener('resize', computeBoxCenters)
window.addEventListener('scroll', computeBoxCenters)

watch(selectedWelcoItem, async () => {
  await nextTick()
  computeBoxCenters()
}, { immediate: true })

const fovConstant = Math.sqrt(3)
const pixelScale = 2000
const yIntercept = 1

const changeScaleOnMouseMove = (e) => {
  rules.value.forEach((rule,i) => {
    if (!rule) return
    const distance = Math.abs(e.clientY - ruleCenters.value[i])
    const scale =
      distance < maxDistance
        ? maxScale*(1/(fovConstant*(distance/pixelScale+yIntercept/fovConstant)))
        : minScale
    rule.style.transform = `scale(${scale})`
  })
}

const resetScales = () => {
  rules.value.forEach(rule => {
    if (rule) rule.style.transform = 'scale(1)'
  })
}
</script>

<template>
    <section class="w-full overflow-hidden relative lg:h-screen h-[70vh]">
        <img src="../assets/common/common_room.jpg" alt="background" class="absolute top-0 left-0 w-full h-full object-cover">
        <div class="w-full h-full absolute bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <h1 class="p-4 md:p-12 absolute bottom-0 z-20 text-white">COMMON ROOM</h1>
    </section>
    <section>
        <p class="text-justify px-12 py-8 md:max-w-[60%] md:text-left md:ml-[5%]">
            The Common Room — located at the Inner Plaza — is your go-to space to rest, recharge, or 
            simply hangout with friends. Whether you’re looking for a cosy spot to study, a bean bag to unwind, or 
            enjoy a quick round of board games or mini foosball, the Common Room has something for everyone. 
            From quiet study sessions to vibrant Welfare Initiatives, and even casual conversations, 
            it is a space for the students, by the students, and a space where everyone is welcome!
        </p>
    </section>
    <section class="px-12 py-8 w-full lg:flex lg:flex-row">
        <div class="lg:flex-2">
            <h2 class="mb-4">House Rules</h2>
            <p>
                <a 
                target="_blank"
                href="https://docs.google.com/document/d/11JQaOtSR0vX_2abRcMibvEtwDp1giUs_N7MrbQ7Jm_g/edit?tab=t.0"
                class="inline-block px-4 py-6 rounded-full border border-hwachred text-hwachred 
                hover:border-none hover:bg-hwachred hover:text-white 
                transition-colors duration-500 ease-in-out"
                >
                See document
                </a>
            </p>
        </div>
        <div class="p-4 mt-4 bg-gray-100 lg:bg-white rounded-xl lg:rounded-none lg:mt-0 lg:flex-1 lg:border-l-2 border-hwachred">
            <ul>
                <li 
                v-for="(rules, section) in guidelines"
                @click="selectWelcoItem(section)"
                class="text-gray-700 scale-100 py-2
                hover:translate-x-4 hover:text-black
                transition-all duration-105 ease-in-out">
                {{section}}</li>
            </ul>
        </div>
        <div 
        class="lg:flex-2 p-4" 
        ref="guidelineBox" 
        @mousemove="changeScaleOnMouseMove" 
        @mouseleave="resetScales"
        @mouseenter="onMouseEnter"
        >
            <ul>
                <li 
                v-for="(guideline,i) in guidelines[selectedWelcoItem]" 
                :key="i"
                :ref="el => rules[i] = el"
                class="text-gray-800 py-2 hover:text-black
                transition-all duration-50 ease-in-out"
                >
                    {{ guideline }}
                </li>
            </ul>
        </div>
    </section>
    <section class="px-12 py-8 w-full">
        <h2 class="mb-4">Opening Schedule</h2>
            <p>
                <a 
                target="_blank"
                href="about:blank"
                class="inline-block px-4 py-6 rounded-full border border-hwachred text-hwachred 
                hover:border-none hover:bg-hwachred hover:text-white 
                transition-colors duration-500 ease-in-out"
                >
                See document
                </a>
            </p>
    </section>
    <section class="px-12 py-8 w-full">
        <h2 class="mb-4">Booking Form</h2>
            <p>
                <a 
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSezWSornwTlAZ2K9tFl0ZVk8rZXDrhThNeulpLoXapol0ywNQ/viewform?usp=sharing&ouid=105980804582763504075"
                class="inline-block px-4 py-6 rounded-full border border-hwachred text-hwachred 
                hover:border-none hover:bg-hwachred hover:text-white 
                transition-colors duration-500 ease-in-out"
                >
                See document
                </a>
            </p>
    </section>
</template>