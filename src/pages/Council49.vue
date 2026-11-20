<!--
  Council49.vue — the 49th HCSC council page. `councillors`
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
    "ExCo": {
        "Tok Jun Yi Alaric": {
            "position": "President"
        },
        "Yam Yen Yee": {
            "position": "Vice President"
        },
        "Chen Enying": {
            "position": "General Treasurer"
        },
        "Tng Guang Hong, Zak": {
            "position": "General Secretary"
        },
        "Wu Sichen Daniel": {
            "position": "General Secretary"
        },
        "Joshua Ng Tian Ian": {
            "position": "PubCo Chairperson"
        },
        "Tho Ching Shuen, Shannon": {
            "position": "SECCo Chairperson"
        },
        "Ho Xin Ping Julia": {
            "position": "SnR Chairperson"
        },
        "Teo Jin Yuan": {
            "position": "WelCo Chairperson"
        },
        "Jenelle Kan Rui Yee": {
            "position": "CIP Council President"
        },
        "Lim Xin, Jewell": {
            "position": "Green Council President"
        },
        "Lin Zongkai": {
            "position": "SNEC President"
        }
    },
    "EcaCo": {
        "Jenelle Kan Rui Yee": {
            "position": "CIP Council President"
        },
        "Rachel Yong Swee Kee": {
            "position": "CIP Council Attaché"
        },
        "Lim Xin, Jewell": {
            "position": "Green Council President"
        },
        "Natthanich Mekadenaumporn": {
            "position": "Green Council Attaché"
        },
        "Lin Zongkai": {
            "position": "SNEC President"
        },
        "Loh Wan Ling": {
            "position": "SNEC Attaché"
        },
        "Tok Jun Yi Alaric": {
            "position": "NSE Attaché"
        },
    },
    "PubCo": {
        "Joshua Ng Tian Ian": {
            "position": "Chairperson"
        },
        "Kimberly See Su Xin": {
            "position": "Secretary-Treasurer"
        },
        "Koh Rui En, Rachel": {
            "position": "Art Director"
        },
        "Siau Hwee Wen": {
            "position": "Art Director"
        },
        "Gwee Kang Ting": {
            "position": "Media Director"
        },
        "Nathanael Goh Wei Hao": {
            "position": "Media Director"
        },
        "Breanna Lim Yen Ru": {
            "position": "MOCH Coordinator"
        },
        "Ding Jinbo": {
            "position": "MOCH Coordinator"
        },
        "Ethan Yeo Zhen Xiang": {
            "position": "MOCH Coordinator"
        },
        "Yam Yen Yee": {
            "position": "NSE Attaché"
        }
    },
    "SecCo": {
        "Tho Ching Shuen, Shannon": {
            "position": "Chairperson"
        },
        "Kho Wei Xuan": {
            "position": "Secretary-Treasurer"
        },
        "Jayden Liew Heng Feng": {
            "position": "Student Engagement Coordinator"
        },
        "Lim Chong Zheng": {
            "position": "Student Engagement Coordinator"
        },
        "Amanda Tan Ying Hui": {
            "position": "Song I/C"
        },
        "Yung Cheng Ze, Javier": {
            "position": "Song I/C"
        },
        "Julia Wong": {
            "position": "Dance I/C"
        },
        "Liong Kai Rui Reyes": {
            "position": "Dance I/C"
        },
        "Dylan Pang": {
            "position": "Cheer I/C"
        },
        "Yi Jianhong": {
            "position": "Cheer I/C"
        },
        "Wu Sichen Daniel": {
            "position": "NSE Attaché"
        }
    },
    "SnR": {
        "Ho Xin Ping Julia": {
            "position": "Chairperson"
        },
        "Wong Kai Ray": {
            "position": "Secretary-Treasurer"
        },
        "Luke Tham Yuanyang": {
            "position": "Apollo Faculty Head"
        },
        "Sng Yun Wen Faith": {
            "position": "Apollo Deputy Faculty Head"
        },
        "Kam Xun Rui Dylan": {
            "position": "Ares Faculty Head"
        },
        "Zhang Yanyu": {
            "position": "Ares Deputy Faculty Head"
        },
        "Lin En": {
            "position": "Artemis Faculty Head"
        },
        "Tan Shi Ya Shianne": {
            "position": "Artemis Deputy Faculty Head"
        },
        "Zaccheus Tan Meng Tze": {
            "position": "Athena Faculty Head"
        },
        "Esther Tan Ee": {
            "position": "Athena Deputy Faculty Head"
        },
        "Tng Guang Hong, Zak": {
            "position": "NSE Attaché"
        }
    },
    "WelCo": {
        "Teo Jin Yuan": {
            "position": "Chairperson"
        },
        "Bennett Lee Shuen Meng": {
            "position": "Secretary-Treasurer"
        },
        "Althea Ng Jing En": {
            "position": "Welfare Member"
        },
        "Lee Kay Yong, Branson": {
            "position": "Welfare Member"
        },
        "Mahendran S/O Ravindran": {
            "position": "Welfare Member"
        },
        "Mak Yee Huen Cherlyn": {
            "position": "Welfare Member"
        },
        "Ong Zi Quan, Gavin": {
            "position": "Welfare Member"
        },
        "Wu Pei En": {
            "position": "Welfare Member"
        },
        "Chen Enying": {
            "position": "NSE Attaché"
        }
    }
}

