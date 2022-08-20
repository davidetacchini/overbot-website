<template>
  <div :class="['notification', type]">
    <div class="columns is-mobile is-vcentered">
      <div class="column is-narrow" v-if="icon">
        <span class="icon">
          <i :class="['fas', `fa-${icon}`]" />
        </span>
      </div>
      <div class="column">
        <p>{{ content }}</p>
      </div>
      <div class="column is-narrow" v-if="button">
        <a
          :class="['button is-fullwidth p-4', buttonColor]"
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
  name: "BaseAlert",

  props: {
    type: String,
    icon: String,
    content: String,
    button: Object,
  },

  computed: {
    buttonColor() {
      return this.button.color !== undefined ? this.button.color : "bg-success bg-success--button";
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
    font-size: 0.875rem !important;
  }
}
</style>
