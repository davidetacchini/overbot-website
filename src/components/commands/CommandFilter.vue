<template>
  <div class="control has-icons-left">
    <div class="select is-primary">
      <select
        :value="value"
        @input="$emit('input', $event.target.value)"
        :disabled="$store.getters.error"
      >
        <option
          v-for="(category, index) in categories"
          :key="index"
          :value="category.toLowerCase()"
        >
          {{ category }}
        </option>
      </select>
    </div>
    <span class="icon has-text-grey is-left">
      <i class="fas fa-filter" />
    </span>
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
    background-color: $color-bravo !important;
    border-color: $color-delta !important;
    border-radius: $border-radius !important;
    color: $grey !important;
  }

  &.is-primary:hover:after {
    border-color: $primary !important;
  }
}
</style>
