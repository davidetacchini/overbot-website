import api from '../services/api';

const state = {
  servers: Array,
};

const getters = {
  servers: (state) => {
    return state.servers;
  },
};

const mutations = {
  SET_SERVERS: (state, payload) => {
    state.servers = payload;
  },
};

const actions = {
  async GET_SERVERS({ commit }) {
    await api
      .get('/servers')
      .then(({ data }) => {
        if (!Array.isArray(data)) {
          throw Error('Expected array of objects.');
        } else {
          commit('SET_SERVERS', data);
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
