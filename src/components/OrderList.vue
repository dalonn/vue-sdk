<template>
    <div>
        <h3>주문내역확인</h3>
        <hr />

        <div v-for="one in itemlist" v-bind:key="one">
            주문번호 : {{one.order.orderID}}, 주문수량 : {{one.order.orderCnt}}
            물품명 : {{one.item.name}}, 물품가격 : {{one.item.price}}
        </div>    
    </div>
</template>

<script>
    import axios from 'axios'; // 1. 라이브러리 추가
    export default {
        data() {
            return {
                itemlist : []  // 2. prop변수 생성
            }
        },
        async created() {
            // 3. node-sdk에서 결과값 받기
            const url=`http://127.0.0.1:13000/api/orderOrderItems?cst=bbb`;
            const response = await axios.get(url);  // node-sdk 호출하기
            console.log(response.data.data);  // [{},{},{}]
            this.itemlist = response.data.data;  // itemlist변수에 추가하기
        }
    }
</script>

<style scoped>

</style>