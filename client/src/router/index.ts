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
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdminView.vue')
    },
     {
      path: '/activity',
      name: 'activity',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyActivityView.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',

      component: () => import('../views/MyStatisticsView.vue')
    },
    {
      path: '/friends',
      name: 'friends',

      component: () => import('../views/MyFriendsView.vue')
    },
    {
      path: '/search',
      name: 'search',

      component: () => import('../views/PeopleSearchView.vue')
    }
  ]
})

export default router
