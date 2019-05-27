<template>
  <div class="card is-dark" :class="`card-${currentYear}`">
    <div class="card-image">
      <a :href="card.link">
        <figure class="image is-16by9">
          <img
            :src="
              `./${currentYear}/${card.title
                .toLowerCase()
                .replace(/[^a-zA-Z0-9]|-|\s/gim, '')}.jpg`
            "
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
      <a :href="card.link" class="card-footer-item has-text-weight-bold">
        View more...
      </a>
    </footer>
  </div>
</template>

<style lang="scss">
.title {
  font-weight: normal;
  letter-spacing: 0.05rem;
}

.subtitle {
  font-family: 'Montserrat', sans-serif;
}

.image > img {
  object-fit: cover;
}

.card {
  background-attachment: fixed;

  .card-content {
    margin-bottom: 3rem;

    & > p:last-child {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 9;
      -webkit-box-orient: vertical;
    }
  }

  .card-footer {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
    currentYear: {
      type: String,
      default: () => location.href.replace(/.*?\/(\d{4})(\/.*?)?$/gim, '$1')
    }
  },
  mounted() {
    const currentYear = this.$route.params.year
    return { currentYear }
  }
}
</script>
