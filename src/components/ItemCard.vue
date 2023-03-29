<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-narrow mt-5">
      <span :class="['icon', iconColor]">
        <i :class="['ti', `ti-${item.icon}`]" />
      </span>
    </div>
    <div class="column mt-5">
      <h1 v-html="item.title" class="title is-6 is-spaced mb-2" />
      <h2 class="subtitle is-6 mb-2">
        {{ item.description }}
      </h2>
      <div v-if="item.button">
        <a
          v-if="item.button.link"
          class="item-link"
          :href="item.button.link"
          target="_blank"
          rel="noopener"
        >
          {{ item.button.action }}
        </a>
        <router-link v-else class="item-link" :to="item.button.path">
          {{ item.button.action }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",

  props: {
    item: Object,
    iconColor: String,
  },
};
</script>

<style scoped lang="scss">
.icon {
  font-size: 1.3rem;
  border-radius: $border-radius;
  padding: 1.3rem;
}

.item-link,
.subtitle {
  font-size: 0.9rem !important;
}

.item-link {
  color: $primary;
  transition: color 0.15s ease-out;
}

.item-link:hover {
  color: $info;
}
</style>
