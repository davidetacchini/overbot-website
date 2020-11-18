<template>
  <div
    class="column is-full commands-not-found"
    v-if="totalFilteredCommands === 0"
  >
    <h1 class="title is-5 has-text-grey">No commands found...</h1>
  </div>
  <div v-else :class="{ column: totalFilteredCommands < totalCommands }">
    <div v-if="totalFilteredCommands < totalCommands">
      <div class="total-results">
        <h2 class="subtitle is-6">
          {{ totalFilteredCommands }}
          <span v-if="totalFilteredCommands === 1"> result</span>
          <span v-else>results</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'results',

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

.commands-not-found {
  text-align: center;
  margin-top: 20px;
}

.total-results {
  text-align: center;
  margin: -10px 0;
  user-select: none;
}
</style>
