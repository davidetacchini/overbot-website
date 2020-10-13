<template>
  <footer class="footer">
    <div class="content">
      <div class="columns is-multiline is-mobile">
        <div
          class="column is-two-fifths-desktop is-two-fifths-tablet is-full-mobile"
        >
          <h1 class="title is-3 has-text-white is-spaced">OverBot</h1>
          <p class="has-text-grey">
            Copyright &copy; {{ currentYear }} OverBot. All rights reserved.
          </p>
          <p class="has-text-grey">
            OverBot is not affiliated with Blizzard Entertainment.
          </p>
        </div>
        <div class="column is-full-mobile">
          <div class="columns is-multiline is-mobile is-full-tablet">
            <div class="column">
              <h1 class="title is-5 has-text-white">Navigation</h1>
              <a
                href="https://discord.com/oauth2/authorize?client_id=547546531666984961&permissions=321600&scope=bot"
                target="_blank"
                class="link"
                >Add to Discord</a
              >
              <br />
              <a href="/commands" class="link">Commands</a>
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
  name: "Footer",

  computed: {
    currentYear: () => {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.content {
  max-width: 80%;
  margin: 0 auto;
}

.link {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  transition: color 0.2s ease-in-out;
  display: inline-block;
}

.link:not(:first-of-type) {
  margin-top: 20px;
}

.link:hover {
  color: rgb(255, 255, 255);
}

.subtitle {
  padding: 0 !important;
  margin: 0 !important;
}
</style>