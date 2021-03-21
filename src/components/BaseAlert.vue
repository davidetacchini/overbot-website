<template>
  <div :class="['notification', type]">
    <div class="columns is-vcentered">
      <div class="column">
        <p>{{ content }}</p>
      </div>
      <div class="column is-narrow" v-if="button">
        <base-button :link="button.link" :action="button.text" :color="buttonColor" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  name: 'BaseAlert',

  props: {
    type: String,
    content: String,
    button: Object,
  },

  components: {
    BaseButton,
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
