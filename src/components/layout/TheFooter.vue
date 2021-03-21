<template>
  <footer class="footer">
    <div class="content">
      <div class="columns is-multiline is-mobile">
        <div class="column">
          <h1 class="title is-4">OverBot</h1>
          <p>Copyright &copy; {{ currentYear }} OverBot. All rights reserved.</p>
          <p>OverBot is not affiliated with Blizzard Entertainment.</p>
        </div>
        <div class="column is-full-mobile">
          <div class="columns is-multiline is-mobile is-full-tablet">
            <div class="column">
              <h1 class="title is-6">Navigation</h1>
              <router-link v-for="(value, key) in navigation" :key="key" :to="value" class="link">
                {{ key }}
              </router-link>
            </div>
            <div class="column is-one-third-desktop is-full-mobile">
              <h1 class="title is-6">Resources</h1>
              <a
                v-for="(value, key) in resources"
                :key="key"
                :href="value"
                target="_blank"
                rel="noopener"
                class="link"
                >{{ key }}</a
              >
            </div>
            <div class="column is-one-third-desktop is-full-mobile">
              <h1 class="title is-6">Legal</h1>
              <router-link v-for="(value, key) in legal" :key="key" :to="value" class="link">
                {{ key }}
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
  name: 'TheFooter',

  data: () => {
    return {
      navigation: {
        Commands: '/commands',
        Permissions: '/permissions',
        Premium: '/premium',
        Status: '/status',
      },
      resources: {
        Freepik: 'https://www.flaticon.com/authors/freepik',
        Flaticon: 'https://www.flaticon.com/',
        'Ow-API': 'https://ow-api.com/',
        unDraw: 'https://undraw.co/',
      },
      legal: {
        'Privacy Policy': '/privacy',
        'Terms of Service': '/terms',
      },
    };
  },

  computed: {
    currentYear: () => {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped lang="scss">
p {
  font-size: 14px !important;
  color: $grey !important;
}

.content {
  max-width: 90%;
  margin: 0 auto;
}

.link {
  display: block;
  color: $grey;
  font-size: 14px;
  transition: color 175ms ease-out;
}

.link:not(:first-of-type) {
  margin-top: 10px;
}

.link:hover {
  color: $white !important;
}

.subtitle {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
