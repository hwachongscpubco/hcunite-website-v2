# src/components

Reusable pieces used by the pages in [`src/pages`](../pages/README.md).
Each component has a short doc comment at the top of its `<template>`
explaining its props — this file is just the map of what exists.

## Layout components (compose a whole page section)

- **`PageHero.vue`** — the full-screen opening of every page other than
  the homepage: one centred picture (via `HeroPicture.vue`, which also
  frames the homepage's two slides and slides aside when the menu opens).
- **`FacultyPage.vue`** — the full layout shared by the 4 Faculty pages
  (hero, roster, animal blurb, events + cheers carousels).
- **`CouncilCommittee.vue`** — one committee's grid of councillor
  portraits, used repeatedly inside the `Council##.vue` pages.

## Cards / list items

- **`CouncilCard.vue`** — one councillor's portrait + bio. Builds its own
  image URL from `year`, `council` and `name` props — see
  [public/images/README.md](../../public/images/README.md) for the
  filename convention this depends on.
- **`CandidateGroupSection.vue`** — the expanded view of one election
  campaign group (used by `Candidates53.vue`).
- **`SodacheItem.vue`** — one song card in the homepage's SODACHE grid.
- **`LinkCard.vue`** — one link card on the legacy `/links` page;
  content comes from [`src/data/links.js`](../data/README.md).

## Carousels

- **`Carousel.vue`** — the simple horizontal-scroll image carousel used
  for Faculty Cheers booklets.
- **`Multicarousel.vue`** — the larger Events carousel (event list +
  captioned image gallery) used on Faculty pages; the desktop/mobile
  layouts differ, so this one is the most involved component in the repo.

## Site chrome

Mounted once in [`App.vue`](../App.vue), on screen on every page — see
the root [README](../../README.md#the-navigation-model) for the concept:

- **`SiteHeader.vue`** — the fixed header: page title / SO-DA-CHE tabs
  top-left; SCHOOL LINKS, OTHERS and the "More about us" menu top-right
  (menu entries come from [`src/data/nav.js`](../data/README.md)).
- **`LinksOverlay.vue`** — the full-screen SCHOOL LINKS / OTHERS lists.
- **`Wordmark.vue`** — the fixed HCUNITE in the bottom-right corner; it
  shrinks out of the way mid-page and docks top-left as the heading of
  the links overlay.
- **`SiteFooter.vue`** — the footer.
- **`CouncilYears.vue`** — the 52nd–48th year switcher at the top of
  each `Council##.vue` page.

## Misc

- **`Dropdown.vue`** — a generic collapsible/accordion (header + content
  slot). Not currently used by any page, but kept as a ready-made building
  block for FAQ-style content — wire it up rather than writing a new
  expand/collapse component from scratch.

## Effects

- **`Parallax.vue`** — wraps its slot content and offsets it vertically
  based on a `scrollY` prop the parent tracks (see `Elections.vue`
  for the scroll-listener pattern this expects).
- **`PanoramaViewer.vue`** — embeds a 360° equirectangular photo (e.g. a
  room interior) using Pannellum, loaded from a CDN the same way the
  Instagram widget is loaded in `Home.vue`. See the root
  [README](../../README.md#adding-a-360-panorama) for how to use it.
