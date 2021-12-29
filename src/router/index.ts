import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'App',
    redirect: { name: 'HomeA' }
  },
  {
    path: '/home-a',
    name: 'HomeA',
    component: () => import('../pages/A.vue')
  },
  {
    path: '/home-a',
    name: 'HomeB',
    component: () => import('../pages/B.vue')
  },
  {
    path: '/home-c',
    name: 'HomeC',
    component: () => import('../pages/C.vue')
  }
]

const history = createWebHistory(process.env.BASE_URL)

export const router = createRouter({
  history: history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
