<template>
  <div id="app">
    <the-navbar />
    <router-view />
    <the-footer />
    <vue-progress-bar />
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
.wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.box {
  background-color: $color-charlie !important;
  border-radius: $border-radius !important;

  &.inner-shadow {
    -moz-box-shadow: inset 0 0 5px $hr-color !important;
    -webkit-box-shadow: inset 0 0 5px $hr-color !important;
    box-shadow: inset 0 0 5px $hr-color !important;
  }
}

hr {
  background-color: $hr-color !important;
  height: 1px !important;
}

.button {
  padding: 25px 10px !important;
  border-radius: $button-border-radius !important;
  font-size: 1rem !important;
  border: unset !important;
  font-weight: bolder !important;
}

.menu-title {
  color: $white-high-emphasis !important;
  font-weight: bolder !important;
}

.menu-item {
  display: block !important;
  margin-left: 10px !important;
  position: relative !important;
}

.menu-item > a {
  transition: color 175ms ease-out !important;
}

.router-link-active {
  color: $white-high-emphasis !important;
}

@media screen and (max-width: 768px) {
  .wrapper {
    text-align: center;
  }

  .is-stretched {
    max-width: 200px !important;
    margin: 0 auto !important;
  }
}
</style>
