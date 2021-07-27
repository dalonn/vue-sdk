<template>

  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link to="/">Main</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/about">about</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/iteminsert">iteminsert</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/itemselect">itemselect</router-link></el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px" style="height:600px;background-color:#efefef"></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>

</template>

<script>

</script>

<style>

</style>