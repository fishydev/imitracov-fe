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
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
    if (to.name == 'HomeAdmin' && localStorage.getItem('auth') != 'true') next ({ name: 'Home'})
    else next()
})

export default router;
