importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1836ff7.js",
    "revision": "c1f3c532dad8a9b9cf2d70f23e4fc1c8"
  },
  {
    "url": "/_nuxt/41e3a91.js",
    "revision": "fcd94623cb1f5f65bacfbd291054d205"
  },
  {
    "url": "/_nuxt/692b2e7.js",
    "revision": "08688a4f63c67187f678b3d77fcadc08"
  },
  {
    "url": "/_nuxt/942323a.js",
    "revision": "71a55cbb4a8b56cecbd8b49d39c89448"
  },
  {
    "url": "/_nuxt/9977d8c.js",
    "revision": "83aa6ddce03d146206ffd847502e997e"
  },
  {
    "url": "/_nuxt/a2f2e30.js",
    "revision": "7f7f5cc290b0f8c2e153e6437bc8b3eb"
  },
  {
    "url": "/_nuxt/dd72ef3.js",
    "revision": "49e1a5515dafc7c5f89a60afb8add758"
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
