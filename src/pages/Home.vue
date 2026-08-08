<!--
  Home.vue — the / landing page: hero, "why we're here" blurb, embedded
  Instagram feed, the Official Links / Others card lists (data in
  src/data/links.js), and the PubCo feedback note.
-->
<script setup>
    import { onMounted } from 'vue'
    import LinkCard from '../components/LinkCard.vue'
    import { officialLinks, otherLinks } from '../data/links'

    onMounted(() => {
    if (!document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
        const script = document.createElement('script')
        script.type = 'module'
        script.src = 'https://w.behold.so/widget.js'
        document.head.appendChild(script)
    }
    })
</script>

<template>
    <!-- hero section -->
    <section class="w-full overflow-hidden relative lg:h-screen h-[70vh]">
        <router-link to="/Council52">
            <img src="../assets/home/council_pic.jpg" alt="background" class="absolute top-0 left-0 w-full h-full object-cover">
            <h1 class="p-4 md:p-12 absolute bottom-0 z-20 text-white">WELCOME TO HCUNITE!</h1>
        </router-link>
    </section>

    <!-- why were here section -->
    <section class="w-full">
        <div class="flex flex-row justify-center xl:justify-between xl:gap-10 w-full py-30 px-[10%] lg:px-0 lg:w-[60%] lg:max-w-[900px] m-auto">
            <!-- text div -->
            <div class="font-poppins text-center m-auto xl:mx-0 xl:text-left">
                <h2 class="m-auto">Why we're here:</h2>
                <p class=" text-md mt-6 lg:text-lg max-w-lg m-auto">
                    We are committed to building a united Hwa Chong family. 
                    <br><br>We are here for you, whenever and wherever you need it. 
                    <br><br>We are the Hwa Chong Students’ Council.
                </p>
            </div>
            <div class="max-w-[400px] aspect-square">
                <img src="../assets/home/c1 ori.jpg" alt="photo" class="hidden xl:block size-100 bg-red-50 rounded-xl w-full h-full object-cover object-center">
            </div>
        </div>
    </section>

    <div class="section-divider"></div>


     <!-- official links section -->
     <section class="mt-24 lg:mt-30 px-12 py-8">
        <div class="flex flex-col lg:flex-row gap-8">
            <div class="flex-2 border-b-2 border-hwachred lg:border-r-2 lg:border-b-0 ">
                <div class="py-4 lg:pl-24 lg:pr-12">
                    <h2 class="">
                        Official Links
                    </h2>
                    <p class="mt-4">
                        Everything you need as a student
                    </p>
                </div>
            </div>
            <div class="flex-2 flex flex-col gap-4 scroll-smooth">
                <LinkCard v-for="link in officialLinks" :key="link.title" v-bind="link" />
            </div>
        </div>
    </section>

    <section class="px-12 py-8">
        <div class="flex flex-col lg:flex-row gap-8">
            <div class="flex-2 border-b-2 border-hwachred lg:border-r-2 lg:border-b-0">
                <div class="py-4 lg:pl-24 lg:pr-12">
                    <h2 class="">
                        Others
                    </h2>
                    <p class="mt-4">
                        Explore additional resources and helpful sites
                    </p>
                </div>
            </div>
            <div class="flex-2 flex flex-col gap-4 scroll-smooth">
                <LinkCard v-for="link in otherLinks" :key="link.title" v-bind="link" />
            </div>
        </div>
        
    </section>
    
    <div class="section-divider"></div>

    <!-- insta section -->
    <section class="w-full py-15 px-6 text-center sm:text-left">
        <div class="m-auto sm:max-w-[650px] flex flex-col sm:flex-row sm:justify-between  sm:items-end">
            <h3 class="mb-3"> Follow our Instagram!</h3>
            <h3 class="text-3xl font-poppins text-hwachred mb-3 bg-red-50 border-1 border-hwachred rounded-xl p-3">@HCUNITE</h3>
        </div>
        <behold-widget class="rounded-xl" feed-id="jc8RM2ufBxJ7fUp50RC9"></behold-widget>
     </section>

     <div class="section-divider"></div>
    
    <!-- pubs note section -->
     <section class="w-full">
        <div class="w-full py-15 px-[10%] text-center lg:text-left lg:w-[60%] lg:px-0 lg:max-w-[900px] m-auto">
            <h2 class="">Publication and Publicity Committee’s Note:</h2>
            <p class="text-md mt-6 lg:text-lg">
                Hello! Welcome to HCUnite.com! We'd like to thank you for taking the time to visit our Website! Hopefully you've found what you were looking for and that (HC)ULIKE our Website!
                <br><br>If you have any feedback with regard to HCUnite and any of our related initiatives, we would love to hear it. Please feel free to share your feedback with us in the form below:
            </p>
            <a class="text-white font-poppins text-md inline-block bg-black hover:bg-hwachred rounded-full p-6 mt-6 lg:text-lg transition-colors duration-300" href="https://forms.gle/kT7bP6BH9Ddfrw2z9" target="_blank">Feedback</a>
        </div>
        
    </section>
</template>

<!-- FUTURE UPDATES:
transitions (hero widgets, buttons, nav bar) -->

