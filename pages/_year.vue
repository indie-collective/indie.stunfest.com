<template>
  <div>
    <section :class="`header-${currentYear}`" class="hero">
      <div class="container has-text-centered">
        <img :src="logoPath" alt="Stunfest Indie Game logo" />
      </div>
    </section>
    <section :class="`header-${currentYear}`" class="hero sticky">
      <div class="hero-foot">
        <nav class="tabs is-medium is-fullwidth is-boxed">
          <div class="container">
            <ul>
              <li
                v-for="tab in currentYearTabs"
                :key="tab"
                :class="
                  `header-tab-${currentYear}${
                    filter === tab ? ' is-active' : ''
                  }`
                "
                @click="filter = tab"
              >
                <a
                  :to="tab"
                  :class="{
                    'has-text-weight-bold': filter === tab
                  }"
                >
                  {{ getDisplayName(tab) }}
                </a>
              </li>
              <li class="years-dropdown">
                <a class="dropdown is-hoverable">
                  <div class="dropdown-trigger">
                    <button
                      class="button is-text"
                      aria-haspopup="true"
                      aria-controls="dropdown-menu"
                    >
                      <span>{{ currentYear }}</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true" />
                      </span>
                    </button>
                  </div>
                  <div id="dropdown-menu" class="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <nuxt-link
                        v-for="year in filteredYears"
                        :key="year"
                        :to="`/${year}`"
                        class="dropdown-item"
                      >
                        {{ year }}
                      </nuxt-link>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <div>
      <section v-if="filter === 'all' && sortedAwards.length" class="section">
        <div class="columns is-tablet is-multiline is-centered">
          <div
            v-for="i in sortedAwards"
            :key="i.title"
            v-if="i.title"
            :class="
              i.award + '-award' + (i.award === 'indie' ? ' is-half' : '')
            "
            class="award-container column is-half-tablet is-one-quarter-widescreen"
          >
            <p
              :class="`award-${currentYear}`"
              class="award title is-size-3 is-uppercase has-text-centered"
            >
              {{ i.award }}
            </p>
            <card :card="i" :vote-link="i.voteLink" class="tile is-vertical">
              {{ i.summary }}
            </card>
          </div>
        </div>
      </section>

      <section
        v-for="section in filteredSections"
        :key="section"
        class="section"
      >
        <p :class="`title-${currentYear}`" class="title is-size-1 is-uppercase">
          {{ getDisplayName(section) }}
        </p>
        <div class="columns is-tablet is-multiline is-centered">
          <div
            v-for="i in random(section)"
            :key="i.title"
            v-if="i.title"
            class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
          >
            <card :card="i" :vote-link="i.voteLink">
              {{ i.summary }}
            </card>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.tabs {
  font-family: 'Montserrat', sans-serif;
  overflow: visible;
  border-bottom: 2px #dbdbdb solid;

  &.tabs li a {
    border: none;
    cursor: pointer;

    &:hover,
    &:focus {
      background: rgba(0, 0, 0, 0.1);
    }
  }
}

.years-dropdown {
  flex: 0 0 150px !important;

  .dropdown {
    padding: 0 1em;

    &,
    &-trigger,
    &-trigger button {
      width: 100%;
      outline: none;
    }

    &-trigger button > span + span {
      display: none;
    }

    &-trigger.dropdown-trigger button:hover,
    & .dropdown-menu {
      background: transparent;
      width: 100%;
      left: auto;
    }

    &-trigger.dropdown-trigger button,
    &-trigger.dropdown-trigger button *,
    & .dropdown-menu,
    & .dropdown-menu * {
      font-family: 'Montserrat', sans-serif;
      text-decoration: none;
      font-size: 20px;
    }

    & .dropdown-content {
      padding: 0;
      width: 150px;
      margin: auto;

      .dropdown-item {
        width: 150px;
      }
    }
  }
}

.column {
  display: flex;
}

.award {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  margin: -1.25rem 0.75rem;

  &-title.award-title {
    margin-bottom: 3rem;
  }

  &-container {
    position: relative;
    margin-top: 2rem;

    &:nth-child(1) .award,
    &:nth-child(1) .card {
      background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    }
    &:nth-child(2) .award,
    &:nth-child(2) .card {
      background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    }
    &:nth-child(3) .award,
    &:nth-child(3) .card {
      background-image: linear-gradient(to right, #6ce6ff 0%, #a1f6ed 100%);
    }
    &:nth-child(4) .award,
    &:nth-child(4) .card {
      background-image: linear-gradient(to right, #d0bff0, #fbc7d4);
    }
  }
}
</style>

<script>
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
      return ['all', ...this.items.map(i => i.name)]
    },

    filteredYears() {
      return this.years.filter(i => i !== +this.currentYear)
    },

    filteredSections() {
      return this.currentYearTabs.filter(
        tab =>
          (this.filter === 'all' || this.filter === tab) &&
          this.items.find(i => i.name === tab)
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
</script>
