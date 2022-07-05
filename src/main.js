import { createApp } from 'vue';
import App from './App.vue';
import router from "@/components/router/router";
import "../index.css";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'



const app = createApp(App)


app.use(router)
app.mount('#app')
app.use(ElementPlus)