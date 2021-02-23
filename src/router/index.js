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
    meta: {
      guest: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true,
    },
  },
  {
    path: "/create",
    name: "CreateGallery",
    component: CreateGallery,
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  const isAuth = !!localStorage.getItem("token");

  if (isAuth && to.meta.guest) {
    return next({ name: "Home" });
  }
  if (!isAuth && to.meta.auth) {
    return next({ name: "Login" });
  }
  return next();
});
export default router;
