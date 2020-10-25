import axios from 'axios';

const state = {
    servers: Array
};

const getters = {
    servers: (state) => {
        return state.servers;
    }
};

const mutations = {
    setServers: (state, payload) => {
        state.servers = payload
    }
};

const actions = {
    async getServers({ commit }) {
        await axios
            .get('/servers')
            .then((res) => {
                commit('setServers', res.data)
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