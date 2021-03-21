<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="input is-primary"
    type="text"
    placeholder="Search for a command"
    :disabled="$store.getters.error"
  />
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
  width: 100% !important;
  padding: 0 15px !important;
  font-size: 1rem !important;
  background-color: $color-charlie !important;
  border: 1px solid $color-delta !important;
  border-radius: $border-radius !important;
  outline: none !important;
  color: rgba(255, 255, 255, 0.7) !important;
}

input:disabled {
  opacity: 0.7 !important;
}

input::placeholder {
  color: $grey !important;
}
</style>