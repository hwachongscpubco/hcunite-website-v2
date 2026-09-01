// useActiveTrack.js — the currently active deck track, derived from the
// route (not held as separate state, so a deep link arrives with the
// right disc already "loaded" — see data/tracks.js).
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { trackForPath } from '../data/tracks'

export function useActiveTrack() {
  const route = useRoute()
  const activeTrack = computed(() => trackForPath(route.path))
  return { activeTrack }
}
