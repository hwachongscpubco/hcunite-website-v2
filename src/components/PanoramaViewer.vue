<!--
  PanoramaViewer.vue — embeds a drag-to-look-around 360° equirectangular
  photo (e.g. a room interior) using the Pannellum library, loaded from a
  CDN at runtime — the same "inject a <script> tag on mount" approach
  Home.vue already uses for the Instagram widget, so no npm dependency or
  build config changes are needed.

  Usage — see the root README's "Adding a 360 panorama" section for the
  full walkthrough (where to put the photo, how it must be shot/exported):

    <PanoramaViewer image="/images/common/common-room-360.jpg" title="Common Room" />

  Props:
    - image: path to an equirectangular (2:1 aspect ratio) JPG/PNG.
    - title: optional label shown in the top-left of the viewer.
    - autoRotate: degrees/second to slowly spin when idle; 0 disables it
      (default -2, a slow drift to hint the photo is draggable).

  The viewer fills its container, which defaults to a 16:9 box — override
  by passing a `class` (e.g. class="aspect-square h-[70vh]") same as any
  other component.
-->
<template>
  <div class="w-full aspect-video rounded-xl overflow-hidden bg-black">
    <div :id="containerId" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, default: '' },
  autoRotate: { type: Number, default: -2 },
})

// Unique per instance so multiple panoramas can exist on the same page.
const containerId = `panorama-${Math.random().toString(36).slice(2)}`

const PANNELLUM_JS = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js'
const PANNELLUM_CSS = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css'

function loadStylesheet(href) {
  if (document.querySelector(`link[href="${href}"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (window.pannellum) return resolve()
    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.head.appendChild(script)
  })
}

let viewer = null

onMounted(async () => {
  loadStylesheet(PANNELLUM_CSS)
  await loadScript(PANNELLUM_JS)

  viewer = window.pannellum.viewer(containerId, {
    type: 'equirectangular',
    panorama: props.image,
    title: props.title || undefined,
    autoLoad: true,
    autoRotate: props.autoRotate,
    compass: false,
  })
})

onBeforeUnmount(() => {
  viewer?.destroy?.()
})
</script>
