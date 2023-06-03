import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {path: '', name: 'home', component: () => import('@/views/Home.vue')},
  {path: '/play', name: 'play', component: () => import('@/views/Game.vue')},
]


const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
