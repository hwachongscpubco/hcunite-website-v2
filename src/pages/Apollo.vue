<!--
  Apollo.vue — the Apollo Faculty page.
  Layout/behaviour lives in components/FacultyPage.vue; this file only
  supplies Apollo's content: colours, roster/blurb text, and the
  events + cheers data shown in the carousels below.
  See src/pages/README.md for the format used by the other Faculty pages.
-->
<template>
  <FacultyPage
    name="APOLLO"
    instagram="https://www.instagram.com/apollofaculty/"
    hero-image="/images/Apollo/apollo_photo.jpg"
    border-class="border-apollo"
    hover-class="hover:bg-apollo"
    accent-class="bg-apollo"
    animal-title="The Bull"
    animal-image="/images/Apollo/apollo.jpg"
    faculty="apollo"
    :events="events"
    :cheers="cheers"
  >
    <template #roster>
      (FROM LEFT TO RIGHT)
      <br><br>First Row:
      <br>Pan Xi, Jovan Lim Chen Yu
      <br><br>Second Row:
      <br>Peh Jia Lin, Chay Jialin, Jamie, Dana Goh Siew Yuen, Liu Rui-Han, Rachel
      <br><br>Third Row:
      <br>Loh En Ling, Giselle, Liao Sen Hei, Chong Jia Xuan Roxanne, Ariel Koh Rui Xuan
      <br><br>Fourth Row:
      <br>Darius Kwang Yi Fan, Lim Jun Jie Caleb, Ryan Ng Yiheng, Quah Hoon Ee Ally, Wan Hexin
    </template>
    <template #blurb>
      Roaming through Apollo Faculty's spirit, our sacred animal – the bull –
      serves as an emblem of artistic expression and free exploration.
      It is a radiant representation of the Faculty's tenacity and commitment to fostering a robust academic environment,
      embodying the unwavering resolve that all members of the Apollo Faculty possess in the face of challenges.
      <br><br>In the vibrant tapestry of our Faculty’s identity, the distinguishing yellow radiates optimism,
      cradling all in its warm golden rays.
      Greek God of the Sun and twin brother to Artemis,
      Apollo epitomises the vitality and vibrancy the Faculty strives to exemplify.
      By embracing the Faculty motto “Live Loud, Live Proud”,
      we strive to boldly soar to great heights and take pride in our stellar achievements.
    </template>
  </FacultyPage>
</template>

<script setup>
import FacultyPage from '../components/FacultyPage.vue'

const events = [
  {
    name: 'ORIENTATION',
    images: [
      '/images/Apollo/apollo_ori_1.jpg',
      '/images/Apollo/apollo_ori_2.jpg',
      '/images/Apollo/apollo_ori_3.jpg',
    ],
    text:[
        "O1 – the opening of the gates to the Kingdom of Light.",
        "With Apollo24 as the theme for this year, you will embark on an exciting mission of discovery, growth and accomplishment, like the astronauts in The Apollo Program. Venture out into the unexplored stars – from class-bonding games to heart-racing war games, join forces with your friends and make memories that will be etched into the hallowed hallways of our Kingdom!",
        "After your success at O1, celebrations are due! Aside from the God of Sun, Apollo is also the God of Music and Dance. So dance the night away at the Post Orientation Party (POP) and light up the school with our signature Faculty Prop, the finger lights. Representing Apollo in an inter-faculty dance competition, be sure to radiate the darkness with your shining dance moves!",
    ]
  },
  {
    name: 'FACULTY BRUNCH',
    images: [
      '/images/Apollo/apollo_brunch_1.jpg',
      '/images/Apollo/apollo_brunch_2.jpg',
      '/images/Apollo/apollo_brunch_3.jpg',
    ],
    text:[
        "Faculty Brunch is a yearly event which allows for the Faculty to gather and dine amongst their friends.",
        "At Moonopoly Moves, Apollo’s Faculty Brunch 2023, we checked “playing a life-size board game with 269 other people while eating scrumptious burgers” off our bucket list.",
        "From our live cotton candy station that captivated the hearts of many, to our talented Sunshines who put on enchanting dances, singing and even harmonica performances, Faculty Brunch surely gave everyone a MOO-ment to remember!",
    ]
  },
  {
    name: 'FACULTY CIP (FCIP)',
    images: [
      '/images/Apollo/apollo_cip_1.jpg',
      '/images/Apollo/apollo_cip_2.jpg',
      '/images/Apollo/apollo_cip_3.jpg',
    ],
    text:[
        "Always passionate about helping those around us, we also embody Apollo’s lesser-known role as the God of Healing in the Greek Pantheon.",
        "FCIP allows us to shine our rays of warmth and kindness beyond the campus, spreading love to others.",
        "In 2023, we partnered with New Life Community Services (NLCS) to hold a concert and interaction activities for over 150 children. From magic tricks to subway cookies, both the children and our faculty radiated with a glow!",
    ]
  },
  {
    name: 'WELFARE INITIATIVES',
    images: [
      '/images/Apollo/apollo_welfare_1.jpg',
      '/images/Apollo/apollo_welfare_2.jpg',
      '/images/Apollo/apollo_welfare_3.jpg',
    ],
    text:[
        "Aside from the exciting events planned, the Apollo Faculty Committee also plans several welfare initiatives to add the extra sunshine into the lives of the students in our Faculty. <br><br>Our Instagram video series, Wonderful Humans Of Apollo (WHOA), aims to highlight the unique personalities and talents of the students in Apollo Faculty, and brighten up their day through street interviews and fun challenges! ",
        "We also have our flagship DeliverMOO, where students can order food for themselves and their friends! In 2023, we delivered the ever-popular Dunkin Donuts to all the Sunshines craving a sweet treat. Their smiles after devouring the donuts certainly lit up the school!",
        "Collaborations with other Faculties allows us to explore new opportunities. Through Dusk to Dawn, our iconic collaboration with Artemis Faculty, students from both Faculties managed to relish incredible busking performances, as well as delectable snacks and exclusive merchandise. And to top it all off — a rave from Dusk, to Dawn. <br><br>These initiatives are a few amongst many others that our Faculty Committee plans for our Faculty. While small, they bring warm light to our students’ lives, giving them a little something to look forward to, amidst our busy school life.",
    ]
  }
]

const cheers = [
  "/images/Apollo/apollo_cheer_1.jpg",
  "/images/Apollo/apollo_cheer_2.jpg",
  "/images/Apollo/apollo_cheer_3.jpg",
  "/images/Apollo/apollo_cheer_4.jpg",
  "/images/Apollo/apollo_cheer_5.jpg",
  "/images/Apollo/apollo_cheer_6.jpg",
  "/images/Apollo/apollo_cheer_7.jpg",
]
</script>
