<template>
  <div>
    <section class="hero is-dark">
      <div class="container has-text-centered">
        <img src="~/assets/stunfest_logo.png" alt="Stunfest Indie Game logo" />
      </div>
    </section>
    <nuxt />
    <section class="hero is-dark">
      <div class="hero-body has-text-centered">
        Made with 💖 by
        <a href="https://indieco.xyz" target="_blank">Indie Collective</a>
      </div>
    </section>
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
  width: 50vw;
  max-width: 30rem;
  margin: 2rem;
}

.sticky {
  position: sticky;
  top: 0;
  z-index: 3000; /* For some reason cards were above the nav */
}
</style>
