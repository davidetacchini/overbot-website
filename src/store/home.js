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
      .then((res) => {
        commit('SET_SERVERS', res.data);
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
