import api from "../services/api";

const state = {
  supporters: Array,
};

const getters = {
  supporters: (state) => {
    return state.supporters;
  },
  premiumUsers: (state) => {
    if (Array.isArray(state.supporters)) {
      return state.supporters.filter((supporter) => {
        return supporter.is_server === false;
      });
    }
  },
  premiumServers: (state) => {
    if (Array.isArray(state.supporters)) {
      return state.supporters.filter((supporter) => {
        return supporter.is_server === true;
      });
    }
  },
};

const mutations = {
  SET_SUPPORTERS: (state, payload) => {
    state.supporters = payload;
  },
};

const actions = {
  async GET_SUPPORTERS({ commit }) {
    commit("SET_STATE");
    await api
      .get("/supporters")
      .then(({ data }) => {
        if (!Array.isArray(data)) {
          throw Error("Expected array of objects.");
        } else {
          commit("SET_SUPPORTERS", data);
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
