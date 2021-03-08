<template>
  <a
    :href="link"
    target="_blank"
    :class="['button is-fullwidth', color, { 'is-stretched': isStretched }]"
  >
    <span class="button__content">{{ action }}</span>
  </a>
</template>

<script>
export default {
  name: 'base-button',

  props: {
    action: String,
    color: String,
    link: String,
    isStretched: Boolean,
  },
};
</script>

<style scoped lang="scss"></style>
