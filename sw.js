importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1fc24e9.js",
    "revision": "cd154732aff361b90c96cdd8569617f4"
  },
  {
    "url": "/_nuxt/3117ab0.js",
    "revision": "960d08c4ede4071940e293fd3774ae8c"
  },
  {
    "url": "/_nuxt/3326765.js",
    "revision": "e6562f0689397ede3905a49d47cafe74"
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
    "url": "/_nuxt/e3b78ea.js",
    "revision": "dac70fdbe7e66c42ff7d7d6f7e0058d6"
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
