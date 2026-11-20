# HCUnite Website

The website for the Hwa Chong Students' Council (HCSC) — council pages,
Faculty pages, SODACHE, elections, and the Common Room. Built with
[Vue 3](https://vuejs.org/) (`<script setup>` SFCs), [Vite](https://vite.dev/),
[Tailwind CSS v4](https://tailwindcss.com/), [Vue Router](https://router.vuejs.org/)
and [Pinia](https://pinia.vuejs.org/).

## Getting started

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build to dist/, then generates dist/sitemap.xml
npm run preview  # preview the production build locally
```

## Project structure

| Folder | What's in it |
|---|---|
| [`src/pages/`](src/pages/README.md) | One file per route (`/council52`, `/apollo`, ...) |
| [`src/components/`](src/components/README.md) | Reusable pieces the pages are built from |
| [`src/composables/`](src/composables/README.md) | Reusable `<script setup>` behaviour (non-visual) |
| [`src/data/`](src/data/README.md) | Content shared by more than one page |
| [`src/stores/`](src/stores/README.md) | Pinia stores (cross-component state) |
| [`src/assets/`](src/assets/README.md) | Small, page-specific images bundled by Vite |
| [`public/images/`](public/images/README.md) | Large content photo galleries, served as-is |

Each of those has its own README explaining its format — read the one for
the folder you're about to touch before adding something new, so new
content follows the same shape as what's already there.

## The navigation model

Three fixed pieces of chrome, mounted once in `App.vue` outside
`<router-view>`, are on screen on every page:

- **`SiteHeader.vue`** — top-left, the page's own title; top-right
  **SCHOOL LINKS**, **OTHERS** and **More about us**. (On the homepage
  only "More about us" is fixed — its titles and the two link buttons
  belong to its screens and scroll with them; see `Home.vue`.)
- **`LinksOverlay.vue`** — the full-screen list of links those first two
  open, from [`src/data/links.js`](src/data/README.md).
- **`Wordmark.vue`** — the big HCUNITE pinned to the bottom-right corner.

The homepage is the first screen plus SODACHE, one scroll down. Every
other page is reached from the **More about us** menu, which is
[`src/data/nav.js`](src/data/README.md)'s `menuItems`. See
`src/components/README.md`'s "Site chrome" section for the breakdown.

## Adding or removing a page

A page is one Vue file plus a handful of registration points. To **add**
one:

1. **Create the file** in `src/pages/`, e.g. `src/pages/NewPage.vue`.
   Copy whichever existing page is structurally closest (see
   [`src/pages/README.md`](src/pages/README.md) for what's already there)
   rather than starting from a blank file.
2. **Register the route** in [`src/main.js`](src/main.js): import the
   component and add `{ path: '/new-page', component: NewPage, meta: {
   title: 'New Page', hero: true } }` to the `routes` array. `title` is
   what the header shows top-left; use `hero: true` if the page opens
   with a `<PageHero>` (add `tone: 'dark'` if the top of its picture is
   dark, so the header turns white), or `plain: true` if it has none
   (the comment at the top of `main.js` lists every meta field).
3. **Add it to the menu** (optional, but almost always wanted) by adding
   an entry to `menuItems` in [`src/data/nav.js`](src/data/README.md) —
   the "More about us" menu and the footer both pick it up
   automatically.
4. **Add its images**, following whichever convention applies —
   [`src/assets/README.md`](src/assets/README.md) vs
   [`public/images/README.md`](public/images/README.md) explains which
   one to use.
5. **List it in the sitemap** (optional — only for pages you want search
   engines to index) by adding its path to the `routes` array in
   [`generate-sitemap.js`](generate-sitemap.js).

To **remove** a page, reverse the above: delete its entry in
`src/data/nav.js`, delete the route in `main.js`, delete it from
`generate-sitemap.js` if it was there, then delete the page file itself
(and its images, if nothing else uses them).

## Adding a 360° panorama

To embed a drag-to-look-around 360° photo of a room (or anywhere else),
use [`PanoramaViewer.vue`](src/components/PanoramaViewer.vue) — it wraps
the [Pannellum](https://pannellum.org/) viewer, loaded from a CDN the
same way the homepage's Instagram widget is loaded, so there's no build
step or npm dependency to add.

**1. Get an equirectangular photo.** This is a single flat image where
the full 360° view is unwrapped into a 2:1 rectangle (this is what most
"360 camera" apps and standalone 360 cameras export directly — e.g. the
Google Street View app's "Photo Sphere" mode, or a Ricoh Theta/Insta360
camera). A normal wide-angle or panorama photo will **not** work; it has
to be a full spherical capture.

**2. Save the photo** under `public/images/` — for a room interior, e.g.
`public/images/common/common-room-360.jpg` (see
[`public/images/README.md`](public/images/README.md) for the general
convention on that folder).

**3. Drop the component into a page**, passing the image's path:

```vue
<script setup>
import PanoramaViewer from '../components/PanoramaViewer.vue'
</script>

<template>
  <section class="px-6 py-12">
    <h2 class="text-center">Common Room, in 360°</h2>
    <PanoramaViewer
      image="/images/common/common-room-360.jpg"
      title="Common Room"
      class="mt-6 max-w-[900px] mx-auto"
    />
  </section>
</template>
```

That's it — `PanoramaViewer` handles loading the viewer library and
mounting it into that spot on the page. See the doc comment at the top
of `PanoramaViewer.vue` for its full prop list (title label, auto-rotate
speed, sizing via `class`).
