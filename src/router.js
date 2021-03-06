import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddingCoffee from '@/components/AddingCoffee'
import EditingCoffee from '@/components/EditingCoffee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/adding-coffee',
      name: 'adding-coffee',
      component: AddingCoffee
    },
    {
      path: '/editing-coffee/:coffee_path',
      name: 'editing-coffee',
      component: EditingCoffee
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
