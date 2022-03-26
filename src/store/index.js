import Vue from 'vue'
import Vuex from 'vuex'

import controllers from "@/store/controllers";
import indicators from "@/store/indicators";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        controllers,
        indicators
    },
    strict: process.env.NODE_ENV !== 'production'
})
