<template>
  <div id="servers" class="columns is-scrollable is-mobile" v-smooth-scroll>
    <loader v-if="$store.getters.loading" />
    <error-message v-else-if="$store.getters.error" />
    <div
      v-else
      v-for="(value, key) in servers"
      :key="key"
      class="column is-two-fifths-desktop is-two-fifths-tablet is-full-mobile server-column"
    >
      <div class="server box">
        <div v-if="key === 0">
          <span class="server__icon icon has-text-warning">
            <i class="fas fa-medal"></i>
          </span>
        </div>
        <span class="server__region">
          {{ getRegionEmoji(value['region']) }}
        </span>
        <img class="server__img" :src="value['icon']" :alt="value['name']" />
        <h1 class="server__title title is-4">
          {{ value['name'] }}
        </h1>
        <h2 class="server__subtitle subtitle is-6 has-text-grey">
          Commands run: {{ value['commands_runned'] }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import regions from '@/assets/regions.json';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

export default {
  name: 'servers',

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
    get(object, key, default_value) {
      var result = object[key];
      return typeof result !== 'undefined' ? result : default_value;
    },
    getRegionEmoji(region) {
      return this.get(regions, region, region);
    },
  },

  created() {
    this.$store.dispatch('GET_SERVERS');
  },
};
</script>

<style scoped lang="scss">
.is-scrollable {
  overflow-x: scroll !important;
}

.is-scrollable::-webkit-scrollbar {
  display: none;
}

.servers-title-padding {
  padding-bottom: 20px;
}

.server-column {
  max-width: 250px;
}

.server {
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s linear;
  transition-delay: 0.05s;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  min-height: 300px;
  user-select: none !important;
  text-align: center;

  transition: all 0.3s linear;

  &:hover &__title {
    white-space: normal;
    overflow: auto;
    text-overflow: initial;
  }

  &__img {
    border-radius: 50%;
    pointer-events: none;
    max-width: 70%;
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
    top: 0;
    right: 10px;
    font-size: 25px;
  }

  &__subtitle {
    line-height: 1.5;
  }
}

@media only screen and (min-width: 1024px) {
  .server {
    &:hover {
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
      transform: translateY(-5px);
    }
  }
}
</style>
