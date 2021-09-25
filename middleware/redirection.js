import { years } from '../nuxt.config.js';

export default function({ store, redirect }) {
  if (!location.href.match(/.*?\/(\d{4})(\/.*?)?$/gim)) {
    window.location.href += years[years.length - 1];
  }
}
