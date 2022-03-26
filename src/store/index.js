import Vue from 'vue'
import Vuex from 'vuex'

import controllers from "@/store/controllers";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        controllers
    },
    strict: process.env.NODE_ENV !== 'production'
})
