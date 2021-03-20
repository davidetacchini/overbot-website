<template>
  <div
    :class="[
      'columns is-multiline is-mobile is-centered is-vcentered has-text-centered',
      { 'column-reverse': feature.reversed },
    ]"
  >
    <div class="column is-two-fifths-desktop is-full-mobile">
      <img :src="featureImage" :alt="feature.alt" />
    </div>
    <div class="column is-two-fifths-desktop is-full-mobile">
      <h1 class="title">
        {{ feature.title }}
      </h1>
      <h2 class="subtitle">
        {{ feature.content }}
      </h2>
      <div v-if="feature.button">
        <base-button :link="feature.buttonLink" :action="feature.buttonAction" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  name: 'FeatureItem',

  props: {
    feature: Object,
  },

  components: {
    BaseButton,
  },

  computed: {
    featureImage() {
      return require(`@/assets/images/features/${this.feature.image}`);
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 35px !important;
  font-size: 1.625rem !important;
}

.subtitle {
  font-size: 1.1875rem !important;
}

.column-reverse {
  display: flex;
  flex-direction: row-reverse;
}

img {
  width: 10rem;
  pointer-events: none;
  user-select: none;
  opacity: 0.87;
}

.columns {
  padding: 3rem 0;
}

.columns:first-child {
  padding-top: unset;
}

.columns:last-child {
  padding-bottom: unset;
}

.button {
  max-width: fit-content !important;
  margin: 0 auto !important;
}

@media screen and (max-width: 768px) {
  img {
    width: 8rem;
    display: flex;
    margin: 0 auto;
  }
}
</style>
