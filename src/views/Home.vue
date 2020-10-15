<template>
  <div>
    <home-section
      title="The best Overwatch bot for Discord"
      titleSize="2"
      subtitle="OverBot has many features for Overwatch players that allow them to view their overall statistics very easily!"
      :isSpaced="true"
    >
      <div class="columns is-mobile">
        <div class="column is-one-quarter-tablet is-half-mobile">
          <custom-button
            link="https://discord.com/api/oauth2/authorize?client_id=547546531666984961&permissions=288832&scope=bot"
            action="Invite"
            :isStretched="true"
          />
        </div>
        <div class="column is-one-quarter-tablet is-half-mobile">
          <custom-button
            link="https://top.gg/bot/547546531666984961/vote"
            action="Upvote"
            :isStretched="true"
          />
        </div>
      </div>
    </home-section>

    <section class="hero is-medium is-dark features">
      <div class="hero-body">
        <div class="container">
          <feature
            :image="require('@/assets/home/rank.svg')"
            alt="Rank"
            title="Check your ranks"
            content="OverBot allows you to check your ranks and more!"
          />
          <feature
            :image="require('@/assets/home/statistics.svg')"
            alt="Statistics"
            title="Statistics"
            content="OverBot also allows you to check both your quick play and competitive statistics in a single embed, so you can easily compare them!"
            :isReversed="true"
          />
          <feature
            :image="require('@/assets/home/link.svg')"
            alt="Link"
            title="Link your profile"
            content="OverBot offers you an easy way to link your profile to your Discord ID and check your stats in a much easier and faster way!"
          />
          <feature
            :image="require('@/assets/home/news.svg')"
            alt="News"
            title="News and more"
            content="When using OverBot, you can check the latest Overwatch news, patch notes and server status information!"
            :isReversed="true"
          />
        </div>
      </div>
    </section>

    <hr />

    <servers />

    <hr />

    <home-section
      sectionSize="medium"
      title="Need Help?"
      titleSize="3"
      subtitle="If you got any questions or issues with OverBot don't hesitate to join the official Discord server!"
      :isSpaced="true"
    >
      <div class="columns">
        <div class="column is-3">
          <custom-button
            link="https://discord.gg/8g3jnxv"
            color="is-primary"
            action="Join here"
            :isStretched="true"
          />
        </div>
      </div>
    </home-section>
  </div>
</template>

<script>
import Servers from "@/components/home/Servers";
import Feature from "@/components/home/Feature";
import Section from "@/components/home/Section";
import CustomButton from "@/components/CustomButton";

export default {
  components: {
    Servers,
    Feature,
    "home-section": Section,
    CustomButton,
  },
};
</script>

<style scoped>
hr {
  background-color: rgba(255, 255, 255, 0.1) !important;
  height: 2px !important;
  width: 80% !important;
  margin: 0 auto !important;
}
</style>