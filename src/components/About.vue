<template>
  <div>
    태그를 이용해서 화면 표시
    {{ title }}
    {{ age }}
    {{ item.no }} {{item.name}} {{item.content}} {{item.price}} {{item.quantity}}
    <hr />
    <div v-for="one in itemlist" v-bind:key="one">
         {{ one.no }} {{one.name}} {{one.content}} {{one.price}} {{one.quantity}} <br />
    </div> 
  </div>  
</template>

<script>
  export default {
    created() {
      console.log('1. created');
    },
    mounted(){
      console.log('2. mounted');
    },
    data() {
      return {
        title :'a54675765675675675bc',
        age   : 13,
        item  : { no:1, name:'사과', content:'맛있는사과', price:3243, quantity:10 },
        itemlist : [ 
          { no:1, name:'사과1', content:'맛있는사과', price:3243, quantity:101 },
          { no:2, name:'사과2', content:'맛있는사과', price:3243, quantity:102 },
          { no:3, name:'사과3', content:'맛있는사과', price:3243, quantity:103 }  
        ]
      }
    }
  }
</script>

<style scoped>

</style>

