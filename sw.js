importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/186a35a.js",
    "revision": "29e8e023e2f1e3baa745518ac25d5263"
  },
  {
    "url": "/_nuxt/a3aa05d.js",
    "revision": "1b3bfa05f118d0f57cd7799e0b1fd90b"
  },
  {
    "url": "/_nuxt/be25d25.js",
    "revision": "7ea739e33215bf59a9c89f9b098e34a7"
  },
  {
    "url": "/_nuxt/deda1b2.js",
    "revision": "ef72e4bb211565832e23e66b68533074"
  },
  {
    "url": "/_nuxt/f5dac26.js",
    "revision": "44c9e5015adc32e8267442c3cb2d3352"
  },
  {
    "url": "/_nuxt/f9afb6a.js",
    "revision": "281267f36e4b88b6d97ffc058c315569"
  },
  {
    "url": "/_nuxt/fe1f747.js",
    "revision": "44d6a9db05c34a89e90d07b24b014acf"
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
