export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    currentYear: {
      type: String,
      default: () => location.href.replace(/.*?\/(\d{4})(\/.*?)?$/gim, '$1'),
    },
  },
  computed: {
    fileName() {
      let img = ''
      try {
        img = require(`~/static/${this.currentYear}/${this.card.title
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]|-|\s/gim, '')}.jpg`)
      } catch (e) {
        console.log(
          'could not find',
          this.card.title.toLowerCase().replace(/[^a-zA-Z0-9]|-|\s/gim, '')
        )
        try {
          img = require(`~/static/${this.currentYear}/_tba.jpg`)
        } catch (e) {
          img = require(`~/static/tba.jpg`)
        }
      }
      return img
    },
    mainLink() {
      let { link } = this.card

      try {
        const url = new URL(link)
        if (url.hostname === 'store.steampowered.com') {
          // let's give us some views :P
          url.searchParams.set('curator_clanid', '42527171')

          link = url.toString()
        }
      } catch (err) {}

      return link
    },
  },
  methods: {
    getNetworkImg(network) {
      return require(`~/static/${network}.png`)
    },
  },
  mounted() {
    const currentYear = this.$route.params.year
    return { currentYear }
  },
}
