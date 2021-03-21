<template>
  <div :class="['notification', type]">
    <div class="columns is-mobile is-vcentered">
      <div class="column">
        <p>{{ content }}</p>
      </div>
      <div class="column is-narrow" v-if="button">
        <a
          :class="['button is-fullwidth', buttonColor]"
          :href="button.link"
          target="_blank"
          :action="button.action"
          >{{ button.action }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseAlert',

  props: {
    type: String,
    content: String,
    button: Object,
  },

  computed: {
    buttonColor() {
      return this.button.color !== undefined ? this.button.color : 'is-success';
    },
  },
};
</script>

<style scoped lang="scss">
.notification {
  padding: 12px 20px !important;

  p {
    font-size: 0.875rem !important;
  }

  .button {
    padding: 14px !important;
    font-size: 0.875rem !important;
  }
}
</style>
