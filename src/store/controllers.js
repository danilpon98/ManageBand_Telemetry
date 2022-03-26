import * as controllersApi from '@/api/controllers';

export default {
    namespaced: true,
    state: {
        data: null,
    },
    getters: {
        list: state => {
            let flags = {};
            return state.data.filter((controller) =>{
                if (flags[controller.Imei]) {
                    return false;
                }
                flags[controller.Imei] = true;
                return true;
            })
        },
        statistics: state => imai => state.data.filter(controller => controller.Imei === imai),
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