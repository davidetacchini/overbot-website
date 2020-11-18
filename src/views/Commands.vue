<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-full-desktop is-full-tablet is-full-mobile">
            <input placeholder="Search..." type="search" v-model="search" />
          </div>
          <results />
          <div
            class="column is-full"
            v-for="(value, key) in filteredCommands"
            :key="key"
          >
            <command :value="value" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Command from '@/components/commands/Command';
import Results from '@/components/commands/Results';
export default {
  components: {
    Command,
    Results,
  },
  computed: {
    filteredCommands() {
      return this.$store.getters.filteredCommands;
    },
    search: {
      get() {
        return this.$store.getters.search;
      },
      set(value) {
        this.$store.commit('setSearch', value);
        if (!value) {
          document.title = this.$route.meta.title;
        } else {
          document.title = `Command: ${value.toLowerCase()}`;
        }
      },
    },
  },
  created() {
    this.$store.dispatch('getCommands');
  },
};
</script>

<style scoped lang="scss">
input {
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  background-color: $color-charlie;
  border: unset;
  border-radius: 2rem;
  outline: none;
  color: rgba(255, 255, 255, 0.7);
  transition: padding-left 0.2s linear;
}
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  -webkit-appearance: none !important;
}
input::placeholder {
  transition: transform 0.2s linear, opacity 0.2s ease-in-out;
}
input:focus {
  padding-left: 25px;
}
input:focus::placeholder {
  transform: translateX(5px);
  opacity: 0;
}
</style>
