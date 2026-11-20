<!--
  Faculties.vue — the /faculties landing page: one card per faculty (its
  symbol on its colour, the same shape as the SODACHE cards) linking out
  to the individual Faculty pages, plus a static address from the SnR
  Chairperson.
-->
<script setup>
import { faculties } from '../data/nav'
import { useRevealOnScroll } from '../composables/useRevealOnScroll'

// Vite only rewrites *static* src="../assets/..." attributes to hashed
// build URLs — a template-literal :src wouldn't survive a production
// build, so the 4 logos are resolved up front via import.meta.glob
// instead (see src/assets/README.md for why these live under src/assets).
const logoModules = import.meta.glob('../assets/faculties/*.png', { eager: true, import: 'default' })
function logoFor(name) {
    return logoModules[`../assets/faculties/${name}.png`]
}

// Complete class names, so Tailwind's scanner can see them.
const BG = { apollo: 'bg-apollo', ares: 'bg-ares', artemis: 'bg-artemis', athena: 'bg-athena' }

const { setEl } = useRevealOnScroll()
</script>

<template>
    <ul class="grid grid-cols-2 lg:grid-cols-4 gap-x-[clamp(12px,2.1vw,30px)] gap-y-10">
        <li v-for="(f, i) in faculties" :key="f.key" :ref="setEl(i)" class="reveal" :style="{ transitionDelay: i * 70 + 'ms' }">
            <router-link :to="f.to" class="group block">
                <div class="relative aspect-square overflow-hidden rounded-[10px] flex items-center justify-center" :class="BG[f.key]">
                    <img
                        class="max-w-[58%] max-h-[58%] object-contain transition-transform duration-[900ms] ease-enter group-hover:scale-[1.06]"
                        :src="logoFor(f.name)"
                        :alt="f.name + ' symbol'"
                    >
                    <div class="hidden lg:flex absolute inset-0 items-end p-5 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-standard">
                        <span class="text-link text-white">View</span>
                    </div>
                </div>
                <div class="pt-4">
                    <span class="block font-jakarta font-bold text-base sm:text-lg leading-snug">{{ f.name }}</span>
                    <span class="block meta mt-1">{{ f.animal }}</span>
                </div>
            </router-link>
        </li>
    </ul>

    <div class="section-divider"></div>

    <section class="split">
        <div class="lg:sticky lg:top-[calc(var(--header-h)+1rem)] self-start">
            <h2>Address by SnR Chairperson</h2>
            <p class="meta mt-4">
                Li Xiyuan, Social and Relations Committee Chairperson, 53rd Hwa Chong Students' Council
            </p>
        </div>
        <p class="split-text">
            When Hwa Chong unite, we show our might!
            <br><br>
            Welcome to Hwa Chong’s faculty system, the heart of the College experience. Comprising Apollo, Ares, Artemis, and Athena, each faculty is formed by students from different subject combinations and classes, and carries its own distinct identity, culture and spirit. From Apollo’s yellow and its iconic cows, Ares’ red and roaring horses, Artemis’ blue and its moonlit wolves, to Athena’s green and wise owls — every faculty offers students a community they can confidently call their own.
            <br><br>
            Within each of these faculties, the Faculty Committees bring together groups of passionate students committed to strengthening bonds and championing the well-being of their peers. Through experiences such as Civics Group Orientation (CG Ori), Introduction to Faculty (I2F), Faculty Brunch, or simply through everyday interactions on campus, the Faculty Committees create spaces for students to connect, belong and make lasting memories throughout their Hwa Chong journey.
            <br><br>
            Beyond the four distinct colours and cultures lies one shared identity. Together, they form a fusion of cultures, affectionately known as the 4Facs1Hwach family.
            <br><br>
            From the traditions passed down by our seniors to the new memories created by every batch, the faculties continue to add colour, energy and warmth to the vibrant kaleidoscope of College life.
            <br><br>
            4Facs1Hwach, the Hwa Chong spirit lives on.
        </p>
    </section>
</template>
