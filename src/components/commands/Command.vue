<template>
  <div class="command box">
    <h1 class="command__title title is-5">{{ value.name }} {{ value.signature }}</h1>
    <div class="command__info box">
      <h2 class="command__description subtitle">
        {{ value.short_desc }}
        <button
          @click.prevent="showMore = !showMore"
          v-if="value.long_desc.split('.').length > 2"
          class="command__description--read-more"
          href="#"
        >
          <span>{{ showMore ? 'Show less' : 'Show more' }}</span>
        </button>
        <transition name="slide-fade">
          <div v-if="showMore" class="command__description--more">
            {{ formatDescription(value.long_desc) }}
          </div>
        </transition>
      </h2>
      <div class="command__aliases" v-if="value.aliases">
        <h2 class="subtitle is-6 opacity-75">Aliases: {{ value.aliases.join(', ') }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Command',

  props: {
    value: Object,
  },

  data: () => {
    return {
      showMore: false,
    };
  },

  methods: {
    formatDescription(value) {
      return value
        .split('.')
        .slice(1)
        .join('.')
        .replace('\n', '')
        .replace(/`/g, '');
    },
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
  }

  &__description {
    font-size: 1rem !important;

    &--read-more {
      font-size: 0.875rem;
      color: $color-alpha;
      background-color: transparent;
      outline: unset;
      border: unset;
      padding: 0;
      margin: 0;
      cursor: pointer;
    }

    &--more {
      background-color: $color-bravo !important;
      white-space: pre-line !important;
    }
  }

  &__aliases {
    padding-top: 10px !important;
  }
}
</style>
