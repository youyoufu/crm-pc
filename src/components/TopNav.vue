<template>
  <div class="topNav">
    <div class="store-name">hello,店主</div>
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">挖宝活动</template>
            <el-menu-item index="1-1">
              <a href="/publicrefund">发布新挖宝活动</a>
            </el-menu-item>
            <el-menu-item index="1-2">
              <a  href="/listrefund">已发布的挖宝活动</a>
            </el-menu-item>
            <el-menu-item index="1-3">
              <a  href="/listrefunddetail">挖宝活动订单明细</a>
              </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">免单返现活动</template>
            <el-menu-item index="2-1">
              <a href="/publicfree">发布新活动</a>
            </el-menu-item>
            <el-menu-item index="2-2">
              <a href="/listfree">已发布活动</a>
            </el-menu-item>
            <el-menu-item index="2-3"> <a href="/home">待处理活动订单</a></el-menu-item>
            <el-menu-item index="2-4">
              <a  href="/listfreedetail">活动订单明细</a>
              </el-menu-item>
          </el-submenu>
               <el-submenu index="3">
            <template slot="title">
              用户管理
            </template>
            <el-menu-item index="3-1">
              用户数据大盘
            </el-menu-item>
            <el-menu-item index="3-2">
              <a href="/user">用户查询和管理</a>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">返现管理</template>
            <el-menu-item index="5-1"> <a  href="/returnmoney">批量返现</a></el-menu-item>
            <el-menu-item index="5-2"><a  href="/tips">全自动返现</a></el-menu-item>
            <el-menu-item index="5-3">
              <a  href="/redpackage">返现明细</a>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">数据化运营</template>
            <el-menu-item index="6-1">实时数据</el-menu-item>
            <el-menu-item index="6-2">导流和补单计算</el-menu-item>
          </el-submenu>
          <el-menu-item index="7">
            系统设置
          </el-menu-item>

        </el-menu>
      </el-header>

    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
// import AppIcon from './AppIcon.vue';
// import {PREFIX} from '@/store/modules/user/CONSTANTS';
// import px2px from '@/util/px2px';

@Component({
  // components: {
  //   AppIcon,
  // },
})
export default class TopNav extends Vue {
  private activeIndex: string = "1";
  private handleSelect(key: string, keyPath: string) {
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
@import "../scss/theme.scss";
a {
  color: #fff;
  text-decoration: none;
}
.topNav {
  border-bottom: 1px solid #ebebeb;
  height: 90px;
  width: 100%;
  padding: 10px 0 40px;
  font-size: 24px;
  .el-header {
    padding: 0;
  }

  ul.el-menu--horizontal {
    border: none;
    font-size: 32px;
    font-weight: bold;
  }
  div.el-menu--horizontal {
    top: 135px;
  }
  .store-name {
    text-align: center;
    margin-bottom: 10px;
    padding: 20px;
  }
}
</style>

