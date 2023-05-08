importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0068ba2.js",
    "revision": "069ab87e2a870bb3973c94feb7e73547"
  },
  {
    "url": "/_nuxt/06524eb.js",
    "revision": "70336949ca501d475925ae10277621fe"
  },
  {
    "url": "/_nuxt/2e59f4b.js",
    "revision": "dccc545f547fd72cf8ca2f3701922946"
  },
  {
    "url": "/_nuxt/5a7df7c.js",
    "revision": "1d675670d640978d498e1fecbe89bb3e"
  },
  {
    "url": "/_nuxt/61ac27c.js",
    "revision": "f12d49cb51089a1a4ef8c50a3f35af57"
  },
  {
    "url": "/_nuxt/85f4284.js",
    "revision": "c00a4ff6af4f0313461502b51b03a2d8"
  },
  {
    "url": "/_nuxt/d6d2fc6.js",
    "revision": "10a350c5062bc0814a3a159846997c2f"
  },
  {
    "url": "/_nuxt/f4dae6f.js",
    "revision": "908a15984525294358e36d8a4e458725"
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
