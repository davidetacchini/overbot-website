<template>
  <div id="premium">
    <base-section class="is-medium has-text-centered">
      <h1 class="title is-1 has-text-weight-bold is-spaced title-gradient">OverBot Premium</h1>
      <h2 class="subtitle is-6">Get access to more perks by upgrading to one of the plans!</h2>
      <div class="columns is-centered plans">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="column is-4-desktop is-6-tablet is-full-mobile"
        >
          <plan-box :plan="plan" />
        </div>
      </div>
    </base-section>
    <base-section class="is-beta">
      <h1 class="title has-text-centered has-text-weight-bold">Premium Perks</h1>
      <div class="columns is-variable is-6-desktop is-6-tablet is-multiline">
        <div
          v-for="perk in perks"
          :Key="perk.id"
          class="column is-4-desktop is-6-tablet is-12-mobile"
        >
          <base-card :item="perk" iconColor="bg-info" />
        </div>
      </div>
    </base-section>
    <base-section>
      <h1 class="title is-4">Frequently Asked Questions</h1>
      <hr />
      <base-alert type="bg-info" :content="content" :button="button" />
      <div class="columns is-multiline">
        <div v-for="faq in faqs" :key="faq.id" class="column is-12">
          <question-card :faq="faq" />
        </div>
      </div>
    </base-section>
    <base-section class="is-beta">
      <ol type="1">
        <li
          v-for="(note, index) in notes.notes"
          :key="index"
          :id="'note-' + (index + 1)"
          class="has-text-grey note"
          v-html="note"
        />
      </ol>
      <hr />
    </base-section>
  </div>
</template>

<script>
import plans from "@/assets/json/plans.json";
import perks from "@/assets/json/perks.json";
import notes from "@/assets/json/notes.json";
import faqs from "@/assets/json/faqs.json";
import PlanBox from "@/components/premium/PlanBox";
import QuestionCard from "@/components/premium/QuestionCard";
import BaseAlert from "@/components/BaseAlert";

export default {
  components: {
    PlanBox,
    QuestionCard,
    BaseAlert,
  },

  data: () => {
    return {
      perks,
      plans,
      faqs,
      notes,
      content:
        "It may take up to 5 minutes for the Premium to be set. If you encounter any issues join the support server.",
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

.plans {
  margin-top: 4rem !important;
}

@supports (background-clip: text) {
  .title-gradient {
    background-image: linear-gradient(60deg, $primary, $info);
    background-image: -webkit-linear-gradient(60deg, $primary, $info);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
