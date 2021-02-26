import Vue from "vue";
import Vuex from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
Vue.use(Vuex);

const token = JSON.parse(localStorage.getItem("token"));

const store = {
  namespaced: true,
  state: {
    token: token,
    activeUser: null,
    authUserGalleries: {},
    numberOfGalleries: Number,
  },
  actions,
  mutations,
  getters,
};

export default store;
