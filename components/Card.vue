<template>
  <div :class="`card-${currentYear}`" class="card is-dark">
    <div class="card-image">
      <a :href="card.link">
        <figure class="image is-16by9">
          <img :src="fileName" />
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
        Allez-le voir !
      </a>
    </footer>
  </div>
</template>

<style lang="scss" src="~/components/Card.scss"></style>
<script src="~/components/Card.js"></script>
