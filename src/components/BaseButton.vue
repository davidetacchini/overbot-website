<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener"
    :class="[
      'button is-fullwidth',
      color !== undefined ? color : 'is-primary',
      { 'is-stretched': isStretched },
    ]"
  >
    <span class="button__content">{{ action }}</span>
  </a>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    action: String,
    color: String,
    link: String,
    isStretched: Boolean,
  },
};
</script>
