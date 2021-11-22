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
.box {
  background-color: $color-charlie !important;
  border-radius: $border-radius !important;
  border: 1px solid $color-delta !important;
  box-shadow: unset !important;

  &.no-border {
    border: unset !important;
  }

  &.outer-shadow {
    box-shadow: 0 0 8px $color-delta !important;
    -webkit-box-shadow: 0 0 8px $color-delta !important;
    -moz-box-shadow: 0 0 8px $color-delta !important;
  }
}

hr {
  background-color: $color-delta !important;
  height: 1px !important;
}

.button {
  padding: 14px 28px !important;
  transition: all 175ms ease-in-out !important;
  font-weight: bold !important;
  border-radius: 8px !important;
}

.is-charlie {
  background-color: $color-charlie !important;
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
</style>
