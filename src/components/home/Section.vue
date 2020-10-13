<template>
  <section :class="['hero is-dark', `is-${sectionSize}`]">
    <div class="hero-body">
      <div class="container">
        <div class="header-container">
          <h1
            :class="['title has-text-gradient', `is-${titleSize}`, {'is-spaced': isSpaced}]"
          >{{ title }}</h1>
          <h2 class="header-subtitle subtitle is-4">{{ subtitle }}</h2>
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section",

  props: {
    sectionSize: String,
    title: String,
    titleSize: String,
    subtitle: String,
    isSpaced: Boolean,
  },
};
</script>

<style scoped>
.header-subtitle {
  margin-bottom: 3rem !important;
}

.subtitle {
  line-height: 1.5;
}
</style>