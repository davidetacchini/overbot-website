<template>
  <div>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <div class="box countdown has-text-white">
            This page automatically refreshes every 30 seconds. Next update in:
            {{ countDown }}
          </div>
          <div class="columns is-multiline is-mobile">
            <status-card title="Bot Status" :data="statistics" />
            <status-card title="Host Status" :data="host" />
          </div>
          <div class="columns">
            <shards-card title="Shards" :data="shards" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import StatusCard from "@/components/status/StatusCard";
import ShardsCard from "@/components/status/ShardsCard";

export default {
  data: () => {
    return {
      countDown: 30,
    };
  },

  components: {
    StatusCard,
    ShardsCard,
  },

  computed: {
    statistics() {
      return this.$store.getters.statistics;
    },
    host() {
      return this.$store.getters.host;
    },
    shards() {
      return this.$store.getters.shards;
    },
  },

  mounted() {
    this.$store.dispatch("getStats");
  },

  watch: {
    countDown: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.countDown--;
          }, 1000);
        } else {
          this.$store.dispatch("getStats");
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
</style>