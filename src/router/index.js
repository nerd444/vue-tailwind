import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Slider from "../views/Slider.vue";
import Chart from "../views/Chart.vue";
import Crud from "../views/CRUD.vue";
import Detail from "../views/Detail.vue";
import Black from "../views/Black.vue";
import Nav from "../views/Nav.vue";
import Header from "../views/Header.vue";
import VideoUpload from "../views/VideoUpload.vue";
import Editor from "../views/Editor.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/slider",
    name: "Slider",
    component: Slider,
  },
  {
    path: "/chart",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/crud",
    name: "Crud",
    component: Crud,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/black",
    name: "Black",
    component: Black,
  },
  {
    path: "/nav",
    name: "Nav",
    component: Nav,
  },
  {
    path: "/header",
    name: "Header",
    component: Header,
  },
  {
    path: "/videoUpload",
    name: "VideoUpload",
    component: VideoUpload,
  },
  {
    path: "/editor",
    name: "Editor",
    component: Editor,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
