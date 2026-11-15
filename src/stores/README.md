# src/stores

[Pinia](https://pinia.vuejs.org/) stores for state that needs to be shared
between components that aren't parent/child (props would work fine
otherwise):

- **`uiStore.js`** — the state the site chrome and the pages share:
  whether the "More about us" menu or the links overlay is open, the
  SODACHE search text, and the scroll position / viewport size that
  [`App.vue`](../App.vue)'s single scroll listener keeps up to date.
- **`sodacheStore.js`** — holds which SODACHE tab (`song` / `dance` /
  `cheer`) is currently active. The tabs in `SiteHeader.vue` write to
  it; `Home.vue` reads it to show that tab's list.

Only add a new store if you have a similar cross-component-but-not-nav
piece of state to share — a single page's own local state should just be
a `ref` in that page's `<script setup>`.
