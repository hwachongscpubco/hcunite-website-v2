<!--
  Home.vue — the / landing page. This is the deck's permanent
  empty-deck state: DeckPlayer.vue (the binder + platter) is the page's
  hero and the site's whole navigation model on this route — every
  other page instead shows the docked DeckRail.vue (see App.vue). Below
  it: the two link-category carousels, "why we're here", and the PubCo
  feedback note. The old Instagram feed is gone — see /leaders instead.
-->
<script setup>
import DeckPlayer from '../components/deck/DeckPlayer.vue'
import LinkCategoryCarousel from '../components/LinkCategoryCarousel.vue'
import { officialLinks, otherLinks } from '../data/links'
</script>

<template>
  <!-- the deck -->
  <section class="pt-4 sm:pt-10 pb-14 px-1 sm:px-4">
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 max-w-[1180px] mx-auto mb-8 sm:mb-10">
      <h1 class="text-ink !text-5xl sm:!text-7xl leading-[0.92] tracking-[-0.035em]">
        WELCOME TO <span class="text-hwachred">HCUNITE</span>!
      </h1>
      <div class="font-poppins text-[11px] text-mute text-left sm:text-right leading-relaxed shrink-0">
        HWA CHONG<br>STUDENTS' COUNCIL<br>EST. SINGAPORE
      </div>
    </div>

    <DeckPlayer />
  </section>

  <!-- links -->
  <section class="px-1 sm:px-4 pb-8">
    <div class="flex flex-col gap-4 max-w-[1180px] mx-auto">
      <LinkCategoryCarousel
        title="Official Links"
        description="Everything you need as a student"
        :links="officialLinks"
      />
      <LinkCategoryCarousel
        title="Others"
        description="Explore additional resources and helpful sites"
        :links="otherLinks"
      />
    </div>
  </section>

  <div class="section-divider my-4"></div>

  <!-- why we're here -->
  <section class="w-full px-4 sm:px-8 py-16 sm:py-20">
    <div class="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-center">
      <div>
        <div class="w-14 h-[3px] bg-hwachred rounded-full mb-5"></div>
        <h2 class="!text-4xl sm:!text-5xl !leading-[1.05] text-ink">Why we're here:</h2>
        <p class="text-ink-soft text-base sm:text-lg mt-5 max-w-lg leading-relaxed">
          We are committed to building a united Hwa Chong family.
          <br><br>We are here for you, whenever and wherever you need it.
          <br><br>We are the Hwa Chong Students' Council.
        </p>
      </div>
      <div class="aspect-square rounded-2xl overflow-hidden border border-hairline hidden lg:block">
        <img src="../assets/home/c1 ori.jpg" alt="council photo" class="w-full h-full object-cover object-center">
      </div>
    </div>
  </section>

  <div class="section-divider my-4"></div>

  <!-- pubco note -->
  <section class="w-full bg-ink text-ivory px-4 sm:px-8 py-16 sm:py-20">
    <div class="max-w-[1180px] mx-auto">
      <div class="w-14 h-[3px] bg-hwachred rounded-full mb-5"></div>
      <h2 class="!text-3xl sm:!text-4xl max-w-2xl">Publication and Publicity Committee's Note:</h2>
      <p class="text-[#D8CDBD] text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
        Hello! Welcome to HCUnite.com! We'd like to thank you for taking the time to visit our Website! Hopefully you've found what you were looking for and that (HC)ULIKE our Website!
        <br><br>If you have any feedback with regard to HCUnite and any of our related initiatives, we would love to hear it. Please feel free to share your feedback with us in the form below:
      </p>
      <a
        class="inline-block text-ivory font-poppins text-sm sm:text-base bg-hwachred hover:bg-coral rounded-full py-3.5 px-8 mt-7 transition-colors duration-300"
        href="https://forms.gle/kT7bP6BH9Ddfrw2z9"
        target="_blank"
      >Feedback</a>

      <div class="mt-16 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 font-poppins text-[11px] text-mute">
        <div class="leading-relaxed">CREDIT: STUDIO ARDENT FOR RELEVANT IMAGES<br>WEBSITE UPDATED BY NG XU THONG AND PUBCO</div>
        <div class="flex gap-4">
          <a href="https://www.instagram.com/hcunite/" target="_blank" class="hover:text-ivory transition-colors">INSTAGRAM</a>
          <a href="https://www.youtube.com/channel/UCPz0DNqC6i1pyJvKYhSHlKw" target="_blank" class="hover:text-ivory transition-colors">YOUTUBE</a>
          <a href="https://www.facebook.com/hcunite/" target="_blank" class="hover:text-ivory transition-colors">FACEBOOK</a>
        </div>
      </div>

      <div class="overflow-hidden mt-6 -mb-6 sm:-mb-10">
        <div class="font-inter font-black text-[22vw] sm:text-[13vw] leading-[0.8] tracking-[-0.05em] text-[#2A2A2A] whitespace-nowrap">HCUNITE</div>
      </div>
    </div>
  </section>
</template>
