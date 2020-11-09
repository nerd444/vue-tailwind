import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Nav from "../views/Nav.vue";
import Header from "../views/Header.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/nav",
    name: "Nav",
    component: Nav
  },
  {
    path: "/header",
    name: "Header",
    component: Header
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
