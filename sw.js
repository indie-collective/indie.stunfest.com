importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1510524.js",
    "revision": "a1ac9d10270ce7951750aab01dc0bc17"
  },
  {
    "url": "/_nuxt/3150349.js",
    "revision": "b0ffe1164cd37deb162889e984008d9b"
  },
  {
    "url": "/_nuxt/3fbc098.js",
    "revision": "743779bcfcd19c37814c18aadc609c30"
  },
  {
    "url": "/_nuxt/80b2932.js",
    "revision": "eb25bf0f3a85d26b0a8614b0a905da52"
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
    "url": "/_nuxt/c79488a.js",
    "revision": "df9eb0f28ca5e667c4473aae8d3d2bda"
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
