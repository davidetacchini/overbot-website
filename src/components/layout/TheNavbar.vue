<template>
  <div class="navbar-container">
    <div class="container">
      <b-navbar>
        <template slot="brand">
          <b-navbar-item tag="router-link" to="/">
            <img
              v-if="$route.path !== '/premium'"
              :src="require(`@/assets/logos/default.png`)"
              alt="Logo"
            />
            <img v-else :src="require(`@/assets/logos/premium.png`)" alt="Premium Logo" />
          </b-navbar-item>
        </template>

        <template slot="start">
          <b-navbar-item v-for="(value, key) in routes" :key="key" :to="value" tag="router-link">
            {{ key }}
          </b-navbar-item>

          <b-dropdown v-model="navigation" position="is-bottom-left" aria-role="menu" expanded>
            <a slot="trigger" class="navbar-item" role="button">
              <div class="dropdown-more">
                <span>More</span>
                <span class="icon">
                  <i class="fas fa-chevron-down" />
                </span>
              </div>
            </a>

            <b-dropdown-item
              v-for="(value, key) in dropdownRoutes"
              :key="key"
              :custom="value.isTitle"
              :has-link="!value.isTitle"
              :class="[value.isTitle ? 'menu-title' : 'menu-item']"
            >
              <a v-if="!value.isTitle" :href="value" target="_blank" rel="noopener">{{ key }}</a>
              <span v-else>{{ key }}</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",

  data: () => {
    return {
      navigation: "home",
      routes: {
        Commands: "/commands",
        Permissions: "/permissions",
        Premium: "/premium",
        Status: "/status",
      },
      dropdownRoutes: {
        "Find us online": {
          isTitle: true,
        },
        "top.gg": "https://top.gg/bot/547546531666984961",
        "bots.gg": "https://discord.bots.gg/bots/547546531666984961",
        Social: {
          isTitle: true,
        },
        GitHub: "https://github.com/davidetacchini/overbot",
        Help: {
          isTitle: true,
        },
        "Support Server": "https://discord.gg/8g3jnxv",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.navbar-item {
  transition: color 0.15s ease-out;
  font-size: 0.875rem !important;
}

@media screen and (min-width: 1024px) {
  .navbar-container {
    width: 100% !important;
    margin: 0 auto !important;
    padding: 1.5rem 3rem !important;
  }

  .navbar-start > *:not(last-of-type) {
    margin-right: 0.5rem !important;
  }
}

@media screen and (max-width: 767px) {
  /* the navbar logo in the tablet/mobile views has a 12px padding */
  .navbar {
    padding: 1rem 0.75rem !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .navbar {
    padding: 1rem 2.25rem !important;
  }
}
</style>
