<template>
  <div
    :class="['command box', { command__premium: value['brief'] === 'premium' }]"
  >
    <div v-if="value['brief'] === 'premium'">
      <span class="command__premium__icon icon">
        <i class="fab fa-patreon"></i>
      </span>
    </div>
    <h1 class="command__title title is-5">
      {{ value['name'] }} {{ value['signature'] }}
    </h1>
    <div class="command__info box">
      <h2 class="command__info__description subtitle is-6">
        {{ value['description'].split('.')[0] + '.' }}
      </h2>
      <div class="command__info__aliases" v-if="value['aliases']">
        <h2 class="subtitle is-6 opacity-75">
          Aliases: {{ value['aliases'].join(', ') }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'command',

  props: {
    value: Object,
  },
};
</script>

<style scoped lang="scss">
h2 {
  padding: 0 !important;
  margin: 0 !important;
}

.command {
  padding: 15px !important;

  &__title {
    margin-bottom: 12px !important;
  }

  &__premium {
    position: relative !important;
    border: 1px solid #ffdd57 !important;

    &__icon {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.3rem;
      color: #ffdd57;
    }
  }

  &__info {
    border: unset !important;
    background-color: $color-bravo !important;
    padding: 12px !important;

    &__description {
      font-size: 1rem !important;
    }

    &__aliases {
      padding-top: 10px !important;
    }
  }
}
</style>
