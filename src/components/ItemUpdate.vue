<template>
    <div>
        <h3>물품변경</h3>
        <hr />
        
        <input type="text" v-model="id" placeholder="물품코드" readonly /><br />
        <input type="text" v-model="name" placeholder="물품명" /><br />
        <input type="text" v-model="content" placeholder="물품설명" /><br />
        <input type="text" v-model="price" placeholder="물품가격" /><br />
        <input type="text" v-model="quantity" placeholder="물품수량" /><br />
        <input type="text" v-model="seller" placeholder="판매자" readonly /><br />
        <input type="submit" @click="updateItem()" value="수정하기" />
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        methods : {
            async updateItem() {
                const url = `http://127.0.0.1:13000/api/changeItem?id=${this.id}&name=${this.name}&content=${this.content}&price=${this.price}&quantity=${this.quantity}&seller=${this.seller}`;
                const response = await axios.get(url);
                console.log(response);
                if(response.data.ret === 1) {   // 성공유무확인 
                    alert(response.data.data);  // 알림창 출력
                    this.$router.push( {path:'/itemselect'} ); // 페이지 전환
                }
            }
        },
        data() {
            return {
                id        : this.$route.query.id,
                name      : '',
                content   : '',
                price     : '',
                quantity  : '',
                seller    : 'aaa',
            }
        },
        created() {

        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>