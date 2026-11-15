// nav.js — the "More about us" menu, in display order. Every page other
// than the homepage is reached from here (and the footer, which reuses
// this list). `external: true` entries open in a new tab.
export const menuItems = [
  { label: '52nd HCSC', to: '/council52' },
  { label: 'Council Archives', to: '/council51' },
  { label: 'Faculties', to: '/faculties' },
  { label: 'Common Room', to: '/common' },
  { label: 'Student Leader Groups', to: '/leaders' },
  { label: 'CCAs', to: 'https://hwachongccas.wixsite.com/ccawebsite', external: true },
]

// Council years, newest first — the year switcher on every council page.
export const councilYears = [
  { label: '52nd', to: '/council52' },
  { label: '51st', to: '/council51' },
  { label: '50th', to: '/council50' },
  { label: '49th', to: '/council49' },
  { label: '48th', to: '/council48' },
]

export const faculties = [
  { key: 'apollo', name: 'Apollo', animal: 'The Bull', to: '/apollo' },
  { key: 'ares', name: 'Ares', animal: 'The Horse', to: '/ares' },
  { key: 'artemis', name: 'Artemis', animal: 'The Wolf', to: '/artemis' },
  { key: 'athena', name: 'Athena', animal: 'The Owl', to: '/athena' },
]

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/hcunite/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@TheHCunite' },
  { label: 'Facebook', href: 'https://www.facebook.com/hcunite/' },
]
