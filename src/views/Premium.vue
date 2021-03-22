<template>
  <div>
    <base-section>
      <h1 class="title">Upgrade to Premium</h1>
      <hr />
      <base-alert type="bg-warning" :content="content" :button="button" />
      <br />
      <h1 class="title is-4">Premium Perks</h1>
      <hr />
      <div class="columns is-multiline is-mobile">
        <div
          v-for="perk in perks"
          :Key="perk.id"
          class="column is-one-third-desktop is-half-tablet is-full-mobile"
        >
          <perk-card :perk="perk" />
        </div>
      </div>
    </base-section>
    <base-section>
      <h1 class="title is-4">Frequently Asked Questions</h1>
      <hr />
      <div class="columns is-multiline">
        <div v-for="faq in faqs" :key="faq.id" class="column is-full">
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
import PerkCard from '@/components/premium/PerkCard';
import QuestionCard from '@/components/premium/QuestionCard';

export default {
  components: {
    BaseSection,
    BaseAlert,
    PerkCard,
    QuestionCard,
  },

  data: () => {
    return {
      perks,
      faqs,
      content: 'To unlock the Premium benefits you must have joined the official support server.',
      button: {
        link: 'https://discord.gg/8g3jnxv',
        action: 'Join now',
      },
    };
  },
};
</script>
