import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('../views/MainPage.vue'),
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
