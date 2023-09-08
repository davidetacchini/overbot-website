<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-6">
          <img src="@/assets/logos/banner.svg" alt="OverBot Banner" />
          <p class="mb-5">The best Overwatch stats bot for Discord</p>
          <p class="mb-2 dimmed">OverBot is not affiliated with Blizzard Entertainment.</p>
          <p class="dimmed">
            Copyright &copy; 2019 - {{ currentYear }} OverBot. All rights reserved.
          </p>
        </div>
        <div class="column is-2">
          <h1 class="title is-6">Navigation</h1>
          <router-link v-for="(value, key) in navigation" :key="key" :to="value" class="link">
            {{ key }}
          </router-link>
        </div>
        <div class="column is-2">
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
        <div class="column is-2">
          <h1 class="title is-6">Legal</h1>
          <router-link v-for="(value, key) in legal" :key="key" :to="value" class="link">
            {{ key }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",

  data: () => {
    return {
      navigation: {
        Commands: "/commands",
        Permissions: "/permissions",
        Premium: "/premium",
        Status: "/status",
        Supporters: "/supporters",
      },
      resources: {
        "OverFast API": "https://github.com/TeKrop/overfast-api",
        unDraw: "https://undraw.co/",
      },
      legal: {
        "Privacy Policy": "/privacy",
        "Terms of Service": "/terms",
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
img {
  width: 10rem;
  margin-bottom: 1rem;
  user-select: none;
  -webkit-user-drag: none;
}

p {
  font-size: 0.875rem;
  color: $grey;

  &.dimmed {
    opacity: 0.5;
  }
}

.link {
  display: block;
  color: $grey;
  font-size: 0.875rem;
  transition: color 0.15s ease-out;
}

.link:not(:first-of-type) {
  margin-top: 10px;
}

.link:hover {
  color: $white !important;
}
</style>
