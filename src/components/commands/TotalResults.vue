<template>
  <div :class="{ column: totalFilteredCommands < totalCommands }">
    <div v-if="totalFilteredCommands < totalCommands">
      <div class="total-results">
        <h2 class="subtitle is-6">
          {{ totalFilteredCommands }}
          <span>{{ totalFilteredCommands === 1 ? 'result' : 'results' }}</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'total-results',

  computed: {
    totalFilteredCommands() {
      return this.$store.getters.totalFilteredCommands;
    },
    totalCommands() {
      return this.$store.getters.totalCommands;
    },
  },
};
</script>

<style scoped lang="scss">
h2 {
  padding: 0 !important;
  margin: 0 !important;
}

.total-results {
  text-align: center;
  margin: -10px 0;
  user-select: none;
}
</style>
