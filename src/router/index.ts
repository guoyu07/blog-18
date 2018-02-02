import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
])

export default () =>
  new VueRouter({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({
      x: 0,
      y: 1,
    }),
    routes: [
      {
        path: '/',
        component: () => import('views/Home.vue'),
      },
      {
        path: '/article/:number',
        component: () => import('views/Article.vue'),
      },
      {
        path: '/categories',
        component: () => import('views/Categories.vue'),
      },
      {
        path: '/about',
        component: () => import('views/About.vue'),
      },
      {
        path: '/archives',
        component: () => import('views/Archives.vue'),
      },
    ],
  })
