<template>
  <footer class="footer">
    <div class="content">
      <div class="columns is-multiline is-mobile">
        <div
          class="column is-two-fifths-desktop is-two-fifths-tablet is-full-mobile"
        >
          <h1 class="title is-3 has-text-white is-spaced">Overcord</h1>
          <p class="has-text-grey">
            Copyright &copy; {{ currentYear }} Overcord. All rights reserved.
          </p>
          <p class="has-text-grey">
            Overcord is not affiliated with Blizzard Entertainment.
          </p>
          <p class="has-text-grey">
            Made by
            <a
              href="https://github.com/davidetacchini"
              target="_blank"
              class="link has-text-primary"
              >Davide</a
            >
          </p>
        </div>
        <div class="column is-full-mobile">
          <div class="columns is-multiline is-mobile is-full-tablet">
            <div class="column">
              <h1 class="title is-5 has-text-white">Navigation</h1>
              <a href="/commands" class="link">Commands</a>
              <br />
              <a href="/permissions" class="link">Permissions</a>
              <br />
              <a href="/status" class="link">Status</a>
            </div>
            <div class="column is-one-third-desktop is-full-mobile">
              <h1 class="title is-5 has-text-white">Resources</h1>
              <a href="https://www.freepik.com" target="_blank" class="link"
                >Freepik</a
              >
              <br />
              <a href="https://ow-api.com/" target="_blank" class="link"
                >Ow-API</a
              >
              <br />
              <a href="https://undraw.co/" target="_blank" class="link"
                >unDraw</a
              >
            </div>
            <div class="column is-one-third-desktop is-full-mobile">
              <h1 class="title is-5 has-text-white">Legal</h1>
              <a href="/privacy" class="link">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'custom-footer',

  computed: {
    currentYear: () => {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped lang="scss">
p {
  font-size: 14px;
  color: $white-opacity-lightner-5;
}

.content {
  max-width: 80%;
  margin: 0 auto;
}

.link {
  color: $white-opacity-lightner-5;
  font-size: 14px;
  transition: color 0.2s ease-in-out;
  display: inline-block;
}

.link:not(:first-of-type) {
  margin-top: 20px;
}

.link:hover {
  color: $white-opacity-full;
}

.subtitle {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
