<script setup>
import CouncilCard from '../components/CouncilCard.vue';

const councillors = {
  "NSE": {
    "Chia Zhen Teng": {
      "position": "President, EleCo NSE Attaché",
      "description": "hi! im zhen teng from the Non-Stop-Eating committee 😋. while i never stop eating, i also never sleep enough 💤 (pls don't confuse me with the eleco sec-tres)"
    },
    "Zhou Jingyi": {
      "position": "Vice President, O1Co NSE Attaché",
      "description": "heyy! i’m jingyi from the Need-Strong-Espresso committee😪. although i’m low on caffeine 24/7, im never snoozing on y'all🫡. but i’ll need more than coffee to get through these spreadsheets☹️ (jake told me to put 1100 bananas into the procurement form🍌🙈)"
    },
    "Chua Zhi En": {
      "position": "General Secretary, MAFCo NSE Attaché",
      "description": "helllooo!!! im zhi en 🦸‍♀️💜🌕 from the Natural-Spreadsheet-Experts committee. i typed =FUN() and suddenly the words started juggling themselves 🎪. now im stressed 😞😧"
    },
    "Elijah Christian Koh Zhi En": {
      "position": "General Secretary, OHCo NSE Attaché",
      "description": "hellooo! im also zhi en and im from the Never-Stressing-Enough committee 🙀🙀 im trying to write today’s morning mumbles but i cant think of a good joke 😧 maybe i shld email jian kai for help… 😨"
    },
    "Chan Jian Kai": {
      "position": "General Treasurer, MAFCo NSE Attaché",
      "description": "heya! i'm jian kai from the Never-Stop-Emailing committee  📩 i might have hit “send” with one too many digits in my email to the bento company 😬 …guess we're in for a feast 🍽️🤤!"
    }
  },
  "EcaCo": {
    "Noelle Lee Hsuen": {
      "position": "President of Green Council, MAFCo Member",
      "description": "Hi! I’m Noelle 🍀 and I’m the detective🕵️‍♀️! When I was at the buttgard🌳🌸 just now, I heard a loud scream and I saw Karine running away. Just as I suspected🤨🧐, her hands were stained red with blood 🩸 … "
    },
    "Karine Toh Yun Ying": {
      "position": "President of Students’ National Education Council (SNEC), EleCo Member",
      "description": "helloo! I’m Karine 😀 When I was leaving the sniac room after taking a yuuuuuumy 🧟 nap 😴 , i saw noelle hiding suspiciously 🤨 behind the buttgard trees… 🧐"
    },
    "Tan Xuanqi, Arin": {
      "position": "President of Values-In-Action Council (VIAC), TDCo Member",
      "description": "HELLO! I’m Arin 🫰and last night, when I was in the SNIAC Room packing care packages 🎁and planning our next volunteering session, 🫂I decided to guard Mikhail 👼 Uh oh why is Karine here? ⚰️😵"
    },
    "Mikhail Sergeyevich Parinov": {
      "position": "Vice President of Green Council, O1Co Member",
      "description": "Greetings! I’m Mikhail and I'm the oh so benevolent and marvelous doctor🧑‍⚕️! Last night when I was vetting the National Day Celebration proposal 🇸🇬🎉, Atria failed REAMs♻️ so I decided to poison her morning Teh Peng🫖 as a punishment! 😡😛"
    },
    "Djie Atria": {
      "position": "Vice President of Students’ National Education Council (SNEC), OHCo Member",
      "description": "helloo!! I'm atria 🫀, the steadfast and courageous knight ⚔️! Last night, someone POISONED me 🤢☠️while I was editing ✍️ my NDC proposal…so I took my revenge by challenging 🎯 Brayden!"
    },
    "Brayden Tee Qi Yuan": {
      "position": "VicePresident of Values-In-Action Council (VIAC), OHCo Member",
      "description": "Hi! I’m Brayden😛, after a challenging 🎯long day of volunteering 🫶at the Active Ageing Centre, I felt inspired to be extra compassionate 🥰and spread kindness to everyone!!! 🎉🥹😇"
    },
    "Chia Zhen Teng": {
      "position": "NSE Attaché, EleCo NSE Attaché",
      "description": " hi! I’m Zhen Teng and I’m innocent 💀. Last night, Brayden killed me :("
    }
  },
  "PubCo": {
    "Benjamin Lien Chen Yan": {
      "position": "PubCo Chairperson, OHCo ExCo Attaché",
      "description": "hi i'm benjamin! 👨‍💻🎬i have a dream that one day pubco members will chain themselves ⛓️⛓️⛓️"
    },
    "Lee Si Ying, Renae": {
      "position": "PubCo Secretary-Treasurer, PromCo Member, EleCo Member",
      "description": "HIII🤗🥰! i'm renae 🖼️🖌️and i dream that one day our posts will all line up while we snack🍽️🍰🍣🍪"
    },
    "Chan Jian Kai": {
      "position": "NSE Attaché, MAFCo NSE Attaché",
      "description": "hey! i'm jian kai 🎨 💻 and i have a dream that one day posts will design themselves while we nap 🥱"
    },
    "Danielle Oh Xuan Rong": {
      "position": "PubCo Member, MAFCo Member, O1Co Member",
      "description": "heyy i'm danielle 🦭 and i have a dream that one day the school will be decorated with lots of food 🍔 🫐 🍽️"
    },
    "Goh Mu Xun": {
      "position": "PubCo Member, TDCo Member, OHCo Member",
      "description": "hihi i'm mu xun 🐄🍄 and I have a dream that one day all my 📸 shots are 😎 smooth like ✨butter✨ 🧈 (and i won't be the criminal🦹 under cover😱)"
    },
    "Hebe Tang Qiao En": {
      "position": "PubCo Member, MAFCo Member, OHCo Member",
      "description": "hey! im hebe 📢😛 and i have a dream that one day i will get 8 hours of sleep per day every day 🥱😴🛏️💤"
    },
    "Huang Xi": {
      "position": "PubCo Member, PromCo Chairperson, EleCo Member",
      "description": "HIIIII im huang xi sophie and I have a dream that one day the school will be decorated with hello kitty😼😼😸😸😽😽 (Party, cocktail, and everything nice, Blossom signing in😉🌸🌸)"
    },
    "Kartha Jeremiah Jeevan": {
      "position": "PubCo Member, TDCo Member, O1Co Member",
      "description": "hi! i'm jeremiah! i have a dream where one day in the future i will not be locked up ⛓️‍💥⛓️‍💥⛓️‍💥, and be locked in 😭✌️"
    },
    "Lin Zicheng": {
      "position": "PubCo Member, MAFCo Member, O1Co Member",
      "description": "hey chat!! I'm Zicheng, but most people call me Charlie 🍫 and I have a dream that one day procreate would stop registering my farts 💨 💨  as the gesture to erase my canvas 😔😔 (they're not even that loud 😭😭 ) "
    },
    "Ng Yu Wen": {
      "position": "PubCo Member, MAFCo Secretary-Treasurer, EleCo Member",
      "description": "hello im yu wen 📸 🥮 I have a dream that hcunite reels trended worldwide 😮‍💨😮‍💨"
    },
    "Sincere Foo": {
      "position": "PubCo Member, PromCo Member, O1Co Chairperson",
      "description": "HI EVERYONE 🌟🌟 I'm sincere 💝and I have a dream that one day I will be rewarded with one cup of matcha🍵 for every pub work I do 🤗🤗💪💪  (I told Jake to get 1100 bandanas 🙉🙉)"
    }
  },
  "SnR": {
    "Teo Jie Jun Jayden": {
      "position": "SnR Chairperson, O1Co ExCo Attaché",
      "description": "helloo friends! ❤️💛💚💙 i’m jayden and ohgyat do you hear that music… who is THAT dancing away? 😱😱 (jingyi asked me to help her collect 1100 bananas, sincere looks confused 😓)"
    },
    "Goh Kai Tong": {
      "position": "SnR Secretary-Treasurer, TDCo Member, EleCo Member",
      "description": "HEYO i'm kai tong!!💃 ❤️💛💚💙 as i was grooving around, i think i just witness super women fly past the barn....?! 🦸‍♀️👀"
    },
    "Chua Zhi En": {
      "position": "NSE Attaché, MAFCo NSE Attaché",
      "description": "HELLOOO im zhi en!! ❤️💛💚💙 i was flying walking to sch one day and i saw a yellow cow 🐮☀️☀️ omg she's mooooving here right now… "
    },
    "Pan Xi": {
      "position": "Apollo Faculty Head, MAFCo Member",
      "description": "radiant day to all!! ☀️💛 i am panxi and i was just on my moorning walk (haha…) 😁 wait where’s that cow off to…and why is he shouting cowabunga ⁉️🐮"
    },
    "Jovan Lim Chen Yu": {
      "position": "Apollo Deputy Faculty Head, O1Co Member",
      "description": "COWabunggaa everyone I'm Jovan!! 🌟 i was just at the moooovies 🐮💛 and WHOA! who's that gal galloping down the street??"
    },
    "Tan E Shyan": {
      "position": "Ares Faculty Head, O1Co Member",
      "description": "HAYYYY EVERYONE I’M E SHYAN, ready to stirrup some fun!!🐴❤️‍🔥 Oh wait… mamma mia what’s that guy doing horsing around?? 😟☝️🐎"
    },
    "Ryan Vaswani": {
      "position": "Ares Deputy Faculty Head, OHCo Member",
      "description": "Haylooo, it’s Ryan🐴, just horsing around as usual. But—AWOOOOO!! 🐺🌕 Don’t neigh-glect the alpha wolf, ‘cause he’s ready to howl up a storm! 🥶"
    },
    "Yang Shurui": {
      "position": "Artemis Faculty Head, TDCo Member",
      "description": "Awoo-nderful day pups! I’m Langshurui🐺💙and it’s been a howlsome day✨…until I spotted a big bad wolf wolfing down ALL my food??😡🍔"
    },
    "Choo Qian Ning": {
      "position": "Artemis Deputy Faculty Head, O1Co Member",
      "description": "awesome pawsome day everybody I am qian ning! 🐺 holy moly I see an owl with a lightsaber, is it the ahoot king? 😱🔥"
    },
    "Ong Jia Zhen": {
      "position": "Athena Faculty Head, O1Co Member",
      "description": "hello im jiazhen! ahoot ahoot omg i see an owl that looks like me. wowww but hes a little taller and a little cuter 🥰 i hope we can be ahoot friends 🙏"
    },
    "Kong Cheng Jun": {
      "position": "Athena Deputy Faculty Head, PromCo Member",
      "description": "Hey everyone, I'm Cheng Jun! 🦉💚 Just flew in from a night of winging it😆 AHOOT who's that nonchalant guy sitting down like a boss? boss music plays"
    }
  },
  "SecCo": {
    "Lau Han Ning": {
      "position": "SecCo Chairperson, PromCo ExCo Attaché",
      "description": "HELLO i’d like to report that kong yi stole my secco shirt! 😡😡 i’m han ning and i’m the chairperson of the elijah’s dad fan club 👨 and secco 💗 but the edfc 👨 is #1 in my heart 💁‍♀️💁‍♀️ (party, cocktail and everything nice, buttercup signing in 😎🍀🍀)"
    },
    "Goh Kong Yi": {
      "position": "SecCo Secretary-Treasurer, MAFCo Member, EleCo Member",
      "description": "HI i'm kong yi and i'm pretty sure han ning took my shirt by accident although it's LITERALLY one size larger than hers 🤦‍♂️🤦‍♂️ but i heard elijah's dad prints money so maybe i'll get some from him to get a new shirt 😁🤑"
    },
    "Elijah Christian Koh Zhi En": {
      "position": "NSE Attaché, OHCo NSE Attaché",
      "description": "HELLO! im elijah and i am a proud owner of three secco shirts 👚👚👚 i’ve been hearing that my dad is a man of many professions… 🤔🤔🤔 does anyone happen to know anything about it! 😨"
    },
    "Liu Jinghan, Sophie": {
      "position": "Student Engagement Coordinator, MAFCo Member, OHCo Secretary-Treasurer",
      "description": "hi I'm sophie and I'm the SNC that laughs at my own jokes on stage 🤣🤣 elijah's dad is my comedic inspiration 😋 I heard he invented knock knock jokes, he truly deserves the no-bell prize 🥸🏆 (hahahahahaha)"
    },
    "Tan King Hei Isaac": {
      "position": "Student Engagement Coordinator, PromCo Member, EleCo Member",
      "description": "hi im isaac and im the SNC that keeps hitting tiktok dances on stage 😛 that’s why i always count on elijah’s dad for a speaker to blast my music from 💔🥀"
    },
    "Chong En Yu": {
      "position": "Song I/C, PromCo Secretary-Treasurer, OHCo Member",
      "description": "hello! i'm enyu, song ic ##1 1️⃣🥇☝🏻i won 1st place at a singing competition held by elijah’s dad last year 🤷🏻‍♀️ i think he also offers vocal lessons... maybe i'll sign up to learn how to harmonize 👏🏻 (Party, cocktail and everything nice, Bubbles signing in 😋🫧🫧)"
    },
    "Li Yuquan": {
      "position": "Song I/C, PromCo Member, EleCo Member",
      "description": "hello! i'm yuquan, song ic ##2 2️⃣🥈✌ I won 2nd place at a singing competition held by elijah's dad last year 👨‍🎤i heard he offers vocal lessons too🧐maybe i should sign up to learn how to hit higher notes🎤🆙"
    },
    "Choo En Min, Chloe": {
      "position": "Dance I/C, TDCo Chairperson, OHCo Member",
      "description": "hellos! i’m chloe, DA (the) dance ic 💃 did you see yun xin? cos she’s 在我心里 😝 oh! elijah's dad built a dance studio for us to practice our choreo and moves too! 😎🕺🪩 #HUATS 🧧🧧"
    },
    "Teng Yun Xin": {
      "position": "Dance I/C, TDCo Member, OHCo Member",
      "description": "hii! i'm yun xin, the dance ic 🆙💖i'm chloe's favourite partner in crime DAh (duh) ☺️ elijah's father promised to sponsor us 🩰 & i'm highly looking forward to that🤞🧋😋 "
    },
    "Jake Ying Jue Rui": {
      "position": "Cheer I/C, PromCo Member, O1Co Secretary-Treasurer",
      "description": "i think we should have 2000 people for nsg supp- chat am i muted. Hi i am jake. Elijah's dad folded me 1100 clappers... we using it for tnf i guess? (i asked jingyi to put 1100 bandanas in the procurement form)"
    },
    "Ong Yee Lynn": {
      "position": "Cheer I/C, MAFCo Member, EleCo Member",
      "description": "woah it's finally so peaceful in here. Hi guys im yee lynn. I think elijah's dad is the national stadium... let's break the floor during tnf"
    }
  },
  "WelCo": {
    "Ashton Tan Ke Han": {
      "position": "WelCo Chairperson, TDCo Exco Attaché",
      "description": "HI i'm Ashton and \"i'm ready to go to work!!\" ~ Spongebob 💼🧽"
    },
    "Yang He": {
      "position": "WelCo Secretary-Treasurer, MAFCo Member, O1Co Member",
      "description": "HII, I'm Yang He and remember \"A wise bear always keeps a marmalade sandwich in his hat in case of emergency 🧸🍞🫰\" ~ Paddington 🧸🍞🫰"
    },
    "Zhou Jingyi": {
      "position": "NSE Attaché, O1Co NSE Attaché",
      "description": "HIII i'm Jingyi and \"Some people (y'all) are worth melting for:)🥺\" ~ Olaf"
    },
    "Daryl Lee Tzer Yuh": {
      "position": "WelCo Member, TDCo Secretary-Treasurer, O1Co Member",
      "description": "HIIII i'm Daryl and \"It never hurts to keep looking for sunshine ☀️\" ~ Eeyore 🫏"
    },
    "Huang Ju": {
      "position": "WelCo Member, PromCo Member, OHCo Member",
      "description": "˖°𓇼⋆ HIIIII i'm huang ju and \"when life gets you down, do you wanna know what you’ve gotta do? Just keep swimming🌊.” ~ Dory🐠•"
    },
    "Kwa Ming Feng": {
      "position": "WelCo Member, TDCo Member, OHCo Chairperson",
      "description": "HIIIIII i'm Ming Feng and \"to laugh at yourself is to love yourself. 😍\" ~ Mickey Mouse 🐭"
    },
    "Randal Siow Yi Xuan": {
      "position": "WelCo Member, MAFCo Chairperson, O1Co Member",
      "description": "HIIIIIII i’m Randal and “The flower that blooms in adversity is the most rare and beautiful of all🌻” ~ Mulan🌟🤩"
    },
    "Rishika Kashyap": {
      "position": "WelCo Member, TDCo Member, EleCo Member",
      "description": "HIIIIIIII i'm Rishika and life advice 101 \"you're never too old to be young☀️🍀\" ~ Snow White and the seven dwarfs ☃️❄️🗻🌨️"
    },
    "Shane Lee Zi Hao": {
      "position": "WelCo Member, PromCo Member, EleCo Chairperson",
      "description": "HIIIIIIIII i’m shane and “if you are what you eat, then i only want to eat the good stuff” ~ Remy😆(i keep on mixing up the eleco sec-tres and eleco attaché)"
    },
    "Tan Zhen Ying": {
      "position": "WelCo Member, MAFCo Member, EleCo Secretary-Treasurer",
      "description": "HIIIIIIIIII i'm zhen ying and \"I'm always on (Common Room) duty!🥰\" ~ Inspector Gadget🔎 (pls don't confuse me with the eleco attaché)"
    }
  }
}

