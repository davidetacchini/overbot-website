<template>
  <div class="select is-primary">
    <select
      :value="value"
      @input="$emit('input', $event.target.value)"
      :disabled="$store.getters.error"
    >
      <option v-for="(category, index) in categories" :key="index" :value="category.toLowerCase()">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CommandFilter',

  props: {
    value: String,
    categories: Array,
  },
};
</script>

<style scoped lang="scss">
.select {
  height: 100% !important;
  width: 100% !important;

  select {
    width: 100% !important;
    height: 100% !important;
    background-color: $color-charlie !important;
    color: rgba(255, 255, 255, 0.7) !important;
    border: unset !important;
    border-radius: $border-radius !important;
    outline: unset !important;
  }

  &.is-primary:hover:after {
    border-color: $primary !important;
  }
}
</style>
