import api from '../services/api';
import { sortAlphabetically, sortByCategory, sortBySearch } from '../common/helpers.js';

const state = {
  commands: [],
  categories: ['All'],
  search: '',
  category: 'all',
};

const getters = {
  commands: (state) => {
    const sortedAlphabetically = sortAlphabetically(state.commands);
    return sortByCategory(sortBySearch(sortedAlphabetically, state.search), state.category);
  },
  categories: (state) => {
    const categories = [...state.categories];
    state.commands.forEach((command) => {
      if (command.cog !== null) {
        categories.push(command.cog);
      }
    });
    categories.sort((a, b) => {
      return a.localeCompare(b);
    });
    // remove all duplicates
    return [...new Set(categories)];
  },
  search: (state) => {
    return state.search;
  },
  category: (state) => {
    return state.category;
  },
};

const mutations = {
  SET_COMMANDS: (state, payload) => {
    state.commands = payload;
  },
  SET_SEARCH: (state, payload) => {
    state.search = payload;
  },
  SET_CATEGORY: (state, payload) => {
    state.category = payload;
  },
};

const actions = {
  async GET_COMMANDS({ commit }) {
    commit('SET_STATE');
    await api
      .get('/commands')
      .then(({ data }) => {
        if (!Array.isArray(data)) {
          throw Error('Expected array of objects.');
        } else {
          commit('SET_COMMANDS', data);
        }
      })
      .catch(() => {
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
