import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

import AllGalleries from "../views/galleries/AllGalleries.vue";
import MyGalleries from "../views/galleries/MyGalleries.vue";
import AuthorGalleries from "../views/galleries/AuthorGalleries.vue";
import SingleGallery from "../views/galleries/SingleGallery";
import CreateGallery from "../views/galleries/CreateGallery.vue";
import { globalAuthGuard } from "../guards/authGuard";



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/galleries'
  },
  {
    path: '/galleries',
    name: 'AllGalleries',
    component: AllGalleries
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { guestRequired: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guestRequired: true },
  },
  {
    path: "/create",
    name: "CreateGallery",
    component: CreateGallery,
    meta: { authRequired: true },
  },
  {
    path: '/my-galleries',
    name: 'MyGalleries',
    component: MyGalleries,
    meta: { authRequired: true },
  },
  {
    path: '/galleries/:id',
    name: 'SingleGallery',
    component: SingleGallery,
    meta: { authRequired: true },
  },
  {
    path: '/author/:id',
    name: 'AuthorGalleries',
    component: AuthorGalleries,
    meta: { authRequired: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});



router.beforeEach(globalAuthGuard);
export default router