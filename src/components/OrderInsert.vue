<template>
    <div>
        <h3>주문하기</h3>
        <hr />

        <div v-for="one in itemlist" v-bind:key="one">
            {{one.Key}}  {{one.Value.name}}  {{one.Value.content}} 
            {{one.Value.price}} 
            <input type="button" value="주문하기" @click="orderInsert(one.Key)" />
        </div>   
        <hr />

         <el-row>
            <el-col :span="4" v-for="one in itemlist" :key="one">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                        <span>{{one.Value.name}}</span>
                        <span>{{one.Value.price}}원</span>
                        <div class="bottom">
                            <el-button type="text" class="button" @click="orderInsert(one.Key)">주문하기</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {  // prop 변수
            return {
                itemlist : []
            }
        },

        methods : { //사용자에 의해서 클릭등의 이벤트에 의해 호출되는 함수
            async orderInsert(key) {
                console.log(key);
                const oid = "ORD0114"; //계속해서 변경되어야 함.
                const iid = key;
                const cnt = 2;
                const cst = 'bbb';
                const url = `http://127.0.0.1:13000/api/createOrder?oid=${oid}&iid=${iid}&cnt=${cnt}&cst=${cst}`;
                const response = await axios.get(url);  // node-sdk호출하기
                if(response.data.ret === 1) { // 정상적으로 정보를 받았으면
                    alert(response.data.data);
                }
            }
        },

        async created() { // 화면이 로딩될때 자동으로 호출되는 함수
            //판매가능한 물품정보 받기
            const url = `http://127.0.0.1:13000/api/readAllItems?uid=bbb`;
            const response = await axios.get(url);  // node-sdk호출하기
            if(response.data.ret === 1) { // 정상적으로 정보를 받았으면
                console.log(response.data.data);
                this.itemlist = response.data.data;
            }
        }
    }
</script>

<style scoped>

</style>