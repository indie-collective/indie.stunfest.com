<template>
  <div
    class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
  >
    <div class="card is-dark">
      <div class="card-image">
        <figure class="image is-16by9">
          <a :href="card.link">
            <img v-if="card.img" :src="card.img" />
            <img
              v-if="!card.img"
              src="https://place-hold.it/300x169/ffbfba/36?text=No%20images%20!&fontsize=16"
            />
          </a>
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-3">
          {{ card.title }}
        </p>
        <p class="subtitle is-5 is-family-monospace">
          {{ card.studio }}
        </p>
        <p class="is-size-6">
          <slot />
        </p>
      </div>
      <footer class="card-footer">
        <a
          :href="card.link"
          class="card-footer-item has-background-link has-text-white"
          >View more...</a
        >
        <a
          v-if="voteLink"
          :href="card.voteLink"
          class="card-footer-item has-background-primary has-text-white has-text-weight-bold is-uppercase"
          >Vote for me !</a
        >
      </footer>
    </div>
  </div>
</template>

<style>
.card-content {
  min-height: 350px;
}
.card-content > p:last-child {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
}
</style>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
    voteLink: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>
