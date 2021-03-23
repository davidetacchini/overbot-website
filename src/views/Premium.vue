<template>
  <div>
    <base-section>
      <h1 class="title">Upgrade to Premium</h1>
      <hr />
      <base-alert type="bg-warning" :content="content" :button="button" />
      <br />
      <h1 class="title is-4">Premium Perks</h1>
      <hr />
      <div class="columns is-variable is-6-desktop is-6-tablet is-multiline is-mobile">
        <div
          v-for="perk in perks"
          :Key="perk.id"
          class="column is-4-desktop is-6-tablet is-12-mobile"
        >
          <perk-item :perk="perk" />
        </div>
        <div class="column is-12 has-text-centered my-6">
          <upgrade-button />
          <div class="mt-2 has-text-weight-bold">
            <span class="title is-4">$4.99</span>
            <span class="is-size-7 has-text-grey"> / one-time purchase</span>
          </div>
        </div>
      </div>
      <base-alert type="bg-info" :content="graph" icon="info-circle" />
    </base-section>
    <base-section>
      <h1 class="title is-4">Frequently Asked Questions</h1>
      <hr />
      <div class="columns is-multiline">
        <div v-for="faq in faqs" :key="faq.id" class="column is-12">
          <question-card :faq="faq" />
        </div>
      </div>
    </base-section>
  </div>
</template>

<script>
import perks from '@/assets/json/perks.json';
import faqs from '@/assets/json/faqs.json';
import BaseSection from '@/components/BaseSection';
import BaseAlert from '@/components/BaseAlert';
import PerkItem from '@/components/premium/PerkItem';
import UpgradeButton from '@/components/premium/UpgradeButton';
import QuestionCard from '@/components/premium/QuestionCard';

export default {
  components: {
    BaseSection,
    BaseAlert,
    PerkItem,
    UpgradeButton,
    QuestionCard,
  },

  data: () => {
    return {
      perks,
      faqs,
      graph: `*OverBot is tracking players skill ratings since December 23rd, 2020. Every time a player uses the "-profile rating"
        command his profile SRs are saved. Duplicates are not accepted, so if a player runs the command twice within the same day
        for the same profile and the SRs are equals, they won't be saved. That said, you can understand that the more you use
        "-profile rating" the more accurate the graph will be.`,
      content: 'To unlock the Premium benefits you must have joined the official support server.',
      button: {
        link: 'https://discord.gg/8g3jnxv',
        action: 'Join now',
      },
    };
  },
};
</script>