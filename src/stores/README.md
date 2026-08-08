# src/stores

[Pinia](https://pinia.vuejs.org/) stores for state that needs to be shared
between components that aren't parent/child (props would work fine
otherwise). There's currently one:

- **`sodacheStore.js`** — holds which Sodache tab (`song` / `dance` /
  `cheer`) is currently active. `Sodache.vue` writes to it as the user
  switches tabs; [`App.vue`](../App.vue) reads it to recolour the navbar
  logo and footer to match (see `logoClass`/`footerClass` in `App.vue`).

Only add a new store if you have a similar cross-component-but-not-nav
piece of state to share — a single page's own local state should just be
a `ref` in that page's `<script setup>`.
