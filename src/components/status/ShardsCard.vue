<template>
  <div class="column is-full-mobile">
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
              { 'has-background-warning': value > 150 },
              { 'has-background-red': value === null },
            ]"
          >
            <p>
              Shard: {{ key }}
              <br />
              Ping: {{ value }}ms
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatusInfo from "@/components/status/StatusInfo";

export default {
  name: "shards-card",

  components: {
    StatusInfo,
  },

  props: {
    title: String,
    data: [Object, Function],
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

@media only screen and (max-width: 400px) {
  .shard-column {
    width: 100% !important;
  }
}
</style>