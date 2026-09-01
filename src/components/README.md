# src/components

Reusable pieces used by the pages in [`src/pages`](../pages/README.md).
Each component has a short doc comment at the top of its `<template>`
explaining its props — this file is just the map of what exists.

## Layout components (compose a whole page section)

- **`FacultyPage.vue`** — the full layout shared by the 4 Faculty pages
  (tap-to-reveal hero, roster, animal blurb, events + cheers carousels).
  Pairs with the [`useTapToReveal`](../composables/README.md) composable.
- **`CouncilCommittee.vue`** — one committee's grid of councillor
  portraits, used repeatedly inside the `Council##.vue` pages.

## Cards / list items

- **`CouncilCard.vue`** — one councillor's portrait + bio. Builds its own
  image URL from `year`, `council` and `name` props — see
  [public/images/README.md](../../public/images/README.md) for the
  filename convention this depends on.
- **`CandidateGroupSection.vue`** — the expanded view of one election
  campaign group (used by `Candidates53.vue`).
- **`SodacheItem.vue`** — one song/dance/cheer card on the Sodache page.
- **`LinkCard.vue`** — one link card in the "Official Links"/"Others"
  lists on the homepage; content comes from
  [`src/data/links.js`](../data/README.md).

## Carousels

- **`Carousel.vue`** — the simple horizontal-scroll image carousel used
  for Faculty Cheers booklets.
- **`Multicarousel.vue`** — the larger Events carousel (event list +
  captioned image gallery) used on Faculty pages; the desktop/mobile
  layouts differ, so this one is the most involved component in the repo.

## Navigation — the CD deck

The word navbar is gone. `src/components/deck/` is the site's whole
navigation model now — see the root [README](../../README.md#the-navigation-model)
for the concept, and [`src/data/tracks.js`](../data/README.md) for the
one data array both pieces below render off:

- **`deck/Disc.vue`** — the CD visual (spectral sheen + coloured hub)
  used at every size: binder/spine mini-discs, the platter, the
  `/leaders` cards, the Sodache side disc.
- **`deck/DeckRow.vue`** — one binder case or docked spine row for a
  single track (`mode: 'case' | 'spine'`).
- **`deck/DeckPlayer.vue`** — the homepage's interactive binder +
  platter (`Home.vue` only).
- **`deck/DeckRail.vue`** — the site's navigation everywhere else:
  mounted once in [`App.vue`](../App.vue), a sticky right-hand rail on
  desktop, a fixed horizontal strip on mobile.

- **`Dropdown.vue`** — a generic collapsible/accordion (header + content
  slot). Not currently used by any page, but kept as a ready-made building
  block for FAQ-style content — wire it up rather than writing a new
  expand/collapse component from scratch.

## Effects

- **`Parallax.vue`** — wraps its slot content and offsets it vertically
  based on a `scrollY` prop the parent tracks (see `Elections.vue` or
  `Sodache.vue` for the scroll-listener pattern this expects).
- **`PanoramaViewer.vue`** — embeds a 360° equirectangular photo (e.g. a
  room interior) using Pannellum, loaded from a CDN the same way the
  Instagram widget is loaded in `Home.vue`. See the root
  [README](../../README.md#adding-a-360-panorama) for how to use it.
