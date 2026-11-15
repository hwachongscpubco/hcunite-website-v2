# src/data

Content that's shared by more than one page, split out of the page files
so there's exactly one place to edit it. Page-specific content (a single
council's roster, a single faculty's events) stays local to that page
instead — only put something here once two or more pages need the same
list.

- **`links.js`** — the `officialLinks` and `otherLinks` arrays shown in
  the SCHOOL LINKS / OTHERS overlay
  ([`LinksOverlay.vue`](../components/README.md)) and on the legacy
  `Links.vue` page. To add, remove or edit a link, edit the array here.
- **`nav.js`** — the "More about us" menu (`menuItems`), plus the
  council-year, faculty and social link lists the footer and council
  pages share — see the root README's "Adding or removing a page"
  checklist for when a new page needs an entry here too.
- **`sodache.js`** — every Song, Dance and Cheer in the homepage's
  SODACHE section.
