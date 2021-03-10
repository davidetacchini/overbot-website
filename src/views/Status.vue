<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="box countdown has-text-white">
          This page automatically refreshes every 30 seconds. Next update in:
          {{ countDown }}
        </div>
        <loader v-if="$store.getters.loading" />
        <error-message v-else-if="$store.getters.error" />
        <div v-else>
          <div class="columns is-multiline is-mobile">
            <status title="Bot Status" :data="bot" />
            <status title="Server Information" :data="host" />
          </div>
          <div class="columns">
            <div class="column">
              <div class="box shards has-text-white">
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
      </div>
    </div>
  </section>
</template>

<script>
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import Status from '@/components/status/Status';
import StatusInfo from '@/components/status/StatusInfo';
import Shard from '@/components/status/Shard';

export default {
  data: () => {
    return {
      countDown: 30,
    };
  },
  components: {
    Loader,
    ErrorMessage,
    Status,
    StatusInfo,
    Shard,
  },
  computed: {
    bot() {
      return this.$store.getters.bot;
    },
    host() {
      return this.$store.getters.host;
    },
    shards() {
      return this.$store.getters.shards;
    },
  },
  mounted() {
    this.$store.dispatch('GET_STATS');
  },
  watch: {
    countDown: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.countDown--;
          }, 1000);
        } else {
          this.$store.dispatch('GET_STATS');
          this.countDown = 30;
        }
      },
      immediate: true,
    },
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
