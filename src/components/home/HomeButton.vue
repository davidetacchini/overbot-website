<template>
  <router-link v-if="path" :to="path" :class="['button p-5', cls]">
    {{ action }}
  </router-link>
  <a v-else :href="link" target="_blank" rel="noopener" :class="['button p-5', cls]">
    {{ action }}
  </a>
</template>

<script>
export default {
  name: 'HomeButton',

  props: {
    link: String,
    path: String,
    cls: String,
    action: String,
  },
};
</script>
