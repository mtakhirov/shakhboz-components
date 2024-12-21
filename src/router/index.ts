import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import { baseRoutes } from '@/router/routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: baseRoutes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
