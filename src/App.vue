<template>
  <div id="app">
    <vue-progress-bar />
    <the-navbar />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from "@/components/layout/TheNavbar";
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: "App",

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
html,
body {
  background-color: $color-alpha !important;
}

.container {
  max-width: 1240px !important;
}

.box {
  background-color: $color-beta !important;
  border-radius: $border-radius !important;
  border: 1px solid $color-gamma !important;
  box-shadow: unset !important;

  &.no-border {
    border: unset !important;
  }

  &.outer-shadow {
    box-shadow: 0 0 8px $color-gamma !important;
    -webkit-box-shadow: 0 0 8px $color-gamma !important;
    -moz-box-shadow: 0 0 8px $color-gamma !important;
  }
}

hr {
  background-color: $color-gamma !important;
  height: 1px !important;
  opacity: 0.5 !important;
}

.button {
  transition: all 0.15s ease-out !important;
  border-radius: $border-radius !important;

  &.is-higher {
    height: 55px !important;
  }
}

.is-beta {
  background-color: $color-beta !important;
}

.shine {
  background-image: linear-gradient(
    to right,
    transparent 33%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 66%
  );
  background-size: 300% 100%;
  animation: shine 2s infinite;
}

@keyframes shine {
  0% {
    background-position: right;
  }
}

.note {
  color: inherit;
  transition: color 0.15s ease-out;
}

.note:focus,
.note:hover {
  color: $info;
}
</style>
