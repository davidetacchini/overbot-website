<template>
  <div :class="['box', shardBgColor]">
    <p>
      Shard:
      <span class="has-text-weight-bold">{{ shard.id }}</span>
      <br />
      Latency:
      <span class="has-text-weight-bold">{{ shard.latency }}ms</span>
      <br />
      Servers:
      <span class="has-text-weight-bold">{{ shard.guild_count }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ShardItem',

  props: {
    shard: Object,
  },

  computed: {
    shardBgColor() {
      if (this.shard.latency < 150) {
        return 'bg-success';
      } else if (this.shard.latency >= 150 && this.shard.latency < 500) {
        return 'bg-warning';
      } else {
        return 'bg-danger';
      }
    },
  },
};
</script>

<style scoped lang="scss">
p {
  font-size: 0.875rem;
}

.box {
  padding: 10px !important;
}

.bg-success {
  background-color: rgb(17, 31, 28) !important;
  border: 1px solid rgba(46, 160, 67, 0.4) !important;
  color: rgb(86, 211, 100) !important;
}

.bg-warning {
  background-color: rgb(32, 27, 22) !important;
  color: rgb(227, 179, 65) !important;
  border: 1px solid rgba(187, 128, 9, 0.4) !important;
}

.bg-danger {
  background-color: rgb(36, 22, 28) !important;
  color: rgb(255, 123, 114) !important;
  border: 1px solid rgba(248, 81, 73, 0.4) !important;
}
</style>
