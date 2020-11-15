import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crawler',
    name: 'Crawler',
    component: () =>
      import(/* webpackChunkName: "crawler" */ '../views/crawler/List.vue')
  },
  {
    path: '/crawler/:id',
    name: 'Crawler Edit',
    component: () =>
      import(/* webpackChunkName: "crawler" */ '../views/crawler/Crawler.vue')
  },
  {
    path: '/crawler/:id/status',
    name: 'Crawler Status',
    component: () =>
      import(/* webpackChunkName: "crawler" */ '../views/crawler/Status.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
