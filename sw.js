importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/381f48a.js",
    "revision": "95a271cc8a749dc33e98185562561eda"
  },
  {
    "url": "/_nuxt/4858fd7.js",
    "revision": "b7ff533c885cfec83bae6e589042ba1f"
  },
  {
    "url": "/_nuxt/57fc1bc.js",
    "revision": "90dcea8836d5e34d585dc78f89de2cb9"
  },
  {
    "url": "/_nuxt/85f4284.js",
    "revision": "c00a4ff6af4f0313461502b51b03a2d8"
  },
  {
    "url": "/_nuxt/adb849c.js",
    "revision": "b272dcbc690cfb4334bf528c64258236"
  },
  {
    "url": "/_nuxt/cd9eb42.js",
    "revision": "97932ed2775f99c98372b415dbb1f553"
  },
  {
    "url": "/_nuxt/e032bc2.js",
    "revision": "f993435e302fb5ec4b2b91cc1f43b0a2"
  },
  {
    "url": "/_nuxt/fef5467.js",
    "revision": "9e572e7ceffd504ddf4a004ad41ef64a"
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
