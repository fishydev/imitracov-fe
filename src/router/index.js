import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import HomeAdmin from "../views/HomeAdmin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/admin",
    name: "HomeAdmin",
    component: HomeAdmin
  },
];

const router = new VueRouter({
  routes
});

export default router;
