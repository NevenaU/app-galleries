import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CreateGallery from "../views/CreateGallery.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,

  },
  {
    path: "/login",
    name: "Login",
    component: Login,

  },
  {
    path: "/create",
    name: "CreateGallery",
    component: CreateGallery,

  },
];

const router = new VueRouter({
  routes,
});


export default router;
