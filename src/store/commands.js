import axios from 'axios'

const state = {
    commands: [],
    search: "",
};

const getters = {
    filteredCommands: (state) => {
        return state.commands.filter((command) => {
            return command.name.toLowerCase().includes(state.search.toLowerCase().trim());
        })
    },
    totalFilteredCommands: (state, getters) => {
        return getters.filteredCommands.length;
    },
    totalCommands: (state) => {
        return state.commands.length;
    },
    search: (state) => {
        return state.search;
    },
};

const mutations = {
    setCommands: (state, payload) => {
        state.commands = payload
    },
    setSearch: (state, payload) => {
        state.search = payload
    },
};

const actions = {
    async getCommands({ commit }) {
        await axios
            .get('/commands')
            .then((res) => {
                commit('setCommands', res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};