<template>
    <div v-if="group" :class="bgColors[group.groupFaculty]" class="pt-8">
        <div class="sm:px-6 pt-4">
            <div class="w-full aspect-[4/3] sm:aspect-video md:aspect-[7/3] overflow-hidden sm:rounded-xl">
                <img class="h-full w-full object-cover" :src="group.groupImagePath" alt="">
            </div>
        </div>
        <div class="px-4 md:px-8 mt-8">
            <div class="px-2 w-full flex flex-row justify-between">
                <p class="">Group {{ group.groupNumber }}</p>
                <p class="">{{ group.groupFaculty }}</p>
            </div>
            
    
            <h2 class="mt-16 sm:mt-32 font-poppins text-6xl sm:text-8xl break-all">{{ group.groupName }}</h2>
            
            <div class="mt-4 sm:mt-12">
                <p v-html="group.groupDescription" class="text-2xl sm:text-3xl"></p>
            </div>
            
            <h2 class="mt-16 text-4xl sm:text-6xl">Members</h2>
            <div class="py-8 sw-full overflow-x-scroll">
                <div class="w-auto flex flex-row gap-8 sm:gap-4 md:gap-12">
                    <div class="flex-none w-[300px]" v-for="member in group.members" :key="member.name">
                        <div class="aspect-[4/5] w-full overflow-hidden rounded-xl">
                            <img class="w-full object-cover" :src="member.imagePath" alt="">
                        </div>
                        <div class="">
                            <p>{{ member.imagePath }}</p>
                            <h4 class="font-poppins text-3xl mt-4">{{ member.name }}</h4>
                            <p class="text-base sm:text-lg" v-html="member.description"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'
const props = defineProps({
    groupData:{
        type: Object,
        required:false,
        validator: (obj) =>
            typeof obj.groupName === 'string' &&
            typeof obj.groupDescription === 'string' &&
            Array.isArray(obj.members) &&
            obj.members.every(
                (member) =>
                    typeof member.name === 'string' &&
                    typeof member.description === 'string'
            )
    },
    groupNumber: {
        type: Number,
        required: true,
    },
    groupFaculty: {
        type: String,
        required: false,
    }
})

const formatText = (str) => str.replace(/\n/g, '<br>')

const group = computed(() => {
    if (!props.groupData) return null
    
    const baseImagePath = `/images/Candidates53/${props.groupFaculty}/${props.groupData.groupName}/`
    return {
        ...props.groupData,
        groupNumber: props.groupNumber,
        groupFaculty: props.groupFaculty,
        groupImagePath : baseImagePath + `[53HCSC Elections] Group Picture_${props.groupFaculty}_Group ${props.groupNumber}_${props.groupData.groupName}.png`,
        groupDescription: formatText(props.groupData.groupDescription),
        members: props.groupData.members.map(member => ({
            ...member,
            description: formatText(member.description),
            imagePath: baseImagePath + `IoC Individual Picture/[53HCSC Elections] Individual Picture_${props.groupFaculty}_Group ${props.groupNumber}_${member.name}.png`
        }))
    }
})

const bgColors = {
    Apollo: 'bg-orange-100',
    Ares: 'bg-ares/10',
    Artemis: 'bg-artemis/10',
    Athena: 'bg-athena/10'
}

</script>