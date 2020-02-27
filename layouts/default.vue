<template>
  <div>
    <nuxt />
    <footer class="hero">
      <div class="hero-body has-text-centered">
        Fait avec tout notre petit 💖 par
        <a href="https://indieco.xyz" target="_blank">Indie Collective</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'distortion_of_the_brain_and_mind';
  src: url(data:application/x-font-woff;charset=utf-8;base64,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)
    format('woff2');
  font-display: fallback;
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: '04B03';
  src: url(data:application/x-font-woff;charset=utf-8;base64,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)
    format('woff2');
  font-display: fallback;
  font-style: normal;
  font-weight: normal;
}

:root {
  --primary-color: #ff5446;
  --link-color: #3273dc;
  --default-card-bg: #fff;
  --default-card-font: #363636;

  /* Themes */
  --header-bg-2013: #363636;
  --header-font-2013: #f5f5f5;
  --header-tab-bg-2013: var(--primary-color);
  --header-tab-font-2013: var(--header-font-2013);
  --card-h1-2013: var(--header-tab-bg-2013);
  --card-link-bg-2013: var(--link-color);
  --card-link-font-2013: var(--header-font-2013);
  --main-font-2013: 'distortion_of_the_brain_and_mind';

  --header-bg-2020: #4500b4;
  --header-font-2020: #e8dada;
  --header-tab-bg-2020: #e8dada;
  --header-tab-font-2020: #363636;
  --card-h1-2020: #4500b4;
  --card-link-bg-2020: var(--card-h1-2020);
  --card-link-font-2020: var(--header-font-2020);
  --main-font-2020: 'Barlow Condensed';

  --header-bg-2019: #f8f8fb;
  --header-font-2019: #363636;
  --header-tab-bg-2019: #97a5d4;
  --header-tab-font-2019: var(--header-font-2019);
  --card-h1-2019: var(--header-tab-bg-2019);
  --card-link-bg-2019: var(--header-tab-bg-2019);
  --card-link-font-2019: var(--header-font-2019);
  --main-font-2019: 'distortion_of_the_brain_and_mind';

  --header-bg-2018: #f8f8fb;
  --header-font-2018: #363636;
  --header-tab-bg-2018: #69c0bb;
  --header-tab-font-2018: var(--header-font-2018);
  --card-h1-2018: var(--header-tab-bg-2018);
  --card-link-bg-2018: var(--header-tab-bg-2018);
  --card-link-font-2018: var(--header-font-2018);
  --main-font-2018: '04B03';

  --header-bg-2016: #f8f8fb;
  --header-font-2016: #363636;
  --header-tab-bg-2016: #faaf4c;
  --header-tab-font-2016: var(--header-font-2016);
  --card-h1-2016: var(--header-tab-bg-2016);
  --card-link-bg-2016: var(--header-tab-bg-2016);
  --card-link-font-2016: var(--header-font-2016);
  --main-font-2016: '04B03';

  --header-bg-2015: #f8f8fb;
  --header-font-2015: #363636;
  --header-tab-bg-2015: #ff6762;
  --header-tab-font-2015: var(--header-font-2015);
  --card-h1-2015: var(--header-tab-bg-2015);
  --card-link-bg-2015: var(--header-tab-bg-2015);
  --card-link-font-2015: var(--header-font-2015);
  --main-font-2015: '04B03';

  --header-bg-2014: #d55132;
  --header-font-2014: #e8dada;
  --header-tab-bg-2014: #e8dada;
  --header-tab-font-2014: #363636;
  --card-h1-2014: #d55132;
  --card-link-bg-2014: var(--card-h1-2014);
  --card-link-font-2014: var(--header-font-2014);
  --main-font-2014: 'Enriqueta';
}

@for $year from 2013 to 2030 {
  .header-#{$year} {
    background: var(--header-bg-#{$year});

    .header-tab-#{$year}:not(.is-active) a {
      color: var(--header-font-#{$year}) !important;
    }

    .header-tab-#{$year}.is-active.is-active a {
      background: var(--header-tab-bg-#{$year});
      color: var(--header-tab-font-#{$year}) !important;
    }

    .dropdown {
      & .dropdown-content {
        background: var(--header-tab-bg-#{$year});
      }
      & button,
      & button:hover,
      & button:focus {
        color: var(--header-font-#{$year});
      }
    }
  }

  .title-#{$year} {
    color: var(--card-h1-#{$year});
    font-family: var(--main-font-#{$year}), 'Oswald', sans-serif;
  }

  .award-#{$year} {
    font-family: var(--main-font-#{$year}), 'Oswald', sans-serif;
  }

  .card-#{$year} {
    .title {
      font-family: var(--main-font-#{$year}), 'Oswald', sans-serif;
    }
    .card-footer-item {
      background: var(--card-link-bg-#{$year});
      color: var(--card-link-font-#{$year});
    }
  }
}

.hero img {
  max-height: 10rem;
  margin: 2rem 0;
  filter: drop-shadow(5px 5px lightgray);
}

.header-2020.hero {
  .container {
    margin: 0;
    max-width: 100%;
  }

  img {
    max-height: 100%;
    margin: 0;
    filter: none;
  }
}

.sticky {
  position: sticky;
  top: 0;
  z-index: 3000; /* For some reason cards were above the nav */
}

footer {
  background: linear-gradient(to bottom right, #004e43, #008674);
  color: white;
  font-size: 1.5rem;

  a {
    font-weight: bold;
    color: white;
    text-decoration: underline;
  }
}
</style>

<script>
export default {
  middleware: 'redirection',

  props: {
    currentYear: {
      type: String,
      default: () => location.href.replace(/.*?\/(\d{4})(\/.*?)?$/gim, '$1')
    }
  },

  mounted() {
    return { currentYear: this.$route.params.year }
  },

  head() {
    return {
      title: `Indie Stunfest ${this.$route.params.year}`
    }
  }
}
</script>
