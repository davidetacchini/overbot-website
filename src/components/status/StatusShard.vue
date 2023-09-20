<template>
  <div :class="['box', shardBgColor]">
    <p>
      Shard:
      <span class="has-text-weight-bold">{{ shard.id }}</span>
      <br />
      Servers:
      <span class="has-text-weight-bold">{{ shard.guild_count }}</span>
      <br />
      Members:
      <span class="has-text-weight-bold">{{ shard.member_count }}</span>
      <br />
      Latency:
      <span class="has-text-weight-bold">{{ shard.latency }}ms</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "StatusShard",

  props: {
    shard: Object,
  },

  computed: {
    shardBgColor() {
      if (this.shard.latency < 150) {
        return "bg-success";
      } else if (this.shard.latency >= 150 && this.shard.latency < 500) {
        return "bg-warning";
      } else {
        return "bg-danger";
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
