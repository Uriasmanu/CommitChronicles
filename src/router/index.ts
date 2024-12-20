import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue' // Certifique-se de que LoginView está corretamente importado
import MissoesView from '@/views/MissoesView.vue'
import ContinuarView from '@/views/ContinuarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },

    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

    {
      path: '/missoesView',
      name: 'missoesView',
      component: MissoesView
    },

    {
      path: '/continuarView',
      name: 'continuarView',
      component: ContinuarView
    },
  ]
})

export default router
