<template>
  <article class="message is-danger">
    <div class="message-body">
      <p>
        Ops! Something bad happened. Please refresh the page. If this error persists, contact the
        support server on
        <a href="https://discord.gg/8g3jnxv" target="_blank" rel="noopener">Discord.</a>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ErrorMessage',
};
</script>

<style scoped lang="scss">
.message {
  margin: 25px auto !important;

  p {
    font-size: 0.875rem !important;
  }
}
</style>
