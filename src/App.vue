<template>

  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">메인</el-menu-item>
        <el-menu-item index="2">테스트</el-menu-item>
        <el-menu-item index="3">물품등록</el-menu-item>
        <el-menu-item index="4">물품조회</el-menu-item>
        <el-menu-item index="5">주문하기</el-menu-item>
        <el-menu-item index="6">주문내역</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px" style="height:600px;background-color:#efefef"></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>

</template>

<script>
 export default {
    data() {
      return {
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        if(key === '1') {
          this.$router.push({path:'/'});
        }
        if(key === '2') {
          this.$router.push({path:'/about'});
        }
        if(key === '3') {
          this.$router.push({path:'/iteminsert'});
        }
        if(key === '4') {
          this.$router.push({path:'/itemselect'});
        }
        if(key === '5') {
          this.$router.push({path:'/orderinsert'});
        }
        if(key === '6') {
          this.$router.push({path:'/orderlist'});
        }
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

</style>

    