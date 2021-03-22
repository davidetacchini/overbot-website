<template>
  <div>
    <base-section class="is-medium">
      <div class="is-stretch">
        <h1 class="title is-3 is-spaced">The best Overwatch bot for Discord</h1>
        <h2 class="subtitle is-5">
          OverBot has many features for Overwatch players that allow them to view their overall
          stats, stay up to date with the latest news, link their Overwatch profiles and more!
        </h2>
        <div class="columns is-mobile">
          <div class="column is-one-quarter-tablet is-half-mobile">
            <home-button
              :link="links.invite"
              action="Add to Discord"
              cls="is-primary is-fullwidth  has-text-weight-bold"
            />
          </div>
          <div class="column is-one-quarter-tablet is-half-mobile">
            <home-button
              path="/premium"
              action="Get Premium"
              cls="is-danger is-outlined is-fullwidth has-text-weight-bold"
            />
          </div>
        </div>
      </div>
    </base-section>

    <base-section class="is-medium is-charlie">
      <div class="is-stretch">
        <h1 class="title is-4 is-spaced">What exactly does OverBot offer?</h1>
        <h2 class="subtitle is-6">Here's why you should start using OverBot today.</h2>
        <div class="columns is-multiline is-mobile is-centered">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="column is-half-desktop is-half-tablet is-full-mobile"
          >
            <feature-item :feature="feature" />
          </div>
        </div>
      </div>
    </base-section>

    <base-section class="is-medium">
      <h1 class="title is-spaced is-3">Most active servers</h1>
      <server-showcase />
    </base-section>

    <base-section class="is-medium">
      <div class="is-stretch">
        <h1 class="title is-3 is-spaced">Need Help?</h1>
        <h2 class="subtitle is-5">
          If you got any questions or issues with OverBot don't hesitate to join the official
          Discord server!
        </h2>
        <div class="columns">
          <div class="column is-one-quarter">
            <home-button
              :link="links.discord"
              action="Get support"
              cls="is-primary is-stretched is-fullwidth has-text-weight-bold"
            />
          </div>
        </div>
      </div>
    </base-section>
  </div>
</template>

<script>
import features from '@/assets/json/features.json';
import BaseSection from '@/components/BaseSection';
import HomeButton from '@/components/home/HomeButton';
import FeatureItem from '@/components/home/FeatureItem';
import ServerShowcase from '@/components/home/ServerShowcase';

export default {
  components: {
    BaseSection,
    HomeButton,
    FeatureItem,
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

.is-charlie {
  background-color: $color-charlie !important;
}
</style>
