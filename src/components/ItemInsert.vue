<template>
  <div>
    <input type="text" v-model="id" placeholder="물품코드" /><br />
    <input type="text" v-model="name" placeholder="물품명" /><br />
    <input type="text" v-model="content" placeholder="물품설명" /><br />
    <input type="text" v-model="price" placeholder="물품가격" /><br />
    <input type="text" v-model="quantity" placeholder="물품수량" /><br />
    <input type="text" v-model="seller" placeholder="판매자" /><br />

    <input type="submit" @click="insertItem"  value="등록하기" />
  </div>  
</template>

<script>
  import axios from 'axios';

  export default {
    // 사용자에 의해서 클릭하는등의 이벤트에 의해 호출
    methods : {
      async insertItem() {
        const url = `http://127.0.0.1:13000/api/createItem?id=${this.id}&name=${this.name}&content=${this.content}&price=${this.price}&quantity=${this.quantity}&seller=${this.seller}`;
        const response = await axios.get(url);
        console.log(response);

        if(response.data.ret === 1){
          alert(response.data.data);
          this.$router.push({path:'/itemselect'}); //페이지 이동
        }
      }
    },

    data() {
      return {
        id        : '',
        name      : '',
        content   : '',
        price     : '',
        quantity  : '',
        seller    : 'aaa',
      }
    },
  }
</script>

<style scoped>

</style>