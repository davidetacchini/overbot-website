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
    </hero-section>

    <section class="hero is-medium is-dark features">
      <div class="hero-body">
        <div class="container">
          <feature
            :image="require('@/assets/images/home/multilingual.svg')"
            alt="Multilingual"
            title="Multilingual"
            content="OverBot supports up
            to 7 languages: English, Italian, German, Russian, French, South
            Korean and Japanese! You can help translating if your language is not
            available yet!"
            :isReversed="true"
            :hasButton="true"
            buttonLink="https://github.com/davidetacchini/overbot"
            buttonAction="Help translating"
          />
          <feature
            :image="require('@/assets/images/home/rank.svg')"
            alt="Rank"
            title="Check your SR"
            content="OverBot allows you to check your SR and more!"
          />
          <feature
            :image="require('@/assets/images/home/statistics.svg')"
            alt="Statistics"
            title="Check your statistics"
            content="OverBot also allows you to check both your quick play
            and competitive statistics in a single embed, so you can easily compare them!"
            :isReversed="true"
          />
          <feature
            :image="require('@/assets/images/home/link.svg')"
            alt="Link"
            title="Link your profiles"
            content="OverBot offers you an easy way to link up to 5 profiles to
            your Discord ID and check your stats in a much easier and faster way 
            without using any external links!"
          />
          <feature
            :image="require('@/assets/images/home/trivia.svg')"
            alt="Trivia"
            title="Play Overwatch trivia"
            content="You can play Overwatch trivia with OverBot! It has few commands 
            which makes it more immersive, such as statistics and best trivia players! 
            You can also contribute and submit new questions to be added to the game!"
            :isReversed="true"
          />
          <feature
            :image="require('@/assets/images/home/news.svg')"
            alt="News"
            title="News and more"
            content="When using OverBot, you can check the latest Overwatch news, 
            patch notes and server status information!"
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
          <custom-button
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
import CustomButton from '@/components/CustomButton';

export default {
  components: {
    Servers: () => import('@/components/home/Servers'),
    Feature,
    HeroSection,
    CustomButton,
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
