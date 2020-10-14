<template>
  <div
    :class="[
      'columns is-multiline is-mobile is-centered has-text-centered',
      { 'column-reverse': isReversed },
    ]"
  >
    <div class="column is-two-fifths-desktop is-full-mobile">
      <img :src="image" :alt="imageAlt" />
    </div>
    <div class="column is-two-fifths-desktop is-full-mobile">
      <h1 class="title is-3">{{ title }}</h1>
      <h2 class="subtitle is-5">{{ content }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "feature",

  props: {
    image: String,
    title: String,
    content: String,
    imageAlt: String,
    isReversed: Boolean,
  },
};
</script>

<style scoped>
.column-reverse {
  display: flex;
  flex-direction: row-reverse;
}

img {
  width: 14rem;
  pointer-events: none;
  user-select: none;
}

.features .columns {
  align-items: center;
  padding: 1rem 0;
}

.features .columns:first-child {
  padding-top: unset !important;
}

.features .columns:last-child {
  padding-bottom: unset !important;
}

@media only screen and (max-width: 768px) {
  img {
    width: 10rem;
    display: flex;
    margin: 0 auto;
  }

  .features .columns {
    padding: 2rem 0;
  }
}
</style>