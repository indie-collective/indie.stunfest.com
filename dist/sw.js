importScripts('/indie-nuxt/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/indie-nuxt/_nuxt/90eb8a31c2bc34c2fa3f.js",
    "revision": "4bacd5fa7e4983d2bfb0cbf0d6fc1eda"
  },
  {
    "url": "/indie-nuxt/_nuxt/b9f39cb2614e6009a45a.js",
    "revision": "3eeda1cb74cc93c5fdb008896096d9fb"
  },
  {
    "url": "/indie-nuxt/_nuxt/d970926bd541eaaa0451.js",
    "revision": "842a79e2768ac06525262220047c0b2f"
  },
  {
    "url": "/indie-nuxt/_nuxt/f7aa1d260b43392f5aa2.js",
    "revision": "ede20d770edee716370ab04ea752d541"
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
