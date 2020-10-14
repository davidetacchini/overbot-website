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
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import CookieMessage from "./components/CookieMessage";

export default {
  name: "app",

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
  background-color: rgba(255, 255, 255, 0.1) !important;
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
}

.button__content {
  color: $color-bravo;
}

@media only screen and (max-width: 768px) {
  .wrapper {
    margin: 0 auto;
    text-align: center;
  }

  .is-stretched {
    max-width: 200px !important;
    margin: 0 auto !important;
  }
}
</style>