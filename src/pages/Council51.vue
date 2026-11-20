<!--
  Council51.vue — the 51st HCSC council page. `councillors`
  below is a hand-maintained object of { committeeName: { councillorName:
  { position, description } } }; CouncilCommittee.vue turns each
  committee into a grid of portraits (see src/pages/README.md for the
  full format and the image-naming convention it depends on).
-->
<script setup>
import CouncilCommittee from '../components/CouncilCommittee.vue'
import CouncilYears from '../components/CouncilYears.vue'
import PageHero from '../components/PageHero.vue'

const councillors = {
    "NSE": {
        "Seah Jin Rong":{
            "position": "President, EleCo Attaché",
            "description": "Hi I’m Jin Rong. Although I’m never sleeping enough, I’ll never sleep on your needs ‼️‼️ https://www.urbandictionary.com/define.php?term=sleep"
        },
        "Hor Sze Jia":{
            "position": "Vice President, MAFCo Attaché",
            "description": "Wassup‼️! I’m Sze Jia and I love to sleep 😴💤but I’m never sleeping enough 🥱🥱 (maybe that’s the reason for my height🧍‍♀️ - or lack thereof) BUT that’s only cause I’m always here to serve YOU! 🆙🔝"
        },
        "Chua Ying Feng, Daryl":{
            "position": "General Secretary, O1Co Attaché",
            "description": "hi i’m daryl. i enjoy hiding behind large pillars while wearing a scary mask to look mysterious."
        },
        "Tan Jin Yi":{
            "position": "General Secretary, PromCo Attaché",
            "description": "hi i’m jin yi. 👸🏻🥂🫅🏻 yesterday i was walking past a pillar when i saw a big dark figure and screamed. "
        },
        "Lai Sin Yie":{
            "position": "General Treasurer , OHCo Attaché",
            "description": "hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream."
        }
    },
    "EcaCo": {
        "Lee Wei Yi": {
            "position": "President of Students’ National Education Council (SNEC), OHCo Member",
            "description": "onionhaseyo, I'm Wei Yi 👋👋🧅\n\nSNEC is home truly 🏠 🇸🇬🇸🇬\n\nI'm here to spread the ❤️‍🔥 for 🇸🇬 with my oppar 🔥🔥And I'm not the most kaypoh in council"
        },
        "Leow Junn Kai, Jonathan": {
            "position": "President of Green Council, EleCo Member",
            "description": "GREENtings everyone, I’m Jonathan and I’m one of the two proud members of Council’s very own SUSco (Sustainability Committee) and the caretaker of the HCSC lounge! I’m here to infect you with love for AUTUMM 🍂🍂🍂and the beautiful earth🌐!"
        },
        "Mock Yee Ken, Ethan": {
            "position": "President of Values-In-Action Council (VIAC), O1Co Member",
            "description": "Hello I’m Mock 😝 and as the resident fisherman of HCSC, I have to work with a KOI fish for my council term🐟 I’m here to spread the love 💙 for service 🫂 SEE YOU AROUND and on @viacouncil 🩵😎"
        },
        "Wui Jeongjun": {
            "position": "Vice-President of Students’ National Education Council (SNEC), CNYCo Member",
            "description": "onionhasayyo, I'm Jeongjun‼️‼️🧅\n\nSNEC is home surely 🏠🇸🇬🇸🇬\n\nI’m here to spread the love ❤️‍🔥 for  🇸🇬  with my boss 🤪🔥🔥"
        },
        "Anya Wong Ann Ya": {
            "position": "Vice-President of Green Council, TDCo Member",
            "description": "GREENtings everyone, I’m Anya and I’m two of the two proud members of Council’s very own SUSco (Sustainability Committee) and the great consumer of GC welfare! I’m here to imbue you with love for SPRING 🌱🌱🌱and the beautiful earth🌐!"
        },
        "Koi Xin Yi Tricia": {
            "position": "Vice-President of Values-In-Action Council (VIAC), PromCo Member",
            "description": "HELLO! I’m Tricia and as the funnier one in the duo, Ethan likes to MOCK me​​😱 I’m here to spread laughters and the love 💙 for service 🫂 SEE YOU AROUND and on @viacouncil 🩵😽🫶"
        },
        "Seah Jin Rong": {
            "position": "NSE Attaché, EleCo Attaché",
            "description": "Hey everyone I’m Jin Rong, but you can call me seah cuz I love Singapore, recycling and service so much siaa 🫶🏼🫶"
        }
    },
    "PubCo":{
        "Dan Ming Zhen": {
            "position": "Chairperson, CNYCo Attaché",
            "description": "hi i’m ming zhen and i’m a good boss that doesn’t abuse my sec-tres or my attaché. I oso don't owe anyone anything"
        },
        "Madeline Soo Qian Han": {
            "position": "Secretary-Treasurer, OHCo Member, CNYCo Member",
            "description": "hi i'm madeline 🫢 and i’m a good sec-tres who is abused by my boss 😓. i see a sleep deprived coder staring at me… mz owes me my medical bills 💻🤕"
        },
        "Chua Ying Feng, Daryl": {
            "position": "NSE Attaché, O1Co Attaché",
            "description": "Hi I’m Daryl and I’m a “good” Attaché who is abused by both my boss and my sec-tres. mz owes me a brawl pass and an nric"
        },
        "Chia Hao Yang, Kyle": {
            "position": "Designer, OHCo Member, EleCo Member",
            "description": "Hi I’m Kyle 😎 and I’m a good designer who is 549cm tall 👢🎀💄💅 i see both an artist and a coder staring at each other…weird…🫰 mz owes me his firstborn 👶🏼"
        },
        "Declan Ng Kian Heng": {
            "position": "Video Editor, OHCo Member, EleCo Member",
            "description": "hi! i’m declan and i’m a councilor by day, superhero by night. i see a sleep deprived artist on the streets... mz owes me a new CANON R8 📸"
        },
        "Kayden Seah Chung Hian": {
            "position": "Video Editor, MAFCo Secretary-Treasurer, EleCo Member",
            "description": "hi i'm kayden 😇🤪 and you make me sweat 😅 every time i edit cos you look way too hot on cam 💥💥 mz owes me my sanity 😭😭"
        },
        "Celeste Wong Xin Yi": {
            "position": "Video Editor, PromCo Secretary-Treasurer, CNYCo Member",
            "description": "Hi I’m Celeste 😚🌠 and I think you should catch reels 🎞️ , not feels 😉🧏🏻‍♀️ 💯 Ming Zhen owes me a trip to the Four Seasons Orlando 😇💆🏻‍♀️🧖🏻‍♀️ 👸🏻🥂🤴🏻"
        },
        "Lim Jin Xin": {
            "position": "Video Editor, OHCo Member, EleCo Secretary-Treasurer",
            "description": "hi i’m jinxin 😛😈 and i think you should catch feels for our reels though ☝️😵  mz owes me acai"
        },
        "Wong Jun Heng": {
            "position": "Video Editor, OHCo Secretary-Treasurer, CNYCo Member",
            "description": "hi I’m Jun Heng and mz owes me an attack helicopter with giraffe pilots 🦒🛩️🌇"
        },
        "Xu Shaozhe": {
            "position": "Video Editor, MAFCo Member, O1Co Member",
            "description": "hi i’m shaozhe 😙 and mz owes me an icloud subscription for my 170gb worth of photos and 10gb of procreate!!!!!!😠😠😠😠 i also always spot someone looking at maf proposals during breaks 🤔🤔"
        },
        "Zhu Zixuan": {
            "position": "Video Editor, MAFCo Member, EleCo Member",
            "description": "Hi I’m Zixuan 😄😄 and I like cameras and skateboards 😋😋 because they both hurt my wrist 📸🛹. Ming Zhen owes me A5 wagyu, a plane, a skateboard, a plane and a house!🫶🌚🔥🔥"
        }
    },
    "SecCo": {
        "Foo Ying Han": {
            "position": "Chairperson, TDCo Attaché",
            "description": "Hi, I’m Ying Han!😻😻 No, it’s not me who fixes the spoilt sink at the BPA, but the one with ‘SEC’ on their pink shirt…😬😬#teamsecco loading… (9.09%)"
        },
        "Chng Ming Cong Jerrell": {
            "position": "Secretary-Treasurer, OHCo Member, O1Co Member",
            "description": "Hi, I’m Jerrell 🥳🥳 No, it’s not me who goes ‘YAYYY’👍👍, but the one with ‘ATT’ on their pink shirt…✨#teamsecco💕loading… (18.18%) Also the most kaypoh is bluffing 🧐"
        },
        "Tan Jin Yi": {
            "position": "NSE Attaché, PromCo Attaché",
            "description": "Hi I’m Jin Yi !! 😋😋 No, it’s not me whom we call 老板, but the one with ‘BOSS’ on their pink shirt…🙀#teamsecco⚡ loading… (27.27%)"
        },
        "Cedric Tai Hong-E": {
            "position": "Song I/C, PromCo Chairperson, O1Co Member",
            "description": "Selamat Pagi! 🎤🏃‍♂️I’m Cedric and I ate Mala Dala🫕 SO I lost my voice and couldn't sing for assembly the next day😭 #teamsecco👨‍🎤 loading… (36.36%) 👸🏻🥂🫅🏻"
        },
        "Chen Hui En": {
            "position": "Song I/C, MAFCo Member, CNYCo Chairperson",
            "description": "你好! 🎙️🤸‍♀️I’m Hui En, I was frustrated with Cedric’s grating voice 😒 SO I made him eat Mala Dala to shut him up the next day. 🤐 🪩#teamsecco 💫 loading… (45.45%) Luckily I’ve taken 2400 more breaths than Shi Yang 🤛"
        },
        "Ang Shao Xuan": {
            "position": "Dance I/C, OHCo Chairperson, EleCo Member",
            "description": "HEY I’m shao xuan 🍗🍟🛌 and the “p” in anthea stands for physically coordinated!! 💃💃 #teamsecco 🌠 loading…(54.54%)"
        },
        "Anthea Neo Rui En": {
            "position": "Dance I/C, MAFCo Member, O1Co Member",
            "description": "HELLO I’m anthea 👏👏👏 and the “g” in shao xuan stands for good at dancing!! 🕺🕺#teamsecco loading… (63.63%)"
        },
        "Joy Choo Le Xuan": {
            "position": "Cheer I/C, TDCo Member, EleCo Chairperson",
            "description": "HELLO i’m joy, happy and excited😎 and i think ryan loves doing haidilao dances😇😇😁#teamsecco loading… (72.72%) 📣"
        },
        "Ryan Lee Min Xing": {
            "position": "Cheer I/C, PromCo Member, CNYCo Secretary-Treasurer",
            "description": "hi i am ryan lee and contrary to popular belief, i do not like doing haidilao dances 😭😭🙏#teamsecco loading… (81.81%)"
        },
        "Claris Poh": {
            "position": "Student Engagement Coordinator (SNC), PromCo Member, O1Co Secretary-Treasurer",
            "description": "hi im claris, your FAVOURITE snc and funnier one during The Late Late Late Show (pls come every tuesday morning). a fun fact about me is i have an snc partner named xavier sheng yichou who likes drake abit too much... happy to serve all of you! #teamsecco⚡ loading… (90.90%)"
        },
        "Sheng Yichou": {
            "position": "Student Engagement Coordinator (SNC), TDCo Secretary-Treasurer, CNYCo Member",
            "description": "hi im xavier, your favouriter snc! im the funny voice behind TLLLS. a fun fact about me is i have an snc partner named claris poh hci that stepped on a sea urchin 😮😮  looking forward to snc-ing!"
        }
    }
    ,
    "SnR": {
        "Tan Yu Ming": {
            "position": "Chairperson, O1Co Attaché",
            "description": "HAY THERE! 🧑‍🌾 I’m Yu Ming and together with Linger and Sze Jia, we look after the 🐴🐺🦉🐮 of HCSC… Oh no… what’s happening… Am I turning into a…… ROAR… 🦁"
        },
        "Chen Linger": {
            "position": "Secretary-Treasurer, MAFCo Member, CNYCo Member",
            "description": "HAYLLO! 👩‍🌾 I’m Linger and together with Yu Ming and Sze Jia, we look after the 🐴🐺🦉🐮 of HCSC… Oh crap, do I hear a roar…? It must be the Hwa Chong ROAR! 🦁"
        },
        "Hor Sze Jia": {
            "position": "NSE Attaché, MAFCo Attaché",
            "description": "HAYAA! 👩‍🌾 I’m Sze Jia and together with Yu Ming and Linger, we look after the 🐴🐺🦉🐮 of HCSC… Um, did I just see Yu Ming turn into a Lion… “ROAR!”"
        },
        "Chen Leqi": {
            "position": "Apollo Faculty Head, OHCo Member",
            "description": "Good morning! ☀️ I'm Leqi, one of two 🐮 in HCSC! Mirror mirror on the wall, who’s the most divine of them all? This bovine boy! 🐄💥 MOOOO!"
        },
        "Toh Jun Hao": {
            "position": "Apollo Deputy Faculty Head, O1Co Member",
            "description": "Good morning! ☀️ I'm Jun Hao, one of two 🐮 in HCSC! Mirror mirror on the wall, whose shining power transverses them all? This luminous lad! 😎🌞 MOOOO!"
        },
        "Koh Wei En Ezekiel": {
            "position": "Ares Faculty Head, O1Co Member",
            "description": "What’s good horses! ⚔️I’m Ezekiel, one of the 🐴 in HCSC. Together with Sonya we definitely make up the most masculine duo!🔥 Through the mist🌫️, with a steady pace…🕳️"
        },
        "Sonya Koh": {
            "position": "Ares Deputy Faculty Head, TDCo Member",
            "description": "What’s good horses! 😆 I’m Sonya, one of the 🐴 in HCSC and the only female Fac Head. 💁🏻‍♀️ Along with Ezekiel, we make up the most feminine Faculty, Ares❤️! 🕳️…the horse emerges, full of grace.🎀"
        },
        "Mao Tianze": {
            "position": "Artemis Faculty Head, O1Co Member",
            "description": "Wassup pups! I'm Tianze, one of the 🐺 in HCSC. Leader of the pack, connoisseur of naps, who's ready for a howl-off?🎤"
        },
        "Song Haoran": {
            "position": "Artemis Deputy Faculty Head, PromCo Member",
            "description": "Wassup pups! I'm Haoran, one of the 🐺 in HCSC. Alpha of the crew, master of the snooze, who's in the mood for a moonlit groove? 🎶"
        },
        "Sun Peiyan": {
            "position": "Athena Faculty Head, O1Co Member",
            "description": "What’s good, AHOOD! I’m Peiyan, one of the 🦉 in HCSC… Why are there feathers growing on my body?! Oh, WAIT, can I fly now?! AHOOT! AHOOT!"
        },
        "Alastair Chua Wei Jie": {
            "position": "Athena Deputy Faculty Head, MAFCo Member",
            "description": "What’s good, AHOOD! I’m Alastair, one of the 🦉 in HCSC… What is this weird owl doing hooting around?!"
        }
    },
    "WelCo": {
        "Toh Cheung See": {
            "position": "Chairperson, MAFCo Attaché",
            "description": "Hi I'm Cheung See and I give out bananas so we can steal the moon hehehe… I also provide welfare services 😋🥰 https://www.instagram.com/reel/CsYLs6jKY19/?igsh=MXJjZjJnM3R5djBocw=="
        },
        "Ng Kai Chi Abigail": {
            "position": "Secretary-Treasurer, TDCo Member, EleCo Member",
            "description": "Hi I’m Abigail and Cheung See accidentally used the shrink ray on me instead of on the moon 🫣🤏🌝 https://www.instagram.com/reel/CsYLs6jKY19/?igsh=MXJjZjJnM3R5djBocw=="
        },
        "Lai Sin Yie": {
            "position": "NSE Attaché, OHCo Attaché",
            "description": "Hi I’m Sin Yie and I’m the rocket that blasts these minions to the moon 🚀🌝🤫 https://www.instagram.com/reel/CsYLs6jKY19/?igsh=MXJjZjJnM3R5djBocw=="
        },
        "Loh Si Wing Tara": {
            "position": "Member, OHCo Member, EleCo Member",
            "description": "Hi I’m Tara and I dreamt about eating bananas on the moon🤤😴😋🍌🍌 https://www.instagram.com/reel/CsYLs6jKY19/?igsh=MXJjZjJnM3R5djBocw=="
        },
        "Low Shi Yang": {
            "position": "Member, MAFCo Member, O1Co Chairperson",
            "description": "Hi guys I’m Shi Yang and bananas motivate me to steal the moon 🤭🍌😋 https://www.instagram.com/reel/CsYLs6jKY19/?igsh=MXJjZjJnM3R5djBocw==.  Too bad I've taken 2400 less breaths than Hui En 🤛"
        },
        "Quek Ying Ying": {
            "position": "Member, MAFCo Member, CNYCo Member",
            "description": "Hey, I’m Ying Ying and I go bananas🍌 for the moon🌕🌙. https://www.instagram.com/reel/CsYLs6jKY19/?igsh=MXJjZjJnM3R5djBocw== Maybe that’s why I’m in both Chinese related events🏮🧧🥮, because the moon is a significant symbol and also represents yin ☯️(please say you get it, yin and ying)🥹"
        },
        "Raphael Toby Lauw": {
            "position": "Member, PromCo Member, O1Co Member",
            "description": "Hi I’m Toby and I enjoy eating bananas while plotting to steal the moon 🌝🌝🍌😈 https://www.instagram.com/reel/CsYLs6jKY19/?igsh=MXJjZjJnM3R5djBocw=="
        },
        "Travis Dael Ng Shao Jie": {
            "position": "Member, PromCo Member, O1Co Member",
            "description": "Hi I’m Travis and Cheung See ate all my bananas 😱😋🤤🍌 https://www.instagram.com/reel/CsYLs6jKY19/?igsh=MXJjZjJnM3R5djBocw=="
        },
        "Yue Jiayuan": {
            "position": "Member, TDCo Chairperson, EleCo Member",
            "description": "Hi I’m 🌕 Jiayuan and I want to eat the moon because the crescent moon looks like a banana 🌙🍌😋🤤https://www.instagram.com/reel/CsYLs6jKY19/?igsh=MXJjZjJnM3R5djBocw=="
        },
        "Tan Weiyan Ruson": {
            "position": "Member, MAFCo Chairperson, EleCo Member",
            "description": "Hi I’m Ruson and I’m on a quest to find the ultimate banana recipe while planning to steal the moon 🍌🌙😈😋 https://www.instagram.com/reel/CsYLs6jKY19/?igsh=MXJjZjJnM3R5djBocw== i also always catch someone doodling maf pubs during breaks 🎨🧐"
        }
    }
}
</script>

