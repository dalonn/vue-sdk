<template>
  <div>
    <div v-for="one in itemlist" v-bind:key="one">
        {{one.Key}} {{one.Value.name}} {{one.Value.content}} 
          {{one.Value.price}} {{one.Value.quantity}} 
        <input type="button" @click="deleteItem(one.Key)" value="삭제" />
        <input type="button" @click="updateItem(one.Key)" value="수정" />
        <input type="button" @click="itemHistory(one.Key)"  value="변경이력" />
        <br />
    </div> 

    <hr />
    <el-table :data="itemlist" style="width: 100%">
      <el-table-column prop="Key" label="물품코드" width="180"></el-table-column>
      <el-table-column prop="Value.name" label="물품명" width="180"></el-table-column>
      <el-table-column prop="Value.content" label="물품내용"></el-table-column>
      <el-table-column prop="Value.price" label="물품가격" width="180"></el-table-column>
      <el-table-column prop="Value.quantity" label="수량" width="180"></el-table-column>

      <el-table-column align="left">
        <template #header>버튼</template>
        <template #default="scope">
          <el-button size="mini" @click="updateItem1(scope.$index)">Edit</el-button>
          <el-button size="mini" @click="itemHistory1(scope.$index)">History</el-button>
          <el-button size="mini" type="danger" @click="deleteItem1(scope.$index)">Delete</el-button>
        </template>
      </el-table-column>

    </el-table>

  </div>  
</template>

<script>
  // npm install axios --save    <= node-sdk를 호출해서 값을 받기
  import axios from 'axios';

  export default {

    methods : {  // 사용자에 의한 이벤트
      // 변경이력 버튼 클릭시
      async itemHistory(id){
        this.$router.push( {path:'/itemhistory', query:{id : id} });
      },

      async deleteItem(id){
        const url = `http://127.0.0.1:13000/api/deleteItem?seller=aaa&id=${id}`;
        const response = await axios.get(url);  // node-sdk호출하기
        if(response.data.ret === 1){
          alert(response.data.data);
          this.$router.go(this.$router.currentRoute); //새로고침 수행 F5
        }
      },
      async updateItem(id){
        console.log(id);
        //127.0.0.1:8080/itemupdate?id=ITEM0100&test=abc
        this.$router.push( {path:'/itemupdate', query:{id : id, test :'abc'} }); //주소창의 주소를 변경시킴.
      },




      async deleteItem1(idx){
        const url = `http://127.0.0.1:13000/api/deleteItem?seller=aaa&id=${this.itemlist[idx].Key}`;
        const response = await axios.get(url);  // node-sdk호출하기
        if(response.data.ret === 1){
          alert(response.data.data);
          this.$router.go(this.$router.currentRoute); //새로고침 수행 F5
        }
      },
      async updateItem1(idx){
        //127.0.0.1:8080/itemupdate?id=ITEM0100&test=abc
        this.$router.push( {path:'/itemupdate', query:{id : this.itemlist[idx].Key, test :'abc'} }); //주소창의 주소를 변경시킴.
      },
      async itemHistory1(idx){
        this.$router.push( {path:'/itemhistory', query:{id : this.itemlist[idx].Key} });
      },
    },







    data() {  // prop 변수
      return {
        itemlist : []
      }
    },


    async created() { // 화면구동시 자동으로 호출
      const url = "http://127.0.0.1:13000/api/readAllItems?uid=bbb";
      const response = await axios.get(url); // CORS 오류발생
      if (response.data.ret === 1) {
        console.log(response.data.data);
        this.itemlist = response.data.data;  //[{},{},{}]
      }
    },


    mounted() { // 화면구동시 자동으로 호출
      console.log('2. mounted');
    },
  }
</script>