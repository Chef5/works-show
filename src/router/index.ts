import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/works',
      // component: HomeView, // 暂时不加首页，首页需要重新改造加入比较炫酷的动画元素
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
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('../views/EditorView.vue'),
    },
    {
      path: '/3d',
      name: '3d',
      component: () => import('../views/3DView.vue'),
    },
  ]
})

export default router
