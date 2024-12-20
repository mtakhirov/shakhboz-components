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
          path: "/button",
          component: import("@/pages/Button/PButton.vue"),
          name: "Button",
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
