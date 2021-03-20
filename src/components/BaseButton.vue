<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener"
    :class="['button is-fullwidth', setColor, { 'is-stretched': isStretched }]"
  >
    {{ action }}
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

  computed: {
    setColor() {
      return this.color !== undefined ? this.color : 'is-primary';
    },
  },
};
</script>
