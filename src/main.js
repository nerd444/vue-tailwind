import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";

// styles (fontawesome)
import "@fortawesome/fontawesome-free/css/all.min.css";

import VoerroTagsInput from "@voerro/vue-tagsinput";

Vue.component("tags-input", VoerroTagsInput);
Vue.config.productionTip = false;

Vue.use(moment);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
