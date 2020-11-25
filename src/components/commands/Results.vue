<template>
  <loader v-if="$store.getters.loading" />
  <not-found v-else-if="$store.getters.search && totalFilteredCommands === 0" />
  <total-results v-else />
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '../Loader';
import NotFound from './NotFound';
import TotalResults from './TotalResults';

export default {
  name: 'results',

  components: {
    Loader,
    NotFound,
    TotalResults,
  },

  computed: {
    ...mapGetters(['totalFilteredCommands', 'totalCommands']),
  },
};
</script>
