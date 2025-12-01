import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './style.css';
import App from './App.vue';
import { useUserPreferencesStore } from '@/stores/userPreferences';
import { initializeUserLanguage } from '@/utils/userLanguage';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const userPreferencesStore = useUserPreferencesStore(pinia);
initializeUserLanguage(userPreferencesStore);

// console.log('LANG:', userPreferencesStore.language);

app.mount('#app');
