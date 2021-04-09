import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";
import VoerroTagsInput from "@voerro/vue-tagsinput";
import VueUploadComponent from "vue-upload-component";

// styles (fontawesome)
import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.component("tags-input", VoerroTagsInput);
Vue.config.productionTip = false;

Vue.use(moment);
Vue.component("file-upload", VueUploadComponent);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
