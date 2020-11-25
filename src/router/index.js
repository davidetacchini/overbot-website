import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/errors/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Overcord - The best Overwatch bot for Discord',
    },
  },
  {
    path: '/commands',
    name: 'Commands',
    component: () =>
      import(/* webpackChunkName: "commands" */ '../views/Commands.vue'),
    meta: {
      title: 'Commands - Overcord',
    },
  },
  {
    path: '/status',
    name: 'Status',
    component: () =>
      import(/* webpackChunkName: "status" */ '../views/Status.vue'),
    meta: {
      title: 'Status - Overcord',
    },
  },
  {
    path: '/permissions',
    name: 'Permissions',
    component: () =>
      import(/* webpackChunkName: "permissions" */ '../views/Permissions.vue'),
    meta: {
      title: 'Permissions - Overcord',
    },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () =>
      import(/* webpackChunkName: "privacy" */ '../views/legal/Privacy.vue'),
    meta: {
      title: 'Privacy Policy - Overcord',
    },
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound,
    meta: {
      title: 'Page Not Found - Overcord',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
