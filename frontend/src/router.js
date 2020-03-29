import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  base: '/dashboard',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/818',
      name: '818',
      component: () => import(/* webpackChunkName: "818" */ './views/818/818.vue')
    }
  ]
})
