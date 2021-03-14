<template>
  <b-navbar class="is-spaced">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/" class="is-size-4 has-text-weight-bold"
        >OverBot</b-navbar-item
      >
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
</template>

<script>
export default {
  name: 'Navbar',

  data: () => {
    return {
      navigation: 'home',
      routes: {
        Commands: '/commands',
        Permissions: '/permissions',
        Premium: '/premium',
        Status: '/status',
      },
      dropdownRoutes: {
        Discord: {
          isTitle: true,
        },
        'top.gg': 'https://top.gg/bot/547546531666984961',
        'discordbotlist.com': 'https://discordbotlist.com/bots/547546531666984961',
        'discord.bots.gg': 'https://discord.bots.gg/bots/547546531666984961',
        Social: {
          isTitle: true,
        },
        GitHub: 'https://github.com/davidetacchini/overbot',
        'Support Server': 'https://discord.gg/8g3jnxv',
      },
    };
  },
};
</script>

<style scoped lang="scss">
.navbar-item {
  transition: color 175ms ease-out;
}

.dropdown-more .icon {
  font-size: 0.875rem;
}
</style>