</script>

<template>

<!-- hero section -->
    <section class="mt-30 pb-12">
        <h1 class="z-20 text-black lg:text-8xl w-full text-center p-4">52ND STUDENTS' COUNCIL</h1>
        <img src="/images/52nd/52nd_HCSC.jpg" alt="background" class="z-0 w-full">
        <div class="p-6">
            <p class="centered-text-block">
                (FROM LEFT TO RIGHT)
                <br><br>Front Row:
                <br>
                Ms Chan Hui Chieh (Teacher Advisor); 
                Mrs Raj-Priyahlatha Nainar (Teacher Advisor); 
                Mr Edwin Zheng Zhehong (Teacher Advisor); 
                Ms How Lai Yin Deborah (Deputy Principal (College)); 
                Zhou Jingyi; 
                Mr Lee Peck Ping (Principal); 
                Chia Zhen Teng; 
                Dr Lim Hong Seng Melvyn (Deputy Principal (College)); 
                Ms Lim Siew Hui (HOD / Student Leadership)
                Mr Jeremy Ng (Teacher Advisor);
                Mr How Hung Kin (Teacher Advisor);
                Dr Sin Yee Theng (Teacher Advisor)
                <br><br>Second Row: 
                <br>
                Noelle Lee Hsuen; 
                Karine Toh Yun Ying; 
                Lau Han Ning;
                Chua Zhi En; 
                Benjamin Lien Chen Yan; 
                Chan Jian Kai; 
                Ashton Tan Ke Han; 
                Elijah Christian Koh Zhi En; 
                Teo Jie Jun Jayden; 
                Tan Xuanqi, Arin; 
                <br><br>Third Row:
                <br>
                Lee Si Ying, Renae; 
                Tan King Hei Isaac; 
                Lin Zicheng
                Jovan Lim Chen Yu; 
                Kartha Jeremiah Jeevan; 
                Randal Siow Yi Xuan; 
                Mikhail Sergeyevich Parinov; 
                Daryl Lee Tzer Yuh; 
                Brayden Tee Qi Yuan; 
                Goh Mu Xun; 
                Jake Ying Jue Rui;
                Ryan Vaswani; 
                Kwa Ming Feng; 
                Li Yuquan; 
                Ong Jia Zhen; 
                Sincere Foo; 
                <br><br>Fourth Row:
                <br>
                Ng Yu Wen; 
                Ong Yee Lynn; 
                Tan E Shyan; 
                Choo En Min, Chloe; 
                Rishika Kashyap; 
                Goh Kong Yi; 
                Liu Jinghan, Sophie; 
                Teng Yun Xin; 
                Tan Zhen Ying; 
                Chong En Yu; 
                Hebe Tang Qiao En; 
                Djie Atria; 
                <br><br>Last Row:
                <br>
                Choo Qian Ning; 
                Shane Lee Zi Hao; 
                Pan Xi; 
                Huang Ju; 
                Kong Cheng Jun; 
                Yang Shurui; 
                Yang He;
                Goh Kai Tong; 
                Huang Xi; 
                Danielle Oh Xuan Rong; 
            </p>
        </div>
    </section>

    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <section class="w-full py-15 px-6">
        <div class="w-full">
            <h2 class="!text-left centered-text-block">A message from the 52nd...</h2>
            <p class="centered-text-block mt-6 ">
                Hi everyone! We’re the 52nd Hwa Chong Students’ Council (HCSC)!
                <br><br>We are a passionate cohort of 50 Councillors who are privileged 
                to have received the mandate from our peers to serve our school, and more importantly, our student body.
                <br><br>Since its inception in 1974, the Council has strived to make the JC experience a memorable one 
                for every student through building a home for all right here in Hwa Chong. 
                As leaders, we endeavour to be the voice that represents you – the students. 
                We do so through our commitment to carry out our responsibilities to the best of our ability, 
                working as one for the interest of the school, and the welfare of the students.
            </p>
        </div>
    </section>
    
    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <section class="w-full py-15 px-6">
        <div class="w-full">
            <h2 class="centered-text-block">Our Committees</h2>
            <p class="centered-text-block mt-6">
                The HCSC consists of the Executive Committee, the 5 Standing Committees (SC), and the 7 Working Committees (WC).
                Headed by the Non-Standing Executive Committee (NSE), the 5 SCs work together over their 2 Council Terms to best serve the students and their needs, in their differently unique aspects. 
                <br><br>The 5 SCs consist of: the Extended Council Attaché Committee (ECACo), the Publications and Publicity Committee (PubCo), the Student Engagement and Culture Committee (SECCo), 
                the Social and Relations Committee (SnR), and the Welfare Committee (WelCo).
                <br><br>The 7 WCs serve to organise 7 Working Events, namely Teachers’ Day (TDCo), Mid-Autumn Festival (MAFCo), Senior Promenade (PromCo), 
                Open House (OHCo), Orientation (O1Co), Chinese New Year (CNYCo) and Elections (EleCo). 
                Each WC consists of its elected Chairperson, Secretary-Treasurer, ExCo Attaché, and members.
            </p>
        </div>
    </section>

    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <section class="py-12 px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/52nd/52nd_NSE.jpg" alt="">
                    <h2 class="ml-6 font-semibold">NSE</h2>
                    <button @click="$refs.nse.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:py-3 sm:max-w-[50%] md:max-w-[30%] lg:text-sm sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/52nd/52nd_EcaCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">ECACO</h2>
                    <button @click="$refs.ecaco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/52nd/52nd_PubCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">PUBCO</h2>
                    <button @click="$refs.pubco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/52nd/52nd_SecCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">SECCO</h2>
                    <button @click="$refs.secco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/52nd/52nd_SnR.jpg" alt="">
                    <h2 class="ml-6 font-semibold">SNR</h2>
                    <button @click="$refs.snr.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/52nd/52nd_WelCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">WELCO</h2>
                    <button @click="$refs.welco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
        </div>
    </section>

    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <!-- nse -->
    <section ref="nse" class="pb-12 px-3">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/52nd/52nd_NSE.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-70">
            <h1 class="absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.5em] text-3xl/10 sm:text-5xl/18 lg:tracking-[0.4em] lg:text-8xl/33">
                THE NON-<br>
                STANDING<br>
                EXECUTIVE<br>
                COMMITTEE<br>
                (NSE)
            </h1>
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                As the core body in the Executive Committee, the Non-Standing Executive Committee is responsible for 
                steering the council direction, while pushing boundaries to lead the council to greater heights. 
                On an individual level, the committee is committed to supporting each and every councillor to pursue their passions, 
                and partner them in their council journey ahead.
            </p>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['NSE']" 
            :key="name" 
            :name="name" 
            council="NSE" 
            year="52nd" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- ecaco -->
    <section ref="ecaco" class="pb-12 px-3">
        <div class="aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/52nd/52nd_EcaCo.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-70">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.3em] text-2xl/10 sm:text-5xl/18 lg:tracking-[0.4em] lg:text-8xl/25">
                THE EXTENDED-<br>
                COUNCIL<br>
                ATTACHE<br>
                COMMITTEE<br>
                (ECACO)
            </h1>
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                The Extended Council Attaché Committee comprises the Councillors who serve as Presidents and Vice-Presidents 
                to the Values-In-Action Council, Green Council and Students' National Education Council. 
                Each of these Presidents and Vice Presidents will serve in both the Students' Council and their 
                Extended Councils, acting as a bridge to promote better communication between leadership bodies. 
                In doing so, they work to build meaningful collaborations 
                that will create a holistic experience for the student body.
            </p>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['EcaCo']" 
            :key="name" 
            :name="name" 
            council="EcaCo" 
            year="52nd" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- pubco -->
    <section ref="pubco" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/52nd/52nd_PubCo.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-70">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.4em] text-2xl/10 sm:text-5xl/18 lg:tracking-[0.2em] lg:text-8xl/25">
                THE PUBLICATIONS<br>
                AND PUBLICITY<br>
                COMMITTEE<br>
                (PUBCO)
            </h1>
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                Through the use of HCunite and the Council Board, the Publication and Publicity Committee 
                publicises council events and initiatives, 
                aiming to increase communication and transparency between the student body and the Students' Council. 
                Moreover, our team is also dedicated to promoting a common identity for the Council and the school, 
                while aspiring to make student life more exciting!
            </p>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['PubCo']" 
            :key="name" 
            :name="name" 
            council="PubCo" 
            year="52nd" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- secco -->
    <section ref="secco" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/52nd/52nd_SecCo.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-70">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.5em] text-2xl/10 sm:text-5xl/18 lg:tracking-[0.3em] lg:text-8xl/30">
                THE STUDENT<br>
                ENGAGEMENT<br>
                AND CULTURE<br>
                COMMITTEE<br>
                (SECCO)
            </h1>
        </div>

        <div class="px-6 py-12 text-center md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                By forging common experiences, 
                the Student Engagement and Culture committee aspires to be the champion of our school's culture and identity, 
                fostering a strong sense of belonging to the school, 
                and keeping the Hwa Chong spirit burning bright. 
                The committee is also the torchbearer of our school's vibrant song, dance and cheer culture, 
                also known as SODACHE. 
                The Student Engagement and Culture Committee works to strengthen student bonds and 
                create memories that will last a lifetime.
            </p>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['SecCo']" 
            :key="name" 
            :name="name" 
            council="SecCo" 
            year="52nd" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- snr -->
    <section ref="snr" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/52nd/52nd_SnR.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-70">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.5em] text-2xl/10 sm:text-5xl/18 lg:tracking-[0.3em] lg:text-8xl/30">
                THE SOCIAL<br>
                AND RELATIONS<br>
                COMMITTEE<br>
                (SNR)
            </h1>
        </div>

        <div class="px-6 py-12 text-center md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                The Social and Relations Committee seeks to be the eyes and ears of the council, 
                championing grassroot efforts to connect with the student body on a deeper level. 
                Through building bonds and promoting interactions between the council and the student body, 
                the committee strives to inculcate a unified sense of belonging to the school across all domains, 
                promoting the #Facs1Hwach spirit that we all know and love! 
                In addition, the committee spearheads external communications with external Councils from other institutions, 
                laying the groundwork for prospective collaborations to further vitalise the experience of Hwa Chongians.
            </p>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['SnR']" 
            :key="name" 
            :name="name" 
            council="SnR" 
            year="52nd" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- welco -->
    <section ref="welco" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/52nd/52nd_WelCo.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-70">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.5em] text-2xl/10 sm:text-5xl/20 lg:tracking-[0.4em] lg:text-8xl/40">
                THE WELFARE<br>
                COMMITTEE<br>
                (WELCO)
            </h1>
        </div>

        <div class="px-6 py-12 text-center md:text-left">
            <p class="max-w-[700px] mx-auto font-poppins">
                The Welfare Committee champions the welfare of the student population with heart and dedication. 
                The committee strives to promote the well being of the student population for a conducive learning environment for 
                all HwaChongians. Through infrastructure such as the Common Room and Welfare Room, 
                the committee reaches out to the student body, 
                rendering services and hosting activities that add vibrancy to the student experience. 
                As the saying in the Welfare Committee goes, "Your Welfare Is Our Affair". 
                The 52nd Welfare Committee hopes to do their best to let you smile a little wider, laugh a little louder.
            </p>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['WelCo']" 
            :key="name" 
            :name="name" 
            council="WelCo" 
            year="52nd" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>
</template>