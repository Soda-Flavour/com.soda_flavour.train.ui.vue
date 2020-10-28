import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.page.vue';
import {
  useState,
} from "@u3u/vue-hooks";
import store from '../store/index';

Vue.use(VueRouter);

const rejectAuthUser = (to, from, next) => {
  const isLogin = store.state.auth.isLogin;
  if (isLogin === "true") {
    console.log('진입')
    alert('로그인된 유저입니다.');
    next('/');
  } else {
    next();
  }
}
const onlyAuthUser = (to, from, next) => {
  const isLogin = store.state.auth.isLogin;
  if (isLogin === "true") {
    next();
  } else {
    next('/login');
  }
}

const routes = [{
    path: '/',
    name: 'home',
    beforeEnter: onlyAuthUser,
    component: Home,
  },
  {
    path: '/create',
    name: 'create',
    beforeEnter: onlyAuthUser,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "create" */ '../views/faq/Create.page.vue'),
  },
  {
    path: '/update/:id',
    name: 'update',
    beforeEnter: onlyAuthUser,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "update" */ '../views/faq/Update.page.vue'),
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: rejectAuthUser,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "login" */ '../views/login/Login.page.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
