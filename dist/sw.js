importScripts('/indie-nuxt/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/indie-nuxt/_nuxt/0fcfdf93e4f5755b08ba.js",
    "revision": "a82237f0b04a019f7994f2cbca38e2f6"
  },
  {
    "url": "/indie-nuxt/_nuxt/45de82d63b580b78f9c7.js",
    "revision": "928234cab1dd1f9b27e5fa48b04d6de6"
  },
  {
    "url": "/indie-nuxt/_nuxt/61dae35b7bd8319ba2ce.js",
    "revision": "a37686d5f78d765c12be77bce55cd872"
  },
  {
    "url": "/indie-nuxt/_nuxt/656d2f42db520b11422d.js",
    "revision": "8767b3dca0332c7e8027a581aa1bdeb8"
  },
  {
    "url": "/indie-nuxt/_nuxt/96882d4dc533a6453413.js",
    "revision": "783a8d51b4d0f9db65696ae86a7d37fa"
  },
  {
    "url": "/indie-nuxt/_nuxt/be881d8dbd9449998bfc.js",
    "revision": "40a1c59bc77ac21cea8bbffe29617b69"
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
