<template>
  <article class="message is-danger">
    <div class="message-body">
      <p>
        Ops! Something bad happened. Please refresh the page.
        <a href="https://discord.gg/8g3jnxv" target="_blank">Support Server</a>
        •
        <a
          href="https://github.com/davidetacchini/overcord-website"
          target="_blank"
          >GitHub issues</a
        >
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'error-message',
};
</script>

<style scoped lang="scss">
.message {
  margin: 0 auto !important;
  max-width: fit-content !important;

  p {
    font-size: 0.875rem !important;
  }
}

@media only screen and (max-width: 800px) {
  .message {
    margin: 0 20px !important;
  }
}
</style>
