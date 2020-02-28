importScripts('/indie-nuxt/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/indie-nuxt/_nuxt/2dd7d1fe252b6997715c.js",
    "revision": "7cb02cda8f1418e301427ebd6fa39ee1"
  },
  {
    "url": "/indie-nuxt/_nuxt/61a997aae318f5102e93.js",
    "revision": "2719228259d325e4e82716b6c849a470"
  },
  {
    "url": "/indie-nuxt/_nuxt/6d00a9b73cf5b0f52811.js",
    "revision": "24def4998785433824b0d9cc07ef582f"
  },
  {
    "url": "/indie-nuxt/_nuxt/755a5a63d57ac9f4a400.js",
    "revision": "f84a31663c3d23988c63408ed8913016"
  },
  {
    "url": "/indie-nuxt/_nuxt/bc2d86b2ae11c85d540e.js",
    "revision": "c70ddb18605fe08e90c8f10fd26e6c9e"
  },
  {
    "url": "/indie-nuxt/_nuxt/f781e02fe0339f105c92.js",
    "revision": "783a8d51b4d0f9db65696ae86a7d37fa"
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
