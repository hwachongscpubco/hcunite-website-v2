<template>
    <section class="w-full h-screen flex flex-col justify-end">
        <div class="overflow-hidden">
            <img  src="/images/elections/eleco_banner.jpg" alt="">
        </div>
        <div class="p-4 lg:p-8">
            <h1 class="text-8xl break-all">CANDIDATES</h1>
            <p class="text-3xl">Meet your candidates for the 53rd HCSC!</p>
        </div>
    </section>

    <section class="p-4 lg:p-8 mt-16">
        <h4 class="font-poppins text-xl">Click on any campaign group to learn more about them!</h4>
        <div class="flex flex-col sm:flex-row w-full">
            <div class="flex-1 w-full pt-4">
                <h4 class="w-full text-left border-b-2 pl-4 py-2 border-apollo font-poppins">Apollo</h4>
                <div 
                v-for="(group,index) in campaignGroups['Apollo']" 
                :key="index" 
                class="relative w-full group overflow-hidden border-b-2 border-black">     
                    <button 
                    @click="selectGroup('Apollo', index)" 
                    class="z-10 w-full h-full text-left relative font-poppins group-hover:pl-8 pl-4 py-1 text-black group-hover:text-white transition-all duration-300 ease-in-out ">
                        {{ group.groupName }}
                    </button>
                    <div class="z-0 absolute inset-0 bg-apollo-dark w-full translate-y-full group-hover:translate-0 transition-all duration-300"></div>
                </div>
            </div>
            <div class="flex-1 w-full pt-4">
                <h4 class="w-full text-left border-b-2 pl-4 py-2 border-ares font-poppins">Ares</h4>
                <div 
                v-for="(group,index) in campaignGroups['Ares']" 
                :key="index" 
                class="relative w-full group overflow-hidden border-b-2 border-black">     
                    <button 
                    @click="selectGroup('Ares', index)" 
                    class="z-10 w-full h-full text-left relative font-poppins group-hover:pl-8 pl-4 py-1 text-black group-hover:text-white transition-all duration-300 ease-in-out ">
                        {{ group.groupName }}
                    </button>
                    <div class="z-0 absolute inset-0 bg-ares w-full translate-y-full group-hover:translate-0 transition-all duration-300"></div>
                </div>
            </div>
            <div class="flex-1 w-full pt-4">
                <h4 class="w-full text-left border-b-2 pl-4 py-2 border-artemis font-poppins">Artemis</h4>
                <div 
                v-for="(group,index) in campaignGroups['Artemis']" 
                :key="index" 
                class="relative w-full group overflow-hidden border-b-2 border-black">     
                    <button 
                    @click="selectGroup('Artemis', index)" 
                    class="z-10 w-full h-full text-left relative font-poppins group-hover:pl-8 pl-4 py-1 text-black group-hover:text-white transition-all duration-300 ease-in-out ">
                        {{ group.groupName }}
                    </button>
                    <div class="z-0 absolute inset-0 bg-artemis w-full translate-y-full group-hover:translate-0 transition-all duration-300"></div>
                </div>
            </div>
            <div class="flex-1 w-full pt-4">
                <h4 class="w-full text-left border-b-2 pl-4 py-2 border-athena font-poppins">Athena</h4>
                <div 
                v-for="(group,index) in campaignGroups['Athena']" 
                :key="index" 
                class="relative w-full group overflow-hidden border-b-2 border-black">     
                    <button 
                    @click="selectGroup('Athena', index)" 
                    class="z-10 w-full h-full text-left relative font-poppins group-hover:pl-8 pl-4 py-1 text-black group-hover:text-white transition-all duration-300 ease-in-out ">
                        {{ group.groupName }}
                    </button>
                    <div class="z-0 absolute inset-0 bg-athena w-full translate-y-full group-hover:translate-0 transition-all duration-300"></div>
                </div>
            </div>
        </div>
    </section>
    <CandidateGroupSection 
    :group-data="campaignGroups[selectedFaculty]?.[selectedGroup]"
    :group-number="selectedGroup+1"
    :group-faculty="selectedFaculty"
    ></CandidateGroupSection>
</template>

