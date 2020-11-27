import api from '../services/api';
import { getBySearch } from './helpers.js';

const state = {
  commands: [],
  search: '',
};

const getters = {
  filteredBySearch: (state) => {
    return getBySearch(state.commands, state.search);
  },
  totalFilteredCommands: (state, getters) => {
    return getters.filteredBySearch.length;
  },
  totalCommands: (state) => {
    return state.commands.length;
  },
  search: (state) => {
    return state.search;
  },
};

const mutations = {
  SET_COMMANDS: (state, payload) => {
    state.commands = payload;
  },
  SET_SEARCH: (state, payload) => {
    state.search = payload;
  },
};

const actions = {
  async GET_COMMANDS({ commit }) {
    await api
      .get('/commands')
      .then(({ data }) => {
        if (!Array.isArray(data)) {
          throw Error('Expected array of objects.');
        } else commit('SET_COMMANDS', data);
      })
      .catch((err) => {
        console.error(err);
        commit('SET_ERROR', true);
      })
      .finally(() => {
        commit('SET_LOADING', false);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
