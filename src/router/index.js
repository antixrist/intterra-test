import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Field from '../views/Field/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Field',
    component: Field,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
