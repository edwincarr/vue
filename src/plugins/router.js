import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {path: '', name: 'home', component: () => import('@/views/home.vue')},
  {path: '/play', name: 'play', component: () => import('@/views/game.vue')},

]


const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
