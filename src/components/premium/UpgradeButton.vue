<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener"
    class="button is-danger is-outlined is-large shine"
  >
    <span class="icon is-small">
      <i class="fas fa-rocket"></i>
    </span>
    <span>Go Premium</span>
  </a>
</template>

<script>
export default {
  name: 'UpgradeButton',

  data: () => {
    return {
      link: 'https://donatebot.io/checkout/550685823784321035',
    };
  },
};
</script>