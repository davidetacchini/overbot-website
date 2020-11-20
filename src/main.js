import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// Styling
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@/assets/main.scss';
// Third Parties
import VueProgressBar from 'vue-progressbar';
import VueDragscroll from 'vue-dragscroll';

const options = {
  color: 'rgb(0, 113, 227)',
  failedColor: 'rgb(255,102,102)',
  thickness: '1.5px',
};

Vue.use(Buefy);
Vue.use(VueProgressBar, options);
Vue.use(VueDragscroll);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
