<template>
  <div
    :class="[
      'box shard has-text-dark has-background-success',
      {
        'has-background-warning':
          value['latency'] >= 150 && value['latency'] < 1000,
      },
      { 'has-background-danger': value['latency'] >= 1000 },
    ]"
  >
    <p>
      Shard:
      <span class="has-text-weight-bold">{{ value['id'] }}</span>
      <br />
      Latency:
      <span class="has-text-weight-bold">{{ value['latency'] }}ms</span>
      <br />
      Server count:
      <span class="has-text-weight-bold">{{ value['guild_count'] }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'shard',

  props: {
    value: Object,
  },
};
</script>

<style scoped lang="scss">
p {
  font-size: 0.875rem;
}

.shard {
  padding: 10px !important;
}
</style>
