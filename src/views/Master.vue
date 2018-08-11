<template>
  <div class="master">
      <div class="title">超级管理</div>
    <div class="block">
      <p class="title">系统大盘看板</p>
      <p>昨日商家总订单量：
        <span>0</span>
      </p>
      <p>昨日商家总放单量：
        <span>0</span>
      </p>
      <p>今日商家总放单量：
        <span>0</span>
      </p>
      <p>昨日新增用户量：
        <span>0</span>
      </p>
      <p>昨日新增绑定用户总量：
        <span>0</span>
      </p>
      <p>待返款订单总量：
        <span>0</span>
      </p>
      <p>昨日活动订单量前5商户：
        <span>0</span>
      </p>
    </div>
    <div class="block textinput">
      <p class="title">新增用户配置</p>
    <p><span>商家简称：</span>
        <el-input  v-model="mobile1" />
      </p>
          <p><span>公众号原始ID：</span>
        <el-input v-model="mobile1" />
      </p>
          <p><span>手机号：</span>
        <el-input v-model="mobile1" />
      </p>
     <p><span>密码：</span>
        <el-input  v-model="mobile1" />
      </p>
        <p><span>公众号appid：</span>
        <el-input  v-model="mobile1" />
      </p>
         <p><span>公众号AppSecret：</span>
        <el-input v-model="mobile1" />
      </p>
           <p class="title">
        <el-button type="button" @click="clickBtn('del')">新增或更新商户</el-button>
      </p>
      <p>运营注意：微信公众号授权域名www.niurouzhou.com</p>
    </div>
    <div class="block textinput">
      <p class="title">商户增加微信支付</p>
  <p>公众号原始ID：
        <el-input type="number"  v-model="mobile1" />
      </p>
        <p>微信支付商号：
        <el-input type="number"  v-model="mobile1" />
      </p>
        <p>微信支付Key:
        <el-input type="number"  v-model="mobile1" />
      </p>
        <p>证书上传：
        <el-input type="number"  v-model="mobile1" />
      </p>
         <p class="title">
        <el-button type="button" @click="clickBtn('del')">新增或更新商户微信支付</el-button>
      </p>
      <p>删除账号资料，微信登录跟新用户一样</p>
    </div>
    <div class="block height300">
      <p class="title">删除测试账号</p>
      <p>手机号：
        <el-input type="number"  v-model="mobile1" />
      </p>
      <p class="title">
        <el-button type="button" @click="clickBtn('del')">删除账号</el-button>
      </p>
      <p>删除账号资料，微信登录跟新用户一样</p>

    </div>
    <div class="block height300">
      <p class="title">重置冷却时间</p>
      <p>手机号：
        <el-input type="number"  v-model="mobile2" />
      </p>
      <p class="title">
        <el-button type="button" @click="clickBtn('reset')">重置</el-button>
      </p>
      <p>设置时间为10天外，可以重新接活动</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { resetTenDay, deleteUser } from "@/api/master";

@Component({
  components: {}
})
export default class Master extends Vue {
  private mobile1: string = "";
  private mobile2: string = "";
  private clickBtn(type: string) {
    if (type === "del") {
      if (this.mobile1.length !== 11) {
        this.$message.warning("请填写正确的手机号码");
        return;
      }
      deleteUser(this.mobile1)
        .then(() => {
          this.$message.success("账号删除成功");
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    } else if (type === "reset") {
      if (this.mobile2.length !== 11) {
        this.$message.warning("请填写正确的手机号码");
        return;
      }
      resetTenDay(this.mobile2)
        .then(() => {
          this.$message.success("账号已冻结");
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../scss/theme.scss";

.master {
  width: 1400px;
  margin-top: 10px;
  font-size: 24px;
  .title {
    padding: 10px;
  }

  .block {
    float: left;
    width: 360px;
    border: 1px solid #999;
    margin: 30px 30px 10px;
    padding: 10px;
    height: 420px;
    p {
      text-align: left;
      font-size: 14px;
      line-height: 3;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      padding: 10px 0;
    }
    .el-input {
      width: 220px;
    }
  }
  .textinput {
    .el-input {
      float: right;
    }
  }
  .el-input__inner {
    height: 25px;
    line-height: 25px;
  }
  .height300{
    height: 300px;
  }
}

@import "../scss/global.scss";
</style>