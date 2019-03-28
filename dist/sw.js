importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3b4a6d23293fd018e015.js",
    "revision": "7a03adc6b303b2b30ae4bb83776e3425"
  },
  {
    "url": "/_nuxt/7545e91949163650c89d.js",
    "revision": "ee49cac3395d574def59f041632e9e61"
  },
  {
    "url": "/_nuxt/d3670ec92d8d98f12bc4.js",
    "revision": "7ca76e8320a14ae85c07a62a67be7126"
  },
  {
    "url": "/_nuxt/e2d9bfc5ad30275475ac.js",
    "revision": "a62fb9c1520f7178e2fbf142ad39e09e"
  },
  {
    "url": "/_nuxt/e7e91ff8201ec06f07d7.js",
    "revision": "188fc1b0f5b1d23ac94e63d0d602aaa2"
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
