# src/composables

Small `use*()` functions that hold reusable **behaviour** (as opposed to
`src/components`, which hold reusable **markup**). If you find yourself
copy-pasting the same `ref`s and handler functions into more than one
`<script setup>` block, that logic belongs here instead.

- **`useTapToReveal.js`** — the "tap/click to reveal the photo behind an
  overlay" behaviour used by the Faculty pages' hero section (via
  [`FacultyPage.vue`](../components/README.md)).
