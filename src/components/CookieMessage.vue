<template>
  <div class="box cookie-message" v-if="hasAllowed() === null">
    <p class="has-text-white">
      This website uses cookies for gathering and analyzing anonymous user
      statistics in order to improve the services.
    </p>
    <button class="accept-button" @click="cookieConsent()">
      Accept and close
    </button>
  </div>
</template>

<script>
export default {
  name: 'cookie-message',

  mounted() {
    this.hasAllowed();
  },

  methods: {
    hasAllowed: () => {
      return localStorage.getItem('cookie_consent');
    },

    cookieConsent: () => {
      localStorage.setItem('cookie_consent', 'true');
      document.querySelector('.cookie-message').classList.add('fade-out');
      setTimeout(() => {
        document.querySelector('.cookie-message').remove();
      }, 790);
    },
  },
};
</script>

<style scoped lang="scss">
.fade-out {
  animation: translate-out 0.8s, fade-out 0.8s !important;
}

.box {
  max-width: 768px;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 1rem;
  animation: translate-in 0.8s, fade-in 0.8s;
  z-index: 9999 !important;
}

.accept-button {
  background-color: $color-alpha;
  color: $color-bravo;
  border: unset;
  margin-top: 10px;
  outline: none;
  padding: 10px 12px;
  border-radius: 2rem;
  font-size: 14px;
  cursor: pointer;
}

p {
  font-size: 1rem;
}
</style>
