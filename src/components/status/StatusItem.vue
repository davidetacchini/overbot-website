<template>
  <div class="column is-half-desktop is-full-tablet is-full-mobile">
    <div class="box">
      <h1 class="title is-5">{{ title }}</h1>
      <div class="columns is-multiline">
        <div v-for="(value, key) in item" :key="key" class="column is-6">
          <div class="box data inner-shadow">
            <p>
              <span class="has-text-grey">{{ key + ': ' }}</span>
              <span class="has-text-weight-bold has-text-white">
                {{ formatNumber(value) }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusItem',

  props: {
    title: String,
    item: Object,
  },

  methods: {
    formatNumber(value) {
      if (Number.isInteger(value)) {
        return value.toLocaleString();
      } else return value;
    },
  },
};
</script>

<style scoped lang="scss">
.data {
  border: unset !important;
  background-color: $color-bravo !important;
  padding: 12px;
}

p {
  font-size: 0.875rem;
}
</style>
