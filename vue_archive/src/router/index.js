import Vue from 'vue'
import VueRouter from 'vue-router'
import Card from '../views/Card.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Card',
    component: Card
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
