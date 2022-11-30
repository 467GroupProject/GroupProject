import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import './assets/main.css'

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify/lib/framework.mjs';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components, directives,
})

// Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// use all fonts
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const app = createApp(App)

app.use(vuetify)
    .use(router)
    .use(pinia)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
