<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-full-desktop is-full-tablet is-full-mobile">
            <input placeholder="Search..." type="search" v-model="search" />
          </div>
          <div
            class="column is-full-desktop is-full-tablet is-full-mobile commands-not-found"
            v-if="totalFilteredCommands === 0"
          >
            <h1 class="title is-5 has-text-grey">No commands found...</h1>
          </div>
          <div
            v-else
            :class="{ column: totalFilteredCommands < totalCommands }"
          >
            <div v-if="totalFilteredCommands < totalCommands">
              <div class="box total-results">
                <h2 class="subtitle is-6">
                  {{ totalFilteredCommands }}
                  <span v-if="totalFilteredCommands === 1"> result</span>
                  <span v-else>results</span>
                </h2>
              </div>
            </div>
          </div>
          <div
            class="column is-full-desktop is-full-tablet is-full-mobile"
            v-for="(value, key) in filteredCommands"
            :key="key"
          >
            <div
              :class="[
                'box command',
                { premium: value['brief'] === 'premium' },
              ]"
            >
              <div v-if="value['brief'] === 'premium'">
                <span class="icon">
                  <i class="fab fa-patreon"></i>
                </span>
              </div>
              <h1 class="title is-4">
                {{ value["name"] }} {{ value["signature"] }}
              </h1>
              <div class="box info">
                <h2 class="subtitle description is-6">
                  {{ value["description"].split(".")[0] + "." }}
                </h2>
                <div class="aliases" v-if="value['aliases']">
                  <h2 class="subtitle is-6 opacity-75">
                    Aliases: {{ value["aliases"].join(", ") }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    filteredCommands() {
      return this.$store.getters.filteredCommands;
    },
    totalFilteredCommands() {
      return this.$store.getters.totalFilteredCommands;
    },
    totalCommands() {
      return this.$store.getters.totalCommands;
    },
    search: {
      get() {
        return this.$store.getters.search;
      },
      set(value) {
        this.$store.commit("setSearch", value);
        if (!value) {
          document.title = this.$route.meta.title;
        } else {
          document.title = `Command: ${value.toLowerCase()}`;
        }
      },
    },
  },

  mounted() {
    this.$store.dispatch("getCommands");
  },
};
</script>

<style scoped>
.commands-not-found {
  text-align: center !important;
}

input {
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  background-color: var(--ob-theme-bg2);
  border: unset;
  border-radius: 2rem;
  outline: none;
  color: rgba(255, 255, 255, 0.7);
  transition: padding-left 0.2s linear;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
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

p {
  color: rgba(255, 255, 255, 0.7);
}

h2 {
  padding: 0 !important;
  margin: 0 !important;
}

.box.total-results {
  max-width: fit-content !important;
  padding: 10px !important;
  margin: -15px 0 !important;
  user-select: none !important;
}

.box.command {
  border-radius: 0.5rem !important;
  padding: 15px !important;
}

.box.info {
  border: unset !important;
  background-color: var(--ob-theme-bg) !important;
  padding: 12px;
}

.box.premium {
  position: relative !important;
  border: 1px solid #ffdd57 !important;
}

.box.command .title {
  margin-bottom: 12px;
}

.description {
  font-size: 1.1rem !important;
}

.aliases h2 {
  padding-top: 10px !important;
}

.premium .icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #ffdd57;
}
</style>