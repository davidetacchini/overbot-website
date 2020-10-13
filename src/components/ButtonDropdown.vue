<template>
  <b-dropdown
    v-model="navigation"
    position="is-bottom-left"
    aria-role="menu"
    expanded
  >
    <button class="button is-fullwidth" slot="trigger" role="button">
      <span class="button__content">{{ buttonText }}</span>
    </button>

    <div v-for="(value, key) in dropItems" :key="key">
      <b-dropdown-item has-link aria-role="menuitem">
        <a :href="value['link']" target="_blank">
          <span class="icon">
            <i :class="value['icon']"></i>
          </span>
          {{ value["text"] }}
        </a>
      </b-dropdown-item>
    </div>
  </b-dropdown>
</template>

<script>
export default {
  name: "button-dropdown",

  data: () => {
    return {
      navigation: "Home",
    };
  },

  props: {
    buttonText: String,
    dropItems: Array,
  },
};
</script>

<style scoped>
</style>