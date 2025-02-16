import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/landing_page.vue";
import CVPage from "../components/CV_page.vue";
import ThanksView from "../components/ThanksView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cv", name: "CV", component: CVPage },
  {
    path: '/thanks',
    name: 'Thanks',
    component: ThanksView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
