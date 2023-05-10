import { createRouter, createWebHistory } from "vue-router";

import ThePageIndex from "@views/ThePageIndex.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: ThePageIndex,
    },
  ],
});

export default router;
