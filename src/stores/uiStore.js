// Shared UI state for the site chrome (header, menu, links overlay,
// wordmark) and the pages that react to it. See src/stores/README.md.
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('uiStore', () => {
  const menuOpen = ref(false)
  const linksOpen = ref(false)
  const linksTab = ref('school') // 'school' | 'others'
  const search = ref('')

  // Kept in sync by App.vue's single scroll/resize listener.
  const scrollY = ref(0)
  const vw = ref(0)
  const vh = ref(0)
  const docH = ref(0)

  function openLinks(tab) {
    linksTab.value = tab
    linksOpen.value = true
    menuOpen.value = false
  }
  function closeAll() {
    menuOpen.value = false
    linksOpen.value = false
  }

  return { menuOpen, linksOpen, linksTab, search, scrollY, vw, vh, docH, openLinks, closeAll }
})
