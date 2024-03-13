import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import DigitalCommercial from '@/pages/DigitalCommercial.vue';
import DigitalOthers from '@/pages/DigitalOthers.vue';
import AnalogCommercial from '@/pages/AnalogCommercial.vue';
import AnalogOthers from '@/pages/AnalogOthers.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/digital-commercial', component: DigitalCommercial},
    {path: '/digital-others', component: DigitalOthers},
    {path: '/analog-commercial', component: AnalogCommercial},
    {path: '/analog-others', component: AnalogOthers},
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
