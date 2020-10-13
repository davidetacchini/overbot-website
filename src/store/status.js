import axios from 'axios';

const state = {
    statistics: Array,
    host: Array,
    shards: Array,
};

const getters = {
    statistics: (state) => {
        return state.statistics;
    },
    host: (state) => {
        return state.host;
    },
    shards: (state) => {
        return state.shards;
    }
};

const mutations = {
    setStats: (state, payload) => {
        state.statistics = payload.bot
        state.host = payload.host
        state.shards = payload.shards
    }
};

const actions = {
    async getStats({ commit }) {
        await axios
            .get('stats')
            .then((res) => {
                commit('setStats', res.data);
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