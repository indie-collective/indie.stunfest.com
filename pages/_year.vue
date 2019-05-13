<template>
  <div>
    <section class="hero is-dark sticky">
      <div class="hero-foot">
        <nav class="tabs is-centered is-medium is-fullwidth is-boxed">
          <div class="container">
            <ul>
              <li
                v-for="tab in tabs"
                v-show="tab === 'all' || items[tab]"
                :key="tab"
                :class="{ 'is-active': filter === tab }"
                @click="filter = tab"
              >
                <a
                  :to="tab"
                  class="has-text-white"
                  :class="{
                    'has-background-primary has-text-black has-text-weight-bold':
                      filter === tab
                  }"
                >
                  {{ tab[0].toUpperCase() + tab.slice(1) }}
                </a>
              </li>
              <li>
                <a class="dropdown is-hoverable is-up">
                  <div class="dropdown-trigger">
                    <button
                      class="button is-text"
                      aria-haspopup="true"
                      aria-controls="dropdown-menu"
                    >
                      <span>{{ currentYear }}</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
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
            class="award-container column is-half-tablet is-one-quarter-widescreen"
            :class="
              i.award + '-award' + (i.award === 'indie' ? ' is-half' : '')
            "
          >
            <p class="award title is-size-3 is-uppercase has-text-centered">
              {{ getAwardTitle(i.award) }}
            </p>
            <card class="tile is-vertical" :card="i" :vote-link="i.voteLink">
              {{ i.summary }}
            </card>
          </div>
        </div>
      </section>

      <section v-for="section in sections" :key="section" class="section">
        <p class="title is-size-1 is-text-primary is-uppercase">
          {{ section }}
        </p>
        <div class="columns is-tablet is-multiline is-centered">
          <div
            v-for="i in random(section)"
            :key="i.title"
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

<style>
.tabs {
  font-family: 'Montserrat', sans-serif;
  overflow: visible;
}
.tabs.tabs li a {
  border: none;
}
.dropdown.dropdown {
  padding: 0 1em;
}
.dropdown,
.dropdown-trigger,
.dropdown-trigger button {
  width: 100%;
  outline: none;
}
.dropdown-trigger button > span + span {
  display: none;
}
.dropdown-trigger.dropdown-trigger button:hover,
.dropdown .dropdown-menu {
  background: transparent;
  width: 100%;
  left: auto;
}
.dropdown-trigger.dropdown-trigger button,
.dropdown-trigger.dropdown-trigger button *,
.dropdown .dropdown-menu,
.dropdown .dropdown-menu * {
  color: white !important;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  font-size: 20px;
}
.dropdown .dropdown-content {
  padding: 0;
  background: transparent;
}

.award-title.award-title {
  margin-bottom: 3rem;
}
.award-container {
  position: relative;
  margin-top: 2rem;
}
.award {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  margin: -1.25rem 0.75rem;
}
.promise-award .award,
.promise-award .card {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}
.indie-award .award,
.indie-award .card {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
.audience-award .award,
.audience-award .card {
  background-image: linear-gradient(to right, #6ce6ff 0%, #a1f6ed 100%);
}
.gamejam-award .award,
.gamejam-award .card {
  background-image: linear-gradient(to right, #d0bff0, #fbc7d4);
}
</style>

<script>
import Card from '~/components/Card'

// Constants
const years = [2013, 2014, 2015, 2016, 2018, 2019]
const tabs = ['all', 'competition', 'village', 'prototypes', 'gamejam']
const awards = {
  indie: 'Stunfest Indie Award',
  promise: 'Promise Award',
  audience: "People's Choice Award",
  gamejam: 'GameJam Award'
}

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
      default: () => tabs
    },
    currentYear: {
      type: String,
      default: () => +location.href.replace(/.*?\/(\d{4})(\/.*?)?$/gim, '$1')
    },
    years: {
      type: Array,
      default: () => years
    }
  },

  computed: {
    sortedAwards() {
      const awardsSort = Object.keys(awards)

      const awardsItems = function(items) {
        if (items) {
          return items
            .filter(item => item.award)
            .sort(
              (a, b) =>
                awardsSort.indexOf(a.award) - awardsSort.indexOf(b.award)
            )
        }
        return []
      }

      return [
        ...awardsItems(this.items.competition),
        ...awardsItems(this.items.gamejam)
      ]
    },

    filteredYears() {
      return this.years.filter(i => i !== this.currentYear)
    },

    sections() {
      return tabs.filter(tab => this.items[tab])
    }
  },

  async asyncData({ $axios, params, error }) {
    const filter = params.pathMatch || 'all'

    if (!tabs.includes(filter)) {
      error({ statusCode: 404, message: 'Page not found' })
    }

    const items = await $axios.$get(params.year + '.json')
    return { filter, items }
  },

  mounted() {
    const currentYear = this.$route.params.year
    return { currentYear }
  },

  methods: {
    getAwardTitle(award) {
      return awards[award]
    },

    random(section) {
      return randomizeCards(this.items[section])
    }
  }
}
</script>
