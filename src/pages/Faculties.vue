<!--
  Faculties.vue — the /faculties landing page: 4 logo links out to the
  individual Faculty pages (Apollo/Ares/Artemis/Athena), plus a static
  address from the SnR Chairperson. Fully static — no script needed
  beyond the scroll-reveal stagger.
-->
<script setup>
import { useRevealOnScroll } from '../composables/useRevealOnScroll'

// Vite only rewrites *static* src="../assets/..." attributes to hashed
// build URLs — a template-literal :src wouldn't survive a production
// build, so the 4 logos are resolved up front via import.meta.glob
// instead (see src/assets/README.md for why these live under src/assets).
const logoModules = import.meta.glob('../assets/faculties/*.png', { eager: true, import: 'default' })
function logoFor(name) {
    return logoModules[`../assets/faculties/${name}.png`]
}

const faculties = [
    { key: 'apollo', name: 'Apollo', animal: 'THE BULL', bg: 'bg-apollo', to: '/apollo' },
    { key: 'ares', name: 'Ares', animal: 'THE HORSE', bg: 'bg-ares', to: '/ares' },
    { key: 'artemis', name: 'Artemis', animal: 'THE WOLF', bg: 'bg-artemis', to: '/artemis' },
    { key: 'athena', name: 'Athena', animal: 'THE OWL', bg: 'bg-athena', to: '/athena' },
]

const { setEl } = useRevealOnScroll()
</script>

<template>
    <!-- hero section -->
    <section class="flex flex-col gap-10 sm:gap-12 px-2 sm:px-4 pt-8 sm:pt-14">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
                <div class="w-14 h-[3px] bg-hwachred rounded-full mb-4"></div>
                <h1 class="text-ink !text-6xl sm:!text-8xl tracking-[-0.04em] leading-[0.9]">FACULTIES</h1>
            </div>
            <p class="text-ink-soft text-base sm:text-lg max-w-[300px]">Click on the different logos to learn more about the faculty!</p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1180px] mx-auto w-full">
            <router-link
                v-for="(f, i) in faculties"
                :key="f.key"
                :to="f.to"
                :ref="setEl(i)"
                :style="{ transitionDelay: i * 90 + 'ms' }"
                class="reveal group rounded-2xl overflow-hidden border border-hairline bg-card block"
            >
                <div class="relative aspect-square overflow-hidden flex items-center justify-center" :class="f.bg">
                    <img
                        class="w-[45%] transition-transform duration-[320ms] ease-standard group-hover:scale-105"
                        :src="logoFor(f.name)"
                        :alt="f.name"
                    >
                </div>
                <div class="px-5 py-4 flex items-baseline justify-between">
                    <span class="font-poppins font-medium text-xl text-ink">{{ f.name }}</span>
                    <span class="font-poppins text-[11px] text-mute">{{ f.animal }}</span>
                </div>
            </router-link>
        </div>
    </section>

    <section class="w-full px-2 sm:px-4 mt-16 sm:mt-24">
        <div class="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            <div class="lg:sticky lg:top-24 self-start">
                <div class="w-14 h-[3px] bg-hwachred rounded-full mb-4"></div>
                <h2 class="!text-3xl text-ink !leading-[1.1]">Address by SnR Chairperson</h2>
                <div class="font-poppins text-[11px] text-mute mt-4 leading-relaxed">
                    LI XIYUAN<br>SOCIAL AND RELATIONS<br>COMMITTEE CHAIRPERSON<br>53RD HWA CHONG<br>STUDENTS' COUNCIL
                </div>
            </div>
            <p class="text-ink-soft text-base sm:text-lg leading-relaxed max-w-[640px]">
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
        </div>
    </section>
</template>
