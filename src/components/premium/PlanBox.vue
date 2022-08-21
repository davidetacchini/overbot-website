<template>
  <div class="box">
    <span
      class="tag is-medium is-rounded bg-info shine most-popular"
      v-if="plan.type === 'Individual'"
    >
      most popular
    </span>
    <h1 class="title is-4 has-text-weight-medium mb-3">{{ plan.type }}</h1>
    <h1 class="title is-2 has-text-weight-bold">
      <span class="has-text-grey">$</span> {{ plan.price }}
    </h1>
    <h2 class="subtitle has-text-grey" style="font-size: 14px !important">Single payment</h2>
    <hr />
    <div class="perks">
      <div v-for="(perk, index) in plan.perks" :key="index" class="icon-text">
        <span class="icon">
          <i class="fas fa-check has-text-success"></i>
        </span>
        <span class="has-text-grey" v-html="perk"></span>
      </div>
    </div>
    <hr />
    <a
      :href="link + plan.id"
      target="_blank"
      rel="noopener"
      class="button is-higher is-fullwidth bg-info bg-info--button p-5"
    >
      Get the {{ plan.type }} plan
    </a>
  </div>
</template>

<script>
export default {
  name: "PlanBox",

  props: {
    plan: Object,
  },

  data: () => {
    return {
      link: "https://donatebot.io/checkout/550685823784321035?id=",
    };
  },
};
</script>

<style scoped lang="scss">
hr {
  margin-block: 2rem;
}

.box {
  padding-block: 2.5rem 1.75rem !important;
  max-width: 350px !important;
  margin: auto !important;
  border-radius: $border-radius !important;
  position: relative !important;
}

@media screen and (max-width: 768px) {
  hr {
    margin-block: 1.5rem;
  }

  .box {
    padding-block: 1.75rem !important;
  }
}

.perks {
  display: inline-block;
  font-size: 14px;
}

.perks > *:not(:last-of-type) {
  margin-bottom: 1rem;
}

.most-popular {
  position: absolute;
  top: -15px;
  right: 0;
  left: 0;
  max-width: fit-content;
  margin-inline: auto;
  text-transform: uppercase;
  font-size: 14px !important;
}
</style>
