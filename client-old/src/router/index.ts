import { createRouter, createWebHashHistory, type NavigationGuardNext, type RouteLocation, } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { getSession } from '@/model/session';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        { path: "/login", name: "login", component: LoginView },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/AboutView.vue"),
            beforeEnter: requireLogin,
        },
    ]
});

function requireLogin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    const session = getSession();
    if (!session.user) {
        session.refirectUrl = to.fullPath;
        next('/login');
    } else {
        next();
    }
}

