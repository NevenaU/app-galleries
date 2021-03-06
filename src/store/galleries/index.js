import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

Vue.use(Vuex);

const store = {
    namespaced: true,
    state: {
        galleries: [],
        numberOfGalleries: Number,
        singleGallery: {},
        authorGalleries: {},
        author: {},
    },
    mutations,
    actions,
    getters
}

export default store;



        