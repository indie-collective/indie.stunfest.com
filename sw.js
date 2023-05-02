importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16b87a3.js",
    "revision": "fba910c5637dbb3fea2257233cb74402"
  },
  {
    "url": "/_nuxt/592f55a.js",
    "revision": "a5914aa17c6877db3f3600bd5ac6b52a"
  },
  {
    "url": "/_nuxt/8f12f67.js",
    "revision": "a15cb969b28882fe6e492f02e806e92b"
  },
  {
    "url": "/_nuxt/b62f697.js",
    "revision": "11d607599353477d8093955c5d37b1e2"
  },
  {
    "url": "/_nuxt/be866a7.js",
    "revision": "87638ddc5dd9c1269e7c19bc3f64ad75"
  },
  {
    "url": "/_nuxt/d2a7380.js",
    "revision": "c068fc6645dc55e61d571bbbc183a4cb"
  },
  {
    "url": "/_nuxt/ef6880c.js",
    "revision": "54004a0011ff1d6fea6c14deb038faad"
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
