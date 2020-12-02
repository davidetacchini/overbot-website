<template>
  <div class="column">
    <div class="box shards has-text-white">
      <h1 class="title is-5">
        {{ title }}
      </h1>
      <status-info />
      <div class="columns is-multiline is-mobile">
        <div
          v-for="(value, key) in data"
          :key="key"
          class="column shard-column is-one-fifth-desktop is-one-third-tablet is-half-mobile"
        >
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
              <span class="has-text-weight-bold">{{
                value['guild_count']
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatusInfo from '@/components/status/StatusInfo';

export default {
  name: 'shards-card',

  components: {
    StatusInfo,
  },

  props: {
    title: String,
    data: Array,
  },
};
</script>

<style scoped lang="scss">
p {
  font-size: 0.875rem;
}

.shards {
  position: relative;
}

.shard {
  padding: 10px;
}

@media screen and (max-width: 400px) {
  .shard-column {
    width: 100% !important;
  }
}
</style>
