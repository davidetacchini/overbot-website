<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="@/assets/images/not-found.svg" alt="Not Found Image" />
        <div class="back-home">
          <a href="/" class="button is-outlined is-primary">Go to homepage</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  max-width: 550px !important;
  margin: 0 auto !important;
}

img {
  pointer-events: none;
  user-select: none;
}

.back-home {
  padding-top: 2rem;
}
</style>
