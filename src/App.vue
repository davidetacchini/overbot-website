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

<style>
:root {
  --ob-primary: rgb(250, 156, 29);
  --ob-theme-color: ##fff;
  --ob-theme-bg: #18191c;
  --ob-theme-bg2: #1e2023;
}

.header-container {
  max-width: 700px;
  margin: 0 auto;
}

.box {
  background-color: var(--ob-theme-bg2) !important;
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
  background-color: #141417 !important;
  border-radius: 3rem !important;
  font-size: 1rem !important;
  border: unset !important;
}

.button__content {
  color: rgb(255, 255, 255);
}

@media only screen and (max-width: 560px) {
  .header-container > h1 {
    font-size: 2.6rem;
  }
}

@media only screen and (max-width: 768px) {
  .header-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  .button.is-stretched {
    max-width: 200px !important;
    margin: 0 auto !important;
  }
}
</style>