<!--
  LinkCard.vue

  One card in the "Official Links" / "Others" lists on the homepage. Used
  with data/links.js — see that file to add, remove or edit a link.
-->
<template>
  <a :href="href" target="_blank">
    <div class="relative group p-8 bg-gray-100 rounded-xl overflow-hidden">
      <h3 class="relative z-10 group-hover:text-white transition-color duration-300 ease-in-out">{{ title }}</h3>
      <p class="pt-2 relative z-10 group-hover:text-white transition-color duration-300 ease-in-out">{{ description }}</p>
      <div class="z-0 absolute inset-0 bg-hwachred -translate-x-full group-hover:translate-x-0 transform transition-transform duration-300 ease-in-out"></div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  href: { type: String, required: true },
})
</script>
