import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import ru from '@/i18n/ru';
import en from '@/i18n/en';
import App from './App.vue';
import store from './store';
import '@/assets/styles/index.scss';

const messages = {
  ru: {
    message: ru,
  },
  en: {
    message: en,
  },
};

const i18n = createI18n({
  locale: 'ru', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

createApp(App)
  .use(store)
  .use(i18n)
  .mount('#app');
