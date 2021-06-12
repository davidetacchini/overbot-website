import Vue from "vue";
import Vuex from "vuex";
// Modules
import home from "./home";
import status from "./status";
import commands from "./commands";

Vue.use(Vuex);

const defaultState = () => {
  return {
    loading: true,
    error: false,
  };
};

const store = new Vuex.Store({
  state: defaultState(),

  getters: {
    loading: (state) => {
      return state.loading;
    },
    error: (state) => {
      return state.error;
    },
  },

  mutations: {
    SET_LOADING: (state, payload) => {
      state.loading = payload;
    },
    SET_ERROR: (state, payload) => {
      state.error = payload;
    },
    SET_STATE: (state) => {
      Object.assign(state, defaultState());
    },
  },

  actions: {},

  modules: {
    home,
    status,
    commands,
  },
});

export default store;
