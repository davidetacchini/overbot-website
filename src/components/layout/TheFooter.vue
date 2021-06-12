<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-6">
          <img src="@/assets/logos/banner.svg" alt="OverBot Banner" />
          <p>Copyright &copy; {{ currentYear }} OverBot. All rights reserved.</p>
          <br />
          <p>OverBot is not affiliated with Blizzard Entertainment.</p>
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
      },
      resources: {
        Freepik: "https://www.flaticon.com/authors/freepik",
        Flaticon: "https://www.flaticon.com/",
        "Ow-API": "https://ow-api.com/",
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
}

.link {
  display: block;
  color: $grey;
  font-size: 0.875rem;
  transition: color 175ms ease-out;
}

.link:not(:first-of-type) {
  margin-top: 10px;
}

.link:hover {
  color: $white !important;
}
</style>
