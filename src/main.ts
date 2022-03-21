import { createApp } from 'vue';
import App from '@/App.vue';
import store from './store';
import '@/assets/styles/index.scss';
import i18n from './i18n';

const app = createApp(App).use(i18n);

app.use(store)
  .mount('#app');