<template>

<!-- hero section -->
    <PageHero image="/images/51st/51st_HCSC.jpg" alt="The 51st Students' Council" position="50% 100%" />

    <div class="page-body">
    <CouncilYears />

    <section class="split">
        <h2>The 51st Students' Council</h2>
        <div class="split-text">
            <p>
                (FROM LEFT TO RIGHT)
                <br><br>Front Row:
                <br>Mr Ang Yong Qin (Teacher Advisor); Mrs Raj-Priyahlatha Nainar (Teacher Advisor); Ms Chan Hui Chieh (Teacher Advisor); Dr Lim Hong Seng Melvyn (Deputy Principal / Student Development (College)); Hor Sze Jia; Mr Lee Peck Ping (Principal); Seah Jin Rong; Mr Chan Kwok Leon (Deputy Principal / Studies (College)); Mrs Sim-Lim Siew Hui (Principal Consultant / Student Development); Ms Ying Min (Teacher Advisor); Dr Sin Yee Theng (Teacher Advisor)
                <br><br>Second Row:
                <br>Tan Weiyan Ruson; Koh Wei En Ezekiel; Dan Ming Zhen; Toh Cheung See; Mock Yee Ken Ethan; Tan Jin Yi; Lai Sin Yie; Lee Wei Yi; Foo Ying Han; Tan Yu Ming; Sun Peiyan; Mao Tianze; Leow Junn Kai Jonathan; Chua Ying Feng Daryl
                <br><br>Third Row:
                <br>Low Shi Yang; Sonya Koh; Yue Jiayuan; Anya Wong Ann Ya; Xu Shaozhe; Toh Jun Hao; Joy Choo Le Xuan; Chen Linger; Sheng Yichou; Song Haoran; Chen Leqi; Wong Jun Heng; Ang Shao Xuan; Declan Ng Kian Heng
                <br><br>Fourth Row:
                <br>Zhu Zixuan; Lim Jin Xin; Madeline Soo Qian Han; Raphael Toby Lauw; Ryan Lee Min-Xing; Travis Dael Ng Shao Jie; Koi Xin Yi Tricia; Chng Ming Cong Jerrell; Chia Hao Yang Kyle; Chen Hui En; Ng Kai Chi Abigail; Quek Ying Ying; Celeste Wong Xin Yi
                <br><br>Last Row:
                <br>Alastair Chua Wei Jie; Cedric Tai Hong-E; Wui Jeongjun; Kayden Seah Chung Hian; Loh Si Wing Tara; Anthea Neo Rui En; Claris Poh
            </p>
        </div>
    </section>

    <div class="section-divider"></div>

    <section class="split">
        <h2>A message from the 51st...</h2>
        <div class="split-text">
            <p>
                Hi everyone! We’re the 51st Hwa Chong Students’ Council (HCSC).
                As a passionate cohort of 50 Councillors who have received the mandate from our peers, to serve our school and more importantly, our student body.
                Our Council comprises the Non-Standing Executive Committee (NSE), Executive Committee (ExCo), Extended Council Attaché Committee (ECACo),
                Publications and Publicity Committee (PubCo), Social and Relations Committee (S&R), Student Engagement and Culture Committee (SECCo) and Welfare Committee (WelCo).
                No two committees are identical, yet all are equally indispensable to the day-to-day functionings of the Council.
                <br><br>Since its inception in 1973, the Council has strived to make the JC experience a memorable one for everyone, and Hwa Chong a home for all.
                We want to be the voice that represents you - the students.
                We pledge to always carry out our responsibilities to the best of our ability, working as one for the interest of the school,
                and the welfare of the students, being the pinnacle of leadership our school has to offer.
                How? Beyond planning Hwa Chong’s 7 annual flagship events, we also stay connected with students, both past and present, through our social media page @HCUnite and our website.
                We also keep our school spirit strong through the teaching and leading of our school’s Song, Dance and Cheers (abbreviated into SODACHE).
                The elements of SODACHE were conceived and passed down by generations of seniors who walked this campus before us, and still remain a staple in our Hwa Chong tradition today.
                <br><br>At the end of the day, we hope to help forge our shared Hwa Chong identity, in this vibrant community that we all call our home.
                As always, we aim to embody the school’s vision, to Live with Passion and Lead with Compassion.
                The HCSC - by students, for students.
            </p>
        </div>
    </section>

    <div class="section-divider"></div>

    <section class="split">
        <h2>Our Committees</h2>
        <div class="split-text">
            <p>
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

    <div class="section-divider"></div>

    <section>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/51st/51st_NSE.jpg" alt="NSE" loading="lazy">
                <h3 class="mt-4">NSE</h3>
                <button type="button" @click="$refs.nse.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/51st/51st_EcaCo.jpg" alt="ECACo" loading="lazy">
                <h3 class="mt-4">ECACo</h3>
                <button type="button" @click="$refs.ecaco.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/51st/51st_PubCo.jpg" alt="PubCo" loading="lazy">
                <h3 class="mt-4">PubCo</h3>
                <button type="button" @click="$refs.pubco.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/51st/51st_SecCo.jpg" alt="SECCo" loading="lazy">
                <h3 class="mt-4">SECCo</h3>
                <button type="button" @click="$refs.secco.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/51st/51st_SnR.jpg" alt="SnR" loading="lazy">
                <h3 class="mt-4">SnR</h3>
                <button type="button" @click="$refs.snr.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/51st/51st_WelCo.jpg" alt="WelCo" loading="lazy">
                <h3 class="mt-4">WelCo</h3>
                <button type="button" @click="$refs.welco.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="nse">
        <img src="/images/51st/51st_NSE.jpg" alt="The Non-Standing Executive Committee (NSE)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Non-Standing Executive Committee (NSE)</h2>
            <div class="split-text">
                <p>
                    As the core body in the Executive Committee, the Non-Standing Executive Committee is responsible for
                    steering the council direction, while pushing boundaries to lead the council to greater heights.
                    On an individual level, the committee is committed to supporting each and every councillor to pursue their passions,
                    and partner them in their council journey ahead.
                </p>
            </div>
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['NSE']" council="NSE" year="51st" />
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="ecaco">
        <img src="/images/51st/51st_EcaCo.jpg" alt="The Extended Council Attaché Committee (ECACo)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Extended Council Attaché Committee (ECACo)</h2>
            <div class="split-text">
                <p>
                    The Extended Council Attaché Committee comprises the Councillors who serve as Presidents and Vice-Presidents
                    to the Values-In-Action Council, Green Council and Students' National Education Council.
                    Each of these Presidents and Vice Presidents will serve in both the Students' Council and their
                    Extended Councils, acting as a bridge to promote better communication between leadership bodies.
                    In doing so, they work to build meaningful collaborations
                    that will create a holistic experience for the student body.
                </p>
            </div>
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['EcaCo']" council="EcaCo" year="51st" />
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="pubco">
        <img src="/images/51st/51st_PubCo.jpg" alt="The Publications and Publicity Committee (PubCo)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Publications and Publicity Committee (PubCo)</h2>
            <div class="split-text">
                <p>
                    Through the use of HCunite and the Council Board, the Publication and Publicity Committee
                    publicises council events and initiatives,
                    aiming to increase communication and transparency between the student body and the Students' Council.
                    Moreover, our team is also dedicated to promoting a common identity for the Council and the school,
                    while aspiring to make student life more exciting!
                </p>
            </div>
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['PubCo']" council="PubCo" year="51st" />
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="secco">
        <img src="/images/51st/51st_SecCo.jpg" alt="The Student Engagement and Culture Committee (SECCo)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Student Engagement and Culture Committee (SECCo)</h2>
            <div class="split-text">
                <p>
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
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['SecCo']" council="SecCo" year="51st" />
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="snr">
        <img src="/images/51st/51st_SnR.jpg" alt="The Social and Relations Committee (SnR)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Social and Relations Committee (SnR)</h2>
            <div class="split-text">
                <p>
                    The Social and Relations Committee seeks to be the eyes and ears of the council,
                    championing grassroot efforts to connect with the student body on a deeper level.
                    Through building bonds and promoting interactions between the council and the student body,
                    the committee strives to inculcate a unified sense of belonging to the school across all domains,
                    promoting the #Facs1Hwach spirit that we all know and love!
                    In addition, the committee spearheads external communications with external Councils from other institutions,
                    laying the groundwork for prospective collaborations to further vitalise the experience of Hwa Chongians.
                </p>
            </div>
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['SnR']" council="SnR" year="51st" />
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="welco">
        <img src="/images/51st/51st_WelCo.jpg" alt="The Welfare Committee (WelCo)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Welfare Committee (WelCo)</h2>
            <div class="split-text">
                <p>
                    The Welfare Committee champions the welfare of the student population with heart and dedication.
                    The committee strives to promote the well being of the student population for a conducive learning environment for
                    all HwaChongians. Through infrastructure such as the Common Room and Welfare Room,
                    the committee reaches out to the student body,
                    rendering services and hosting activities that add vibrancy to the student experience.
                    As the saying in the Welfare Committee goes, "Your Welfare Is Our Affair".
                    The 51st Welfare Committee hopes to do their best to let you smile a little wider, laugh a little louder.
                </p>
            </div>
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['WelCo']" council="WelCo" year="51st" />
        </div>
    </section>
    </div>
</template>