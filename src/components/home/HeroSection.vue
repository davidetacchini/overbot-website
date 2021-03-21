<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div :class="['wrapper', { 'full-width': isFullWidth }]">
          <h1 :class="['title is-3 is-spaced', titleClass]">
            {{ title }}
          </h1>
          <h2 class="subtitle is-5">
            {{ subtitle }}
          </h2>
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',

  props: {
    title: String,
    subtitle: String,
    titleClass: String,
    isFullWidth: Boolean,
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .wrapper {
    text-align: center;
  }
}

.subtitle {
  margin-bottom: 3rem !important;
  line-height: 1.5 !important;
}

.full-width {
  max-width: fit-content;
}

.is-desktop-centered {
  text-align: center;
}
</style>
