<template>
  <base-section>
    <error-alert v-if="$store.getters.error" />
    <div class="box countdown has-text-white">
      This page automatically refreshes every 30 seconds. Next update in:
      {{ countDown }}
    </div>
    <base-loader v-if="$store.getters.loading" />
    <div v-else>
      <div class="columns is-multiline is-mobile">
        <status-box title="Bot Status" :item="bot" />
        <status-box title="Server Information" :item="host" />
      </div>
      <div class="box shards">
        <h1 class="title is-5">Shards Status</h1>
        <shard-tooltip />
        <div class="columns is-multiline is-mobile">
          <div
            v-for="shard in shards"
            :key="shard.id"
            class="column shard-column is-one-fifth-desktop is-one-third-tablet is-half-mobile"
          >
            <shard-box :shard="shard" />
          </div>
        </div>
      </div>
    </div>
  </base-section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import StatusBox from "@/components/status/StatusBox";
import ShardBox from "@/components/status/ShardBox";
import ShardTooltip from "@/components/status/ShardTooltip";

export default {
  components: {
    StatusBox,
    ShardTooltip,
    ShardBox,
  },

  data: () => {
    return {
      countDown: 30,
    };
  },

  computed: {
    ...mapGetters(["bot", "host", "shards"]),
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

  created() {
    this.getStats();
  },

  methods: {
    ...mapActions({ getStats: "GET_STATS" }),
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
