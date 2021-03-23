<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-narrow mt-5">
      <span class="icon p-5">
        <i :class="['fas', `fa-${feature.icon}`]" />
      </span>
    </div>
    <div class="column mt-5">
      <h1 class="title is-6 has-text-weight-bold">
        {{ feature.title }}
      </h1>
      <h2 class="subtitle is-6 mb-2">
        {{ feature.description }}
      </h2>
      <div v-if="feature.button">
        <a
          v-if="feature.button.link"
          class="feature-link"
          :href="feature.button.link"
          target="_blank"
          rel="noopener"
        >
          {{ feature.button.action }}
        </a>
        <router-link v-else class="feature-link" :to="feature.button.path">
          {{ feature.button.action }}
        </router-link>
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
  border-radius: 50%;
}

.feature-link,
.subtitle {
  font-size: 0.9rem !important;
}

.feature-link {
  color: $primary;
  transition: color 175ms ease-in-out;
}

.feature-link:hover {
  color: $danger;
}
</style>
