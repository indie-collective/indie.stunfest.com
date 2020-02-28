const years = [2013, 2014, 2015, 2016, 2018, 2019, 2020]

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/indie-nuxt/'
        }
      }
    : {
        router: {
          base: '/'
        }
      }

module.exports = {
  mode: 'spa',

  ...routerBase,

  /*
   ** Headers of the page
   */
  head: {
    title: 'Indie Stunfest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
