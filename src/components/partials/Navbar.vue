<template>
  <b-navbar class="is-spaced">
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
        class="is-size-4 has-text-weight-bold has-text-white"
        >OverBot</b-navbar-item
      >
    </template>

    <template slot="start">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/commands' }"
        class="navbar-item"
        >Commands</b-navbar-item
      >
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/permissions' }"
        class="navbar-item"
        >Permissions</b-navbar-item
      >
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/status' }"
        class="navbar-item"
        >Status</b-navbar-item
      >
      <b-navbar-item
        href="https://www.paypal.com/paypalme/DavideTacchini"
        class="navbar-item"
        target="_blank"
        >Donate</b-navbar-item
      >
      <b-dropdown
        v-model="navigation"
        position="is-bottom-left"
        aria-role="menu"
        expanded
      >
        <a class="navbar-item" slot="trigger" role="button">
          <div class="dropdown-more">
            <span>More</span>
            <span class="icon">
              <i class="fas fa-chevron-down"></i>
            </span>
          </div>
        </a>

        <b-dropdown-item custom class="menu-title"> Discord </b-dropdown-item>

        <b-dropdown-item has-link aria-role="menuitem" class="menu-item">
          <a href="https://top.gg/bot/547546531666984961" target="_blank">
            top.gg</a
          >
        </b-dropdown-item>
        <b-dropdown-item has-link aria-role="menuitem" class="menu-item">
          <a
            href="https://discordbotlist.com/bots/547546531666984961"
            target="_blank"
            >discordbotlist.com
          </a>
        </b-dropdown-item>
        <b-dropdown-item has-link aria-role="menuitem" class="menu-item">
          <a
            href="https://discord.bots.gg/bots/547546531666984961"
            target="_blank"
          >
            discord.bots.gg
          </a>
        </b-dropdown-item>

        <b-dropdown-item custom class="menu-title"> Social </b-dropdown-item>

        <b-dropdown-item has-link aria-role="menuitem" class="menu-item">
          <a href="https://github.com/davidetacchini/overbot" target="_blank">
            GitHub
          </a>
        </b-dropdown-item>
        <b-dropdown-item has-link aria-role="menuitem" class="menu-item">
          <a href="https://discord.gg/8g3jnxv" target="_blank">
            Support Server
          </a>
        </b-dropdown-item>

        <b-dropdown-item custom class="menu-title"> More </b-dropdown-item>

        <b-dropdown-item has-link aria-role="menuitem" class="menu-item">
          <a href="https://overbot.statuspage.io/" target="_blank"
            >System Status
          </a>
        </b-dropdown-item>
      </b-dropdown>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar',

  data: () => {
    return {
      navigation: 'home',
    };
  },
};
</script>

<style scoped lang="scss">
.navbar-item {
  transition: color 0.2s ease-in-out;
}
</style>
