import Vue from 'vue';
import Vuex from 'vuex';
// Modules
import home from './home';
import status from './status';
import commands from './commands';
import { defaultState } from '../common/helpers.js';

Vue.use(Vuex);

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

  actions: {
    RESET_STATE: ({ commit }) => {
      commit('SET_STATE');
    },
  },

  modules: {
    home,
    status,
    commands,
  },
});

export default store;
