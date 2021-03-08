<template>
  <div>
    <hero-section
      sectionSize="medium"
      title="The best Overwatch bot for Discord"
      titleSize="2"
      subtitle="OverBot has many features for Overwatch players that allow 
      them to view their overall statistics, stay up to date with the latest 
      news, play Overwatch trivia and more!"
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
          <feature
            v-for="(value, key) in features"
            :key="key"
            :image="require(`@/assets/images/home/${value['image']}`)"
            :alt="value['image']"
            :title="value['title']"
            :content="value['content']"
            :isReversed="value['reversed']"
            :hasButton="value['button']"
            :buttonLink="value['button-link']"
            :buttonAction="value['button-action']"
          />
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
      ><servers
    /></hero-section>

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
import Feature from '@/components/home/Feature';
import HeroSection from '@/components/home/HeroSection';
import BaseButton from '@/components/BaseButton';
import features from '@/assets/json/features.json';

export default {
  data: () => {
    return {
      features,
    };
  },

  components: {
    Servers: () => import('@/components/home/Servers'),
    Feature,
    HeroSection,
    BaseButton,
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
