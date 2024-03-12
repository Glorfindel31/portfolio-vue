import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/components/routes/index';

createApp(App).use(router).mount('#app');
