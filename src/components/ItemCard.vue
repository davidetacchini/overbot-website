<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-narrow mt-5">
      <span :class="['icon p-5', iconColor]">
        <i :class="['fas', `fa-${item.icon}`]" />
      </span>
    </div>
    <div class="column mt-5">
      <h1 class="title is-6">
        {{ item.title }}
      </h1>
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
  font-size: 1.5rem;
  border-radius: 50%;
}

.item-link,
.subtitle {
  font-size: 0.9rem !important;
}

.item-link {
  color: $primary;
  transition: color 175ms ease-in-out;
}

.item-link:hover {
  color: $danger;
}
</style>
