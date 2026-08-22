<!--
  Faculties.vue — the /faculties landing page: 4 logo links out to the
  individual Faculty pages (Apollo/Ares/Artemis/Athena), plus a static
  address from the SnR Chairperson. Fully static — no script needed.
-->
<script></script>

<template>
    <!-- hero section -->
    <section class="flex flex-col gap-12 p-6">
        <div class="mt-20">
            <h1>FACULTIES</h1>
            <p>Click on the different logos to learn more about the faculty!</p>
        </div>
        <div class="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="rounded-xl shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="/apollo">
                    <img class=" aspect-square object-cover" src="../assets/faculties/Apollo.png" alt="">
                </router-link>
                <h3 class="ml-8 my-4">Apollo</h3>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="/ares">
                    <img class=" aspect-square object-cover" src="../assets/faculties/Ares.png" alt="">
                </router-link>
                <h3 class="ml-8 my-4">Ares</h3>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="/artemis">
                    <img class=" aspect-square object-cover" src="../assets/faculties/Artemis.png" alt="">
                </router-link>
                <h3 class="ml-8 my-4">Artemis</h3>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="/athena">
                    <img class=" aspect-square object-cover" src="../assets/faculties/Athena.png" alt="">
                </router-link>
                <h3 class="ml-8 my-4">Athena</h3>
            </div>
        </div>
        
    </section>

    <section class="w-full px-6">
        <div class="w-full py-15">
            <h2 class="!text-left centered-text-block">Address by SnR Chairperson</h2>
            <p class="mt-6 centered-text-block">
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
                <br><br>
                <br><br><br><b>Li Xiyuan</b>
                <br><br>Social and Relations Committee Chairperson
                <br><br>53rd Hwa Chong Students’ Council
            </p>
        </div>
    </section>
</template>