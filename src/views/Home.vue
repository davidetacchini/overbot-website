<template>
  <div>
    <base-section class="is-medium">
      <div class="is-stretch">
        <h3 class="title is-6 has-text-primary mb-3">RENEWED</h3>
        <h1 class="title is-3 is-size-4-mobile has-text-weight-bold is-spaced">
          The best Overwatch bot for Discord
        </h1>
        <h2 class="subtitle is-6">
          OverBot has many features for Overwatch players that allow them to view their overall
          stats, stay up to date with the latest news, link their Overwatch profiles and more!
        </h2>
        <div class="buttons mt-6">
          <home-button :link="links.invite" action="Add to Discord" class="is-primary" />
          <home-button path="/premium" action="Get Premium" class="is-danger is-outlined shine" />
        </div>
      </div>
    </base-section>

    <base-section class="is-medium is-charlie">
      <div class="is-stretch">
        <h1 class="title is-4 has-text-weight-bold is-spaced">What exactly does OverBot offer?</h1>
        <h2 class="subtitle is-6">Here's why you should start using OverBot today.</h2>
        <div class="columns is-multiline is-centered">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="column is-6-desktop is-6-tablet is-12-mobile"
          >
            <item-card :item="feature" iconColor="bg-info" />
          </div>
        </div>
      </div>
    </base-section>

    <base-section class="is-medium" id="servers">
      <div class="is-stretch">
        <h1 class="title is-4 has-text-weight-bold is-spaced">Most active servers</h1>
        <h2 class="subtitle is-6 has-text-primary">
          Tracking command usage since March 31st, 2021.
        </h2>
        <server-showcase />
      </div>
    </base-section>

    <base-section class="is-medium">
      <div class="is-stretch">
        <h1 class="title is-4 has-text-weight-bold is-spaced">Looking for support?</h1>
        <h2 class="subtitle is-6 is-size-6-mobile">
          If you got any questions or issues with OverBot don't hesitate to join the official
          Discord server.
        </h2>
        <home-button :link="links.discord" action="Get support" class="is-primary is-outlined" />
      </div>
    </base-section>
  </div>
</template>

<script>
import features from '@/assets/json/features.json';
import BaseSection from '@/components/BaseSection';
import HomeButton from '@/components/home/HomeButton';
import ItemCard from '@/components/ItemCard';
import ServerShowcase from '@/components/home/ServerShowcase';

export default {
  components: {
    BaseSection,
    HomeButton,
    ItemCard,
    ServerShowcase,
  },

  data: () => {
    return {
      links: {
        invite:
          'https://discord.com/api/oauth2/authorize?client_id=547546531666984961&permissions=288832&scope=bot',
        discord: 'https://discord.gg/8g3jnxv',
      },
      features,
    };
  },
};
</script>

<style scoped lang="scss">
.is-stretch {
  max-width: 800px !important;
  margin: 0 auto !important;
}
</style>