<script setup>
    import CandidateGroupSection from '../components/CandidateGroupSection.vue'; 
    import { ref } from 'vue'

    const campaignGroups = {
        Apollo:[
            {
                groupName: "HwaChooo",
                groupDescription: `Choo choo! Full steam ahead! 🚂We are HwaChooo! The HwaChooo Express isn’t just speeding towards our common destination, but stopping at every station to bring more student voices on board — because progress only matters when everyone moves forward as one. \
                Next station: Your Ideal Hwa Chong.`,
                members: [
                    {
                        name: "Hu Anbo",
                        description: "Why can’t train engineers be electrocuted? Because they aren’t conductors! 😜Hi, I’m Anbo and I’m running to be YOUR conductor 🚂on this journey! "
                    },
                    {
                        name: "Ouyang Yunqi",
                        description: "Hi, I’m Yunqi and I will always choo-choo-choose YOU! I will make your HwaChong experience tram-endous! 🚂✨ Hop on board! (Not platform 9 & 3/4! 🙈)"
                    },
                    {
                        name: "Wong BoHui",
                        description: "Want RAIL 🚂change? I got CHOO. Hi, I’m BoHui, and I’d be YOUR perfect train conductor because I'm always ready to take one for the STEAM 💨!"
                    },
                ]
            },{
                groupName: "Hwanana",
                groupDescription: `Hey Hwa Chong! We are Hwananas 🍌🍌, and we HWANA(NA) be yours 🫵!! Be it through having fun with fellow HWANANAS through events and initiatives, or PEELING back the issues in school, we hope to make your time in Hwach one you will NEVER FORGET 🙈`,
                members: [
                    {
                        name: "Cheong Ying Xuan",
                        description: `HI BANANAS 🍌I’m Ying Xuan from 26S75 ☀️My vision for Hwa Chong is to peel away stress 🍌 and split laughs 🙌 with every student!`
                    },
                    {
                        name: "Christabelle Loo En Qi",
                        description: `HI BANANAS 🍌! I’m Christabelle from 26S7E! I’m an aPEELing choice if you hwana(na) be part of a chaotic and energetic doMINION! Let’s go bananas! 🐒`
                    },
                    {
                        name: "Guo Zijia",
                        description: `HI BANANAS 🍌I’m Zijia from 26A14 🤭Let’s make Hwa Chong ape-solutely fun 🙈,  brimming with spirit, so every banana go bananas with joy! 🤩`
                    },
                    {
                        name: "Leow Junn Yi Ryan",
                        description: `HI BANANAS 🍌 I’m Ryan from 26A14 🐮Just like how minions hope to steal the moon 🌚I HWANA steal your hearts ♥️this campaign season ✅!!! `
                    },
                ]
            },{
                groupName: "The Bricksmiths",
                groupDescription: `What's clickin good lookin, we're thebricksmiths! We wanna build a HC where nobody's the spare piece, and to make your JC life bricking amazing! Did you lose your blocks laughing? We hope ya did. we're the missing peace, vote for us now! piece out!`,
                members: [
                    {
                        name: "Joraine Lau Xin Ru",
                        description: `Hi Hwachies! I'm Joraine and I'm here to lay the foundation for OUR #whyhc! I'm committed to BUILDING an inclusive culture! Vote for me, vote for we!`
                    },
                    {
                        name: "Klaus Lucas Yeo",
                        description: `If I'm a brick, you're the wall, cuz I've always got your back! I'm Klaus, and if you liked that pun, fret not, I've got a brickload more in store!`
                    },
                    {
                        name: "Tiffany Luu",
                        description: `Don't vote 4 me if u want some1 who sees SC as a title. It's my priority 2 ensure every JC student feels included in our HC home. Every piece matters!`
                    },
                    {
                        name: "Wong Shi Qi, Aurora",
                        description: `WHAT'S UP my fellow hwachies! Fun fact! 1 I'm Aurora, 2 I sneeze when I look at the sun, so if I sneeze near you it's because you're just too bright.`
                    },
                ]
            },{
                groupName: "HwaChickens",
                groupDescription: `Bawk bawk BAWK! Cockodoodooo! Bak Bak QUACK! (Translation: Hyaaa WE ARE HwaChickens from Apollo! Catch us waddling about in school? Come say hi! We're ready to get cracking, and EGGSHELL at what we do 😏😏 Don't chicken out, vote for HwaChickens!)`,
                members: [
                    {
                        name: "Aaron Tan Rui Ze",
                        description: `COCKADOODLEDOOOO!! 🐔 Wassup Hwa Chong! Aaron here 🌞🌞 I asked Calista to look after my eggs, I sure hope she doesn't put them all in one basket… 🙂`
                    },
                    {
                        name: "Calista Wong Ke Ying",
                        description: `SQUAWWWK!!!!! 🐔 Heyy Hwa Chong!! I'm Calista and I can't believe I'm the only Science student in HChickens 😱😱I was supposed to safeguard Aaron's eggs but I LOST THEM!!! 😖`
                    },
                    {
                        name: "Li Xiyuan",
                        description: `BAK BAK QUACK! 🐔💥 This is Xiyuan clucking in to say hi! 👋 Just saw a beautiful basket of eggs, and well, no one can ever pass on HwaChickens… 😝`
                    },
                    {
                        name: "Ong U-Wei Matthew",
                        description: `CLUCK CLUCK BWAK!🐔Hey HwaChong❤️💛!! I'm Matthew and I've been looking for our eggs😬OH! Xiyuan has them, He's HATCHING-A-PLAN🤔Time to get CRACKING!`
                    },
                ]
            },{
                groupName: "Hwaneybees",
                groupDescription: `Hi we're Hwaneybees! Here to build a sweeter Hwa Chong. We'll bee the buzz that brings voices together, grow a kinder hive where everyone belongs, and spread honeyed positivity. Lets pollinate ideas, keep the vibes abuzz and make school life sweet!🐝`,
                members: [
                    {
                        name: "Sun Hing Tai",
                        description: `I'm Hingtai & I hive what it takes to bee your council! 🍯Your beesness is my beesness. Buzz your thoughts, better your #whyhc and Vote for Hingtai 🐝`
                    },
                    {
                        name: "Li Xinrui",
                        description: `I'm Xinrui & I 🐝 bee-lieve kindness makes school sweeter, I Let's make school a place where everyone can smile, belong, and enjoy the buzz 🌼. Vote Xinrui! 🌻`
                    },
                    {
                        name: "Yip Yu Yang, Aden",
                        description: `I'm Aden & I Hwaney-bee your council!☀️Wanna bee heard? I'll turn your buzz into change. One hive, every voice. 🌻Vote for your Hwa Chong,🐝Vote Aden!`
                    },
                ]
            },{
                groupName: "PikaCrew",
                groupDescription: `⚡Pika Pika!⚡ We are the PikaCrew, a team of three besties running to be YOUR Student Councillors! Pikachu-se a council that cares for you, Vote in PikaCrew ✨!`,
                members: [
                    {
                        name: "Glynnis Lok Jia Yu",
                        description: `⚡️Hungry Pikachu Noises ⚡️
            I'm Glynnis, Pika-Chewing away, because I'm HUNGRY to serve YOU! Elect me, and Hwachong'll always be FULL of your wishes!`
                    },
                    {
                        name: "Lau Cheng You",
                        description: `⚡Truthful Pikachu Noises⚡
            I'm Cheng You (Cogent), and it is Pika-True that I know ball⚽! Elect me to make the Student Council a clear friend to all 🤩!`
                    },
                    {
                        name: "Shi Yifan",
                        description: `⚡Chill Pikachu Noises⚡
            I'm Yifan (Ariel), and China-Studies-in-Chinese has not been Pika-Chill! Elect me to strengthen our #WhyHC zeal 💪!`
                    },
                ]
            },{
                groupName: "Hwachizza",
                groupDescription: `📝👨‍🍳📦🚚Together, we are serving up something better! A yummy pizza is not made of just one topping. Each faculty is an ingredient both unique and meaningful on their own. However, when we unite as 4Facs1Hwach, we make an amazing Hwachizza ‼️🍕😋`,
                members: [
                    {
                        name: "Bryce Kwan Yew Zhong",
                        description: `Per colazione voglio un Hwachizza! Hi Hwachies! I'm Bryce. Here to PACK💥and SERVE💯you a heartwarming Hwachizza.🍕😋Vote Bryce, he's the Kwan for Yew!`
                    },
                    {
                        name: "Fu Xuanling",
                        description: `Per pranzo voglio un Hwachizza! Hi Hwachies! I'm Xuanling and I'm here to deliver the BEST Hwachizza to you 🚚💛Vote Xuanling Fu, make dreams come true!`
                    },
                    {
                        name: "Rachel Ng",
                        description: `Per merenda voglio un Hwachizza! Hi Hwachies💛I'm Rachel, ready with fresh ideas hot out the oven🔥😋Vote for Rachel, let's make change that's special!`
                    },
                    {
                        name: "Violet Yip Yu Mun",
                        description: `Per cena voglio un Hwachizza! Hi Hwachies!☀️I'm Violet, and my recipes are the BEST! 😋Roses are red, who to choose? I'm Violet, the vote for you! 🫵🏻`
                    },
                ]
            },{
                groupName: "eMOOOjis",
                groupDescription: `The 4 HC eMOOOjis proMOOse to do our best to turn your frowns upside down and your smiles into even bigger smiles, so every eMOOOji can enjoy a better school life. Remember: we don't just moo. We moo GOOOD! 🐮☀️`,
                members: [
                    {
                        name: "Lee Yee Ann",
                        description: `Yee Ann here! I hope to make every student comfortable when connecting with others, so no one feels left out ❤️ Listen to the fans vote for Yee Ann! 😝`
                    },
                    {
                        name: "Ng Ava",
                        description: `Hi, I'm Ava! Half Thai🇹🇭, dance lover💃, and someone who's been both the loudest and quietest in the room. Trust me—I get both😉, I want HC to feel like home for everyone🏠`
                    },
                    {
                        name: "Soh Shao Ming",
                        description: `My #WhyCouncil is to elevate YOUR #WhyHC — SOH your today is HAPPIER, and your tomorrow is filled with even BETTER MEMORIES!😁❤️`
                    },
                    {
                        name: "Wong Yi Xuan",
                        description: `My #WhyCouncil is to to make our school days shine brighter than they are🤩With me, every student can help light the star 🌟 让yi xuan当你的第yi xuan择☝️`
                    },
                ]
            },{
                groupName: "Hwanana Split",
                groupDescription: `Lonely bananas? NAH, we hang around in bunches!🍌 HEY HWA CHONG!💛We are Beth, Gisele, Rosanne and Travis; the BUNCH who wants to make YOUR🫵HC lives more FLAVOURFUL🤩We aim to sprinkle✨joy into your HC life, making everyday feel like a ☀️SUNDAE!🍨`,
                members: [
                    {
                        name: "Chan Fan Ying Beth",
                        description: `STAY SUNNY HWA CHONG☀I'm Beth from 26S6N. Like Cookies & Cream, I bring fun😝 and sweetness🍬 so you have an UDDERLY AMOOZING🐮 time. Oreo🍪 ready?`
                    },
                    {
                        name: "Gisele Loi Yan Tong",
                        description: `HEY HWA CHONG! 🌟I'm Gisele from 26S77 🤩Your Raspberry Ripple 🍇🍦here to SWIRL up the fun and make your Hwa Chong life fruity and MOOO-velous! 🥳💛`
                    },
                    {
                        name: "Ow Rosanne (Hu Xinying)",
                        description: `WHAT'S SHINING☀️HWA CHONG❤️💛I'm Rosanne from 26S73😎, melting🍨to whip up🤍something new for you🫵so that HC is your match-a🍵made in heaven!😝😝`
                    },
                    {
                        name: "Tia Bang Yi Travis (Xie Bangyi)",
                        description: `MOO-RNING HWA CHONG💛 I'm Travis from 26S77😁, here to bring the LIGHT🌟 and FLAVOUR😋 to YOUR🫵 HC lives! SO WHAT ARE WE WAITING FOR? Let's MAN-GO!🥭`
                    },
                ]
            },
        ],
        Ares: [
            {
                groupName: "Hwabbletea",
                groupDescription: `Hey Hwa Chong!❣️Ready to shake things up?🧂It's your fav artisans, and WE're here to light that fire in YOUR heart❤️‍🔥! Let us make these 2 years a memorable and electric one for YOU!⚡ Ingredients: Milk, pearls, 100% Enthu, love and blazing passion🔥`,
                members: [
                    {
                        name: "Cao Tiancheng",
                        description: `YOO wsg gang TC here! 🧋One day we'll all look back at those years, so let's make sure they're full of stories worth telling and laughing. Ready?🗣️🔥`
                    },
                    {
                        name: "Cherry Zhang Tian Xin",
                        description: `Hi I'm Cherry! 🍒 Yup I'm named after an edible! I can't promise daily pizza parties but I can promise you a boba-tea-ful school experience 🧋✨`
                    },
                    {
                        name: "Lin Qin Yong",
                        description: `It's QY!🧋To sum up, if tears fall when you recall past events, then my job is done. Enough abt me. How bout you 🫵? Are YOU ready to make memories? ✨`
                    },
                ]
            },{
                groupName: "Super Hwarios",
                groupDescription: `It's-a-us, Hwarios! Like Mario, we're ready to jump in and support our peers✊🏻No matter what world you're in, we hope to make YOUR 🫵 Hwa Chong experience more vibrant, immersive, and united🙌 Vote for us and let's level 🆙 our school life together!`,
                members: [
                    {
                        name: "Anastasia Yang Rui Yan",
                        description: `hii i'm anastasia from s6g 😛and i'm ready to JUMP into every opportunity to help you! c'mon alden, we gotta get those power ups over there! ✊🏻🆙`
                    },
                    {
                        name: "Kay Yu Feng Alden",
                        description: `hellooo I'm Alden from s70 😝and I hope to power-up your school spirit like a true super star 🌟!! Hey shanglin watch out for bowser!!`
                    },
                    {
                        name: "Li Shanglin",
                        description: `helloooo :) im shanglin from s6g 😁and with your help we can get the school that 1-Up! megan, the flagpole is within sight! 🏁`
                    },
                    {
                        name: "Megan Koh Rui En",
                        description: `hii I'm megan from s78 and I'm prepared to zoom 🏃💨 across the finish line. Look, the flag pole is right ahead! Let's win this race! 🏆`
                    },
                ]
            },{
                groupName: "Hwachketeers",
                groupDescription: `All for one, one for all, let Hwachketeers answer YOUR call! Three hearts, one mission, and a whole lot of passion for the 53rd HCSC ❤️‍🔥 We're Peiling, Ping Hwee, and Yifei, and we're ready to fight, ready to serve, ready for you! 🫵🏻`,
                members: [
                    {
                        name: "Chiow Pei Ling",
                        description: `Hwachketeer 1, in! I'm Pei Ling, and I'm here to PEI it forward to make your 🫵 Hwachong experience dazzLING!✨`
                    },
                    {
                        name: "Lim Ping Hwee",
                        description: `Hwachketeer 2, in! I'm Ping Hwee, and SODACHE runs in my veins 😋 I love Hwach and everyone in it – so let's make it a better home for all of us ❤️‍🔥`
                    },
                    {
                        name: "Yu Yifei",
                        description: `Hwachketeer 3, in! I am Yifei, the no.1 ares lover ♥️. I hope to hear your voices and translate them into reality. Your wish is my command! 🫡`
                    },
                ]
            },{
                groupName: "ARESistible",
                groupDescription: `Some ideas are good. Some inspire change. But the best ideas are simply ARESistible. We lead with heart, unite everyone, and make Hwa Chong fun, lively, and impossible to resist. Together, let's create unforgettable moments and make YOUR HC experience truly ARESistible! ✨🔥😍`,
                members: [
                    {
                        name: "Ayden Huang Deye",
                        description: `What's up HC! I'm Ayden (26S6V, Ares), here to transform your "what ifs?" into "what's next?" Vote for me to make YOUR HC experience simply ARESistible! ✨`
                    },
                    {
                        name: "Darius Voo Sze Zing (Wu Sijin)",
                        description: `Hey Hwa Chong! I'm Darius (26S6V, Ares), and I'm here to turn your ideas for our HC community into reality! A simply ARESistible prospect! Vote us in for all to win! 🔥`
                    },
                    {
                        name: "Ng Kar Roong",
                        description: `Hi Hwa Chong! I am Kar Roong (26S6G, Ares). My #WhyHCSC is to bring joy and excitement to every Hwachongian's school life, making it ARESistible. Vote for 佳蓉, 加倍的笑容! 😍`
                    },
                ]
            },{
                groupName: "Hwachew",
                groupDescription: `NEIGHHH Hwa Chong! 🐴❤️‍🔥 Introducing Team Hwachew, consisting of Au Wai 🍭, Jefferson🍫, Rachel 🍬 and Shell 🍡! Here to help you savour 😋 every moment, we are 4 passionate Aresians 🔥 unwrapping our love for Hwa Chong, creating a 🏡 home sweet home 🫂 for YOU! 🫵`,
                members: [
                    {
                        name: "Au Wai",
                        description: `What does the horse say to its NEIGHHHbour? Hay! 👋I'm Au Wai from 26S72, here to make Hwa Chong everyone's sweet spot 🏠❤️‍🔥where memories POP! 🍭`
                    },
                    {
                        name: "Lee Sian Hon, Jefferson (Li Xuanfeng)",
                        description: `NEIGH Hwa Chong!❤️‍🔥I'm Jefferson from 26S74. A Pocky lover 🍫determined to stick up for YOU 🫵and add the extra flavour 😋to our sweet Hwa Chong life!🔥🙌`
                    },
                    {
                        name: "Rachel Neo Tze-En",
                        description: `NEIGH Hwa Chong! 🙌 I'm Rachel 🍬 from 26S78, small but I pack a punch 💥 Here to build a Fruit+华初 spirit ❤️‍🔥with YOU 🫵, where every Hwa Chongian makes sweet memories that stick!`
                    },
                    {
                        name: "Shell Heng",
                        description: `NEIGHHH Hwa Chong! 🐴 I'm Shell 🍡 from 26S78, hoping to fuel ⛽️ your #whyHC fire ❤️‍🔥 and help to build a sweet and warm 🙆‍♀️ second home for every Hwa Chongian!`
                    },
                ]
            },
        ],
        Artemis: [
            {
                groupName: "Hwachietubbies",
                groupDescription: `Over TKK Hill and far away… HwachieTubbies come to play! We are the HwachieTubbies, a hollyjolly yet committed team, ready to bring the Hwa Chong spirit to you! Together, we work to build a community where you belong, and even the sun smiles for you!`,
                members: [
                    {
                        name: "Amelin Goh Yi Lit",
                        description: `EH OH! My name is Amelin and I'm running for council to amplify student voices, champion wellbeing, and make school life more vibrant for everyone!`
                    },
                    {
                        name: "Brandon Lee Zhi Heng",
                        description: `EH OH! I'm Brandon and I'm running for council to add colour to everyone's life, while fostering a school spirit where we can all rely on one another!`
                    },
                    {
                        name: "Chong Kate Lynn, Lea",
                        description: `EH OH! I'm Lea and I'm running for council to make your time spent in Hwa Chong worth looking forward to now, and worth missing dearly later!`
                    },
                    {
                        name: "Ta Hieu Anh Justin",
                        description: `EH OH! I'm Justin and I'm running for council to foster inclusivity and build a tight-knit community where all are proud to call Hwa Chong their home!`
                    },
                ]
            },{
                groupName: "Puppybuddies",
                groupDescription: `By Pups 🐶, For Hwach 🔥. Pups (noun): Pawsome and Pawsitive puppies ready to serve you! Hwach (noun): Home, Warmth, 爱, Care, Hwach. We are Puppy Buddies, and we hope to make your school lives a little brighter, a little better, and a little puppier!❤️`,
                members: [
                    {
                        name: "Huang An",
                        description: `Hey pawls 😂this is Sunshine Pup speaking🌻humans like to call me Huang An I guess🤷‍♀️, but LUCKILY my buddy knows which I prefer..(☀️for sure)`
                    },
                    {
                        name: "Huang Yixin",
                        description: `Heyy Lucky Pup here, or you can call me Yixin🐾. I'm here to spread good vibes 🤩and a little luck 🍀 Hmm something's fishy about Joven…`
                    },
                    {
                        name: "Lee Wai Cheng, Joven (Li Weicheng)",
                        description: `Awoof! I'm Swaggy Pup 😎, I go by cool, blue, tough and Joven too. Don't tell the rest, but I prefer cats 😼, though they are often sleepy, like Andy…`
                    },
                    {
                        name: "Zheng Yongjie Andy",
                        description: `Hey, morning… I'm sleepy pup, Andy.💤 Although I need my beauty sleep, I'll never snooze on your needs!😇 Huang An always disturbs my bedtimes though…🫩`
                    },
                ]
            },{
                groupName: "HCookies",
                groupDescription: `Welcome to our bakery! 🍪A sweet space where ideas rise, teamwork shines and everyone gets a bite of joy. Together we mix creativity, kindness, and leadership to bake up great results. Vote for us as we turn simple ingredients into something amazing!`,
                members: [
                    {
                        name: "Chen Yanyu",
                        description: `🍪Sweet, reliable and baked to serve! I'm Yanyu from A13🐺💙, providing sprinkles of fun to make everything better for everyone! ❤️‍🔥`
                    },
                    {
                        name: "Gerard Chua Wei Yang",
                        description: `🍪Tasty, savoury, and the healthier choice! Heyo, it's Gerard from A13 👀, getting your needs baked to order! 😁 Can I count on you to count on me ⁉️`
                    },
                    {
                        name: "Ren Zihan",
                        description: `Hi! 😆I'm Zihan from S65 and I want to join HCSC to represent ALL OF YOU and let everyone's voices be the ingredients for a greater student life!🍪`
                    },
                ]
            },{
                groupName: "HOWL CHONG",
                groupDescription: `HEAR THE HOWL, HWA CHONG! 🐺 Like a howl in the night, our voices carry far—and at HOWL CHONG, every voice deserves to be heard 📣. Our goal: to listen, represent, and amplify every student's voice. Vote for HOWL CHONG! Together, our HOWLS strong. 🗣`,
                members: [
                    {
                        name: "Benedict Zhong Boyu",
                        description: `HEY HWA CHONG! 🐺 I'm Benedict from 26A13 running for the 53rd HCSC! I want every student's voice heard and to help make HC a place everyone belongs 🤝`
                    },
                    {
                        name: "Lew Xuan Yi",
                        description: `HOWL U DOIN!!🐺🟦 I'm Xuan Yi from 26S6️⃣7️⃣ and I'm running 🏃for the 53rd HCSC! I believe that every student's HOWLS matter and I'm here to amplify YOUR HOWLS!📢`
                    },
                    {
                        name: "Tan Lee Meng Leon",
                        description: `HEYY HWA CHONG! ❤️💛 I'm Leon from 26S69  🏃‍♂️ for 53rd HCSC! #whycouncil: making Hwa Chong a place where every voice matters and everyone belongs.`
                    },
                ]
            },{
                groupName: "HCaffeinated",
                groupDescription: `Hi, we're Team HCaffeinated! We believe HCSC is about serving YOU and strengthening our school community. Through events, initiatives and listening to YOUR voices, we hope to create a supportive, connected and meaningful JC experience for YOU.`,
                members: [
                    {
                        name: "Dai Zitong",
                        description: `Ni hao guys! I'm Zitong from 26S65. I aim to help students' ideas be heard, bridge the gap with councillors, and make JC vibrant and memorable. 😀`
                    },
                    {
                        name: "Guo Heqi",
                        description: `I'm Heqi from 2️⃣6️⃣S6️⃣3️⃣. Inspired by councillors in high school, I wish to serve through council and create a vibrant, meaningful JC experience.👏`
                    },
                    {
                        name: "Mitchell Tan (Chen Lihao)",
                        description: `My STRUGGLE is the students' struggle. While council pretends to matter, we ENDURE alone. That ends TODAY. Together, we will MAKE ARTEMIS GREAT AGAIN.`
                    },
                ]
            }
        ],
        Athena: [
            {
                groupName: "threegreenbeans",
                groupDescription: `Presenting the Three Green Beans🫛: Kenneth, Kun and Jo En! We're dedicated to making your Hwa Chong life un-bean-lievably memorable, precious and fulfilling, by striving to be the coolest beans who always hear you out, count you in and lift you up!`,
                members: [
                    {
                        name: "Kenneth Renald Gunawan",
                        description: `Hi fellow beans! I'm Kenneth, your seed of change for fun welfare-centric events, vibes and making school a place where every bean thrives 🌱🤗🫘`
                    },
                    {
                        name: "Kun Sint Shwe Yee",
                        description: `Hey beans, I'm Kun! I'm the human bean you can talk to and I'll make sure no one feels left out of ANY fun! We're all in the same pod after all 🫛😝🫘`
                    },
                    {
                        name: "Wong Jo En",
                        description: `Hey cool beanzz! I'm Jo En and I'll fill your days with FUN while being the amplifier of the tiniest of voices. You just gotta spill me the beans 😉🫘`
                    },
                ]
            },{
                groupName: "HwaChefs",
                groupDescription: `Hey! We're HwaChefs 🦉🧑‍🍳 School life tasting a lil' bland? Fret not, we've got you covered! Here, every voice is an ingredient 🌿We may not be MasterChefs, but we sure can SERVE you something good 😋 Vote for HwaChefs, let us cook it up with YOU 🫵!`,
                members: [
                    {
                        name: "Lee Sze Chi (Li Siqi)",
                        description: `Ahoot, what's cooking? I'm Sze Chi 😛, bringing some CHIlli to spice up your school life! I lost a kitchen ladle at 2am last night…wonder who took it`
                    },
                    {
                        name: "Li Ruizhe",
                        description: `Ahoot🦉I'm Ruizhe, a treaZHE 💸 who's 🏃to cook your ideas to fRUItion! Psst 🤫, I was doomscrolling IG at 2am… when I heard tinkering in the kitchen!`
                    },
                    {
                        name: "Tay Yu Xin (Zheng Yuxin)",
                        description: `Ahoot! Yuxin here, plating 🍽️creativity 1️⃣idea at a time! I sleepwalked at 2am last night 😴and saw a shadow in the kitchen… …not sure who it was`
                    },
                    {
                        name: "Zhou Ruiyu",
                        description: `Ahoot it's Ruiyu! Hoping for something SPICY🥵? You've got the right guy! I took a ladle for buldak at 2am…wait is that HwaChefs cooking something up⁉️`
                    },
                ]
            },{
                groupName: "Hwachameleons",
                groupDescription: `HEY HWA CHONG! What happens when four chameleons run for Council? Change happens! 💚 Introducing...HWACHAMELEONS!! 🦎Like Chameleons, Hwachameleons Listen and Hwachameleons Adapt. 👂🌱 So Your Hwa Chong Journey Stays on Track! 🛤️`,
                members: [
                    {
                        name: "Aw Le Yu Delroy",
                        description: `What is a polar bear's FAVOURITE food? A burrr-ito 🥶. I am Delroy, the PINK chameleon 🩷🦎! I love LAME JOKES and I believe the lamer the better! 😝`
                    },
                    {
                        name: "Chen Peilin",
                        description: `WHAT'S GOOD HWA CHONG!!!!!! I am Peilin, the ORANGE chameleon 🧡🦎One thing about me is that I LOVE the memories I make with MY FRIENDS! 🙌 #shoutout`
                    },
                    {
                        name: "Chua Ya Ting",
                        description: `Helloo I am Ya Ting, the BROWN chameleon 🤎🦎Did you know 🤔I have never slept past 12am throughout secondary 4 😴🕚and I am still shorter than 155cm`
                    },
                    {
                        name: "Ng Xu Thong",
                        description: `Heyoo I am Xu Thong, the PURPLE chameleon 💜🦎I love photography 📸and doodling 🎨 because it keeps my mind relaxed 😌and I get to be creative :)`
                    },
                ]
            },{
                groupName: "kAHOOTS",
                groupDescription: `HEYYY HWA CHONG! We're James 🔷, Mike 🔺, Shi Han 🟡, and Oxley 🟩 ! We want to make Hwa Chong a place where YOUR voices are heard 🗣️, and a wonderful family ❤️ where YOU are taken care of! We can't wait to work in kAHOOTS🦉with everyone!! ❤️💙💛💚`,
                members: [
                    {
                        name: "James Masao Gan",
                        description: `HI I'm 🔷! Count on me to be YOUR🫵 pillar of support! Rest assured your #whyhc will shine bright✨ and we'll be beautiful like diamonds in the sky! 💎`
                    },
                    {
                        name: "Mike Amadeus Santoso",
                        description: `HIII I'm 🔺! Hwa Chong to me is a loving community ❤️ where we can all rely on each other 🤗 and I hope to build a 2nd home with everyone in it! 🏡🥰`
                    },
                    {
                        name: "Ong Shi Han",
                        description: `Hi, I'm 🟡! Hwa Chong is a warm and friendly family to me 💛. With my cheerful spirit and optimism, I'll make sure every student finds their #whyhc! ✨`
                    },
                    {
                        name: "Oxley Sun Zhi Yuan",
                        description: `Hi I'm 🟩! I believe that Hwa Chong can be a place where everyone finds their community, family and home🏠, a place of empathy, love, and #whyhc 🫂`
                    },
                ]
            },{
                groupName: "the FOURtunates",
                groupDescription: `Hoot Hoot  🤟Hwa Chong! Bringing heart ❤️and some luck 🍀to school, we are the FOURtunates! We are clover-the-moon 🌙 to be running for council and owl 🦉ears to make HC's grass 🌱greener. Leaf 🍃the rest to us, sit tight and stay lucky HC! 🤞`,
                members: [
                    {
                        name: "Chin Si Yu Enya",
                        description: `Mornin' HC I'm Enya! 🍀I'm a shamelessly uncoordinated dancer 👯, a caffeine addict 😵‍💫and you'll probably find me at the toilet before every exam💩`
                    },
                    {
                        name: "Chong Jun Hui",
                        description: `Hey Hwa Chong! 😋I'm Jun Hui 🍀 from 26S7C 🤟and I really love eating banmian 🍜 and I'm always searching  👀for good food places to bigback at 😁`
                    },
                    {
                        name: "Hu Kangrui",
                        description: `Yo Hwa Chong! I'm Kangrui 🍀! I enjoy basketball 🏀and WorldGuessr 🗺️, on a good day, you'll probably find me reading on random historical topics 🤳`
                    },
                    {
                        name: "Julia Zhu Ruixuan",
                        description: `What's up Hwa Chong, I'm Julia🍀! Most days, you'll find me fueled by a good latte ☕ and brainstorming my next DIY gift project for a friend🫰!`
                    },
                ]
            },{
                groupName: "Afterowls",
                groupDescription: `Some shine in the spotlight. We serve beyond it. As After Owls, we lead with heart, work quietly, listen deeply, and follow through with purpose—because true service to the school continues long after the final bell has rung, even when no one sees.`,
                members: [
                    {
                        name: "Lew Zhi Long",
                        description: `Hi! I'm Zhi Long from 26S7C. My goal in council is to positively impact students and make Hwa Chong life a core memory for everyone! 💚`
                    },
                    {
                        name: "Li Junze",
                        description: `Hi! I'm Junze from 26S68 😊 Excited to join the council to serve students, spread school spirit, and make school life more fun!`
                    },
                    {
                        name: "Yuan Haobo",
                        description: `Hi! I am Haobo from 26S68. Through AfterOwls, I hope to offer dependable leadership and serve students with commitment beyond hours. 💚`
                    },
                    {
                        name: "Yu Tao Zhi",
                        description: `Hi! I'm Tao Zhi from 26S6C 😉 Hyped to join the council to serve the student body and promote the strong school spirit for the masses!`
                    },
                ]
            },{
                groupName: "Spear Goblins",
                groupDescription: `Hey Hwa Chong! We are the SPEAR GOBLINS 🐸and we are here to SPEARHEAD 🔱meaningful change for YOU! If you place YOUR bets on the Spear Goblins, we will make sure NO GOBLIN walks alone and everyone will be able to SHOOT YOUR SHOT🏹 and NEVER MISS🎯.`,
                members: [
                    {
                        name: "Chen Yiheng",
                        description: `Hola! I'm Yiheng 🦖 and I'm the charismatic goblin! I really want to grow taller because my grandma says I'm not a real man if I don't hit 180cm 😢.`
                    },
                    {
                        name: "Li Borui",
                        description: `Heyya! I'm Borui and I'm the responsible goblin! My favourite band is Empire of the Sun, and in my free time I do photography📸, and watch repair⌚.`
                    },
                    {
                        name: "Low You Quan Ethan",
                        description: `Hej! I am Ethan and I'm the open-minded goblin. 👺 I have a diverse music taste, from many languages, eras and genres. I learn Japanese as a hobby.`
                    },
                ]
            }
        ]
    }

    const selectedGroup = ref(null)
    const selectedFaculty = ref(null)

    function selectGroup(faculty, index) {
        selectedGroup.value = index
        selectedFaculty.value = faculty;
        console.log(faculty + index);
    }
</script>