importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/7d18874.js",
    "revision": "23826e602a6882b84d88b99155cdb6d0"
  },
  {
    "url": "/_nuxt/84347b2.js",
    "revision": "cc1359ba17e331fcc712fac3e0416011"
  },
  {
    "url": "/_nuxt/91b144f.js",
    "revision": "0995730676d2f02edd2310a950396a0a"
  },
  {
    "url": "/_nuxt/a7fc3d6.js",
    "revision": "67dc0f117c69bc2822dae2962b1661f0"
  },
  {
    "url": "/_nuxt/f5dac26.js",
    "revision": "44c9e5015adc32e8267442c3cb2d3352"
  },
  {
    "url": "/_nuxt/f9afb6a.js",
    "revision": "281267f36e4b88b6d97ffc058c315569"
  },
  {
    "url": "/_nuxt/fa55696.js",
    "revision": "b3ad5f5a3acd91af51778dc7cb279ddb"
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
