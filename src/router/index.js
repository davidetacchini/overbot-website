import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/errors/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "OverBot - The best Overwatch bot for Discord",
    },
  },
  {
    path: "/commands",
    name: "Commands",
    component: () => import(/* webpackChunkName: "commands" */ "../views/Commands.vue"),
    meta: {
      title: "Commands - OverBot",
    },
  },
  {
    path: "/status",
    name: "Status",
    component: () => import(/* webpackChunkName: "status" */ "../views/Status.vue"),
    meta: {
      title: "Status - OverBot",
    },
  },
  {
    path: "/permissions",
    name: "Permissions",
    component: () => import(/* webpackChunkName: "permissions" */ "../views/Permissions.vue"),
    meta: {
      title: "Permissions - OverBot",
    },
  },
  {
    path: "/premium",
    name: "Premium",
    component: () => import(/* webpackChunkName: "premium" */ "../views/Premium.vue"),
    meta: {
      title: "Premium - OverBot",
    },
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: () => import(/* webpackChunkName: "privacy" */ "../views/legal/Privacy.vue"),
    meta: {
      title: "Privacy Policy - OverBot",
    },
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import(/* webpackChunkName: "terms" */ "../views/legal/Terms.vue"),
    meta: {
      title: "Terms of Service - OverBot",
    },
  },
  {
    path: "*",
    name: "Not Found",
    component: NotFound,
    meta: {
      title: "Page Not Found - OverBot",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
