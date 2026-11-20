<!--
  SiteFooter.vue — the footer on every page. Its bottom padding leaves
  exactly the room the fixed HCUNITE wordmark needs (--wm-h, set by
  Wordmark.vue), so at the end of a page the wordmark sits in open
  space as the footer's sign-off instead of covering it.
-->
<script setup>
import { menuItems, faculties, socials } from '../data/nav'
</script>

<template>
  <footer class="site-footer px-(--gutter) text-fg">
    <div class="h-px bg-line"></div>

    <div class="grid grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))] gap-x-6 gap-y-12 pt-12">
      <div class="col-span-2 lg:col-span-1 max-w-sm">
        <p class="eyebrow mb-4">Why we're here</p>
        <p class="!text-sm text-soft">
          We are committed to building a united Hwa Chong family. We are here for you,
          whenever and wherever you need it. We are the Hwa Chong Students' Council.
        </p>
      </div>

      <div>
        <p class="eyebrow mb-4">More about us</p>
        <ul class="links">
          <li><router-link :to="{ path: '/', hash: '#sodache' }">SODACHE</router-link></li>
          <li v-for="item in menuItems" :key="item.label">
            <a v-if="item.external" :href="item.to" target="_blank" rel="noopener">{{ item.label }}</a>
            <router-link v-else :to="item.to">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>

      <div>
        <p class="eyebrow mb-4">Faculties</p>
        <ul class="links">
          <li v-for="f in faculties" :key="f.key">
            <router-link :to="f.to">{{ f.name }}</router-link>
          </li>
        </ul>
      </div>

      <div>
        <p class="eyebrow mb-4">Follow</p>
        <ul class="links">
          <li v-for="s in socials" :key="s.label">
            <a :href="s.href" target="_blank" rel="noopener">{{ s.label }}</a>
          </li>
          <li><a href="https://forms.gle/kT7bP6BH9Ddfrw2z9" target="_blank" rel="noopener">Website feedback</a></li>
        </ul>
      </div>
    </div>

    <p class="eyebrow mt-14 leading-relaxed">
      Credit: Studio Ardent for relevant images<br>
      Website updated by Ng Xu Thong and PubCo
    </p>
  </footer>
</template>

<style scoped>
.site-footer {
  padding-top: 4rem;
  padding-bottom: calc(var(--wm-h, 16vw) + 14vh);
}
@media (min-width: 1024px) {
  .site-footer {
    padding-right: calc(var(--rail) + var(--gutter));
  }
}
/* Fades with <html>'s background when the theme changes on a page change. */
.site-footer, .site-footer :is(p, a, div) {
  transition: color 500ms var(--ease-standard), background-color 500ms var(--ease-standard);
}
.links {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-family: var(--font-inter);
  font-weight: 300;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.links a {
  transition: color 500ms var(--ease-standard), opacity 300ms var(--ease-standard);
}
.links a:hover {
  opacity: 0.5;
}
</style>
