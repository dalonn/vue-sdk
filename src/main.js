import { createApp } from 'vue'
import App from './App.vue'

// https://element-plus.org/ 화면으로 디자인 가능하게 설정
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(ElementPlus).mount('#app');