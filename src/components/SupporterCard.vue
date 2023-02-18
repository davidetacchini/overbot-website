<template>
  <base-loader v-if="$store.getters.loading" />
  <error-alert v-else-if="$store.getters.error" />
  <div v-else class="column is-2-desktop is-3-tablet is-12-mobile">
    <div class="item box has-background-dark">
      <img
        class="item__image"
        :src="item.icon ? item.icon : require(`@/assets/images/default-icon.png`)"
        :alt="item.name"
      />
      <hr />
      <h1 class="item__title title has-text-weight-bold is-6 mt-3">{{ item.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupporterCard",

  props: {
    item: Object,
  },
};
</script>

<style scoped lang="scss">
.item {
  text-align: center;

  &__image {
    border-radius: 50%;
    pointer-events: none;
    width: 110px;
  }

  &__title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
