const years = [2013, 2014, 2015, 2016, 2018, 2019, 2020, 2022]

const title = 'Indie Stunfest'
const description = 'Welcome to the Stunfest Indie section !'
const url = 'https://indie.stunfest.com/'
const img = 'webpage.jpg'

const routerBase = {
  router: {
    base: '/',
  },
}

module.exports = {
  years,

  ssr: false,
  target: 'static',
  telemetry: false,

  ...routerBase,

  /*
   ** Headers of the page
   */
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: description },
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: img },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: url },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: img },
      // Override
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: title },
      { hid: 'author', name: 'author', content: 'Indie Collective' },
      { hid: 'og:site_name', name: 'og:site_name', content: title }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ff5446' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/date-fns',
    'nuxt-buefy',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    '@nuxtjs/axios'
  ],

  webfontloader: {
    google: {
      families: [
        'Montserrat:500,700',
        'Oswald:500',
        'Enriqueta:500',
        'Barlow Condensed:800'
      ]
    }
  },

  axios: {
    proxyHeaders: false
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
              fix: true
            }
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
              name: 'fonts/[name].[ext]'
            }
          }
        )
      }
    }
  },

  generate: {
    routes: [...['/'], ...years.map(year => `${year}`)]
  }
}
