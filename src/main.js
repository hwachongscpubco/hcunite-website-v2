// main.js — app entry point: wires up the router (one entry per page,
// see src/pages/README.md) and Pinia, then mounts App.vue.
// To add or remove a page, see the root README's "Adding or removing a
// page" section — it walks through every place a route needs touching
// (this file, data/nav.js's menu, generate-sitemap.js).
//
// Route meta:
//   title — shown top-left by SiteHeader.vue
//   hero  — the page opens with a full-screen PageHero.vue
//   tone  — 'dark' when the top of that hero picture is dark (the header
//           turns white over it)
//   plain — the page has no hero; App.vue pads it below the header
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Council52 from './pages/Council52.vue'
import Council51 from './pages/Council51.vue'
import Council50 from './pages/Council50.vue'
import Council49 from './pages/Council49.vue'
import Council48 from './pages/Council48.vue'
import Faculties from "./pages/Faculties.vue"
import Apollo from "./pages/Apollo.vue"
import Ares from "./pages/Ares.vue"
import Artemis from "./pages/Artemis.vue"
import Athena from "./pages/Athena.vue"
import Elections from "./pages/Elections.vue"
import Candidates from "./pages/Candidates53.vue"
import Links from "./pages/Links.vue"
import Common from "./pages/Common.vue"
import Leaders from "./pages/Leaders.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/council52', component: Council52, meta: { title: '52nd HCSC', hero: true } },
    { path: '/council51', component: Council51, meta: { title: '51st HCSC', hero: true } },
    { path: '/council50', component: Council50, meta: { title: '50th HCSC', hero: true } },
    { path: '/council49', component: Council49, meta: { title: '49th HCSC', hero: true, tone: 'dark' } },
    { path: '/council48', component: Council48, meta: { title: '48th HCSC', hero: true } },
    { path: '/faculties', component: Faculties, meta: { title: 'Faculties', hero: true } },
    { path: '/apollo', component: Apollo, meta: { title: 'Apollo', hero: true } },
    { path: '/ares', component: Ares, meta: { title: 'Ares', hero: true } },
    { path: '/artemis', component: Artemis, meta: { title: 'Artemis', hero: true, tone: 'dark' } },
    { path: '/athena', component: Athena, meta: { title: 'Athena', hero: true, tone: 'dark' } },
    // SODACHE now lives on the homepage, one scroll down.
    { path: '/sodache', redirect: { path: '/', hash: '#sodache' } },
    { path: '/elections', component: Elections, meta: { title: 'Elections', plain: true } },
    { path: '/candidates53', component: Candidates, meta: { title: 'Candidates', plain: true } },
    { path: '/links', component: Links, meta: { title: 'Links', plain: true } },
    { path: '/common', component: Common, meta: { title: 'Common Room', hero: true } },
    { path: '/leaders', component: Leaders, meta: { title: 'Student Leaders', hero: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    // Wait for the outgoing page to fade (App.vue's "page" transition)
    // so it doesn't visibly jump to the top first.
    const changingPage = from.matched.length && to.path !== from.path
    const toSodache = to.hash === '#sodache'
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!toSodache) return resolve({ top: 0 })
        const el = document.getElementById('sodache')
        resolve(el ? { el, behavior: 'smooth' } : { top: window.innerHeight, behavior: 'smooth' })
      }, changingPage ? (toSodache ? 460 : 340) : 0)
    })
  },
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
