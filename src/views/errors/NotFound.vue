<template>
  <base-section class="has-text-centered">
    <div class="is-stretch">
      <img src="@/assets/images/not-found.svg" alt="Not Found Image" />
      <router-link to="/" class="button is-primary is-outlined mt-5 p-5">
        Go to homepage
      </router-link>
    </div>
  </base-section>
</template>

<script>
import BaseSection from '@/components/BaseSection';

export default {
  components: {
    BaseSection,
  },
};
</script>


<style scoped lang="scss">
.is-stretch {
  max-width: 550px !important;
  margin: 0 auto !important;
}

img {
  pointer-events: none;
  user-select: none;
}
</style>
