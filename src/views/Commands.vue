<template>
  <base-section>
    <error-alert v-if="$store.getters.error" />
    <div class="columns is-multiline">
      <div class="column">
        <command-search-bar v-model.trim="search" />
      </div>
      <div class="column is-2-desktop is-3-tablet">
        <command-filter v-model="category" :categories="categories" />
      </div>
    </div>
    <div class="columns is-multiline">
      <base-loader v-if="$store.getters.loading" />
      <command-not-found v-else-if="commands.length === 0" />
      <div v-else v-for="(command, index) in commands" :key="index" class="column is-12">
        <command-item :command="command" />
      </div>
    </div>
  </base-section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import BaseSection from "@/components/BaseSection.vue";
import BaseLoader from "@/components/BaseLoader";
import ErrorAlert from "@/components/ErrorAlert";
import CommandSearchBar from "@/components/commands/CommandSearchBar";
import CommandFilter from "@/components/commands/CommandFilter";
import CommandItem from "@/components/commands/CommandItem";
import CommandNotFound from "@/components/commands/CommandNotFound";

export default {
  components: {
    BaseSection,
    BaseLoader,
    ErrorAlert,
    CommandSearchBar,
    CommandFilter,
    CommandItem,
    CommandNotFound,
  },

  computed: {
    ...mapGetters({
      commands: "commands",
      searchText: "search",
      categories: "categories",
      categoryText: "category",
    }),
    search: {
      get() {
        return this.searchText;
      },
      set(value) {
        this.setSearch(value);
      },
    },
    category: {
      get() {
        return this.categoryText;
      },
      set(value) {
        this.setCategory(value);
      },
    },
  },

  created() {
    // reset search and category everytime we visit /commands
    this.setSearch("");
    this.setCategory("all");
    this.getCommands();
  },

  methods: {
    ...mapActions({ getCommands: "GET_COMMANDS" }),
    ...mapMutations({
      setCommands: "SET_COMMANDS",
      setSearch: "SET_SEARCH",
      setCategory: "SET_CATEGORY",
    }),
  },
};
</script>
