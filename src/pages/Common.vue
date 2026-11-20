<!--
  Common.vue — the Common Room page (/common): a blurb, a categorised
  list of house rules, and links to the opening schedule / booking form.
  To edit the rules, edit the `guidelines` object below — each key is a
  category shown in the left list, each value is an array of rule strings.
-->
<script setup>
import {ref} from 'vue'
import PageHero from '../components/PageHero.vue'
import commonRoomImg from '../assets/common/common_room.jpg'

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
    <PageHero :image="commonRoomImg" alt="The Common Room" position="50% 65%" />

    <div class="page-body">
        <section class="split">
            <h2>A space for the students, by the students</h2>
            <p class="split-text">
                The Common Room — located at the Inner Plaza — is your go-to space to rest, recharge, or
                simply hangout with friends. Whether you’re looking for a cosy spot to study, a bean bag to unwind, or
                enjoy a quick round of board games or mini foosball, the Common Room has something for everyone.
                From quiet study sessions to vibrant Welfare Initiatives, and even casual conversations,
                it is a space for the students, by the students, and a space where everyone is welcome!
            </p>
        </section>

        <div class="section-divider"></div>

        <section class="split">
            <div>
                <h2>House Rules</h2>
                <a
                target="_blank"
                rel="noopener"
                href="https://docs.google.com/document/d/11JQaOtSR0vX_2abRcMibvEtwDp1giUs_N7MrbQ7Jm_g/edit?tab=t.0"
                class="text-link mt-6"
                >
                See document
                </a>
                <ul class="mt-10 border-t border-hairline">
                    <li v-for="(rules, section) in guidelines" :key="section" class="border-b border-hairline">
                        <button
                        type="button"
                        @click="selectWelcoItem(section)"
                        class="w-full text-left py-3 font-inter font-light text-base lg:text-lg cursor-pointer
                        hover:translate-x-2 hover:text-ink
                        transition-all duration-500 ease-enter"
                        :class="selectedWelcoItem === section ? 'text-hwachred translate-x-2' : 'text-mute'"
                        :aria-pressed="selectedWelcoItem === section"
                        >
                        {{ section }}</button>
                    </li>
                </ul>
            </div>
            <Transition name="fade" mode="out-in">
                <ul :key="selectedWelcoItem" class="split-text">
                    <li
                    v-for="(guideline,i) in guidelines[selectedWelcoItem]"
                    :key="i"
                    class="py-4 first:pt-0 border-b border-hairline last:border-b-0"
                    >
                        <p>{{ guideline }}</p>
                    </li>
                </ul>
            </Transition>
        </section>

        <div class="section-divider"></div>

        <section class="split gap-y-12">
            <h2>Opening Schedule</h2>
            <div class="lg:pt-3">
                <a
                target="_blank"
                href="about:blank"
                class="text-link"
                >
                See document
                </a>
            </div>
            <h2>Booking Form</h2>
            <div class="lg:pt-3">
                <a
                target="_blank"
                rel="noopener"
                href="https://docs.google.com/forms/d/e/1FAIpQLSezWSornwTlAZ2K9tFl0ZVk8rZXDrhThNeulpLoXapol0ywNQ/viewform?usp=sharing&ouid=105980804582763504075"
                class="text-link"
                >
                Open form
                </a>
            </div>
        </section>
    </div>
</template>
