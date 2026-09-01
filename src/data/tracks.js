// tracks.js
//
// Single source of truth for the CD-deck navigation (see the root
// README's "Now Playing" section). Each entry is one case in the
// homepage binder / one spine in the docked rail — DeckPlayer.vue and
// DeckRail.vue both render straight off this array, so adding a page
// to the deck is "add an entry here", nothing else. `routes` lists every
// app path that should count as "this track is active" for rail/spine
// highlighting (e.g. all 5 Council years highlight the `council`/
// `archive` cases; all 4 faculty pages highlight `faculties`).
//
// A page not covered by any entry's `routes` (e.g. /elections) simply
// has no active track — DeckRail renders with nothing highlighted.
export const TRACKS = [
  {
    key: 'council',
    label: 'TRACK 01',
    title: '52nd HCSC',
    time: '2025 / 26',
    blurb: 'The current term — ExCo, EcaCo, PubCo, SECCo, SnR and WelCo, with every councillor and their blurb.',
    color: 'var(--color-track-council)',
    to: '/council52',
    routes: ['/council52'],
  },
  {
    key: 'archive',
    label: 'TRACK 02',
    title: 'Council Archive',
    time: '48th–51st',
    blurb: 'Four past terms, one layout. Pick a year and the deck loads that cohort without leaving the shelf.',
    color: 'var(--color-track-archive)',
    to: '/council51',
    routes: ['/council51', '/council50', '/council49', '/council48'],
  },
  {
    key: 'faculties',
    label: 'TRACK 03',
    title: 'Faculties',
    time: '4Facs1Hwach',
    blurb: 'Apollo, Ares, Artemis and Athena. Each faculty is its own disc inside this sleeve — the bull, the horse, the wolf, the owl.',
    color: 'conic-gradient(from 45deg, #FFCC02 0 25%, #C9102D 0 50%, #06048D 0 75%, #027B3E 0)',
    spine: 'linear-gradient(180deg, #FFCC02 0 25%, #C9102D 25% 50%, #06048D 50% 75%, #027B3E 75% 100%)',
    to: '/faculties',
    routes: ['/faculties', '/apollo', '/ares', '/artemis', '/athena'],
  },
  {
    key: 'sodache',
    label: 'TRACK 04',
    title: 'SODACHE',
    time: 'side B',
    blurb: 'Song, Dance and Cheer. The one page that stays dark, and the one the disc metaphor was made for.',
    color: 'var(--color-track-sodache)',
    to: '/sodache',
    routes: ['/sodache'],
  },
  {
    key: 'common',
    label: 'TRACK 05',
    title: 'Common Room',
    time: 'inner plaza',
    blurb: 'A space for the students, by the students. House rules, opening schedule and the booking form.',
    color: 'var(--color-track-common)',
    to: '/common',
    routes: ['/common'],
  },
  {
    key: 'leaders',
    label: 'TRACK 06',
    title: 'Student Leader Groups',
    time: '9 groups',
    blurb: "Students' Council, CCA Council, the four faculties, Green Council, VIA Council and Students' NE Council — each with a link out to their Instagram.",
    color: 'var(--color-track-leaders)',
    to: '/leaders',
    routes: ['/leaders'],
  },
  {
    key: 'ccas',
    label: 'TRACK 07',
    title: 'CCAs',
    time: 'off-site',
    blurb: 'Leaves HCUnite for the CCA site. The disc lifts out of the deck rather than spinning up.',
    color: 'var(--color-track-ccas)',
    to: 'https://hwachongccas.wixsite.com/ccawebsite',
    external: true,
    routes: [],
  },
]

// Given the current route path, return the matching track (or undefined).
export function trackForPath(path) {
  return TRACKS.find((t) => t.routes.includes(path))
}
