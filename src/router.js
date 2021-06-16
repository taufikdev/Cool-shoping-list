import Vue from 'vue'
import Router from 'vue-router'
import Goods from './components/Goods.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
