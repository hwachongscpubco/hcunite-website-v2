<template>
    <ElectGroup v-for="(data, i) in elects"
    :key="i"
    :group-data="data"
    :group-number="i+1"
    ></ElectGroup>
</template>

<script setup>
    import ElectGroup from '../components/ElectGroup.vue'; 
    const elects = [
        {
            groupName: "HwaChooo",
            groupFaculty: "Apollo",
            groupDescription: "Choo choo! Full steam ahead! 🚂We are HwaChooo! The HwaChooo Express isn’t just speeding towards our common destination, but stopping at every station to bring more student voices on board — because progress only matters when everyone moves forward as one. \nNext station: Your Ideal Hwa Chong.",
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
        },
    ]
</script>