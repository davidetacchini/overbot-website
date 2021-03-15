<template>
  <base-container>
    <error-message v-if="$store.getters.error" />
    <div class="columns is-multiline is-mobile">
      <div class="column is-four-fifths-desktop is-three-quarters-tablet is-full-mobile">
        <command-search-bar v-model.trim="search" />
      </div>
      <div class="column">
        <command-filter v-model="category" :categories="categories" />
      </div>
    </div>
    <div class="columns is-multiline is-mobile">
      <base-loader v-if="$store.getters.loading" />
      <command-not-found v-else-if="commands.length === 0" />
      <div v-for="(value, key) in commands" :key="key" class="column is-full">
        <command-item v-if="!$store.getters.loading" :value="value" />
      </div>
    </div>
  </base-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseLoader from '@/components/BaseLoader';
import ErrorMessage from '@/components/ErrorMessage';
import CommandSearchBar from '@/components/commands/CommandSearchBar';
import CommandFilter from '@/components/commands/CommandFilter';
import CommandItem from '@/components/commands/CommandItem';
import CommandNotFound from '@/components/commands/CommandNotFound';

export default {
  components: {
    BaseContainer,
    BaseLoader,
    ErrorMessage,
    CommandSearchBar,
    CommandFilter,
    CommandItem,
    CommandNotFound,
  },

  computed: {
    ...mapGetters({
      commands: 'commands',
      searchText: 'search',
      categories: 'categories',
      categoryText: 'category',
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

  mounted() {
    // reset search and category everytime we visit /commands
    this.setSearch('');
    this.setCategory('all');
    this.getCommands();
  },

  methods: {
    ...mapActions({ getCommands: 'GET_COMMANDS' }),
    ...mapMutations({
      setCommands: 'SET_COMMANDS',
      setSearch: 'SET_SEARCH',
      setCategory: 'SET_CATEGORY',
    }),
  },
};
</script>
