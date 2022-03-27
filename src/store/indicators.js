import * as indicatorsApi from '@/api/indicators'

export default {
    namespaced: true,
    state: {
        indicatorsAll: [],
        indicatorsActive: [],
    },
    getters: {
        all: state => {
            return state.indicatorsAll;
        },
        active: state => {
            return state.indicatorsActive;
        }
    },
    mutations: {
        setAll(state, data) {
            state.indicatorsAll = data;
        },
        setActive(state, data) {
            state.indicatorsActive = data
        }
    },
    actions: {
        async load({commit}) {
            const dataAll = await indicatorsApi.all();
            const savedIndicators = JSON.parse(localStorage.getItem('indicators'))
            if (savedIndicators) {
                const dataActive = dataAll.filter(indicator => ~savedIndicators.indexOf(indicator))
                commit('setActive', dataActive);
            }else {
                commit('setActive', dataAll);
            }
            commit('setAll', dataAll);
        },
        updateActive({commit}, newIndicatorsActive) {
            commit('setActive', newIndicatorsActive);
        }
    }
}