<!--
  Faculties.vue — the /faculties landing page: the 4 faculty colours and
  logos filling the screen in quarters (the hero) and a list, both
  linking out to the individual Faculty pages,
  plus a static address from the SnR Chairperson.
-->
<script setup>
import PageHero from '../components/PageHero.vue'
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
    <PageHero>
        <div class="grid grid-cols-2 grid-rows-2 w-full h-full">
            <router-link
                v-for="f in faculties"
                :key="f.key"
                :to="f.to"
                class="group relative flex items-center justify-center overflow-hidden"
                :class="BG[f.key]"
                :aria-label="f.name + ' Faculty'"
            >
                <img
                    class="max-w-[46%] max-h-[50%] object-contain transition-transform duration-700 ease-enter group-hover:scale-110"
                    :src="logoFor(f.name)"
                    :alt="f.name"
                >
            </router-link>
        </div>
    </PageHero>

    <div class="page-body">
        <section>
            <p class="eyebrow mb-6">4Facs, 1Hwach</p>
            <ul class="border-t border-hairline">
                <li v-for="(f, i) in faculties" :key="f.key" :ref="setEl(i)" class="reveal" :style="{ transitionDelay: i * 70 + 'ms' }">
                    <router-link
                        :to="f.to"
                        class="group flex items-baseline justify-between gap-6 py-5 sm:py-7 border-b border-hairline"
                    >
                        <span class="font-inter font-extralight uppercase text-4xl sm:text-6xl tracking-[-0.02em] transition-transform duration-700 ease-enter group-hover:translate-x-3">{{ f.name }}</span>
                        <span class="eyebrow shrink-0">{{ f.animal }}</span>
                    </router-link>
                </li>
            </ul>
        </section>

        <section class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 lg:gap-12 mt-20 sm:mt-28">
            <div class="lg:sticky lg:top-[calc(var(--header-h)+1rem)] self-start">
                <h2>Address by SnR Chairperson</h2>
                <p class="eyebrow mt-5 leading-relaxed">
                    Li Xiyuan<br>Social and Relations<br>Committee Chairperson<br>53rd Hwa Chong<br>Students' Council
                </p>
            </div>
            <p class="text-ink-soft max-w-[640px]">
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
    </div>
</template>
