<template>
  <div id="app">
    <navbar />
    <router-view />
    <base-footer />
    <vue-progress-bar />
  </div>
</template>

<script>
import Navbar from './components/partials/Navbar';
import BaseFooter from './components/partials/BaseFooter';

export default {
  name: 'app',

  components: {
    Navbar,
    BaseFooter,
  },

  mounted() {
    this.$Progress.finish();
  },

  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      // Reset the store/index.js state every request
      this.$store.dispatch('RESET_STATE');
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.has-text-white {
  color: $white-high-emphasis !important;
}

.has-text-grey {
  color: $white-medium-emphasis !important;
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

.menu-title:not(:first-of-type) {
  margin-top: 10px !important;
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
