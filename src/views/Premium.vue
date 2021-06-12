<template>
  <div id="premium">
    <base-section class="is-medium has-text-centered">
      <h3 class="title is-6 has-text-danger mb-3">INTRODUCING</h3>
      <h1 class="title has-text-weight-bold is-spaced">OverBot Premium</h1>
      <h2 class="subtitle is-6">Upgrade to Premium to unlock more perks!</h2>
      <a href="#plans" class="button is-white is-outlined mt-5 p-5">View our plans</a>
    </base-section>
    <base-section class="is-charlie">
      <h1 class="title has-text-centered has-text-weight-bold">Premium Perks</h1>
      <div class="columns is-variable is-6-desktop is-6-tablet is-multiline">
        <div
          v-for="perk in perks"
          :Key="perk.id"
          class="column is-4-desktop is-6-tablet is-12-mobile"
        >
          <item-card :item="perk" iconColor="bg-danger" />
        </div>
      </div>
    </base-section>
    <base-section class="is-medium has-text-centered" id="plans">
      <h1 class="title has-text-weight-bold mb-6">Pricing and plans</h1>
      <div class="columns is-centered">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="column is-3-desktop is-6-tablet is-12-mobile"
        >
          <plan-box :plan="plan" />
        </div>
      </div>
    </base-section>
    <base-section class="is-charlie">
      <h1 class="title is-4">Notes</h1>
      <hr />
      <base-alert type="bg-info" :content="content" :button="button" />
      <p v-for="(note, index) in notes" :key="index" class="has-text-grey note" v-html="note"></p>
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
import perks from "@/assets/json/perks.json";
import plans from "@/assets/json/plans.json";
import faqs from "@/assets/json/faqs.json";
import BaseSection from "@/components/BaseSection";
import ItemCard from "@/components/ItemCard";
import PlanBox from "@/components/premium/PlanBox";
import QuestionCard from "@/components/premium/QuestionCard";
import BaseAlert from "@/components/BaseAlert";

export default {
  components: {
    BaseSection,
    ItemCard,
    PlanBox,
    QuestionCard,
    BaseAlert,
  },

  data: () => {
    return {
      perks,
      plans,
      faqs,
      notes: [
        `*OverBot is tracking players skill ratings since <b>December 23rd, 2020</b>. 
        Whenever a player runs the "-profile rating" command his profile SRs are saved.
        Duplicates are not accepted: if a player runs the command twice within the same day
        for the same profile and the SRs are equals, they won't be saved. That said, you can 
        understand that the more "-profile rating" is used the more accurate the graph will be.`,
        `*Join the <a class="has-text-primary has-text-outlined" href="https://discord.gg/8g3jnxv" target="_blank" rel="noopener">support server</a> 
        and ask for the role to be set. The subscription is not affected by the role, it's just something extra.`,
      ],
      content:
        "It may take up to 5 minutes for the Premium to be set. If you have issues join the support server.",
      button: {
        link: "https://discord.com/invite/8g3jnxv",
        action: "Join now",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.note {
  font-size: 0.875rem !important;

  &:not(:last-of-type) {
    margin-bottom: 1rem !important;
  }
}
</style>
