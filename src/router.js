import { createWebHistory, createRouter } from 'vue-router'
import Result from './components/result.vue'
import Home from './components/home.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/result',
    component: Result,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
