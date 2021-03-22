<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-narrow">
      <span class="icon">
        <i :class="['fas', `fa-${perk.icon}`]" />
      </span>
    </div>
    <div class="column">
      <h1 class="title is-6">
        {{ perk.name }}
      </h1>
      <h2 class="subtitle">
        {{ perk.description }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerkCard',

  props: {
    perk: Object,
  },
};
</script>

<style scoped lang="scss">
.column {
  margin-top: 2rem !important;
}

.icon {
  font-size: 1.5rem;
  color: $danger;
}

.subtitle {
  font-size: 0.875rem !important;
}
</style>