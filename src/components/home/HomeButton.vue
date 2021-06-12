<template>
  <router-link v-if="path" :to="path" class="button p-5">
    {{ action }}
  </router-link>
  <a v-else :href="link" target="_blank" rel="noopener" class="button p-5">
    {{ action }}
  </a>
</template>

<script>
export default {
  name: "HomeButton",

  props: {
    link: String,
    path: String,
    action: String,
  },
};
</script>
