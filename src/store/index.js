import Vue from 'vue';
import Vuex from 'vuex';
// Modules
import home from './home';
import status from './status';
import commands from './commands';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        home,
        status,
        commands,
    }
});

export default store;