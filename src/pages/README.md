# src/pages

Each file here is one route of the site. A page is registered by importing
it in [`src/main.js`](../main.js) and adding it to the `routes` array —
see the root [README](../../README.md#adding-or-removing-a-page) for the
full step-by-step.

Pages generally fall into a few families. When adding new content, prefer
copying the closest existing example over writing a page from scratch.

## Council pages — `Council48.vue` … `Council52.vue`

One page per HCSC term. All the shared layout (hero, "Our Committees"
overview grid, per-committee sections) is hand-written per file because
each council term has tweaked the layout slightly over the years — but the
repeated "grid of councillor portraits" block is not: it's the
[`CouncilCommittee`](../components/CouncilCommittee.vue) component.

Each file's `<script setup>` holds one `councillors` object shaped like:

```js
const councillors = {
  "CommitteeName": {
    "Councillor Name": {
      "position": "Their role",
      "description": "Their bio blurb"
    },
    // ...more councillors
  },
  // ...more committees
}
```

`CouncilCommittee` (used once per committee in the template) turns that
into a grid of [`CouncilCard`](../components/CouncilCard.vue)s, and
`CouncilCard` derives each councillor's photo path from their name — see
[public/images/README.md](../../public/images/README.md) for the exact
filename convention that depends on.

**To add a new council year**, copy the most recent `Council5N.vue`,
bump the year/committee data, drop the new photos under
`public/images/<year>/`, and register the route (see root README).

## Faculty pages — `Apollo.vue`, `Ares.vue`, `Artemis.vue`, `Athena.vue`

These 4 pages are thin — all the markup lives once in
[`FacultyPage.vue`](../components/FacultyPage.vue). Each page just passes
that component its faculty's name, colours, animal blurb, roster and
events/cheers data. Open `Apollo.vue` as the annotated example before
editing any of the four.

## Everything else

- `Home.vue` — landing page (hero, Instagram feed, official links, PubCo note).
- `Faculties.vue` — the `/faculties` landing page linking out to the 4 faculty pages above.
- `Sodache.vue` — the Song/Dance/Cheer archive (`/sodache`), driven by the `sodache` data object in that file.
- `Elections.vue` — general elections info page.
- `Candidates53.vue` — election candidate campaign groups; large local data object, same shape idea as the Council pages.
- `Common.vue` — the Common Room page (about blurb, house rules by category, opening schedule and booking form links).
- `Links.vue` — legacy `/links` page, no longer linked from the nav (content now lives on `Home.vue` too). Kept only for its unique "Freshmen Essentials" section — see the comment at the top of that file before touching it.
