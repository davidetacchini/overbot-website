<template>
  <b-navbar class="is-spaced">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/" class="is-size-4 has-text-weight-bold has-text-white"
        >OverBot</b-navbar-item
      >
    </template>

    <template slot="start">
      <b-navbar-item tag="router-link" to="/commands" class="navbar-item">
        Commands
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/permissions" class="navbar-item">
        Permissions
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/premium" class="navbar-item">
        Premium
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/status" class="navbar-item">
        Status
      </b-navbar-item>
      <b-dropdown v-model="navigation" position="is-bottom-left" aria-role="menu" expanded>
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
          <a href="https://top.gg/bot/547546531666984961" target="_blank" rel="noopener"> top.gg</a>
        </b-dropdown-item>
        <b-dropdown-item has-link aria-role="menuitem" class="menu-item">
          <a
            href="https://discordbotlist.com/bots/547546531666984961"
            target="_blank"
            rel="noopener"
            >discordbotlist.com
          </a>
        </b-dropdown-item>

        <b-dropdown-item has-link aria-role="menuitem" class="menu-item">
          <a href="https://discord.bots.gg/bots/547546531666984961" target="_blank" rel="noopener">
            discord.bots.gg
          </a>
        </b-dropdown-item>

        <b-dropdown-item custom class="menu-title">Social</b-dropdown-item>

        <b-dropdown-item has-link aria-role="menuitem" class="menu-item">
          <a href="https://github.com/davidetacchini/overbot" target="_blank" rel="noopener">
            GitHub
          </a>
        </b-dropdown-item>
        <b-dropdown-item has-link aria-role="menuitem" class="menu-item">
          <a href="https://discord.gg/8g3jnxv" target="_blank" rel="noopener">
            Support Server
          </a>
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
