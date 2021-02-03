import { createRouter,createWebHistory } from "vue-router";

import DcHeroes from './pages/DcHeroes.vue'
import Calender from './pages/Calender.vue'
import Home from './pages/Home.vue'
import Markdown from './pages/Markdown.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/dc-heroes', component: DcHeroes },
    { path: '/calender', component: Calender },
    { path: '/mark-down', component: Markdown },
  ]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;