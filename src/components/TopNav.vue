<template>
  <div class="topNav">
    <div class="store-name">欢迎您，***旗舰店</div>
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

</el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
// import AppIcon from './AppIcon.vue';
// import {PREFIX} from '@/store/modules/user/CONSTANTS';
// import px2px from '@/util/px2px';

@Component({
  // components: {
  //   AppIcon,
  // },
})
export default class TopNav extends Vue {
   private activeIndex: string = '1';
  private handleSelect(key, keyPath) {
    console.log(key, keyPath);
  }
  // @Prop({required: true})
  // private left!: string;
  // @Prop({required: true})
  // private right!: string;
  // private get iconSize() {
  //   return px2px(48);
  // }
  // // private get avatar() {
  //   // return this.$store.state[PREFIX].avatar;
  // // }
  // private clickLeft() {
  //   this.$emit('left');
  // }
  // private clickCenter() {
  //   this.$emit('center');
  // }
  // private clickRight() {
  //    this.$router.push({ name: 'me' });
  // }
}
</script>

<style lang="scss" scoped>
@import '../scss/theme.scss';

.topNav {
  width: 100%;
  padding:10px 0 40px;
  font-size: 24px;
  .store-name {
    text-align: center;
  }
}
</style>

