import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BMap from '../views/BMap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/bmap',
    name:'BMap',
    component:BMap
  }
]

const router = new VueRouter({
  routes
})

export default router
