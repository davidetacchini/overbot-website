<template>
  <div class="control has-icons-left">
    <div class="select is-primary">
      <select
        :value="value"
        @input="$emit('input', $event.target.value)"
        :disabled="$store.getters.error"
      >
        <option v-for="(item, index) in items" :key="index" :value="item.toLowerCase()">
          {{ item }}
        </option>
      </select>
    </div>
    <span class="icon has-text-grey is-left">
      <i :class="['ti', `ti-${icon}`]" />
    </span>
  </div>
</template>

<script>
export default {
  name: "CommandFilter",

  props: {
    value: String,
    items: Array,
    icon: String,
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
    background-color: $color-alpha !important;
    border-color: $color-gamma !important;
    border-radius: $border-radius !important;
    color: $grey !important;
  }

  &.is-primary:hover:after {
    border-color: $primary !important;
  }
}
</style>
