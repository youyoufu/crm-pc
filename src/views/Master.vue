<template>
  <div class="master">
   <div class="block">
  <p class="title">系统大盘看板</p>
<p>昨日商家总订单量：<span>111</span></p>
<p>昨日商家总放单量：<span>111</span></p>
<p>今日商家总放单量：<span>111</span></p>
<p>昨日新增用户量：<span>111</span></p>
<p>昨日新增绑定用户总量：<span>111</span></p>
<p>待返款订单总量：<span>111</span></p>
<p>昨日活动订单量前5商户：<span>111</span></p>
   </div>  <div class="block">
      <p class="title">新增用户配置</p>


   </div>  <div class="block">
       <p class="title">关闭商户</p>

   </div>  <div class="block">
        <p class="title">删除测试账号</p>
<p>手机号：
        <el-input v-model="mobile1" />

</p>    
      <p class="title">
        <el-button type="primary" @click="clickBtn('del')">删除账号</el-button>
      </p>
      <p>删除账号资料，微信登录跟新用户一样</p>

   </div>
   <div class="block">
        <p class="title">重置冷却时间</p>
<p>手机号：
        <el-input v-model="mobile2" />

</p>    
      <p class="title">
        <el-button type="primary" @click="clickBtn('reset')">重置</el-button>
      </p>
      <p>设置时间为10天外，可以重新接活动</p>

   </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Master extends Vue {
  private mobile1: string = "";
  private mobile2: string = "";
  private clickBtn(type: string) {
      console.log(111);
  }
}
</script>
<style lang="scss" scoped>
@import "../scss/theme.scss";

.master {
  .block {
    float: left;
    width: 300px;
    border: 1px solid #999;
    margin: 30px 30px 10px;
    padding: 10px;
    height: 220px;
    p {
      text-align: left;
      font-size: 14px;
      line-height: 1.5;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      padding: 10px 0;
    }
    .el-input {
      width: 180px;
      padding: 20px 0;
    }
  }
}

@import "../scss/global.scss";
</style>