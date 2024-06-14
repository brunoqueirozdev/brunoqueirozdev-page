import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faClock);

import VueGtag from "vue-gtag";

const app = createApp(App)

import globalTranslate from '@/globals/translate';
import globalAboutme from '@/globals/aboutme';
import globalDarkmode from '@/globals/darkmode';

app.use(createPinia())
app.use(router)
app.use(globalTranslate);
app.use(globalAboutme);
app.use(globalDarkmode);
app.component('font-awesome-icon', FontAwesomeIcon)
console.log(process.env.VUE_APP_GA_MEASUREMENT_ID);
app.use(VueGtag, {
    config: { id: process.env.GA_MEASUREMENT_ID }
});

app.mount('#app')
