importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/39a1cdd.js",
    "revision": "58936f35643599ac9f91d2b342401c38"
  },
  {
    "url": "/_nuxt/5c8fc64.js",
    "revision": "6078d2cc9404be22246e2cf199257e27"
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
    "url": "/_nuxt/c264581.js",
    "revision": "4919fcd10d704018572293b96f8d526b"
  },
  {
    "url": "/_nuxt/edef648.js",
    "revision": "2a60849fee3b1dbf8b994b9a1ea74358"
  },
  {
    "url": "/_nuxt/f78efbc.js",
    "revision": "a3cbb90cdf60e07b5afde983f0982583"
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
