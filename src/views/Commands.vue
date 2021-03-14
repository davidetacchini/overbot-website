<template>
  <container>
    <error-message v-if="$store.getters.error" />
    <div class="columns is-multiline is-mobile">
      <div class="column is-four-fifths-desktop is-three-quarters-tablet is-full-mobile">
        <input
          v-model.trim="search"
          class="input is-primary"
          type="text"
          placeholder="Search for a command"
          :disabled="$store.getters.error"
        />
      </div>
      <div class="column">
        <category-select v-model="category" :categories="categories" />
      </div>
    </div>
    <div class="columns is-multiline is-mobile">
      <loader v-if="$store.getters.loading" />
      <not-found v-else-if="commands.length === 0" />
      <div v-for="(value, key) in commands" :key="key" class="column is-full">
        <command v-if="!$store.getters.loading" :value="value" />
      </div>
    </div>
  </container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import Container from '@/components/Container.vue';
import Command from '@/components/commands/Command';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import NotFound from '@/components/commands/NotFound';
import CategorySelect from '@/components/commands/CategorySelect';

export default {
  components: {
    Container,
    Command,
    Loader,
    ErrorMessage,
    NotFound,
    CategorySelect,
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

<style scoped lang="scss">
.input {
  width: 100% !important;
  padding: 0 15px !important;
  font-size: 1rem !important;
  background-color: $color-charlie !important;
  border: unset !important;
  border-radius: $border-radius !important;
  outline: none !important;
  color: rgba(255, 255, 255, 0.7) !important;
}

input:disabled {
  opacity: 0.7 !important;
}

input::placeholder {
  color: $white-medium-emphasis !important;
}
</style>
