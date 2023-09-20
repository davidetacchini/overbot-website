<template>
  <base-section>
    <error-alert v-if="$store.getters.error" />
    <div class="columns is-multiline">
      <div class="column">
        <command-search-bar v-model.trim="search" />
      </div>
      <div class="column is-full-tablet is-3-desktop">
        <command-filter v-model="type" :items="types" icon="filter" />
      </div>
      <div class="column is-full-tablet is-3-desktop">
        <command-filter v-model="category" :items="categories" icon="settings" />
      </div>
    </div>
    <command-list :commands="commands"></command-list>
  </base-section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import CommandSearchBar from "@/components/commands/CommandSearchBar";
import CommandFilter from "@/components/commands/CommandFilter";
import CommandList from "../components/commands/CommandList.vue";

export default {
  components: {
    CommandSearchBar,
    CommandFilter,
    CommandList,
  },

  computed: {
    ...mapGetters({
      commands: "commands",
      searchText: "search",
      types: "types",
      typeText: "type",
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
    type: {
      get() {
        return this.typeText;
      },
      set(value) {
        this.setCategory("all"); // reset category if type changes
        this.setSearch(""); // reset search if type changes
        this.setType(value);
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
    this.setType("app commands");
    this.setCategory("all");
    this.getCommands();
  },

  methods: {
    ...mapActions({ getCommands: "GET_COMMANDS" }),
    ...mapMutations({
      setCommands: "SET_COMMANDS",
      setSearch: "SET_SEARCH",
      setType: "SET_TYPE",
      setCategory: "SET_CATEGORY",
    }),
  },
};
</script>
