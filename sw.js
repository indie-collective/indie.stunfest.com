importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/820702c.js",
    "revision": "862fadce65c6cfe49eee68656d491fad"
  },
  {
    "url": "/_nuxt/85f4284.js",
    "revision": "c00a4ff6af4f0313461502b51b03a2d8"
  },
  {
    "url": "/_nuxt/86109e1.js",
    "revision": "24d389d7a7dd1e3807926d598ef3eb37"
  },
  {
    "url": "/_nuxt/8977a90.js",
    "revision": "75479e383f8b0d886edba7b1168fd847"
  },
  {
    "url": "/_nuxt/a5fa4c0.js",
    "revision": "5f823d4311c21f44ba1be9da86056b5c"
  },
  {
    "url": "/_nuxt/adb849c.js",
    "revision": "b272dcbc690cfb4334bf528c64258236"
  },
  {
    "url": "/_nuxt/fef5467.js",
    "revision": "9e572e7ceffd504ddf4a004ad41ef64a"
  },
  {
    "url": "/_nuxt/ff5d955.js",
    "revision": "a9a6fa27d4d49af3831fb1749ee38359"
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
