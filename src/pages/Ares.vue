<!--
  Ares.vue — the Ares Faculty page.
  Layout/behaviour lives in components/FacultyPage.vue; this file only
  supplies Ares's content: colours, roster/blurb text, and the events +
  cheers data shown in the carousels below.
  See src/pages/README.md for the format used by the other Faculty pages.
-->
<template>
  <FacultyPage
    name="ARES"
    instagram="https://www.instagram.com/aresfaculty/"
    hero-image="/images/Ares/ares_photo.jpg"
    border-class="border-ares"
    hover-class="hover:bg-ares"
    accent-class="bg-ares"
    animal-title="The Horse"
    animal-image="/images/Ares/ares.png"
    faculty="ares"
    :events="events"
    :cheers="cheers"
  >
    <template #roster>
      (FROM LEFT TO RIGHT)
      <br><br>First row
      <br>Tan E Shyan, Ryan Vaswani
      <br><br>Second row
      <br>Tang Ho Yan Isabelle, Gwendolyn Chia Yu Tong, Ong Jin Rong Denzel, Lim Yun Yang, Leong An Teng Kaitlin, Liu Lingru (Aislin)
      <br><br>Third row
      <br>Ho Shun Yi, Alexander, Cai Yi Shan, Ong Hwai Suan Ashleigh, Song An An Shermaine, Mirabelle Phua Jing Ni, Tan Jo Yee, Alesea Tan Jingxi
    </template>
    <template #blurb>
      In the Ares Faculty, the fiery red represents courage and vigour while the warhorse symbolises fearlessness and a tenacious spirit.
      Being closely associated with a warhorse, Ares is known for his valour and bravery. Similarly, those in the Ares Faculty are warriors – strengthened by love, fuelled by passion.
      <br><br>Beyond the brave warriors that we are, is a close-knit family that values inclusiveness and diversity.
      Aresians never fail to rally after one another, supporting each other when times get tough. We will charge forth boldly with strength and determination,
      a fighting spirit and a heart to grow! Daunted you may be, but never defeated.
      <br><br>After all, who dares challenge the God of War?
    </template>
  </FacultyPage>
</template>

<script setup>
import FacultyPage from '../components/FacultyPage.vue'

const events = [
  {
    name: 'ORIENTATION',
    images: [
      '/images/Ares/ares_ori_1.jpg',
      '/images/Ares/ares_ori_2.JPG',
      '/images/Ares/ares_ori_3.JPG',
    ],
    text:[
        "O1 marks the start of a new year, where we welcome a new batch of C1 students into Ares.",
        "During O1, Aresians are introduced to their new family through various activities, helping Aresians make the tumultuous transition to a new school.",
        "Through O1, Aresians also get a glimpse of the enriching and fulfilling journey that lies ahead of them in Hwa Chong.",
    ]
  },
  {
    name: 'FACULTY BRUNCH',
    images: [
      '/images/Ares/ares_brunch_1.jpg',
      '/images/Ares/ares_brunch_2.jpg',
      '/images/Ares/ares_brunch_3.jpg',
      '/images/Ares/ares_brunch_4.jpg',
    ],
    text:[
        "The annual Faculty Brunch is a celebration of the end of our Promotional Examinations. After an exhausting school year, Aresians indulge in a medley of breathtaking performances and game shows over a tasty meal together. In 2023, Ares took the leap of faith, opened its doors and entered the exciting fantasy world of Narnia, together.",
    ]
  },
  {
    name: 'FACULTY CIP (FCIP)',
    images: [
      '/images/Ares/ares_cip_1.jpg',
      '/images/Ares/ares_cip_2.jpg',
    ],
    text:[
        "FCIP serves as an opportunity for Aresians to work together and give back to the community.",
        "Through FCIP, Aresians embark on a journey to understand the importance of service, eventually branching out to serve the community in their individual ways.",
    ]
  },
  {
    name: 'WELFARE INITIATIVES',
    images: [
      '/images/Ares/ares_welfare_1.jpg',
      '/images/Ares/ares_welfare_2.jpeg',
      '/images/Ares/ares_welfare_3.jpeg',
    ],
    text:[
        "Ares Socks, Care Packages and our yummy DelivARES… are you excited for the many more welfare initiatives to come? ",
        "Our newly designed Ares Socks, lends you Ares’s fiery strength, with every Aresian owning a pair.",
        "With DelivARES, your cravings will be satisfied by Warhorses who deliver delicious bites, like bubble tea and doughnuts, straight to your classrooms! During exam seasons, Aresians can also look out for Care Packages that will fuel you up! In 2024, keep a lookout for more to come!!",
    ]
  }
]

const cheers = [
  "/images/Ares/ares_cheer_1.jpg",
  "/images/Ares/ares_cheer_2.jpg",
  "/images/Ares/ares_cheer_3.jpg",
  "/images/Ares/ares_cheer_4.jpg",
  "/images/Ares/ares_cheer_5.jpg",
]
</script>
