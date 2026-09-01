// useRevealOnScroll.js — the "fade + rise in once, staggered" reveal
// used on grids across the redesign (Council portraits, Faculties
// cards, the /leaders grid). Pair with the `.reveal` class in
// style.css: give each item `class="reveal" :ref="setEl(i)"` and
// (for a stagger) `:style="{ transitionDelay: i * 60 + 'ms' }"` —
// this composable only handles adding `.revealed` once per element,
// the CSS/inline style handles the actual animation and stagger timing.
import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useRevealOnScroll({ threshold = 0.15 } = {}) {
  const els = ref([])
  let observer = null

  function setEl(i) {
    return (el) => {
      // `el` is a raw DOM node for a plain element ref, but the
      // component *instance* for a ref on a component (e.g.
      // <router-link :ref="setEl(i)">) — normalise to the DOM node
      // either way so IntersectionObserver/classList always work.
      const node = el && el.$el ? el.$el : el
      if (node instanceof Element) els.value[i] = node
    }
  }

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold })

    els.value.forEach((el) => el && observer.observe(el))
  })

  onBeforeUnmount(() => observer && observer.disconnect())

  return { setEl }
}
