<template>
  <div>
    <hero-section
      title="The best Overwatch bot for Discord"
      subtitle="OverBot has many features for Overwatch players that allow 
      them to view their overall stats, stay up to date with the latest 
      news, link their Overwatch profiles and more!"
    >
      <div class="columns is-mobile">
        <div class="column is-one-quarter-tablet is-half-mobile">
          <home-button :link="links.invite" action="Add to Discord" cls="is-primary is-stretched" />
        </div>
        <div class="column is-one-quarter-tablet is-half-mobile">
          <home-button path="/premium" action="Get Premium" cls="is-primary is-outlined" />
        </div>
      </div>
    </hero-section>

    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <feature-item v-for="feature in features" :key="feature.id" :feature="feature" />
        </div>
      </div>
    </section>

    <hr />

    <hero-section title="Most active servers" titleClass="is-desktop-centered" :isFullWidth="true">
      <server-showcase />
    </hero-section>

    <hr />

    <hero-section
      title="Need Help?"
      subtitle="If you got any questions or issues with OverBot don't hesitate to join the official Discord server!"
    >
      <div class="columns">
        <div class="column is-one-quarter">
          <home-button :link="links.discord" action="Join here" cls="is-primary is-stretched" />
        </div>
      </div>
    </hero-section>
  </div>
</template>

<script>
import features from '@/assets/json/features.json';
import HeroSection from '@/components/home/HeroSection';
import HomeButton from '@/components/home/HomeButton';
import FeatureItem from '@/components/home/FeatureItem';
import ServerShowcase from '@/components/home/ServerShowcase';

export default {
  components: {
    HeroSection,
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
hr {
  height: 2px !important;
  width: 20% !important;
  margin: 50px auto !important;
}
</style>
