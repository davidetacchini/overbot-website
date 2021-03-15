<template>
  <div class="command box">
    <h1 class="command__title title is-5">{{ command.name }} {{ command.signature }}</h1>
    <div class="command__info box inner-shadow">
      <h2 class="command__description subtitle">
        {{ command.short_desc }}
        <button
          v-if="command.long_desc.split('.').length > 2"
          class="command__description--read-more"
          href="#"
          @click.prevent="showMore = !showMore"
        >
          <span>{{ showMore ? 'Show less' : 'Show more' }}</span>
        </button>
        <transition name="slide-fade">
          <div v-if="showMore" class="command__description--more">
            {{ formatDescription(command.long_desc) }}
          </div>
        </transition>
      </h2>
      <hr v-if="command.aliases" />
      <div v-if="command.aliases" class="command__aliases">
        <h2 class="subtitle is-6 opacity-75">Aliases: {{ command.aliases.join(', ') }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommandItem',

  props: {
    command: Object,
  },

  data: () => {
    return {
      showMore: false,
    };
  },

  methods: {
    formatDescription(command) {
      return command.split('.').slice(1).join('.').replace('\n', '').replace(/`/g, '');
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
  transform: translateX(5px);
  opacity: 0;
}

hr {
  margin: 1rem auto !important;
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
      color: $primary;
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
}
</style>
