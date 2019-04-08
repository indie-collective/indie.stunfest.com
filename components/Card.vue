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
        <p class="title is-2">
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
@font-face {
  font-family: 'distortion_of_the_brain_and_mind';
  src: url(data:application/x-font-woff;charset=utf-8;base64,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)
    format('woff');
  font-display: fallback;
  font-weight: normal;
  font-style: normal;
}
.card {
  transition: all ease-in-out 100ms;
  transform: perspective(1px) translateZ(0);
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
}
.card:hover {
  transform: scale(1.01) perspective(1px) translateZ(0);
}
.title {
  font-family: 'distortion_of_the_brain_and_mind', 'Oswald', sans-serif;
  letter-spacing: 0.05rem;
}
.subtitle {
  font-family: 'Montserrat', sans-serif;
}
.image > img {
  object-fit: cover;
}
.column {
  display: flex;
}
.card-content {
  margin-bottom: 3rem;
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
.card-footer {
  font-family: 'Montserrat';
  position: absolute;
  width: 100%;
  bottom: 0;
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
      return require('../static/logos/' + img + '.jpg')
    }
  }
}
</script>
