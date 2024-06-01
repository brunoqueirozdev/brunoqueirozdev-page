import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import globalTranslate from '@/globals/translate';
import globalAboutme from '@/globals/aboutme';

app.use(createPinia())
app.use(router)
app.use(globalTranslate);
app.use(globalAboutme);

app.mount('#app')
