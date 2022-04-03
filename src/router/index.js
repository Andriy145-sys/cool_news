import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main-page',
        component: () => import('@/views/MainView/Main.vue'),
        meta: { requiresLogin: true }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/ProfileView/Profile.vue'),
        meta: { requiresLogin: true }
    },
    {
        path: '/sign_up',
        name: 'sign_up',
        component: () => import('@/views/AuthView/signUp.vue'),
        meta: { requiresLogout: true }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/AuthView/Login.vue'),
        meta: { requiresLogout: true }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && store.getters.loggedUser == null) {
        next({ name: 'login' })
    }
    else if (to.matched.some(record => record.meta.requiresLogout) && store.getters.loggedUser != null) {
        next({name: 'main-page'})
    }
    else {
        next()
    }
})

export default router;