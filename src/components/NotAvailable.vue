<template>
  <div>
    <section class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 is-spaced">
            {{ endpoint }}
          </h1>
          <h2 class="subtitle">
            We are working hard to make this page available as soon as possible!
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "not-available",

  props: {
    endpoint: String,
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 450px !important;
  margin: 0 auto !important;
  text-align: center !important;
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 2rem !important;
  }
}
</style>