import Card from '~/components/Card'

// Constants
const years = [2013, 2014, 2015, 2016, 2018, 2019, 2020]
const awards = [
  'Stunfest Indie Award',
  'Promise Award',
  "People's Choice Award",
  'GameJam Award'
]

function randomizeCards(cardSection) {
  let j, x, i
  for (i = cardSection.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = cardSection[i]
    cardSection[i] = cardSection[j]
    cardSection[j] = x
  }
  return cardSection
}

export default {
  name: 'HomePage',

  components: {
    Card
  },

  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    currentYear: {
      type: String,
      default: () => location.href.replace(/.*?\/(\d{4})(\/.*?)?$/gim, '$1')
    },
    years: {
      type: Array,
      default: () => years
    }
  },

  computed: {
    sortedAwards() {
      const awardsItems = function(items) {
        if (items && items.games) {
          return items.games
            .filter(item => item.award)
            .sort((a, b) => awards.indexOf(a.award) - awards.indexOf(b.award))
        }
        return []
      }

      const res = []
      this.items.map(i => res.push(...awardsItems(i)))

      return res
    },

    currentYearTabs() {
      return ['all', ...this.items.filter(i => i.games.length).map(i => i.name)]
    },

    filteredYears() {
      return this.years
        .filter(i => i !== +this.currentYear)
        .sort((a, b) => b > a)
    },

    filteredSections() {
      return this.currentYearTabs.filter(
        tab =>
          (this.filter === 'all' || this.filter === tab) &&
          this.items.find(i => i.name === tab) &&
          this.items.find(i => i.name === tab).games.length
      )
    },

    logoPath() {
      let img = ''
      try {
        img = require('../static/logos/' + this.currentYear + '.png')
      } catch (e) {
        img = require('../static/logos/indie_logo.png')
      }
      return img
    }
  },

  async asyncData({ $axios, params, error }) {
    const filter = params.pathMatch || 'all'

    // if (!currentYearTabs().includes(filter)) {
    //   error({ statusCode: 404, message: 'Page not found' })
    // }

    const items = await $axios.$get(
      `${location.href.replace(/\d{4}\/?$/, '') + params.year}.json`
    )
    return { filter, items }
  },

  mounted() {
    const currentYear = this.$route.params.year
    return { currentYear }
  },

  methods: {
    getDisplayName(name) {
      if (name === 'all') {
        return '🏠'
      } else if (this.items.find(i => i.name === name)) {
        return this.items.find(i => i.name === name).displayName
      }
    },

    random(section) {
      if (this.items.find(i => i.name === section)) {
        return randomizeCards(this.items.find(i => i.name === section).games)
      }
    }
  }
}
