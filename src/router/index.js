import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Taches from '../views/Taches.vue';
import Projets from '../views/Projets.vue';
import About from '@/views/About.vue';




const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/taches', name: 'Taches', component: Taches },
    { path: '/projets', name: 'Projets', component: Projets },
    { path: '/About', component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
