<template>
  <div :class="['box command p-4', { 'is-premium': command.is_premium }]">
    <h1 class="command__title title is-5">{{ command.name }}</h1>
    <h2 class="command__description subtitle mb-2">{{ command.description }}</h2>
    <div v-if="command.guild_only" class="tag">
      <p class="has-text-grey">Server only</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommandItem",

  props: {
    command: Object,
  },
};
</script>

<style scoped lang="scss">
h2 {
  padding: 0 !important;
  margin: 0 !important;
}

.tag {
  background-color: transparent !important;
  border: 1px solid $color-gamma !important;
}

.command {
  position: relative;

  &.is-premium {
    box-shadow: 0 0 8px $danger !important;

    &::after {
      content: "PREMIUM";
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      font-size: 0.875rem;
      color: $danger;
    }
  }

  &__title {
    margin-bottom: 10px !important;
  }

  &__description {
    font-size: 0.95rem !important;
  }
}
</style>
