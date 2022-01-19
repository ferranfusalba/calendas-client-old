import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reserva1',
    name: 'Reserva 1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reserva1" */ '../views/ReservaStep1.vue')
  },
  //{
    //path: '/reserva2',
    //name: 'Reserva 2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "reserva2" */ '../views/ReservaStep2.vue')
  //},
  {
    path: '/reserva3',
    name: 'Reserva 3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reserva1" */ '../views/ReservaStep3.vue')
  },
  {
    path: '/reserva',
    name: 'Reserva (One Page)',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reserva" */ '../views/Reserva.vue')
  },
  {
    path: '/modifica',
    name: 'Modifica',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "modifica" */ '../views/Modifica.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
