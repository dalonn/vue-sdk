import { createApp } from 'vue'
import App from './App.vue'

// UI 설정
// https://element-plus.org/ 화면으로 디자인 가능하게 설정
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


import router from './routes'; //추가

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
