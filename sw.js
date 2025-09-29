importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/71d23af.js",
    "revision": "9bb8149a04792d41eff6808170c88ce3"
  },
  {
    "url": "/_nuxt/85f4284.js",
    "revision": "c00a4ff6af4f0313461502b51b03a2d8"
  },
  {
    "url": "/_nuxt/96f5ed8.js",
    "revision": "e97389070f3fdef25077933b1fe181c4"
  },
  {
    "url": "/_nuxt/adb849c.js",
    "revision": "b272dcbc690cfb4334bf528c64258236"
  },
  {
    "url": "/_nuxt/d4021e8.js",
    "revision": "4436bf1f3bcc3da35fca325077ce85a6"
  },
  {
    "url": "/_nuxt/ddc9940.js",
    "revision": "a55be357cfe017cb87be6787184925f2"
  },
  {
    "url": "/_nuxt/e80dbdb.js",
    "revision": "40caaa050f218f220195c273d205f75a"
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
