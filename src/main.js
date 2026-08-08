// main.js — app entry point: wires up the router (one entry per page,
// see src/pages/README.md) and Pinia, then mounts App.vue.
// To add or remove a page, see the root README's "Adding or removing a
// page" section — it walks through every place a route needs touching
// (this file, App.vue's nav, generate-sitemap.js).
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
import Sodache from "./pages/Sodache.vue"
import Elections from "./pages/Elections.vue"
import Candidates from "./pages/Candidates53.vue"
import Links from "./pages/Links.vue"
import Common from "./pages/Common.vue"

const routes = [
    { path: '/', component: Home},
    { path: '/council52', component: Council52},
    { path: '/council51', component: Council51},
    { path: '/council50', component: Council50},
    { path: '/council49', component: Council49},
    { path: '/council48', component: Council48},
    { path: '/faculties', component: Faculties},
    { path: '/apollo', component: Apollo},
    { path: '/ares', component: Ares},
    { path: '/artemis', component: Artemis},
    { path: '/athena', component: Athena},
    { path: '/sodache', component: Sodache},
    { path: '/elections', component: Elections},
    { path: '/candidates53', component: Candidates},
    { path: '/links', component: Links},
    { path: '/common', component: Common},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
