<template>
  <div :class="['box has-text-dark', setShardBgColor]">
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
    setShardBgColor() {
      if (this.shard.latency < 150) {
        return 'has-background-success';
      } else if (this.shard.latency >= 150 && this.shard.latency < 500) {
        return 'has-background-warning';
      } else {
        return 'has-background-danger';
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
</style>
