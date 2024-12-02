import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "@/layouts/Layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
