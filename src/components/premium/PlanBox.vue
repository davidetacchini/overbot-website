<template>
  <div class="box">
    <h1 class="title is-4 has-text-weight-light">{{ plan.type }}</h1>
    <h1 class="title is-3 has-text-weight-bold">${{ plan.price }}</h1>
    <h2 class="subtitle is-6 has-text-grey">Single payment</h2>
    <a
      :href="link + plan.id"
      target="_blank"
      rel="noopener"
      class="button is-danger is-outlined p-5 shine mt-4"
    >
      <span class="icon is-small">
        <i class="fas fa-rocket"></i>
      </span>
      <span>Go Premium</span>
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
