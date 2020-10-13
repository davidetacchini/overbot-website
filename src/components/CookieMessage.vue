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
  name: "cookie-message",

  mounted() {
    this.hasAllowed();
  },

  methods: {
    hasAllowed: () => {
      return localStorage.getItem("cookie_consent");
    },

    cookieConsent: () => {
      localStorage.setItem("cookie_consent", "true");
      document.querySelector(".cookie-message").classList.add("fade-out");
      setTimeout(() => {
        document.querySelector(".cookie-message").remove();
      }, 790);
    },
  },
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@-webkit-keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes translate-in {
  from {
    transform: translateY(250px);
  }
  to {
    transform: translateY(0);
  }
}

@-webkit-keyframes translate-in {
  from {
    transform: translateY(250px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes translate-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(250px);
  }
}

@-webkit-keyframes translate-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(250px);
  }
}

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
  background-color: rgb(25, 113, 227);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 10px;
  outline: none;
  padding: 8px 12px;
  border-radius: 2rem;
  font-size: 14px;
  cursor: pointer;
}

p {
  font-size: 18px;
}
</style>