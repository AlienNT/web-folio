import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {isMobile} from "@/helpers/apiHelper";

createApp(App).use(store).use(router).mixin(isMobile).mount('#app')
