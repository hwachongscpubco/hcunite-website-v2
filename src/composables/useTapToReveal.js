// useTapToReveal.js
//
// Shared "tap/click to reveal image" behaviour used by the Faculty hero
// sections (Apollo/Ares/Artemis/Athena). The hero starts covered by a
// dark overlay with a title + Instagram button; clicking (desktop) or
// tapping without dragging (mobile) toggles the overlay away to reveal
// the photo underneath.
//
// This was previously copy-pasted verbatim into every faculty page's
// <script setup> block — it now lives in one place so all faculty pages
// (and any future ones) share identical behaviour.
import { ref } from 'vue'

export function useTapToReveal(initiallyOpen = true) {
  const showOverlay = ref(initiallyOpen)
  let touchYStart = null

  function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  }

  function toggleOverlay() {
    showOverlay.value = !showOverlay.value
  }

  function handleTouchStart(event) {
    touchYStart = event.touches[0].clientY
  }

  function handleTouchEnd(event) {
    const touchYEnd = event.changedTouches[0].clientY
    const deltaY = Math.abs(touchYEnd - touchYStart)

    // Only treat this as a tap (not a scroll gesture) if the finger barely moved
    if (deltaY < 10) toggleOverlay()
  }

  function handleDesktopClick() {
    if (!isMobile()) toggleOverlay()
  }

  return { showOverlay, handleTouchStart, handleTouchEnd, handleDesktopClick }
}
