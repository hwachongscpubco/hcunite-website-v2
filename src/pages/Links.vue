<!--
  Links.vue — reachable at /links, but no longer linked from the nav (its
  "Official Links"/"Others" cards were copied onto Home.vue instead — see
  git history "Migrate links page to homepage"). Kept around because the
  "Freshmen Essentials: C1 Orientation" section below is not duplicated
  anywhere else. The two card lists above use the same data/links.js +
  LinkCard.vue as Home.vue so both pages always show the same links.
-->
<template>
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

    <section class="px-12 py-8">
        <h2>Freshmen Essentials: C1 Orientation</h2>
        <p class="mt-4">College Reception (Emergency Contact): 6468 3955</p>
        <div class="py-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <div class="relative rounded-xl overflow-hidden lg:scale-100 lg:hover:shadow-xl lg:hover:scale-105 transition-all duration-500" >
                <img class="relative z-0 w-full h-30 lg:h-60 xl:h-full rounded-xl aspect-auto object-cover object-center" src="../assets/links/map.jpeg" alt="">
                <div class="flex flex-row w-full justify-between py-4 lg:px-4 lg:absolute lg:bottom-0 lg:text-white lg:bg-gradient-to-t from-black to-transparent">
                    <div class="z-20">
                        <h3>School Map</h3>
                        <p>For all your navigation needs</p>
                    </div>
                    <a href="https://www.hci.edu.sg/hci-contact-us/" target="_blank" class="text-white w-fit font-poppins text-md inline-flex items-center bg-black hover:bg-hwachred rounded-full py-2 px-6 lg:bg-transparent lg:border-white lg:border-1 lg:text-lg lg:hover:bg-white lg:hover:text-black transition-colors duration-300">
                        <p>
                            View
                        </p>           
                    </a>
                </div>
                
            </div>
            <div class="relative rounded-xl overflow-hidden lg:scale-100 lg:hover:shadow-xl lg:hover:scale-105 transition-all duration-500" >
                <img class="relative z-0 w-full h-30 lg:h-60 xl:h-full rounded-xl aspect-auto object-cover object-center" src="../assets/links/handbook.jpg" alt="">
                <div class="flex flex-row w-full justify-between py-4 lg:px-4 lg:absolute lg:bottom-0 lg:text-white lg:bg-gradient-to-t from-black to-transparent">
                    <div class="z-20">
                        <h3>C1 Handbook</h3>
                        <p>Your Trusty Guide</p>
                    </div>
                    <a href="https://drive.google.com/drive/folders/1AtKMPQObeJQOy47ANxT5ZF0jz6ObR3eJ?usp=drive_link" target="_blank" class="text-white w-fit font-poppins text-md inline-flex items-center bg-black hover:bg-hwachred rounded-full py-2 px-6 lg:bg-transparent lg:border-white lg:border-1 lg:text-lg lg:hover:bg-white lg:hover:text-black transition-colors duration-300">
                        <p>
                            View
                        </p>           
                    </a>
                </div>
                
            </div>
            <div class="relative rounded-xl overflow-hidden lg:scale-100 sm:col-span-2 xl:col-span-1 lg:hover:shadow-xl lg:hover:scale-105 transition-all duration-500" >
                <img class="relative z-0 w-full h-30 lg:h-60 xl:h-full rounded-xl aspect-auto object-cover object-center" src="../assets/links/sodache.JPG" alt="">
                <div class="flex flex-row w-full justify-between py-4 lg:px-4 lg:absolute lg:bottom-0 lg:text-white lg:bg-gradient-to-t from-black to-transparent">
                    <div class="z-20">
                        <h3>SODACHE</h3>
                        <p>#WHYHC</p>
                    </div>
                    <a href="https://drive.google.com/drive/folders/1rMVVLk3O2bjK_3QaBPIwJdVzMOv-er1s" target="_blank" class="text-white w-fit font-poppins text-md inline-flex items-center bg-black hover:bg-hwachred rounded-full py-2 px-6 lg:bg-transparent lg:border-white lg:border-1 lg:text-lg lg:hover:bg-white lg:hover:text-black transition-colors duration-300">
                        <p>
                            View
                        </p>           
                    </a>
                </div>
                
            </div>
            
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/uUVJvbQKMLs" title="Hwa Chong Batch Dance Music Video 2024 - Dance The Night" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/Mu08w9yaF_g" title="Studio Ardent Orientation montage 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
    </section>
</template>

<script setup>
import LinkCard from '../components/LinkCard.vue'
import { officialLinks, otherLinks } from '../data/links'
</script>