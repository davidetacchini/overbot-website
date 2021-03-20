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

.info {
  background-color: rgb(17, 30, 46) !important;
  color: rgb(121, 192, 255) !important;
  border: 1px solid rgba(56, 139, 253, 0.4) !important;
}

.success {
  background-color: rgb(17, 31, 28) !important;
  color: rgb(86, 211, 100) !important;
  border: 1px solid rgba(46, 160, 67, 0.4) !important;
}

.warning {
  background-color: rgb(32, 27, 22) !important;
  color: rgb(227, 179, 65) !important;
  border: 1px solid rgba(187, 128, 9, 0.4) !important;
}

.danger {
  background-color: rgb(36, 22, 28) !important;
  color: rgb(255, 123, 114) !important;
  border: 1px solid rgba(248, 81, 73, 0.4) !important;
}
</style>
