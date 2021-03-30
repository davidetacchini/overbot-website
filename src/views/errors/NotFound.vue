<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="@/assets/images/not-found.svg" alt="Not Found Image" />
        <router-link to="/" class="button is-primary is-outlined mt-5">Go to homepage</router-link>
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
</style>
