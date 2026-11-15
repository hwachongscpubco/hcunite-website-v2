# src/composables

Small `use*()` functions that hold reusable **behaviour** (as opposed to
`src/components`, which hold reusable **markup**). If you find yourself
copy-pasting the same `ref`s and handler functions into more than one
`<script setup>` block, that logic belongs here instead.

- **`useRevealOnScroll.js`** — the "fade + rise in once, staggered"
  reveal used on lists and grids across the site (Council portraits, the
  Faculties list, `/leaders`). Pair with the `.reveal` class in `src/style.css`.
