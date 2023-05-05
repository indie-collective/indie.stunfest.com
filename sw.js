importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/6a4a8b6.js",
    "revision": "ea2b53ee3bdd3c2130727d1a2425871f"
  },
  {
    "url": "/_nuxt/8065ca9.js",
    "revision": "cf7b9f683cde33363303eab19014a08a"
  },
  {
    "url": "/_nuxt/a2f2e30.js",
    "revision": "7f7f5cc290b0f8c2e153e6437bc8b3eb"
  },
  {
    "url": "/_nuxt/dd72ef3.js",
    "revision": "49e1a5515dafc7c5f89a60afb8add758"
  },
  {
    "url": "/_nuxt/e45fa8a.js",
    "revision": "de97a5859597b67ad2920f7d5616af69"
  },
  {
    "url": "/_nuxt/f42514c.js",
    "revision": "826c6a764d56adc615e0509bb8a06040"
  },
  {
    "url": "/_nuxt/f47aeef.js",
    "revision": "b9d676690bc7cd196fbf011331dbeb9a"
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
