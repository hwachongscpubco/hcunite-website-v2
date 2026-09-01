# src/composables

Small `use*()` functions that hold reusable **behaviour** (as opposed to
`src/components`, which hold reusable **markup**). If you find yourself
copy-pasting the same `ref`s and handler functions into more than one
`<script setup>` block, that logic belongs here instead.

- **`useTapToReveal.js`** — the "tap/click to reveal the photo behind an
  overlay" behaviour used by the Faculty pages' hero section (via
  [`FacultyPage.vue`](../components/README.md)).
- **`useActiveTrack.js`** — the currently active CD-deck track,
  derived from the current route (see
  [`src/data/tracks.js`](../data/README.md)). Used by the deck
  components to know which spine/case to highlight.
- **`useRevealOnScroll.js`** — the "fade + rise in once, staggered"
  reveal used on grids across the site (Council portraits, Faculties
  cards, `/leaders`). Pair with the `.reveal` class in `src/style.css`.
