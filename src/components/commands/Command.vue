<template>
  <div class="command box">
    <h1 class="command__title title is-5">
      {{ value['name'] }} {{ value['signature'] }}
    </h1>
    <div class="command__info box">
      <h2 class="command__info__description subtitle is-6">
        {{ shortDescription(value['description']) }}
        <a
          @click.prevent="readMore = !readMore"
          v-if="value['description'].split('.').length > 2"
          class="command__info__description__read-more"
          href="#"
        >
          <span v-if="!readMore">Show more</span>
          <span v-else>Show less</span>
        </a>
        <br />
        <transition name="slide-fade">
          <div v-if="readMore" class="command__info__description__more">
            {{ fullDescription(value['description']) }}
          </div>
        </transition>
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
    shortDescription(value) {
      return value.split('.')[0] + '.';
    },

    fullDescription(value) {
      return value
        .split('.')
        .slice(1)
        .join('.')
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
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
