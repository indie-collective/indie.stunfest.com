<template>
  <div>
    <section class="hero is-dark sticky">
      <div class="hero-foot">
        <nav class="tabs is-centered is-medium is-fullwidth is-boxed">
          <div class="container">
            <ul>
              <li :class="{ 'is-active': filter === 'all' }">
                <nuxt-link
                  to="/"
                  class="has-text-white"
                  :class="{
                    'has-background-primary has-text-black has-text-weight-bold':
                      filter === 'all'
                  }"
                >
                  All
                </nuxt-link>
              </li>
              <li :class="{ 'is-active': filter === 'competition' }">
                <nuxt-link
                  to="/competition"
                  class="has-text-white"
                  :class="{
                    'has-background-primary has-text-black has-text-weight-bold':
                      filter === 'competition'
                  }"
                >
                  Competition
                </nuxt-link>
              </li>
              <li :class="{ 'is-active': filter === 'village' }">
                <nuxt-link
                  to="/village"
                  class="has-text-white"
                  :class="{
                    'has-background-primary has-text-black has-text-weight-bold':
                      filter === 'village'
                  }"
                >
                  Indie Village
                </nuxt-link>
              </li>
              <li :class="{ 'is-active': filter === 'prototypes' }">
                <nuxt-link
                  to="/prototypes"
                  class="has-text-white"
                  :class="{
                    'has-background-primary has-text-black has-text-weight-bold':
                      filter === 'prototypes'
                  }"
                >
                  Prototypes
                </nuxt-link>
              </li>
              <li>
                <a
                  class="has-background-black-ter has-text-white"
                  href="http://indie.stunfest.fr/2018/"
                  target="_blank"
                >
                  Archive
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <div>
      <section
        v-if="
          (filter === 'all' || filter === 'competition') && items.competition
        "
        class="section"
      >
        <p class="title is-size-1 is-text-primary is-uppercase">
          Competition
        </p>
        <div class="columns is-tablet is-multiline is-centered">
          <card
            v-for="i in competitionRandom"
            :key="i.title"
            :card="i"
            :vote-link="i.voteLink"
          >
            {{ i.summary }}
          </card>
        </div>
      </section>
      <section
        v-if="(filter === 'all' || filter === 'village') && items.village"
        class="section"
      >
        <p class="title is-size-1 is-text-primary is-uppercase">
          Indie Village
        </p>
        <div class="columns is-tablet is-multiline is-centered">
          <card v-for="i in villageRandom" :key="i.title" :card="i">
            {{ i.summary }}
          </card>
        </div>
      </section>
      <section
        v-if="(filter === 'all' || filter === 'prototypes') && items.prototypes"
        class="section"
      >
        <p class="title is-size-1 is-text-primary is-uppercase">
          Prototypes
        </p>
        <div class="columns is-tablet is-multiline is-centered">
          <card v-for="i in prototypesRandom" :key="i.title" :card="i">
            {{ i.summary }}
          </card>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.tabs {
  font-family: 'Montserrat', sans-serif;
}
</style>

<script>
import Card from '~/components/Card'

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

  computed: {
    villageRandom() {
      return randomizeCards(this.items.village)
    },
    competitionRandom() {
      return randomizeCards(this.items.competition)
    },
    prototypesRandom() {
      return randomizeCards(this.items.prototypes)
    }
  },

  async asyncData({ $axios, params, error }) {
    const filter = params.pathMatch || 'all'

    if (!['all', 'competition', 'village', 'prototypes'].includes(filter)) {
      error({ statusCode: 404, message: 'Page not found' })
    }

    const items = await $axios.$get(
      window.location.href.replace(/(.*?)\/\w+$/gi, '$1/') + '2019.json'
    )
    return { filter, items }
  }
}
</script>
