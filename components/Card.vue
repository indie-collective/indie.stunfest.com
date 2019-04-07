<template>
  <div
    class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
  >
    <div class="card is-dark">
      <div class="card-image">
        <a :href="card.link">
          <figure class="image is-16by9">
            <img v-if="card.img" :src="path(card.img)" />
            <img
              v-if="!card.img"
              src="https://place-hold.it/300x169/ffbfba/36?text=No%20images%20!&fontsize=16"
            />
          </figure>
        </a>
      </div>
      <div class="card-content">
        <p class="title is-3">
          {{ card.title }}
        </p>
        <p class="subtitle is-5">
          {{ card.studio }}
        </p>
        <p class="is-size-6">
          <slot />
        </p>
      </div>
      <footer v-if="card.link" class="card-footer">
        <a
          :href="card.link"
          class="card-footer-item has-background-link has-text-white"
          >View more...</a
        >
        <a
          v-if="isItTimeToVote()"
          href="https://xoyondo.com/ap/RAGfHVZ4lG3o80N"
          class="card-footer-item vote-for-me has-text-weight-bold is-uppercase"
          >Vote for me !</a
        >
      </footer>
    </div>
  </div>
</template>

<style>
.title {
  font-family: 'Oswald', sans-serif;
}
.subtitle {
  font-family: 'Montserrat', sans-serif;
}
.image > img {
  object-fit: cover;
}
.card-content {
  min-height: 360px;
}
.card-content > p:last-child {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
}
.vote-for-me {
  --bg-color-hue: 100;
  --bg-color-saturation: 100;
  --bg-color-lightness: 100;

  background-color: red;
  color: white;
  animation: color 0.5s infinite alternate;
}
@keyframes color {
  0% {
    background-color: hsl(0, 80%, 80%);
    color: hsl(180, 100%, 60%);
  }
  10% {
    background-color: hsl(20, 80%, 80%);
    color: hsl(200, 100%, 60%);
  }
  20% {
    background-color: hsl(40, 80%, 80%);
    color: hsl(220, 100%, 60%);
  }
  30% {
    background-color: hsl(60, 80%, 80%);
    color: hsl(240, 100%, 60%);
  }
  40% {
    background-color: hsl(80, 80%, 80%);
    color: hsl(260, 100%, 60%);
  }
  50% {
    background-color: hsl(100, 80%, 80%);
    color: hsl(280, 100%, 60%);
  }
  60% {
    background-color: hsl(120, 80%, 80%);
    color: hsl(300, 100%, 60%);
  }
  70% {
    background-color: hsl(140, 80%, 80%);
    color: hsl(320, 100%, 60%);
  }
  80% {
    background-color: hsl(160, 80%, 80%);
    color: hsl(340, 100%, 60%);
  }
  90% {
    background-color: hsl(180, 80%, 80%);
    color: hsl(360, 100%, 60%);
  }
  100% {
    background-color: hsl(180, 80%, 80%);
    color: hsl(360, 100%, 60%);
  }
}
</style>

<script>
/* eslint-disable no-console */

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
  },
  methods: {
    isItTimeToVote() {
      const now = new Date().getTime()
      return now >= 1558044000000 && now <= 1558260000000
    },
    path(img) {
      return require('../assets/logos/' + img)
    }
  }
}
</script>
