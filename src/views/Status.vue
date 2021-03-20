<template>
  <base-container>
    <error-alert v-if="$store.getters.error" />
    <div class="box countdown has-text-white">
      This page automatically refreshes every 30 seconds. Next update in:
      {{ countDown }}
    </div>
    <base-loader v-if="$store.getters.loading" />
    <div v-else>
      <div class="columns is-multiline is-mobile">
        <status-item title="Bot Status" :item="bot" />
        <status-item title="Server Information" :item="host" />
      </div>
      <div class="box shards">
        <h1 class="title is-5">Shards</h1>
        <shard-tooltip />
        <div class="columns is-multiline is-mobile">
          <div
            v-for="shard in shards"
            :key="shard.id"
            class="column shard-column is-one-fifth-desktop is-one-third-tablet is-half-mobile"
          >
            <shard-item :shard="shard" />
          </div>
        </div>
      </div>
    </div>
  </base-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BaseContainer from '@/components/BaseContainer';
import ErrorAlert from '@/components/ErrorAlert';
import BaseLoader from '@/components/BaseLoader';
import StatusItem from '@/components/status/StatusItem';
import ShardItem from '@/components/status/ShardItem';
import ShardTooltip from '@/components/status/ShardTooltip';

export default {
  components: {
    BaseContainer,
    ErrorAlert,
    BaseLoader,
    StatusItem,
    ShardTooltip,
    ShardItem,
  },

  data: () => {
    return {
      countDown: 30,
    };
  },

  computed: {
    ...mapGetters(['bot', 'host', 'shards']),
  },

  watch: {
    countDown: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.countDown--;
          }, 1000);
        } else {
          this.getStats();
          this.countDown = 30;
        }
      },
      immediate: true,
    },
  },

  mounted() {
    this.getStats();
  },

  methods: {
    ...mapActions({ getStats: 'GET_STATS' }),
  },
};
</script>

<style scoped lang="scss">
.countdown {
  font-size: 0.875rem !important;
}

.shards {
  position: relative;
}

@media screen and (max-width: 400px) {
  .shard-column {
    width: 100% !important;
  }
}
</style>
