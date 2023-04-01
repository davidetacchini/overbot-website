<template>
  <div>
    <base-section class="is-medium">
      <div class="is-stretch">
        <h3 class="title is-6 has-text-primary mb-3">FULLY SUPPORTS SLASH COMMANDS</h3>
        <h1 class="title is-2 is-size-3-mobile has-text-weight-bold is-spaced">
          The best Overwatch bot for Discord
        </h1>
        <h2 class="subtitle is-6">
          OverBot has many features for Overwatch players that allow them to view their overall
          stats, stay up to date with the latest news, link their Overwatch profiles and more!
        </h2>
        <div class="buttons mt-6">
          <home-button
            :link="links.invite"
            action="Add to Discord"
            class="bg-primary bg-primary--button"
          />
          <home-button path="/premium" action="Get Premium" class="bg-info bg-info--button" />
        </div>
      </div>
    </base-section>

    <base-section class="is-medium is-beta">
      <div class="is-stretch">
        <h1 class="title is-4 has-text-weight-bold is-spaced">What exactly does OverBot offer?</h1>
        <h2 class="subtitle is-6">Here's why you should start using OverBot today.</h2>
        <div class="columns is-multiline">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="column is-6-desktop is-6-tablet is-12-mobile"
          >
            <item-card :item="feature" iconColor="bg-primary" />
          </div>
        </div>
      </div>
    </base-section>

    <base-section class="is-medium">
      <div class="is-stretch">
        <h1 class="title is-4 has-text-weight-bold is-spaced">Get more with OverBot Premium!</h1>
        <h2 class="subtitle is-6">
          Improve your experience by subscribing to one of our Premium plans. By purchasing a
          Premium plan you are supporting OverBot's development whilst unlocking extra features.
        </h2>
        <home-button path="/premium" action="Get Premium" class="bg-info bg-info--button" />
      </div>
    </base-section>

    <base-section class="is-medium is-beta" id="servers">
      <div class="is-stretch">
        <h1 class="title is-4 has-text-weight-bold is-spaced mb-6">Weekly most active servers</h1>
        <error-alert v-if="$store.getters.error" />
        <base-loader v-if="$store.getters.loading" />
        <div v-else v-dragscroll.x="!canScroll" class="columns is-mobile is-scrollable">
          <div v-for="(server, index) in servers" :key="server.id" class="column server-column">
            <server-card :server="server" :index="index" />
          </div>
        </div>
      </div>
    </base-section>

    <base-section class="is-medium">
      <div class="is-stretch">
        <h1 class="title is-4 has-text-weight-bold is-spaced">Looking for support?</h1>
        <h2 class="subtitle is-6">
          If you got any questions or issues with OverBot don't hesitate to join the official
          Discord server.
        </h2>
        <home-button
          :link="links.discord"
          action="Get support"
          class="bg-primary bg-primary--button"
        />
      </div>
    </base-section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import features from "@/assets/json/features.json";
import HomeButton from "@/components/home/HomeButton";
import ServerCard from "@/components/home/ServerCard";

export default {
  components: {
    HomeButton,
    ServerCard,
  },

  data: () => {
    return {
      links: {
        invite:
          "https://discord.com/api/oauth2/authorize?client_id=547546531666984961&permissions=288832&scope=bot",
        discord: "https://discord.gg/8g3jnxv",
      },
      features,
    };
  },

  computed: {
    ...mapGetters(["servers"]),
    canScroll() {
      return "ontouchstart" in window || navigator.msMaxTouchPoints || false;
    },
  },

  created() {
    this.getServers();
  },

  methods: {
    ...mapActions({ getServers: "GET_SERVERS" }),
  },
};
</script>

<style scoped lang="scss">
.is-stretch {
  max-width: 800px !important;
  margin: 0 auto !important;
}

.server-column {
  min-width: 250px !important;
  max-width: 250px !important;
}

.is-scrollable {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: -o-grab;
  cursor: grab;
}

.is-scrollable:active {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: -o-grabbing;
  cursor: grabbing;
}

.is-scrollable::-webkit-scrollbar {
  display: none;
}
</style>
