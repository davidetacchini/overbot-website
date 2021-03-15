<template>
  <div
    :class="[
      'columns is-multiline is-mobile is-centered has-text-centered',
      { 'column-reverse': feature.reversed },
    ]"
  >
    <div class="column is-two-fifths-desktop is-full-mobile">
      <img :src="require(`@/assets/images/home/${feature.image}`)" :alt="feature.alt" />
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

  components: {
    BaseButton,
  },

  props: {
    feature: Object,
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
  width: 13rem;
  pointer-events: none;
  user-select: none;
}

.columns {
  align-items: center;
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
    width: 9rem;
    display: flex;
    margin: 0 auto;
  }
}
</style>
