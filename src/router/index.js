import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.page.vue';


Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/create',
    name: 'create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "create" */ '../views/faq/Create.page.vue'),
  },
  {
    path: '/update/:id',
    name: 'update',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "update" */ '../views/faq/Update.page.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
