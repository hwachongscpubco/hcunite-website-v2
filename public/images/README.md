# public/images

Everything here is served as-is at `/images/...` (unprocessed, not
bundled by Vite) and referenced from page/component code with an
absolute path string, e.g. `src="/images/52nd/52nd_HCSC.jpg"`. This is
where the big content photo collections live — see
[`src/assets/README.md`](../../src/assets/README.md) for the smaller,
build-time-bundled images instead.

## `48th/` … `52nd/` — Council term photos

Used by [`Council##.vue`](../../src/pages/README.md). Two kinds of file:

- **Group/committee photos**, referenced directly in the page, e.g.
  `52nd_HCSC.jpg` (full council), `52nd_NSE.jpg` (one committee).
- **Councillor portraits**, resolved automatically by
  [`CouncilCard.vue`](../../src/components/README.md) from that
  councillor's name — the filename **must** follow:

  ```
  <year>/<Council>_<Name+With+Spaces+As+Plus>.<jpg|png|webp>
  ```

  e.g. councillor **"Chia Zhen Teng"** in committee **"NSE"** for
  **"52nd"** → `public/images/52nd/NSE_Chia+Zhen+Teng.jpg`. Commas and
  slashes in the name are stripped, spaces become `+`. `CouncilCard`
  tries `.jpg`, then `.png`, then `.webp` in that order — put the file in
  any of those 3 formats.

## `Apollo/`, `Ares/`, `Artemis/`, `Athena/` — Faculty photos

Used by [`FacultyPage.vue`](../../src/components/README.md) via each
Faculty page's `events`/`cheers` data. No enforced naming convention here
(paths are listed explicitly in each page's `events`/`cheers` arrays) —
but the existing convention is `<faculty>_<event>_<n>.<ext>`, e.g.
`apollo_brunch_2.jpg`.

## `Candidates53/`

Election campaign group photos, one subfolder per faculty then per
campaign group, e.g. `Candidates53/Apollo/HwaChooo/`. Resolved
automatically by
[`CandidateGroupSection.vue`](../../src/components/README.md) from the
group's name and members — the filenames **must** follow:

```
Candidates53/<Faculty>/<Group Name>/[53HCSC Elections] Group Picture_<Faculty>_Group <N>_<Group Name>.png
Candidates53/<Faculty>/<Group Name>/IoC Individual Picture/[53HCSC Elections] Individual Picture_<Faculty>_Group <N>_<Member Name>.png
```

where `<N>` is the group's 1-based position within its faculty's list in
`Candidates53.vue`. This folder is election-specific; a future election's
photos should get their own `Candidates<NN>/` folder plus a matching
`Candidates<NN>.vue` page (copy `Candidates53.vue`'s structure).

## `elections/` and `sodache/`

Miscellaneous images for the `Elections.vue` and `Sodache.vue` pages
respectively, referenced directly by path in those files — no naming
convention to follow, just add the image and point to it.
