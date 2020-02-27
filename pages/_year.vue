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
<style lang="scss" src="~/pages/year.scss"></style>
<script src="~/pages/year.js"></script>
