<template>
  <div
    :class="[
      'box has-text-dark has-background-success',
      {
        'has-background-warning': shard.latency >= 150 && shard.latency < 500,
      },
      { 'has-background-danger': shard.latency >= 500 },
    ]"
  >
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
