import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// LAYOUTS
import {AppLayout} from "@/layouts"

// PAGES
import Main from '@/views/main/Main.vue'
import Catalog from '@/views/catalog/Catalog.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    redirect: '/catalog',
    component: Main,
    meta: { layout: AppLayout }
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
    meta: { layout: AppLayout }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
