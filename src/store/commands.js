import api from "../services/api";
import { sortAlphabetically, sortByType, sortByCategory, sortBySearch } from "../common/helpers.js";

const state = {
  commands: [],
  types: ["App Commands", "Context Menus"],
  categories: ["All", "Premium"],
  search: "",
  type: "app commands",
  category: "all",
};

const getters = {
  commands: (state) => {
    const sortedByType = sortByType(state.commands, state.type);
    const sortedAlphabetically = sortAlphabetically(sortedByType);
    return sortByCategory(sortBySearch(sortedAlphabetically, state.search), state.category);
  },
  types: (state) => {
    return state.types;
  },
  categories: (state) => {
    let categories = [];
    if (state.type == "app commands") {
      categories = state.categories;
    } else {
      categories = ["All"];
    }
    const commands = sortByType(state.commands, state.type);
    commands.forEach((command) => {
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
  type: (state) => {
    return state.type;
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
  SET_TYPE: (state, payload) => {
    state.type = payload;
  },
  SET_CATEGORY: (state, payload) => {
    state.category = payload;
  },
};

const actions = {
  async GET_COMMANDS({ commit }) {
    commit("SET_STATE");
    await api
      .get("/commands")
      .then(({ data }) => {
        if (!Array.isArray(data)) {
          throw Error("Expected array of objects.");
        } else {
          commit("SET_COMMANDS", data);
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
