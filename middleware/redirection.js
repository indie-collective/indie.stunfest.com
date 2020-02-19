export default function({ store, redirect }) {
  if (!location.href.match(/.*?\/(\d{4})(\/.*?)?$/gim)) {
    window.location.href += '/' + new Date().getFullYear()
  }
}
