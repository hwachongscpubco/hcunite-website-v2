<!--
  Common.vue — the Common Room page (/common): a blurb, a categorised
  list of house rules, and links to the opening schedule / booking form.
  To edit the rules, edit the `guidelines` object below — each key is a
  category shown in the left list, each value is an array of rule strings.

  The rule-text hover used to scale rows by cursor proximity (a
  field-of-view curve); the redesign dials that down to a flat 1.01
  scale + colour shift on :hover, so the JS proximity tracking that used
  to live here (computeBoxCenters/changeScaleOnMouseMove/resetScales)
  is gone — plain Tailwind hover: utilities do the whole thing now.
-->
<script setup>
import {ref} from 'vue'

const guidelines = {
    "General Conduct":[
        "All students utilising the Common Room are expected to conduct themselves in a manner that respects the rights and comfort of others.",
        "Keep noise levels at a reasonable volume to avoid disruption to fellow students and classes ongoing in the same block.",
        "Clean up after yourself and maintain the common areas in a tidy and organised manner.",
        "Students are to be in school-based attire and minimally with PE shorts. Shoes and socks are to be worn in the room at all times.",
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
const selectWelcoItem = (section) => {
    selectedWelcoItem.value = section
}
</script>

<template>
    <section class="relative w-full overflow-hidden rounded-b-3xl lg:h-screen h-[70vh]">
        <img src="../assets/common/common_room.jpg" alt="background" class="absolute top-0 left-0 w-full h-full object-cover">
        <div class="w-full h-full absolute bg-gradient-to-t from-ink to-transparent opacity-70"></div>
        <div class="absolute bottom-0 p-4 md:p-12 z-20">
            <div class="font-poppins text-[11px] tracking-[0.16em] uppercase text-coral mb-3">TRACK 05 · INNER PLAZA</div>
            <h1 class="text-ivory">COMMON ROOM</h1>
        </div>
    </section>
    <section>
        <p class="text-justify text-ink-soft px-6 md:px-12 py-10 md:max-w-[60%] md:text-left md:ml-[5%] leading-relaxed">
            The Common Room — located at the Inner Plaza — is your go-to space to rest, recharge, or
            simply hangout with friends. Whether you’re looking for a cosy spot to study, a bean bag to unwind, or
            enjoy a quick round of board games or mini foosball, the Common Room has something for everyone.
            From quiet study sessions to vibrant Welfare Initiatives, and even casual conversations,
            it is a space for the students, by the students, and a space where everyone is welcome!
        </p>
    </section>
    <section class="px-6 md:px-12 py-8 w-full lg:flex lg:flex-row lg:gap-8">
        <div class="lg:flex-2">
            <h2 class="mb-4 text-ink">House Rules</h2>
            <p>
                <a
                target="_blank"
                href="https://docs.google.com/document/d/11JQaOtSR0vX_2abRcMibvEtwDp1giUs_N7MrbQ7Jm_g/edit?tab=t.0"
                class="inline-block px-6 py-5 rounded-full border border-hwachred text-hwachred
                hover:bg-hwachred hover:text-ivory
                transition-colors duration-500 ease-in-out"
                >
                See document
                </a>
            </p>
        </div>
        <div class="p-4 mt-4 bg-card rounded-xl lg:rounded-none lg:mt-0 lg:flex-1 lg:pl-6 lg:border-l-2 border-hwachred">
            <ul>
                <li
                v-for="(rules, section) in guidelines"
                :key="section"
                @click="selectWelcoItem(section)"
                class="py-2.5 cursor-pointer
                hover:translate-x-4 hover:text-ink
                transition-all duration-150 ease-in-out"
                :class="selectedWelcoItem === section ? 'text-hwachred' : 'text-ink-soft'"
                >
                {{ section }}</li>
            </ul>
        </div>
        <div class="lg:flex-2 p-4">
            <ul>
                <li
                v-for="(guideline,i) in guidelines[selectedWelcoItem]"
                :key="i"
                class="text-ink-soft py-2.5 hover:text-ink hover:scale-[1.01] origin-left
                transition-all duration-180 ease-in-out"
                >
                    {{ guideline }}
                </li>
            </ul>
        </div>
    </section>
    <section class="px-6 md:px-12 py-8 w-full">
        <h2 class="mb-4 text-ink">Opening Schedule</h2>
            <p>
                <a
                target="_blank"
                href="about:blank"
                class="inline-block px-6 py-5 rounded-full border border-hwachred text-hwachred
                hover:bg-hwachred hover:text-ivory
                transition-colors duration-500 ease-in-out"
                >
                See document
                </a>
            </p>
    </section>
    <section class="px-6 md:px-12 py-8 w-full">
        <h2 class="mb-4 text-ink">Booking Form</h2>
            <p>
                <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSezWSornwTlAZ2K9tFl0ZVk8rZXDrhThNeulpLoXapol0ywNQ/viewform?usp=sharing&ouid=105980804582763504075"
                class="inline-block px-6 py-5 rounded-full border border-hwachred text-hwachred
                hover:bg-hwachred hover:text-ivory
                transition-colors duration-500 ease-in-out"
                >
                See document
                </a>
            </p>
    </section>
</template>