</script>

<template>
<!-- hero section -->
    <PageHero image="/images/49th/49th_HCSC.jpg" alt="The 49th Students' Council" />

    <div class="page-body">
    <CouncilYears />

    <section class="split">
        <h2>The 49th Students' Council</h2>
        <div class="split-text">
            <p>
                (FROM LEFT TO RIGHT)
                <br><br>Front row:
                <br>Jenelle Kan Rui Yee; Joshua Ng Tian Ian; Chen Enying; Tng Guang Hong, Zak; Mr Kor Zhi Yang (Teacher Advisor); Ms Ying Min (Teacher Advisor); Ms Germaine Tan Su Yin (Teacher Advisor); Mr Chan Kwok Leong (Deputy Principal / Studies (College)); Yam Yen Yee; Mr Pang Choon How (Principal); Tok Jun Yi Alaric; Dr Lim Hong Seng Melvyn (Deputy Principal / Student Development (College)); Mrs Sim-Lim Siew Hui (Principal Consultant / Student Development); Dr Sin Yee Theng (Teacher Advisor); Mr Benjamin Goh Wen Xuan (Teacher Advisor); Wu Sichen Daniel; Ho Xin Ping Julia; Teo Jin Yuan; Tho Ching Shuen, Shannon; Lim Xin, Jewell
                <br><br>Second Row:
                <br>Sng Yun Wen Faith; Althea Ng Jing En; Amanda Tan Ying Hui; Gwee Kang Ting; Wu Pei En; Mak Yee Huen Cherlyn; Kimberly See Su Xin; Julia Wong; Kho Wei Xuan; Breanna Lim Yen Ru; Zhang Yanyu; Tan Shi Ya Shianne; Rachel Yong Swee Kee; Ding Jinbo; Siau Hwee Wen; Loh Wan Ling; Esther Tan Ee; Natthanich Mekadenaumporn; Koh Rui En, Rachel
                <br><br>Third Row:
                <br>Nathanael Goh Wei Hao; Wong Kai Ray; Zaccheus Tan Meng Tze; Dylan Pang; Jayden Liew Heng Feng; Lim Chong Zheng; Lee Kay Yong, Branson; Liong Kai Rui Reyes; Kam Xun Rui Dylan; Luke Tham Yuanyang; Ethan Yeo Zhen Xiang; Yi Jianhong; Bennett Lee Shuen Meng; Mahendran S/O Ravindran
                <br><br>Not In Picture:
                <br>Lin En; Ong Zi Quan, Gavin; Yung Cheng Ze, Javier
            </p>
        </div>
    </section>

    <div class="section-divider"></div>

    <section class="split">
        <div class="split-text split-text--alone">
            <p>
                The 49th Hwa Chong Students' Council is committed to building a united Hwa Chong family through acceptance,
                care and trust! As Councillors elected by our peers, we carry the responsibility of being the voice of the students,
                and look towards creating a wholesome environment in the school.
                The Students' Council is here for you, whenever and wherever you need it. Let's soar together, as one Hwa Chong!
            </p>
        </div>
    </section>

    <div class="section-divider"></div>

    <section>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/49th/49th_ExCo.jpg" alt="ExCo" loading="lazy">
                <h3 class="mt-4">ExCo</h3>
                <button type="button" @click="$refs.nse.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/49th/49th_EcaCo.png" alt="ECACo" loading="lazy">
                <h3 class="mt-4">ECACo</h3>
                <button type="button" @click="$refs.ecaco.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/49th/49th_PubCo.jpg" alt="PubCo" loading="lazy">
                <h3 class="mt-4">PubCo</h3>
                <button type="button" @click="$refs.pubco.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/49th/49th_SecCo.jpg" alt="SECCo" loading="lazy">
                <h3 class="mt-4">SECCo</h3>
                <button type="button" @click="$refs.secco.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/49th/49th_SnR.jpg" alt="SnR" loading="lazy">
                <h3 class="mt-4">SnR</h3>
                <button type="button" @click="$refs.snr.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
            <div class="flex flex-col">
                <img class="w-full aspect-3/2 object-cover" src="/images/49th/49th_WelCo.jpg" alt="WelCo" loading="lazy">
                <h3 class="mt-4">WelCo</h3>
                <button type="button" @click="$refs.welco.scrollIntoView({ behavior: 'smooth' })" class="text-link self-start mt-3">View</button>
            </div>
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="nse">
        <img src="/images/49th/49th_ExCo.jpg" alt="The Executive Committee (ExCo)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Executive Committee (ExCo)</h2>
            <div class="split-text">
                <p>
                    (FROM LEFT TO RIGHT)
                    <br><br>Front row:
                    <br>Chen Enying; Yam Yen Yee; Tho Ching Shuen, Shannon; Ho Xin Ping Julia; Jenelle Kan Rui Yee
                    <br><br>Second Row:
                    <br>Teo Jin Yuan; Lin Zongkai; Joshua Ng Tian Ian; Tok Jun Yi Alaric; Tng Guang Hong, Zak; Wu Sichen Daniel
                    <br><br>Not In Picture:
                    <br>Lim Xin, Jewell
                </p>
            </div>
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['ExCo']" council="ExCo" year="49th" />
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="ecaco">
        <img src="/images/49th/49th_EcaCo.png" alt="The Extended Council Attaché Committee (ECACo)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Extended Council Attaché Committee (ECACo)</h2>
            <div class="split-text">
                <p>
                    (FROM LEFT TO RIGHT)
                    <br><br>Front row:
                    <br>Tok Jun Yi Alaric; Lim Xin, Jewell; Jenelle Kan Rui Yee;  Lin Zongkai
                    <br><br>Second row:
                    <br>Natthanich Mekadenaumporn; Rachel Yong Swee Kee; Loh Wan Ling
                    <br><br>Teacher Advisor:
                    <br>Ms Germaine Tan
                </p>
                <p>
                    The Extended Council Attaché Committee (ECACo) comprises 6 Councillors who serve as attachés to the CIP Council,
                    Green Council and SNEC. Each of these attachés will serve in both the Students' Council and their respective Councils,
                    acting as a bridge to facilitate better communication between both leadership bodies. In doing so,
                    we hope to be able to better align the direction of the 4 Councils to better serve the students,
                    be it through pushing out more initiatives or supporting one another!
                </p>
            </div>
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['EcaCo']" council="EcaCo" year="49th" />
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="pubco">
        <img src="/images/49th/49th_PubCo.jpg" alt="The Publications and Publicity Committee (PubCo)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Publications and Publicity Committee (PubCo)</h2>
            <div class="split-text">
                <p>
                    (FROM LEFT TO RIGHT)
                    <br><br>Front row:
                    <br>Breanna Lim Yen Ru; Yam Yen Yee; Joshua Ng Tian Ian; Kimberly See Su Xin; Ding Jinbo
                    <br><br>Second row:
                    <br>Nathanael Goh Wei Hao; Gwee Kang Ting; Siau Hwee Wen; Koh Rui En, Rachel; Ethan Yeo Zhen Xiang
                    <br><br>Teacher Advisor:
                    <br>Mr Kor Zhi Yang
                </p>
                <p>
                    The 49th Publications and Publicity Committee (PubCo) takes charge of the Council's social media presence
                    through HCUnite on its various social media platforms.
                    PubCo aims to promote engagement between the Council and our peers through our publications and publicity materials.
                    PubCo is also in charge of Hwa Chong's Own Media, otherwise affectionately known as MOCH.
                    Through our work, PubCo hopes to promote a common identity for the Council and the school!
                </p>
            </div>
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['PubCo']" council="PubCo" year="49th" />
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="secco">
        <img src="/images/49th/49th_SecCo.jpg" alt="The Student Engagement and Culture Committee (SECCo)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Student Engagement and Culture Committee (SECCo)</h2>
            <div class="split-text">
                <p>
                    (FROM LEFT TO RIGHT)
                    <br><br>Front row:
                    <br>Amanda Tan Ying Hui; Yung Cheng Ze, Javier; Kho Wei Xuan; Tho Ching Shuen, Shannon; Liong Kai Rui Reyes; Julia Wong
                    <br><br>Second Row:
                    <br>Jayden Liew Heng Feng; Yi Jianhong; Wu Sichen Daniel; Dylan Pang; Lim Chong Zheng
                    <br><br>Teacher Advisor:
                    <br>Mr Goh Wen Xuan Benjamin
                </p>
                <p>
                    The 49th Student Engagement and Culture Committee (SECCo) seeks to establish a strong school identity
                    and build a sense of belonging among Hwa Chongians.
                    This is achieved through supporting the various co-curricular activities (CCAs)
                    (e.g. during cheering season) and contributing to and promoting our rich culture of
                    song, dance and cheer (fondly known as SODACHE). As the 49th SECCo,
                    we aspire to inspire more students to embody school pride, love and appreciation for the
                    unique and vibrant culture of Hwa Chong.
                </p>
            </div>
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['SecCo']" council="SecCo" year="49th" />
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="snr">
        <img src="/images/49th/49th_SnR.jpg" alt="The Social and Relations Committee (SnR)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Social and Relations Committee (SnR)</h2>
            <div class="split-text">
                <p>
                    (FROM LEFT TO RIGHT)
                    <br><br>Front row:
                    <br>Wong Kai Ray; Ho Xin Ping Julia; Tng Guang Hong, Zak
                    <br><br>Second row:
                    <br>Zhang Yanyu; Sng Yun Wen Faith; Tan Shi Ya Shianne; Esther Tan Ee
                    <br><br>Third row:
                    <br>Kam Xun Rui Dylan; Luke Tham Yuanyang; Lin En; Zaccheus Tan Meng Tze
                    <br><br>Teacher Advisor:
                    <br>Ms Ying Min
                </p>
                <p>
                    The 49th Social and Relations Committee (SnR) serves to encourage greater interaction and
                    understanding among students, as well as between the Students' Council and the student body.
                    SnR also strives to unite the student body at the Faculty level and maintain good relations with other Councils,
                    within and outside of the school. SnR comprises passionate Councillors who strongly desire to
                    strengthen the 4Facs1Hwach spirit and add colour to the lives of their fellow Hwa Chongians.
                    By working together with various student bodies, SnR endeavours to make Hwa Chong a vibrant and exciting community!
                </p>
            </div>
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['SnR']" council="SnR" year="49th" />
        </div>
    </section>

    <div class="section-divider"></div>

    <section ref="welco">
        <img src="/images/49th/49th_WelCo.jpg" alt="The Welfare Committee (WelCo)" loading="lazy" class="w-full max-h-[80vh] object-cover object-[50%_25%]">
        <div class="split mt-10">
            <h2>The Welfare Committee (WelCo)</h2>
            <div class="split-text">
                <p>
                    (FROM LEFT TO RIGHT)
                    <br><br>Front row:
                    <br>Lee Kay Yong, Branson; Bennett Lee Shuen Meng; Teo Jin Yuan; Chen Enying; Althea Ng Jing En
                    <br><br>Second row:
                    <br>Ong Zi Quan, Gavin; Mak Yee Huen Cherlyn; Wu Pei En; Mahendran S/O Ravindran
                    <br><br>Teacher Advisor:
                    <br>Dr Sin Yee Theng
                </p>
                <p>
                    WelCo champions the welfare of the student population with heart and dedication.
                    The committee aims to properly address the needs of, and improve services for,
                    the students so as to facilitate a conducive learning environment for all Hwa Chongians.
                    The Committee also takes ownership of the maintenance and upgrading of the Common Room,
                    and is constantly looking for ways to serve the student body better. As we say in WelCo,
                    "Your Welfare Is Our Affair". The 49th WelCo hopes to do their best to make your day a little better.
                </p>
            </div>
        </div>
        <div class="mt-14">
            <CouncilCommittee :committee="councillors['WelCo']" council="WelCo" year="49th" />
        </div>
    </section>
    </div>
</template>