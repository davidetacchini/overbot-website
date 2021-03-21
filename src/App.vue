<template>
  <div id="app">
    <vue-progress-bar />
    <the-navbar />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from '@/components/layout/TheNavbar';
import TheFooter from '@/components/layout/TheFooter';

export default {
  name: 'App',

  components: {
    TheNavbar,
    TheFooter,
  },

  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, _, next) => {
      if (to.meta.progress !== undefined) {
        const meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  },

  mounted() {
    this.$Progress.finish();
  },
};
</script>

<style lang="scss">
.box {
  background-color: $color-charlie !important;
  border-radius: $border-radius !important;
  border: 1px solid $color-delta !important;

  &.no-border {
    border: unset !important;
  }

  &.inner-shadow {
    -moz-box-shadow: inset 0 0 5px $color-delta !important;
    -webkit-box-shadow: inset 0 0 5px $color-delta !important;
    box-shadow: inset 0 0 5px $color-delta !important;
  }
}

hr {
  background-color: $color-delta !important;
  height: 1px !important;
}
</style>
