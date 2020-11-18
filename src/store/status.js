import axios from 'axios';

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
  setStats: (state, payload) => {
    state.bot = payload.bot;
    state.host = payload.host;
    state.shards = payload.shards;
  },
};

const actions = {
  async getStats({ commit }) {
    await axios
      .get('/statistics')
      .then((res) => {
        commit('setStats', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
