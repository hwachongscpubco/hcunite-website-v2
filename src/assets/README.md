# src/assets

Small, page-specific images that are imported directly in a `<script>` or
referenced with a relative path (`../assets/...`) so Vite bundles,
hashes and optimises them at build time.

This is different from **[`public/images/`](../../public/images/README.md)**,
which holds the large content galleries (councillor portraits, faculty
event photos, election materials) — those are referenced by absolute
`/images/...` path and served as-is, unprocessed. Rule of thumb: a
handful of one-off images used by exactly one page/section → `src/assets`;
a big per-year/per-faculty/per-candidate photo collection → `public/images`.

- `home/` — homepage hero + "why we're here" photos.
- `common/` — Common Room page image.
- `faculties/` — the 4 Faculty logo images shown on `/faculties`.
- `links/` — images for the legacy `Links.vue` page's "Freshmen
  Essentials" section (map, handbook, SODACHE).
- `elections_done/` — not currently imported by any page (includes a
  subfolder its own filename calls `unused`). Left in place rather than
  deleted as part of this cleanup since it's ~87MB of real photos that
  may still be wanted as an archive — if it's safe to remove, delete the
  folder and this bullet.
