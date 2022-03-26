import * as indicatorsApi from '@/api/indicators'

export default {
    namespaced: true,
    state: {
        indicators: [],
    },
    getters: {
        all: state => state.indicators,
    },
    mutations: {
        set(state, data) {
            state.indicators = data;
        }
    },
    actions: {
        async load({commit}) {
            const data = await indicatorsApi.all();
            commit('set', data);
        }
    }
}