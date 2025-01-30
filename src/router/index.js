import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/landing_page.vue";
import CVPage from "../components/CV_page.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cv", name: "CV", component: CVPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
