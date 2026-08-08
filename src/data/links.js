// links.js
//
// Content for the "Official Links" and "Others" card lists shown on the
// homepage (and on the legacy /links page). Kept as data so the two pages
// can share the exact same list instead of each hard-coding its own copy
// of the same cards — add/remove a link by editing the arrays below, no
// template changes needed. Each entry is rendered by components/LinkCard.vue.
export const officialLinks = [
  { title: 'Nurture', description: 'For school announcements', href: 'https://nurture.diveanalytics.com/en/login' },
  { title: 'ISP', description: 'For attendance, results, and other school services', href: 'https://isp.hci.edu.sg/' },
  { title: 'Student Handbook', description: 'Your guide to Hwa Chong', href: 'https://sites.google.com/hci.edu.sg/college-ehandbook/home' },
]

export const otherLinks = [
  { title: 'Open Feedback Form', description: 'Got feedback for HCSC? Tell us here!', href: 'https://forms.gle/pUrP8Sq8CTGduYMW7' },
  { title: 'SnR TownHall Topic Suggestions', description: 'Come talk to us!', href: 'https://forms.gle/t9WyEFV7XEAeUV44A' },
  { title: 'HCUnite Youtube', description: 'For more content on Hwa Chong', href: 'https://www.youtube.com/@TheHCunite' },
  { title: 'Morning Mumbles Submission Form', description: 'Give us your best quotes, jokes, and ASEAN news!', href: 'https://forms.gle/FbsASvSPGwoKZnVd9' },
  { title: 'Loaning of Council Room Items Protocol', description: 'For when you need to borrow something from us!', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdhGFq9QJrUBaAeveHa9IqLYkKnmk5Zfn8k0Kwj4foE1Bl_XA/viewform' },
]
