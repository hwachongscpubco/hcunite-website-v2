// generate-sitemap.js
import { writeFileSync } from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'
import path from 'path'
import { fileURLToPath } from 'url'

import './src/main.js'

const routes = [
  '/', '/council52', '/council51', '/council50', '/council49', '/council48',
  '/faculties', '/apollo', '/ares', '/artemis', '/athena',
  '/sodache', '/elections', '/links', '/common'
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
