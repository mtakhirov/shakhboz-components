import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layout/Default.vue"),
      children: [
        {
          path: "/input",
          component: import("@/pages/Input/PInput.vue"),
          name: "Input",
        },
        {
          path: "/table",
          component: import("@/pages/Table/PTable.vue"),
          name: "Table",
        },
      ],
    },
  ],
});

export default router;
