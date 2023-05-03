importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/282e671.js",
    "revision": "1d599bb1c8bfad0dd37f33dda7f6d5d5"
  },
  {
    "url": "/_nuxt/4013332.js",
    "revision": "2d70a2d9a450161976da24347e039568"
  },
  {
    "url": "/_nuxt/687c617.js",
    "revision": "acf8c5093053174251466c0a9405a287"
  },
  {
    "url": "/_nuxt/a2f2e30.js",
    "revision": "7f7f5cc290b0f8c2e153e6437bc8b3eb"
  },
  {
    "url": "/_nuxt/b85419c.js",
    "revision": "13a2fee9f4446129cf113d4cc07eb02f"
  },
  {
    "url": "/_nuxt/d836532.js",
    "revision": "b11042c3df3e02c3d7996182d3d9712f"
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
