<template>
  <div id="app">
您好，*****旗舰店
  <el-container>
  <el-header>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-submenu index="1">
    <template slot="title">挖宝任务</template>
    <el-menu-item index="1-1">发布任务</el-menu-item>
    <el-menu-item index="1-2">已发布任务</el-menu-item>
    <el-menu-item index="1-3">挖宝订单明细</el-menu-item>
    </el-submenu>
  <el-submenu index="2">
    <template slot="title">免单任务</template>
    <el-menu-item index="2-1">发布免单任务</el-menu-item>
    <el-menu-item index="2-2">已发布任务</el-menu-item>
    <el-menu-item index="2-3">免单订单管理</el-menu-item>
    <el-menu-item index="2-4">免单订单明细</el-menu-item>
    </el-submenu>
  <el-menu-item index="3">用户管理</el-menu-item>
  <el-menu-item index="4"><a href="/login" target="_blank">评价管理</a></el-menu-item>
    <el-submenu index="5">
    <template slot="title">返款</template>
    <el-menu-item index="5-1">批量返款</el-menu-item>
    <el-menu-item index="5-2">自动返款</el-menu-item>
    <el-menu-item index="5-3">用户提现流水</el-menu-item>
    </el-submenu>
      <el-submenu index="6">
    <template slot="title">运营工具</template>
    <el-menu-item index="6-1">导流和补单计算</el-menu-item>
    <el-menu-item index="6-2">搜索数据监控</el-menu-item>
    </el-submenu>
  <el-menu-item index="7"><a href="/login" target="_blank">系统设置</a></el-menu-item>

</el-menu>
  </el-header>
  <el-container>
    <el-main>
    <router-view />
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {
  handleSelect(key, keyPath) {
    console.log(key, keyPath);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
.el-menu--popup {
  min-width: 120px;
}
</style>