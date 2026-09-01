// generate-sitemap.js — runs after `vite build` (see package.json's
// "build" script) to emit dist/sitemap.xml. `routes` below is a
// hand-maintained, SEO-relevant subset of the app's actual routes
// (main.js) — deliberately excludes pages like /links and /candidates53
// that aren't meant to be indexed. Add a new page's path here too if it
// should appear in the sitemap.
import { writeFileSync } from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'
import path from 'path'
import { fileURLToPath } from 'url'

const routes = [
  '/', '/council52', '/council51', '/council50', '/council49', '/council48',
  '/faculties', '/apollo', '/ares', '/artemis', '/athena',
  '/sodache', '/elections', '/common', '/leaders'
]

const siteUrl = 'https://hcunite.vercel.app'

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: siteUrl })

  routes.forEach(url => {
    stream.write({ url, changefreq: 'weekly', priority: url === '/' ? 1.0 : 0.8 })
  })

  stream.end()
  const data = await streamToPromise(stream)

  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  writeFileSync(path.resolve(__dirname, './dist/sitemap.xml'), data.toString())

  console.log('✅ Sitemap generated at dist/sitemap.xml')
}

generateSitemap()
