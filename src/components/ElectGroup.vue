<template>
    <h2>Group {{group.groupNumber}}: {{ group.groupName }}</h2>
    <img :src="group.groupImagePath" alt="">
    <h2 v-html="group.groupDescription"></h2>

    <div v-for="member in group.members" :key="member.name">
        <p>{{ member.name }}</p>
        <img :src="member.imagePath" alt="" class="h-100">
        <p v-html="member.imagePath"></p>
        <p v-html="member.description"></p>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'
const props = defineProps({
    groupData:{
        type: Object,
        required:true,
        validator: (obj) =>
            typeof obj.groupName === 'string' &&
            typeof obj.groupFaculty === 'string' &&
            ['Apollo', 'Ares', 'Artemis', 'Athena'].includes(obj.groupFaculty) &&
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
})

const formatText = (str) => str.replace(/\n/g, '<br>')

const group = computed(() => {
    const baseImagePath = `/images/Elects53/${props.groupData.groupFaculty}/${props.groupData.groupName}/`
    return {
        ...props.groupData,
        groupNumber: props.groupNumber,
        groupImagePath : baseImagePath + `[53HCSC Elections] Group picture_${props.groupData.groupFaculty}_Group ${props.groupNumber}_${props.groupData.groupName}.png`,
        groupDescription: formatText(props.groupData.groupDescription),
        members: props.groupData.members.map(member => ({
            ...member,
            description: formatText(member.description),
            imagePath: baseImagePath + `IoC Individual Picture/[53HCSC Elections] Individual picture_${props.groupData.groupFaculty}_Group ${props.groupNumber}_${member.name}.png`
        }))
    }
})

</script>