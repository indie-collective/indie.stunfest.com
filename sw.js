importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06524eb.js",
    "revision": "70336949ca501d475925ae10277621fe"
  },
  {
    "url": "/_nuxt/0b9f069.js",
    "revision": "5f2dc75185e7ba7ab8266fcc05477ef0"
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
    "url": "/_nuxt/a7c9b94.js",
    "revision": "0db2c3e7edf925899f254876f60807f4"
  },
  {
    "url": "/_nuxt/ac9b8bf.js",
    "revision": "c9cfcc267cd18f32b359c5fcc72c6166"
  },
  {
    "url": "/_nuxt/d0c9e2e.js",
    "revision": "83506813f7f883cc91712399e8dac107"
  },
  {
    "url": "/_nuxt/f4bcfdd.js",
    "revision": "0f9307b1bdc44ff378234a5a5ee98d5f"
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
