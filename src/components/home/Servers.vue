<template>
  <div class="columns is-mobile is-scrollable" v-dragscroll.x="!touchDevice">
    <loader v-if="$store.getters.loading" />
    <error-message v-else-if="$store.getters.error" />
    <div
      v-else
      v-for="(value, index) in servers"
      :key="value.id"
      class="column is-two-fifths-desktop is-two-fifths-tablet is-full-mobile server-column"
    >
      <div class="server box">
        <div v-if="index === 0">
          <span class="server__icon icon has-text-warning">
            <i class="fas fa-medal"></i>
          </span>
        </div>
        <img
          class="server__region"
          :src="require(`@/assets/images/flags/${getRegionFlag(value.region)}`)"
          :alt="value.region"
        />
        <img class="server__image" :src="value.icon" :alt="value.name" typ />
        <h1 class="server__title title is-5">
          {{ value.name }}
        </h1>
        <div class="box server__commands-run has-text-white">
          <p>
            <span class="has-text-white opacity-75">Commands run: </span>
            <span class="has-text-weight-bold has-text-white">{{ value.commands_run }} </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import regions from '@/assets/json/regions.json';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

export default {
  name: 'Servers',

  data: () => {
    return {
      touchDevice: 'ontouchstart' in window || navigator.msMaxTouchPoints || false,
    };
  },

  components: {
    Loader,
    ErrorMessage,
  },

  computed: {
    servers() {
      return this.$store.getters.servers;
    },
  },

  methods: {
    get(object, key, defaultValue) {
      var result = object[key];
      return typeof result !== 'undefined' ? result : defaultValue;
    },
    getRegionFlag(region) {
      return this.get(regions, region, region);
    },
  },

  mounted() {
    this.$store.dispatch('GET_SERVERS');
  },
};
</script>

<style scoped lang="scss">
.is-scrollable {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: -o-grab;
  cursor: grab;
}

.is-scrollable:active {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: -o-grabbing;
  cursor: grabbing;
}

.is-scrollable::-webkit-scrollbar {
  display: none;
}

.server-column {
  max-width: 250px;
}

.server {
  position: relative;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  min-height: 300px;
  user-select: none !important;
  text-align: center;
  transition: transform 175ms ease-in-out, box-shadow 175ms ease-in-out;

  &:hover &__title {
    white-space: normal;
    overflow: auto;
    text-overflow: initial;
  }

  &__title {
    padding: 30px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__image {
    border-radius: 50%;
    pointer-events: none;
    width: 70%;
  }

  &__icon {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 25px;
  }

  &__region {
    position: absolute;
    top: 5px;
    right: 10px;
    width: 30px;
  }

  &__commands-run {
    background-color: $color-bravo !important;
    padding: 8px 12px;
    border: unset !important;
    border-radius: $border-radius;
    font-size: 0.875rem !important;
  }
}

@media screen and (min-width: 1024px) {
  .server {
    &:hover {
      box-shadow: 0 0 10px $primary;
    }
  }
}
</style>
