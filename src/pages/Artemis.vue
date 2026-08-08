<!--
  Artemis.vue — the Artemis Faculty page.
  Layout/behaviour lives in components/FacultyPage.vue; this file only
  supplies Artemis's content: colours, roster/blurb text, and the events +
  cheers data shown in the carousels below.
  See src/pages/README.md for the format used by the other Faculty pages.
-->
<template>
  <FacultyPage
    name="ARTEMIS"
    instagram="https://www.instagram.com/artemisfaculty/"
    hero-image="/images/Artemis/artemis_photo.jpg"
    border-class="border-artemis"
    hover-class="hover:bg-artemis"
    accent-class="bg-artemis"
    animal-title="The Wolf"
    animal-image="/images/Artemis/artemis.png"
    faculty="artemis"
    :events="events"
    :cheers="cheers"
  >
    <template #roster>
      (FROM LEFT TO RIGHT)
      <br><br>First Row
      <br>Tay Hong Yee, Sim Shan Yew, Yang Shurui, Quek Rui Wen, Choo Qian Ning
      <br><br>Second Row
      <br>Aeon Taspinar, Tan Jie Min, Kam Yu Tong Chloe, Lu Yitong, Wang Yifei
      <br><br>Third Row:
      <br>Kelly Chia, Zhang Min Qi, Meng Zhanfei Jeffrey, Jiang Yixiang, Low Yu Ze
    </template>
    <template #blurb>
      Artemis is the Greek goddess of the hunt. In Hwa Chong, our Faculty is represented by the wolf.
      The night can be uncertain and challenging, yet the wolves embrace the spirit of solidarity in the face of adversity, guided by Artemis.
      We wish for students to be brave in their pursuits, chartering new paths as they support one another through the various challenges in their JC lives.
      Just as wolves never leave the pack, so will Artemisians always stand in unity and rise to the challenges of each new day together as a family.
      <br><br>The PACK’s Got Your Back!!
    </template>
  </FacultyPage>
</template>

<script setup>
import FacultyPage from '../components/FacultyPage.vue'

const events = [
  {
    name: 'ORIENTATION',
    images: [
      '/images/Artemis/artemis_ori_1.JPG',
      '/images/Artemis/artemis_ori_2.JPG',
      '/images/Artemis/artemis_ori_3.jpeg',
    ],
    text:[
        "Welcome to the pack!! Get ready for an exciting journey as we kick off the year with O1.",
        "Bond with your classmates and other peers in the Faculty as you feel the Faculty spirit through various games and fun activities lined up.",
        "This culminates in the Post Orientation Party (POP), where Artemisians show their moves in an incredible dance choreographed by the Artemis Faculty Committee.",
    ]
  },
  {
    name: 'FACULTY BRUNCH',
    images: [
      '/images/Artemis/artemis_brunch_1.JPG',
      '/images/Artemis/artemis_brunch_2.JPG',
      '/images/Artemis/artemis_brunch_3.JPG',
      '/images/Artemis/artemis_brunch_4.JPEG',
    ],
    text:[
        "Faculty Brunch comes right after the promotional exams at the end of the school year.",
        "Sit back, relax, and enjoy a hearty meal together!",
        "Look forward to games prepared by the Faculty Committee, and performances put up by fellow Artemisians (which could be your chance to showcase your secret talent to the entire Faculty!).",
        "It’s a time to remember our time together in the past year and to truly feel the bond we have created with one another.",
    ]
  },
  {
    name: 'FACULTY CIP (FCIP)',
    images: [
      '/images/Artemis/artemis_cip_1.JPG',
      '/images/Artemis/artemis_cip_2.JPG',
      '/images/Artemis/artemis_cip_3.JPG',
    ],
    text:[
        "In our Faculty, we always emphasise the vitality of graciously giving, being inclusive, and showing gratitude. Artemisians come together during FCIP to give back to the community while forging closer bonds within the Faculty.",
    ]
  },
  {
    name: 'WELFARE INITIATIVES',
    images: [
      '/images/Artemis/artemis_welfare_1.jpg',
      '/images/Artemis/artemis_welfare_2.JPG',
      '/images/Artemis/artemis_welfare_3.JPG',
    ],
    text:[
        "Artemis Faculty Committee is here to care for your welfare and ensure that you have a wholesome time here. Through passion projects such as food deliveries and busking, we seek to allow Artemisians to have the best time while staying happy and healthy in our pack. Follow our Instagram and stay tuned for exciting updates on our Faculty, from event publicity to important announcements. ",
    ]
  }
]

const cheers = [
  "/images/Artemis/artemis_cheer_1.jpg",
  "/images/Artemis/artemis_cheer_2.jpg",
  "/images/Artemis/artemis_cheer_3.jpg",
  "/images/Artemis/artemis_cheer_4.jpg",
  "/images/Artemis/artemis_cheer_5.jpg",
]
</script>
