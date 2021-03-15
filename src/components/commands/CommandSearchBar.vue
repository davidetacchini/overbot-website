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

<style>
</style>