import api from "../services/api";

const state = {
  bot: {},
  host: {},
  version: "",
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
  version: (state) => {
    return state.version;
  },
};

const mutations = {
  SET_STATS: (state, payload) => {
    state.version = payload.bot.Version;
    delete payload.bot.Version;
    state.bot = payload.bot;
    state.host = payload.host;
    state.shards = payload.shards;
  },
};

const actions = {
  async GET_STATS({ commit }) {
    commit("SET_STATE");
    await api
      .get("/statistics")
      .then(({ data }) => {
        if (typeof data !== "object" || data === null) {
          throw Error("Expected object of objects.");
        } else {
          commit("SET_STATS", data);
        }
      })
      .catch(() => {
        commit("SET_ERROR", true);
      })
      .finally(() => {
        commit("SET_LOADING", false);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
