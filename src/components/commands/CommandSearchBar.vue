<template>
  <div class="control has-icons-left">
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="input is-primary"
      type="text"
      placeholder="Search for a command"
      :disabled="$store.getters.error"
    />
    <span class="icon is-left has-text-grey">
      <i class="fas fa-search" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'CommandSearchBar',

  props: {
    value: String,
  },
};
</script>

<style scoped lang="scss">
.input {
  background-color: $color-beta !important;
  border-color: $color-delta !important;
  border-radius: $border-radius !important;
  color: $white !important;
}

input:disabled {
  opacity: 0.7 !important;
}

input::placeholder {
  color: $grey !important;
}
</style>