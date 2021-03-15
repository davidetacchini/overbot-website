<template>
  <div>
    <hero-section
      sectionSize="medium"
      title="The best Overwatch bot for Discord"
      titleSize="2"
      subtitle="OverBot has many features for Overwatch players that allow 
      them to view their overall stats, stay up to date with the latest 
      news, link their Overwatch profiles and more!"
      :isSpaced="true"
    >
      <div class="columns is-mobile">
        <div class="column is-one-quarter-tablet is-half-mobile">
          <base-button
            link="https://discord.com/api/oauth2/authorize?client_id=547546531666984961&permissions=288832&scope=bot"
            action="Invite"
            :isStretched="true"
          />
        </div>
        <div class="column is-one-quarter-tablet is-half-mobile">
          <base-button
            link="https://top.gg/bot/547546531666984961/vote"
            action="Upvote"
            :isStretched="true"
          />
        </div>
      </div>
    </hero-section>

    <section class="hero is-medium is-dark features">
      <div class="hero-body">
        <div class="container">
          <feature-item v-for="(feature, index) in features" :key="index" :feature="feature" />
        </div>
      </div>
    </section>

    <hr />

    <hero-section
      sectionSize="medium"
      :isFullWidth="true"
      title="Most active servers"
      titleSize="3"
      :isSpaced="true"
      :isDesktopCentered="true"
    >
      <server-showcase />
    </hero-section>

    <hr />

    <hero-section
      sectionSize="medium"
      title="Need Help?"
      titleSize="3"
      subtitle="If you got any questions or issues with OverBot don't hesitate to join the official Discord server!"
      :isSpaced="true"
    >
      <div class="columns">
        <div class="column is-3">
          <base-button
            link="https://discord.gg/8g3jnxv"
            color="is-primary"
            action="Join here"
            :isStretched="true"
          />
        </div>
      </div>
    </hero-section>
  </div>
</template>

<script>
import features from '@/assets/json/features.json';
import HeroSection from '@/components/home/HeroSection';
import BaseButton from '@/components/BaseButton';
import FeatureItem from '@/components/home/FeatureItem';
import ServerShowcase from '@/components/home/ServerShowcase';

export default {
  components: {
    HeroSection,
    BaseButton,
    FeatureItem,
    ServerShowcase,
  },

  data: () => {
    return {
      features,
    };
  },
};
</script>

<style scoped lang="scss">
hr {
  background-color: $hr-color !important;
  height: 2px !important;
  width: 20% !important;
  margin: 50px auto !important;
}
</style>
