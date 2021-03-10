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
      <div v-if="hasButton" class="button">
        <base-button :link="buttonLink" :action="buttonAction" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  name: 'Feature',

  components: {
    BaseButton,
  },

  props: {
    image: String,
    title: String,
    content: String,
    imageAlt: String,
    isReversed: Boolean,
    hasButton: Boolean,
    buttonLink: String,
    buttonAction: String,
  },
};
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 35px !important;
  font-size: 1.9rem !important;
}

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
  padding: 3rem 0;
}

.features .columns:first-child {
  padding-top: unset !important;
}

.features .columns:last-child {
  padding-bottom: unset !important;
}

.features .button {
  max-width: fit-content !important;
}

@media screen and (max-width: 768px) {
  img {
    width: 9rem;
    display: flex;
    margin: 0 auto;
  }
}
</style>
