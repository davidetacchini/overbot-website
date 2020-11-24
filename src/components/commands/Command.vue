<template>
  <div class="command box">
    <h1 class="command__title title is-5">
      {{ value['name'] }} {{ value['signature'] }}
    </h1>
    <div class="command__info box">
      <h2 class="command__info__description subtitle is-6">
        {{ value['description'].split('.')[0] + '.' }}
        <a
          @click.prevent="readMore = !readMore"
          v-if="value['description'].split('.').length > 2"
          class="command__info__description__read-more"
          href="#"
        >
          <span v-if="!readMore">Read more</span>
          <span v-else>Read less</span></a
        >
        <br />
        <div v-if="readMore" class="command__info__description__more">
          {{ formatLongDescription(value['description']) }}
        </div>
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

  data: () => {
    return {
      readMore: false,
    };
  },

  methods: {
    formatLongDescription(value) {
      return value
        .split('.')
        .slice(1)
        .join('.')
        .replace(/-/g, '•')
        .replace(/`/g, '')
        .replace('\n', '');
    },
  },

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

  &__info {
    border: unset !important;
    background-color: $color-bravo !important;
    padding: 12px !important;

    &__description {
      font-size: 1rem !important;

      &__read-more {
        font-size: 0.875rem !important;
        color: $color-alpha !important;
      }

      &__more {
        background-color: $color-bravo !important;
        color: $white-opacity-full !important;
        white-space: pre-line !important;
      }
    }

    &__aliases {
      padding-top: 10px !important;
    }
  }
}
</style>
