<template>
  <div class="columns is-mobile is-scrollable" v-dragscroll.x="!touchDevice">
    <loader v-if="$store.getters.loading" />
    <error-message v-else-if="$store.getters.error" />
    <div
      v-else
      v-for="(value, key) in servers"
      :key="value.id"
      class="column is-two-fifths-desktop is-two-fifths-tablet is-full-mobile server-column"
    >
      <div class="server box">
        <div v-if="key === 0">
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
        <h1 class="server__title title is-4">
          {{ value.name }}
        </h1>
        <h2 class="server__subtitle subtitle is-6 has-text-grey">
          Commands run: {{ value.commands_run }}
        </h2>
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
  transition: transform 175ms ease-in-out, box-shadow 175ms ease-in-out;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  min-height: 300px;
  user-select: none !important;
  text-align: center;

  &:hover &__title {
    white-space: normal;
    overflow: auto;
    text-overflow: initial;
  }

  &__image {
    border-radius: 50%;
    // pointer-events: none;
    width: 70%;
  }

  &__title {
    padding: 12px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

  &__subtitle {
    line-height: 1.5;
  }
}

@media screen and (min-width: 1024px) {
  .server {
    &:hover {
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
      transform: translateY(-5px);
    }
  }
}
</style>
