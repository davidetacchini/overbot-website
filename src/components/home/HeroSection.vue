<template>
  <section :class="['hero is-dark', `is-${sectionSize}`]">
    <div class="hero-body">
      <div class="container">
        <div :class="['wrapper', { 'full-width': isFullWidth }]">
          <h1
            :class="[
              'title',
              `is-${titleSize}`,
              { 'is-spaced': isSpaced },
              { 'is-desktop-centered': isDesktopCentered },
            ]"
          >
            {{ title }}
          </h1>
          <h2 class="wrapper__subtitle subtitle is-5">
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
    sectionSize: String,
    isFullWidth: Boolean,
    title: String,
    titleSize: String,
    subtitle: String,
    isSpaced: Boolean,
    isDesktopCentered: Boolean,
  },
};
</script>

<style scoped lang="scss">
.wrapper__subtitle {
  margin-bottom: 3rem !important;
}

.full-width {
  max-width: fit-content !important;
}

.subtitle {
  line-height: 1.5;
}

.is-desktop-centered {
  text-align: center !important;
}
</style>
