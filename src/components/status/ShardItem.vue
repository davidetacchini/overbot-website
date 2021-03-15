<template>
  <div
    :class="[
      'box has-text-dark has-background-success',
      {
        'has-background-warning': value.latency >= 150 && value.latency < 500,
      },
      { 'has-background-danger': value.latency >= 500 },
    ]"
  >
    <p>
      Shard:
      <span class="has-text-weight-bold">{{ value.id }}</span>
      <br />
      Latency:
      <span class="has-text-weight-bold">{{ value.latency }}ms</span>
      <br />
      Servers:
      <span class="has-text-weight-bold">{{ value.guild_count }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ShardItem',

  props: {
    value: Object,
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
