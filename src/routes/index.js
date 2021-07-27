// 주소 설정하는 곳

// 1. 설치한 모듈 가져오기
import { createWebHistory, createRouter } from "vue-router";

// 2. components에 있는 컴포넌트 필요한 것 가져오기 (url 설정)
import Main from '@/components/Main.vue';
import About from '@/components/About.vue';
import ItemInsert from '@/components/ItemInsert.vue';
import ItemSelect from '@/components/ItemSelect.vue';

// 3. 주소 설정하기
// 127.0.0.1:8080/
const routes = [
    {path :'/', name:'Main', component:Main},
    {path :'/about', name:'about', component:About},
    {path :'/iteminsert', name:'iteminsert', component:ItemInsert},
    {path :'/itemselect', name:'itemselect', component:ItemSelect},

];

// 4. router 적용
const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;