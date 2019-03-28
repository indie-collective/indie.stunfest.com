<template>
  <div>
    <section class="hero is-dark">
      <div class="container has-text-centered">
        <img src="~/assets/stunfest_logo.png" alt="Stunfest Indie Game logo" />
      </div>
    </section>
    <nuxt />
  </div>
</template>
<style>
:root {
  --primary-color: #ff5446;
  --link-color: #3273dc;
}
/* Override Buefy*/
[class*='-primary']:not([class*='background-primary']) {
  color: var(--primary-color) !important;
}
.has-background-primary {
  background: var(--primary-color) !important;
}
a {
  color: var(--link-color) !important;
}
.has-background-link {
  background-color: var(--link-color) !important;
}

.hero img {
  width: 100%;
  max-width: 30rem;
  margin: 2rem;
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
