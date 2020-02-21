importScripts('/indie-nuxt/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/indie-nuxt/_nuxt/10d40c7035f754661d29.js",
    "revision": "af33a128abdd12ad38cdfb5066c40f35"
  },
  {
    "url": "/indie-nuxt/_nuxt/5a1711a290bbc218772e.js",
    "revision": "949ec264fba9d4e293cf8483c96d3904"
  },
  {
    "url": "/indie-nuxt/_nuxt/76b54e8d3dbb5fbd3455.js",
    "revision": "da26dd1e3ad4b0003b27d5fb4d281a5e"
  },
  {
    "url": "/indie-nuxt/_nuxt/894302bd2ec23e94e911.js",
    "revision": "9de754eae858c66129d52a0bd7b37bf8"
  },
  {
    "url": "/indie-nuxt/_nuxt/fb351cc6a96be29d1ca6.js",
    "revision": "15d49adf7ac6bd32476561d4b9bd3082"
  }
], {
  "cacheId": "indie-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/indie-nuxt/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/indie-nuxt/.*'), workbox.strategies.networkFirst({}), 'GET')
