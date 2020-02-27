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
  computed: {
    fileName() {
      let img = ''
      try {
        img = require(`~/static/${
          this.currentYear
        }/${this.card.title
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]|-|\s/gim, '')}.jpg`)
      } catch (e) {
        img = require('~/static/tobeannounced.jpg')
      }
      return img
    }
  },
  mounted() {
    const currentYear = this.$route.params.year
    return { currentYear }
  }
}
