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
    "url": "/_nuxt/64c7a53.js",
    "revision": "31a4bab73e5fff1d9941a046151e405b"
  },
  {
    "url": "/_nuxt/85f4284.js",
    "revision": "c00a4ff6af4f0313461502b51b03a2d8"
  },
  {
    "url": "/_nuxt/b4f81d1.js",
    "revision": "d5ae0a36147889e1b2e23281a91362ba"
  },
  {
    "url": "/_nuxt/f0a8503.js",
    "revision": "a03a8fe124628d29d0154f7cf1efcc97"
  },
  {
    "url": "/_nuxt/f9d5e66.js",
    "revision": "0cc5c935271744f6793e5f0f3aab3cef"
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
