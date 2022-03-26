import * as controllersApi from '@/api/controllers';

export default {
    namespaced: true,
    state: {
        data: null,
    },
    getters: {

    },
    mutations: {
        setData(state, data) {
            state.data = data;
        }
    },
    actions: {
        async load({ commit }) {
            const data = await controllersApi.all();
            commit('setData', data);
            return data;
        }
    }
}