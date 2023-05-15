importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06524eb.js",
    "revision": "70336949ca501d475925ae10277621fe"
  },
  {
    "url": "/_nuxt/12bc442.js",
    "revision": "299745734385001cdb45bec1fd145488"
  },
  {
    "url": "/_nuxt/1c689aa.js",
    "revision": "4de7c5ad2ffb31b3d3787b6d199a0c13"
  },
  {
    "url": "/_nuxt/5646fea.js",
    "revision": "19234a214e67b54f13b74ebbc39891f5"
  },
  {
    "url": "/_nuxt/5a7df7c.js",
    "revision": "1d675670d640978d498e1fecbe89bb3e"
  },
  {
    "url": "/_nuxt/7800065.js",
    "revision": "826a821fd5a495d3d2538f4cd24909e6"
  },
  {
    "url": "/_nuxt/83d6893.js",
    "revision": "ca394700751e924fc7654f9abb3f1373"
  },
  {
    "url": "/_nuxt/85f4284.js",
    "revision": "c00a4ff6af4f0313461502b51b03a2d8"
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
