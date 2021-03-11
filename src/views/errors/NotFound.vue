<template>
  <div>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="wrapper">
            <img src="@/assets/images/not-found.svg" alt="Not Found Img" />
            <div class="back-home">
              <a href="/" class="title is-4 has-text-grey">Back to homepage</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  max-width: 550px;
}

@media screen and (max-width: 560px) {
  .wrapper > h1 {
    font-size: 1.5rem;
  }
}

img {
  pointer-events: none;
  user-select: none;
}

.back-home {
  padding-top: 2rem;
}

.back-home > a {
  transition: color 0.2s;
}

.back-home > a:hover {
  color: $white-high-emphasis !important;
}
</style>
