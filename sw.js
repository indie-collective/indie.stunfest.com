importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06524eb.js",
    "revision": "70336949ca501d475925ae10277621fe"
  },
  {
    "url": "/_nuxt/5a7df7c.js",
    "revision": "1d675670d640978d498e1fecbe89bb3e"
  },
  {
    "url": "/_nuxt/65a0b34.js",
    "revision": "2b3db11949369ba2caa79685a4c00779"
  },
  {
    "url": "/_nuxt/77b9c4a.js",
    "revision": "5d3dad77f12520590dcf439fccce2199"
  },
  {
    "url": "/_nuxt/85f4284.js",
    "revision": "c00a4ff6af4f0313461502b51b03a2d8"
  },
  {
    "url": "/_nuxt/f0a8503.js",
    "revision": "a03a8fe124628d29d0154f7cf1efcc97"
  },
  {
    "url": "/_nuxt/f4e1000.js",
    "revision": "52080689fbb88c804f416c02286fe7d1"
  },
  {
    "url": "/_nuxt/fcbaaab.js",
    "revision": "8d6928df1c81152bdf010673334a5aed"
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
