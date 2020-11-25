<template>
  <div :class="{ column: totalFilteredCommands < totalCommands }">
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
import { mapGetters } from 'vuex';

export default {
  name: 'total-results',

  computed: {
    ...mapGetters(['totalFilteredCommands', 'totalCommands']),
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
