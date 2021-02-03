import { createRouter,createWebHistory } from "vue-router";

import DcHeroes from './components/DcHeroes.vue'
import Calender from './components/Calender.vue'
import Home from './components/Home.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/dc-heroes', component: DcHeroes },
    { path: '/calender', component: Calender },
  ]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;