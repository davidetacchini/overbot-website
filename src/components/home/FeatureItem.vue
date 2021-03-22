<template>
  <div class="columns is-multiline is-mobile mt-6">
    <div class="column is-narrow">
      <span class="icon">
        <i :class="['fas', `fa-${feature.icon}`]" />
      </span>
    </div>
    <div class="column">
      <h1 class="title is-5 is-spaced">
        {{ feature.title }}
      </h1>
      <h2 class="subtitle is-6">
        {{ feature.description }}
      </h2>
      <div v-if="feature.button">
        <a
          class="button is-outlined is-primary"
          v-if="feature.button.link"
          :href="feature.button.link"
          target="_blank"
          rel="noopener"
        >
          {{ feature.button.action }}
        </a>
        <router-link class="button is-outlined is-danger" v-else :to="feature.button.path">{{
          feature.button.action
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureItem',

  props: {
    feature: Object,
  },
};
</script>

<style scoped lang="scss">
.icon {
  font-size: 1.5rem;
  color: $primary;
  background-color: $color-delta;
  padding: 25px;
  border-radius: 50%;
}

.button {
  font-size: 0.9rem !important;
}
</style>
