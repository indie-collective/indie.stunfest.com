importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/32c4266.js",
    "revision": "f138b88efd50ac22da596a6d5e6664ee"
  },
  {
    "url": "/_nuxt/692b2e7.js",
    "revision": "08688a4f63c67187f678b3d77fcadc08"
  },
  {
    "url": "/_nuxt/86b39b5.js",
    "revision": "189328b019885758f653a6bfe9fc0d97"
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
