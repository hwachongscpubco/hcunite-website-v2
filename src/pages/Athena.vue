<!--
  Athena.vue — the Athena Faculty page.
  Layout/behaviour lives in components/FacultyPage.vue; this file only
  supplies Athena's content: colours, roster/blurb text, and the events +
  cheers data shown in the carousels below.
  See src/pages/README.md for the format used by the other Faculty pages.
-->
<template>
  <FacultyPage
    name="ATHENA"
    instagram="https://www.instagram.com/athenafaculty/"
    hero-image="/images/Athena/athena_photo.jpg"
    border-class="border-athena"
    hover-class="hover:bg-athena"
    accent-class="bg-athena"
    animal-title="The Owl"
    animal-image="/images/Athena/athena.png"
    faculty="athena"
    :events="events"
    :cheers="cheers"
  >
    <template #roster>
      (FROM LEFT TO RIGHT)
      <br><br>First Row
      <br>Chin Shi Xuan Cadence, Leanne Tan, Xin Qingyue, Ong Jia Zhen, Kong Cheng Jun, Esther Seng Ying Ying, Kaylen Liew Tong En, Shanaia Megan Teo
      <br><br>Second Row
      <br>Hoon Jia Qi Amelia, Xie Xinran, Tang Shing Yi, Dylan Seah, Tan Jun Han Jayden, Ashley Ng, Xiong Zhihan
    </template>
    <template #blurb>
      Master strategist in warfare, patron of heroic endeavours, it is no surprise that tales from Olympus sung praise to the Goddess of Wisdom, Athena.
      Closer to home, the Athena Faculty in Hwa Chong is a faculty lush green with zest, joy, and supportive fellow faculty members.
      We soar with the mighty owl, an emblem of wisdom, and a reminder of the significance we place on embodying thoughtfulness and care in our actions.
      With Athena Faculty’s unique familial spirit (more specifically, Espirito Verde), we will have one another’s backs through thick and thin.
      Helmed with knowledge and perspicacity, Athenians work and play hard in this faculty we call home.
    </template>
  </FacultyPage>
</template>

<script setup>
import FacultyPage from '../components/FacultyPage.vue'

const events = [
  {
    name: 'ORIENTATION',
    images: [
      '/images/Athena/athena_ori_1.JPG',
      '/images/Athena/athena_ori_2.jpeg',
      '/images/Athena/athena_ori_3.jpeg',
    ],
    text:[
        "O1 is truly a special event for senior and junior Athenians alike. ",
        "Donning our Faculty Shirt and raising our Faculty Sign to the skies, this is but one of the many events where we proudly showcase our strong faculty spirit!",
        "Welcoming our new Athenians to our big Owl family, important highlights of O1 like Senior-Meet-Junior, where senior Athenians warmly welcome junior classes to Athena, and our Post Orientation Party (POP), where new C1s dance together as a Faculty, are sure to be cornerstones of our bonding experience!",
    ]
  },
  {
    name: 'FACULTY BRUNCH',
    images: [
      '/images/Athena/athena_brunch_1.JPG',
      '/images/Athena/athena_brunch_2.JPEG',
      '/images/Athena/athena_brunch_3.JPG',
    ],
    text:[
        "Faculty Brunch is a special time for Athenians to bond over food, while celebrating the end of the Promotional Examinations!",
        "Witness Athenians give their all in the performances segment, and bond with Athenians from other classes through the games organised by the Faculty Committee.",
        "There’s never a dull moment; so get excited for possibly the best brunch time in your school year!",
    ]
  },
  {
    name: 'FACULTY CIP (FCIP)',
    images: [
      '/images/Athena/athena_cip_1.jpg',
      '/images/Athena/athena_cip_2.jpg',
      '/images/Athena/athena_cip_3.jpg',
    ],
    text:[
        "An annual service-learning event for all Athenians, FCIP is when Athenians get a chance to put their big hearts on display.",
        "This event has been a fruitful experience for many past batches of Athenians, as it will continue to be for future batches.",
        "It truly is a heartwarming sight to see Athenians giving back to society and helping those in need.",
    ]
  },
  {
    name: 'WELFARE INITIATIVES',
    images: [
      '/images/Athena/athena_welfare_1.JPG',
      '/images/Athena/athena_welfare_2.jpg',
      '/images/Athena/athena_welfare_3.PNG',
    ],
    text:[
        "Athenians can look forward to regular welfare initiatives, where students can enjoy donuts and bubble tea in school! These initiatives encourage and energise Athenians as they go through the busy school year, as delicious treats and attractive giveaways never fail to serve as useful pick-me-ups.",
    ]
  }
]

const cheers = [
  "/images/Athena/athena_cheer_1.jpeg",
  "/images/Athena/athena_cheer_2.jpeg",
  "/images/Athena/athena_cheer_3.jpeg",
  "/images/Athena/athena_cheer_4.jpeg",
]
</script>
