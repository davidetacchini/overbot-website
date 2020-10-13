import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Commands from '../views/Commands.vue'
import Status from '../views/Status.vue'
import Privacy from '../views/legal/Privacy.vue'
import NotFound from '../views/errors/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'OverBot - The best Overwatch bot for Discord',
    }
  },
  {
    path: '/commands',
    name: 'commands',
    component: Commands,
    meta: {
      title: 'Commands - OverBot',
    }
  },
  {
    path: '/status',
    name: 'status',
    component: Status,
    meta: {
      title: 'Status - OverBot',
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy,
    meta: {
      title: 'Privacy Policy - OverBot',
    }
  },
  {
    path: '*',
    name: "not found",
    component: NotFound,
    meta: {
      title: 'Page Not Found - OverBot',
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
