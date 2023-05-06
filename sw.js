importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/055b8cc.js",
    "revision": "3cc03e9b9ee405cbba0fdeba6d2706d6"
  },
  {
    "url": "/_nuxt/06524eb.js",
    "revision": "70336949ca501d475925ae10277621fe"
  },
  {
    "url": "/_nuxt/0e1cd79.js",
    "revision": "bce889155623d216c281fe063cd1de76"
  },
  {
    "url": "/_nuxt/4286f08.js",
    "revision": "012026522605556172a253a3c7588fa6"
  },
  {
    "url": "/_nuxt/5a7df7c.js",
    "revision": "1d675670d640978d498e1fecbe89bb3e"
  },
  {
    "url": "/_nuxt/85f4284.js",
    "revision": "c00a4ff6af4f0313461502b51b03a2d8"
  },
  {
    "url": "/_nuxt/88607db.js",
    "revision": "cda15f7c2a267fce622763791c8cba6e"
  },
  {
    "url": "/_nuxt/c8504f6.js",
    "revision": "28ffa57fd2cfe65ec7cce3f979cbf435"
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
