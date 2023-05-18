importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06524eb.js",
    "revision": "70336949ca501d475925ae10277621fe"
  },
  {
    "url": "/_nuxt/37665ba.js",
    "revision": "328473f5aaf264317c7f62291e19e95f"
  },
  {
    "url": "/_nuxt/5a7df7c.js",
    "revision": "1d675670d640978d498e1fecbe89bb3e"
  },
  {
    "url": "/_nuxt/5f415a2.js",
    "revision": "fa0ddfaa1a81e82161aeb1bf2295ab6c"
  },
  {
    "url": "/_nuxt/85f4284.js",
    "revision": "c00a4ff6af4f0313461502b51b03a2d8"
  },
  {
    "url": "/_nuxt/92eded7.js",
    "revision": "a62662952e14683aadcb09bd557d633b"
  },
  {
    "url": "/_nuxt/a7bd1a9.js",
    "revision": "df94745f7e1844b49c445de90fe441fb"
  },
  {
    "url": "/_nuxt/d6c7f7c.js",
    "revision": "3ef4d05568570ffe65780ebfe79fe112"
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
