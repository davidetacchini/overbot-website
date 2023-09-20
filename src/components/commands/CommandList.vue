<template>
  <div class="columns is-multiline">
    <base-loader v-if="$store.getters.loading" />
    <command-list-empty v-else-if="commands.length === 0" />
    <template v-else>
      <div v-for="(command, index) in commands" :key="index" class="column is-12">
        <command-list-item :command="command" />
      </div>
    </template>
  </div>
</template>

<script>
import CommandListItem from "./CommandListItem.vue";
import CommandListEmpty from "./CommandListEmpty.vue";

export default {
  name: "CommandList",

  components: {
    CommandListItem,
    CommandListEmpty,
  },

  props: {
    commands: Array,
  },
};
</script>

<style scoped lang="scss"></style>
