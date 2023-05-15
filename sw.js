importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06524eb.js",
    "revision": "70336949ca501d475925ae10277621fe"
  },
  {
    "url": "/_nuxt/0d65cae.js",
    "revision": "c5fcd54fb80627ca200c9d925c4c5b75"
  },
  {
    "url": "/_nuxt/414138d.js",
    "revision": "80969c1800f6b9c8b88d228fbbb4f014"
  },
  {
    "url": "/_nuxt/581b4b4.js",
    "revision": "c63d806dae0a8097336bc1c561bb8750"
  },
  {
    "url": "/_nuxt/5a7df7c.js",
    "revision": "1d675670d640978d498e1fecbe89bb3e"
  },
  {
    "url": "/_nuxt/7de0150.js",
    "revision": "483cbf55dc0e0bc8a7cc75caa66726e7"
  },
  {
    "url": "/_nuxt/85f4284.js",
    "revision": "c00a4ff6af4f0313461502b51b03a2d8"
  },
  {
    "url": "/_nuxt/bed763c.js",
    "revision": "33a0f804ad15d356828e06c031635bc0"
  }
], {
  "cacheId": "indie-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
