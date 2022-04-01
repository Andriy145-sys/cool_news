import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main-page',
        component: () => import('@/views/MainView/Main.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/ProfileView/Profile.vue'),
    },
    {
        path: '/sign_up',
        name: 'sign_up',
        component: () => import('@/views/AuthView/signUp.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/AuthView/Login.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

});

export default router;