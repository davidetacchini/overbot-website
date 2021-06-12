<template>
  <div :class="['box command', { 'is-premium': command.is_premium }]">
    <h1 class="command__title title is-5">{{ command.name }} {{ command.signature }}</h1>
    <div class="command__info box no-border outer-shadow mb-2">
      <h2 class="command__description subtitle">
        {{ command.short_desc.replace("`[Premium]`", "") }}
        <button
          v-if="command.long_desc.split('.').length > 2"
          class="command__description--read-more"
          @click.prevent="showMore = !showMore"
        >
          <span>{{ showText }}</span>
        </button>
        <transition name="slide-fade">
          <div v-if="showMore" class="command__description--more">
            {{ longDescription }}
          </div>
        </transition>
      </h2>
    </div>
    <div v-if="command.aliases" class="command__aliases">
      <p class="has-text-grey">Aliases: {{ aliases }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommandItem",

  props: {
    command: Object,
  },

  data: () => {
    return {
      showMore: false,
    };
  },

  computed: {
    aliases() {
      return this.command.aliases.join(", ");
    },
    showText() {
      return this.showMore ? "Show less" : "Show more";
    },
    longDescription() {
      return this.command.long_desc
        .split(".")
        .slice(1)
        .join(".")
        .replace("\n", "")
        .replace(/`/g, "");
    },
  },
};
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 175ms ease;
}

.slide-fade-leave-active {
  transition: all 175ms cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(5px);
  opacity: 0;
}

h2 {
  padding: 0 !important;
  margin: 0 !important;
}

.command {
  padding: 15px !important;
  position: relative;

  &.is-premium {
    box-shadow: 0 0 8px $danger !important;

    &::after {
      content: "PREMIUM";
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      font-size: 0.875rem;
      color: $danger;
    }
  }

  &__title {
    margin-bottom: 12px !important;
  }

  &__info {
    padding: 12px !important;
  }

  &__description {
    font-size: 0.95rem !important;

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
      white-space: pre-line !important;
    }
  }

  &__aliases p {
    font-size: 0.875rem !important;
  }
}
</style>
