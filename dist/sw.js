importScripts('/indie-nuxt/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/indie-nuxt/_nuxt/90eb8a31c2bc34c2fa3f.js",
    "revision": "4bacd5fa7e4983d2bfb0cbf0d6fc1eda"
  },
  {
    "url": "/indie-nuxt/_nuxt/95dafcde386679cfcaae.js",
    "revision": "262cf73ac6286eecd1dc125ec1045dd9"
  },
  {
    "url": "/indie-nuxt/_nuxt/f7aa1d260b43392f5aa2.js",
    "revision": "ede20d770edee716370ab04ea752d541"
  },
  {
    "url": "/indie-nuxt/_nuxt/fb351cc6a96be29d1ca6.js",
    "revision": "15d49adf7ac6bd32476561d4b9bd3082"
  },
  {
    "url": "/indie-nuxt/_nuxt/fdc542d8b2c06bee800d.js",
    "revision": "04f1260d8cb7b4e7bd4e658f2ea6b8e3"
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
