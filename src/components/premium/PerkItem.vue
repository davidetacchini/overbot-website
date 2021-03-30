<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-narrow mt-5">
      <span class="icon p-5">
        <i :class="['fas', `fa-${perk.icon}`]" />
      </span>
    </div>
    <div class="column mt-5">
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
  name: 'PerkItem',

  props: {
    perk: Object,
  },
};
</script>

<style scoped lang="scss">
.icon {
  font-size: 1.5rem;
  color: $danger;
  background-color: $color-delta;
  border-radius: 50%;
}

.subtitle {
  font-size: 0.875rem !important;
}
</style>