import { createApp } from 'vue';
import router from './router/index';
import store from "./store/index";
import VueAxios from "vue-axios";
import App from './App.vue';

createApp(App).use(VueAxios).use(router).use(store).mount('#app')
