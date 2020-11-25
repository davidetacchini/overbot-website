<template>
  <div class="column is-half-desktop is-full-tablet is-full-mobile">
    <div class="box has-text-white">
      <h1 class="title is-5">{{ title }}</h1>
      <div class="columns is-multiline">
        <loader v-if="$store.getters.loading" />
        <div v-else v-for="(value, key) in data" :key="key" class="column is-6">
          <div class="box data has-text-white">
            <p>
              <span class="has-text-grey">{{ key + ': ' }}</span>
              <span class="has-text-weight-bold has-text-white">{{
                value
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../Loader';

export default {
  name: 'status-card',

  components: {
    Loader,
  },

  props: {
    title: String,
    data: [Object, Function],
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
