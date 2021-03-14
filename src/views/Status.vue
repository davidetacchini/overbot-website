<template>
  <container>
    <error-message v-if="$store.getters.error" />
    <div class="box countdown has-text-white">
      This page automatically refreshes every 30 seconds. Next update in:
      {{ countDown }}
    </div>
    <loader v-if="$store.getters.loading" />
    <div v-else>
      <div class="columns is-multiline is-mobile">
        <status title="Bot Status" :data="bot" />
        <status title="Server Information" :data="host" />
      </div>
      <div class="columns">
        <div class="column">
          <div class="box shards">
            <h1 class="title is-5">Shards</h1>
            <status-info />
            <div class="columns is-multiline is-mobile">
              <div
                v-for="value in shards"
                :key="value.id"
                class="column shard-column is-one-fifth-desktop is-one-third-tablet is-half-mobile"
              >
                <shard :value="value" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Container from '@/components/Container';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import Status from '@/components/status/Status';
import StatusInfo from '@/components/status/StatusInfo';
import Shard from '@/components/status/Shard';

export default {
  components: {
    Container,
    Loader,
    ErrorMessage,
    Status,
    StatusInfo,
    Shard,
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
