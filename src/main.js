import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Styling
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "@/assets/main.scss";
// Third Parties
import VueProgressBar from "vue-progressbar";
import VueDragscroll from "vue-dragscroll";
// Components
import BaseSection from "@/components/BaseSection";
import BaseLoader from "@/components/BaseLoader";
import ErrorAlert from "@/components/ErrorAlert";
import ItemCard from "@/components/ItemCard";

const options = {
  color: "rgb(255, 166, 87)",
  failedColor: "rgb(255, 123, 114)",
  thickness: "1.5px",
};

Vue.use(Buefy);
Vue.use(VueProgressBar, options);
Vue.use(VueDragscroll);

Vue.component("BaseSection", BaseSection);
Vue.component("BaseLoader", BaseLoader);
Vue.component("ErrorAlert", ErrorAlert);
Vue.component("ItemCard", ItemCard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
