importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06524eb.js",
    "revision": "70336949ca501d475925ae10277621fe"
  },
  {
    "url": "/_nuxt/1eb2810.js",
    "revision": "e7d597aebb0ae3276426c2428c732f9a"
  },
  {
    "url": "/_nuxt/2507ca9.js",
    "revision": "af1483d1ea98de3c703903f6673694a8"
  },
  {
    "url": "/_nuxt/5a7df7c.js",
    "revision": "1d675670d640978d498e1fecbe89bb3e"
  },
  {
    "url": "/_nuxt/5fd8bbe.js",
    "revision": "d8a0ac4c1188e6301c011497a42d8979"
  },
  {
    "url": "/_nuxt/833ec70.js",
    "revision": "0adca6fd4ccf1135c9d815040e520c86"
  },
  {
    "url": "/_nuxt/85f4284.js",
    "revision": "c00a4ff6af4f0313461502b51b03a2d8"
  },
  {
    "url": "/_nuxt/e526625.js",
    "revision": "0fa5efb1340f3b4341ef921b3f53901c"
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
