importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16c4a9e.js",
    "revision": "5b4f1f88f125e49ec1cc61f61e9d6270"
  },
  {
    "url": "/_nuxt/35e350a.js",
    "revision": "66da2917e333abda577e7f8d0876107d"
  },
  {
    "url": "/_nuxt/c313ab5.js",
    "revision": "bb6676ae30444935f5f759119e2e46e8"
  },
  {
    "url": "/_nuxt/c8a5468.js",
    "revision": "60db51dffdefa6d85e8715140096e2c2"
  },
  {
    "url": "/_nuxt/d956802.js",
    "revision": "1395137110185044d4af53a85b8698f9"
  },
  {
    "url": "/_nuxt/f5dac26.js",
    "revision": "44c9e5015adc32e8267442c3cb2d3352"
  },
  {
    "url": "/_nuxt/f9e71c2.js",
    "revision": "9e24eae3295030d6e4e08d44eefaec4a"
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
