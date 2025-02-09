import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css';
import router from "./router";
import vFadeIn from '/directives/vFadeIn.js'


const app = createApp(App);
app.use(router);
app.directive('fade-in', vFadeIn)
app.mount("#app");
