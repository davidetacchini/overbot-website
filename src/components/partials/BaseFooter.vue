<template>
  <footer class="footer">
    <div class="content">
      <div class="columns is-multiline is-mobile">
        <div class="column">
          <h1 class="title is-4 has-text-white">OverBot</h1>
          <p class="has-text-grey">
            Copyright &copy; {{ currentYear }} OverBot. All rights reserved.
          </p>
          <p class="has-text-grey">
            OverBot is not affiliated with Blizzard Entertainment.
          </p>
          <p class="has-text-grey">
            Made by
            <a
              href="https://github.com/davidetacchini"
              target="_blank"
              rel="noopener"
              class="link has-text-primary"
              >Davide</a
            >
          </p>
          <a href="https://github.com/davidetacchini/overbot" target="_blank" rel="noopener">
            <img
              alt="GitHub Repo Stars"
              src="https://img.shields.io/github/stars/davidetacchini/overbot?style=social"
            />
          </a>
        </div>
        <div class="column is-full-mobile">
          <div class="columns is-multiline is-mobile is-full-tablet">
            <div class="column">
              <h1 class="title is-6 has-text-white">Navigation</h1>
              <router-link to="/commands" class="link">Commands</router-link>
              <br />
              <router-link to="/permissions" class="link">
                Permissions
              </router-link>
              <br />
              <router-link to="/premium" class="link">Premium</router-link>
              <br />
              <router-link to="/status" class="link">Status</router-link>
            </div>
            <div class="column is-one-third-desktop is-full-mobile">
              <h1 class="title is-6 has-text-white">Resources</h1>
              <a
                href="https://www.flaticon.com/authors/freepik"
                target="_blank"
                rel="noopener"
                class="link"
                >Freepik</a
              >
              <br />
              <a href="https://www.flaticon.com/" target="_blank" rel="noopener" class="link"
                >Flaticon</a
              >
              <br />
              <a href="https://ow-api.com/" target="_blank" rel="noopener" class="link">Ow-API</a>
              <br />
              <a href="https://undraw.co/" target="_blank" rel="noopener" class="link">unDraw</a>
            </div>
            <div class="column is-one-third-desktop is-full-mobile">
              <h1 class="title is-6 has-text-white">Legal</h1>
              <router-link to="/privacy" class="link">
                Privacy Policy
              </router-link>
              <br />
              <router-link to="/terms" class="link">
                Terms of Service
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',

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
  max-width: 90%;
  margin: 0 auto;
}

.link {
  color: $white-opacity-lightner-5;
  font-size: 14px;
  transition: color 175ms ease-out;
  display: inline-block;
}

.link:not(:first-of-type) {
  margin-top: 10px;
}

.link:hover {
  color: $white-opacity-full !important;
}

.subtitle {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
