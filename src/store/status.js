import api from '../services/api';

const state = {
  bot: Array,
  host: Array,
  shards: Array,
};

const getters = {
  bot: (state) => {
    return state.bot;
  },
  host: (state) => {
    return state.host;
  },
  shards: (state) => {
    return state.shards;
  },
};

const mutations = {
  SET_STATS: (state, payload) => {
    state.bot = payload.bot;
    state.host = payload.host;
    state.shards = payload.shards;
  },
};

const actions = {
  async GET_STATS({ commit }) {
    await api
      .get('/statistics')
      .then(({ data }) => {
        commit('SET_STATS', data);
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
