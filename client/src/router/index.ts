import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { getSession } from '@/models/session';
import { ref } from 'vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/purpose',
      name: 'purpose',
      component: () => import('../views/PurposeView.vue')
    },
    {
      path: '/plan',
      name: 'plan',
      component: () => import('../views/PlanView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyActivityView.vue'),
      beforeEnter: requireLogin,
    },
    {
      path: '/statistics',
      name: 'statistics',

      component: () => import('../views/MyStatisticsView.vue'),
      beforeEnter: requireLogin,

    },
    {
      path: '/friends',
      name: 'friends',

      component: () => import('../views/MyFriendsView.vue'),
      beforeEnter: requireLogin,
      
    },
    {
      path: '/search',
      name: 'search',

      component: () => import('../views/PeopleSearchView.vue'),
      beforeEnter: requireLogin,
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',

      component: () => import('../views/SignupView.vue')
    }
  ]
});

function requireLogin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  
  const session = getSession();
  if(!session.user){
    session.redirectUrl = to.fullPath;
    next('/plan');
  }else{
    next();
  }
}

export default router


