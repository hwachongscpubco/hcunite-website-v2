# src/data

Content that's shared by more than one page, split out of the page files
so there's exactly one place to edit it. Page-specific content (a single
council's roster, a single faculty's events) stays local to that page
instead — only put something here once two or more pages need the same
list.

- **`links.js`** — the `officialLinks` and `otherLinks` arrays rendered
  as [`LinkCard`](../components/README.md)s on the homepage (`Home.vue`)
  and the legacy `Links.vue` page. To add, remove or edit a link, edit
  the array here; both pages update automatically.
