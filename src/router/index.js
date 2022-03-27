import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/controller/:imai',
    name: 'controller',
    component: () => import('../views/ControllerView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/SettingsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
