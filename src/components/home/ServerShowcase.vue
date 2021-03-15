<template>
  <div v-dragscroll.x="!canScroll" class="columns is-mobile is-scrollable">
    <base-loader v-if="$store.getters.loading" />
    <error-message v-else-if="$store.getters.error" />
    <div
      v-for="(server, index) in servers"
      v-else
      :key="server.id"
      class="column is-two-fifths-desktop is-two-fifths-tablet is-full-mobile server-column"
    >
      <div :class="['server box', { 'first-place': index === 0 }]">
        <img
          class="server__region"
          :src="require(`@/assets/images/flags/${getRegionFlag(server.region)}`)"
          :alt="server.region"
        />
        <img class="server__image" :src="server.icon" :alt="server.name" />
        <h1 class="server__title title is-5">
          {{ server.name }}
        </h1>
        <div class="box inner-shadow server__commands-run">
          <p>
            <span class="has-text-grey">Commands run: </span>
            <span class="has-text-weight-bold has-text-white">{{ server.commands_run }} </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import regions from '@/assets/json/regions.json';
import BaseLoader from '../BaseLoader';
import ErrorMessage from '../ErrorMessage';

export default {
  name: 'ServerShowcase',

  components: {
    BaseLoader,
    ErrorMessage,
  },

  computed: {
    ...mapGetters(['servers']),
    canScroll() {
      return 'ontouchstart' in window || navigator.msMaxTouchPoints || false;
    },
  },

  mounted() {
    this.getServers();
  },

  methods: {
    ...mapActions({ getServers: 'GET_SERVERS' }),
    get(object, key, defaultValue) {
      var result = object[key];
      return typeof result !== 'undefined' ? result : defaultValue;
    },
    getRegionFlag(region) {
      return this.get(regions, region, region);
    },
  },
};
</script>

<style scoped lang="scss">
.server-column {
  max-width: 250px;
}

.first-place {
  box-shadow: 0 0 10px 0 $primary;
}

.server {
  position: relative;
  min-height: 300px;
  user-select: none !important;
  text-align: center;
  transition: transform 175ms ease-in-out, box-shadow 175ms ease-in-out;

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

@media screen and (max-width: 1407px) {
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
}
</style>
