<template>
  <loader v-if="$store.getters.loading" />
  <error-message v-else-if="$store.getters.error" />
  <not-found v-else-if="$store.getters.search && totalFilteredCommands === 0" />
  <total-results v-else />
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import NotFound from './NotFound';
import TotalResults from './TotalResults';

export default {
  name: 'results',

  components: {
    Loader,
    ErrorMessage,
    NotFound,
    TotalResults,
  },

  computed: {
    ...mapGetters(['totalFilteredCommands', 'totalCommands']),
  },
};
</script>
