<template>
  <b-collapse :open="false" class="card" animation="slide" aria-id="premiumQuestion">
    <template #trigger="props">
      <div class="card-header" role="button" aria-controls="premiumQuestion">
        <p class="card-header-title has-text-white">{{ faq.question }}</p>
        <div class="card-header-icon">
          <span :class="['icon', { active: props.open }]">
            <i class="fas fa-chevron-down"></i>
          </span>
        </div>
      </div>
    </template>
    <div class="card-content">
      <div class="content">
        <p class="has-text-grey" v-html="faq.answer"></p>
      </div>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: "QuestionCard",

  props: {
    faq: Object,
  },
};
</script>

<style scoped lang="scss">
.card {
  user-select: none !important;
  background-color: $color-beta !important;
  border-radius: $border-radius !important;
  border: 1px solid $color-gamma !important;
  cursor: pointer !important;

  button {
    background-color: $color-alpha !important;
    border: unset !important;
    border-radius: $border-radius !important;
    outline: unset !important;
  }

  i {
    color: $white !important;
    font-size: 1rem !important;
  }

  .icon {
    transition: transform 175ms linear;
  }

  .icon.active {
    transform: rotate(180deg) !important;
  }
}

.card-content {
  padding: 12px 16px !important;

  p {
    font-size: 0.875rem !important;
  }
}
</style>
