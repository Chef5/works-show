import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/ListView.vue'),
      children: [
        {
          path: '/works/detail',
          name: 'detail',
          component: () => import('../views/WorkDetail.vue'),
        }
      ],
    }
  ]
})

export default router
