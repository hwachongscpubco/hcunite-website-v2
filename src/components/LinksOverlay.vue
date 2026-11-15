<!--
  LinksOverlay.vue — the full-screen SCHOOL LINKS / OTHERS overlay
  opened from the header. Both lists (data/links.js) are always shown;
  the active one is inked, the other greyed, and hovering or tapping a
  column makes it the active one. The HCUNITE heading is not drawn here:
  it is the page's own Wordmark.vue, which flies up from its corner and
  docks above these columns while the overlay is open.
-->
<script setup>
import { watch } from 'vue'
import { useUiStore } from '../stores/uiStore'
import { officialLinks, otherLinks } from '../data/links'

const ui = useUiStore()

const columns = [
  { key: 'school', label: 'School Links', links: officialLinks },
  { key: 'others', label: 'Others', links: otherLinks },
]

watch(() => ui.linksOpen, (open) => {
  document.documentElement.style.overflowY = open ? 'hidden' : ''
})
</script>

<template>
  <Transition name="layer">
    <div
      v-if="ui.linksOpen"
      class="fixed inset-0 z-[55] bg-ivory text-ink overflow-y-auto custom-scroll-hide"
      role="dialog"
      aria-modal="true"
      aria-label="School links and other links"
    >
      <button type="button" class="close fixed z-[61] right-(--gutter) cursor-pointer" aria-label="Close links" @click="ui.linksOpen = false">
        <svg viewBox="0 0 116 66" preserveAspectRatio="none" fill="none" stroke="currentColor" class="w-full h-full">
          <line x1="0" y1="0" x2="116" y2="66" vector-effect="non-scaling-stroke" />
          <line x1="0" y1="66" x2="116" y2="0" vector-effect="non-scaling-stroke" />
        </svg>
      </button>

      <div class="columns grid grid-cols-1 lg:grid-cols-[30.4vw_minmax(0,1fr)] gap-y-14 px-(--gutter) lg:pl-[7.2vw] pb-24">
        <section
          v-for="col in columns"
          :key="col.key"
          @mouseenter="ui.linksTab = col.key"
          @click="ui.linksTab = col.key"
        >
          <p class="font-inter font-light uppercase text-mute text-[clamp(10px,1.02vw,14px)]">{{ col.label }}</p>
          <TransitionGroup appear tag="ul" name="stagger" class="list flex flex-col">
            <li v-for="(link, i) in col.links" :key="link.title" :style="{ '--i': i }">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener"
                :title="link.description"
                class="link font-inter transition-colors duration-500 ease-standard"
                :class="ui.linksTab === col.key ? 'font-light text-ink' : 'font-extralight text-[#9A938A]'"
              >{{ link.title }}</a>
            </li>
          </TransitionGroup>
        </section>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.close {
  top: calc(var(--gutter) * 1.5);
  width: clamp(44px, 8.4vw, 116px);
  aspect-ratio: 116 / 66;
  transition: transform 600ms var(--ease-enter), opacity 300ms;
}
.close:hover {
  transform: scale(0.92);
  opacity: 0.6;
}
.columns {
  padding-top: calc(var(--dock-bottom) + 8px);
}
.list {
  margin-top: clamp(26px, 4.3vw, 62px);
  gap: clamp(16px, 2.45vw, 34px);
}
.link {
  font-size: clamp(1.25rem, 1.95vw, 1.75rem);
}
.link:hover {
  color: var(--color-hwachred);
}
</style>
