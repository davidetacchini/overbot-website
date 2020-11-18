<template>
  <div id="app">
    <navbar />
    <router-view />
    <Footer />
    <cookie-message />
    <vue-progress-bar />
  </div>
</template>

<script>
import Navbar from './components/partials/Navbar';
import Footer from './components/partials/Footer';
import CookieMessage from './components/CookieMessage';

export default {
  name: 'app',

  components: {
    Navbar,
    Footer,
    CookieMessage,
  },

  mounted() {
    this.$Progress.finish();
  },

  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
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
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background-color: $color-charlie !important;
  border-radius: 0.5rem !important;
}

hr {
  background-color: $hr-color !important;
  height: 1px !important;
}

.opacity-75 {
  opacity: 0.75 !important;
}

.button {
  background-color: $color-alpha !important;
  padding: 25px 10px !important;
  border-radius: 3rem !important;
  font-size: 1rem !important;
  border: unset !important;
  font-weight: bolder !important;

  &__content {
    color: $color-bravo;
  }
}

.dropdown-more .icon {
  font-size: 0.7rem;
}

.menu-title {
  color: $white-opacity-full !important;
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
  transition: color 0.1s ease-in-out !important;
}

.router-link-active {
  color: $white-opacity-full !important;
}

@media only screen and (max-width: 768px) {
  .wrapper {
    text-align: center;
  }

  .is-stretched {
    max-width: 200px !important;
    margin: 0 auto !important;
  }
}
</style>
