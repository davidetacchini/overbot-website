<template>
  <div v-dragscroll.x="!canScroll" class="columns is-mobile is-scrollable">
    <base-loader v-if="$store.getters.loading" />
    <error-alert v-else-if="$store.getters.error" />
    <div v-for="(server, index) in servers" v-else :key="server.id" class="column server-column">
      <div :class="['server box has-background-dark', { 'first-place': index === 0 }]">
        <img class="server__region" :src="setRegionFlag(server.region)" :alt="server.region" />
        <img class="server__image" :src="server.icon" :alt="server.name" />
        <h1 class="server__title title has-text-weight-bold is-6 mt-3">{{ server.name }}</h1>
        <span v-if="server.is_premium" class="tag bg-danger shine">Premium</span>
        <div class="box no-border server__info">
          <p>
            <span class="has-text-grey">Commands run: </span>
            <span class="has-text-weight-bold has-text-white">{{ server.commands_run }}</span>
          </p>
          <p>
            <span class="has-text-grey">Members: </span>
            <span class="has-text-weight-bold has-text-white">{{ server.members }}</span>
          </p>
          <p>
            <span class="has-text-grey">Joined on: </span>
            <span class="has-text-weight-bold has-text-white">
              {{ server.joined_at.split(' ')[0] }}
            </span>
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
import ErrorAlert from '../ErrorAlert';

export default {
  name: 'ServerShowcase',

  components: {
    BaseLoader,
    ErrorAlert,
  },

  computed: {
    ...mapGetters(['servers']),
    canScroll() {
      return 'ontouchstart' in window || navigator.msMaxTouchPoints || false;
    },
  },

  created() {
    this.getServers();
  },

  methods: {
    ...mapActions({ getServers: 'GET_SERVERS' }),
    get(object, key, defaultValue) {
      var result = object[key];
      return typeof result !== 'undefined' ? result : defaultValue;
    },
    setRegionFlag(region) {
      const flag = this.get(regions, region, region);
      return require(`@/assets/images/flags/${flag}`);
    },
  },
};
</script>

<style scoped lang="scss">
.server-column {
  min-width: 250px !important;
  max-width: 250px !important;
}

.first-place {
  box-shadow: 0 0 10px $primary;
}

.tag {
  position: absolute;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
}

.server {
  position: relative;
  min-height: 300px;
  user-select: none !important;
  text-align: center;

  &__image {
    border-radius: 50%;
    pointer-events: none;
    width: 110px;
  }

  &__title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__members {
    font-size: 0.875rem;
    color: $grey;
  }

  &__region {
    position: absolute;
    top: 5px;
    right: 10px;
    width: 30px;
  }

  &__info {
    background-color: $color-charlie !important;
    padding: 8px;
    border-radius: $border-radius;
    font-size: 0.875rem !important;
    text-align: left !important;
  }
}

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
</style>
