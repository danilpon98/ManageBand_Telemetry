import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Axios Mock Adapter
import '@/@fake-db/db'

const AppInstance = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
})

store.dispatch('indicators/load');
store.dispatch('controllers/load').then(() => {
    AppInstance.$mount('#app')
});
