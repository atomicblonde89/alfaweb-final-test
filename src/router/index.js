import Vue from 'vue'
import VueRouter from 'vue-router'
import Administration from '@/views/Administration.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { authRequired: true }
  },
  {
    path: '/admin',
    name: 'Administration',
    component: Administration,
    meta: { authRequired: true }
  },
  {
    path: '/ingresar',
    name: 'Login',
    component: Login
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


import { getAuth } from "firebase/auth";

router.beforeEach((to, from, next) => {
  const { currentUser } = getAuth()
  const { meta: { authRequired } } = to;

  if (currentUser && authRequired) {
    next()
  }
  else if (!currentUser && authRequired) {
    next("/ingresar")
  }
  else if (currentUser && !authRequired) {
    next("/")
  }
  else {
    next()
  }
})

export default router