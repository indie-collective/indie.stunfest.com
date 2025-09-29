importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03cc8e4.js",
    "revision": "a537c1d129a775c28b5180bd19c905e0"
  },
  {
    "url": "/_nuxt/292d86b.js",
    "revision": "d7fd2320002ffaba0299cda1c7279e28"
  },
  {
    "url": "/_nuxt/5dc089b.js",
    "revision": "b0485689e32f5c30332ec7fb8589e9e9"
  },
  {
    "url": "/_nuxt/674a9d4.js",
    "revision": "b3743a9e265d85f227df7acba155c551"
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
    "url": "/_nuxt/b1da2f7.js",
    "revision": "af9271d00fd4bd1b3ace06d216831bac"
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
