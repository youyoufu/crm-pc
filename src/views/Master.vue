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
    <div class="block">
      <p class="title">新增用户配置</p>

    </div>
    <div class="block">
      <p class="title">关闭商户</p>

    </div>
    <div class="block">
      <p class="title">删除测试账号</p>
      <p>手机号：
        <el-input v-model="mobile1" />

      </p>
      <p class="title">
        <el-button type="button" @click="clickBtn('del')">删除账号</el-button>
      </p>
      <p>删除账号资料，微信登录跟新用户一样</p>

    </div>
    <div class="block">
      <p class="title">重置冷却时间</p>
      <p>手机号：
        <el-input v-model="mobile2" />
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
      deleteUser(this.mobile1)
        .then(() => {
          this.$message.success("账号删除成功");
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    } else if (type === "reset") {
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
  width: 1200px;
  margin-top: 10px;
  font-size: 24px;
  .title {
    padding: 10px;
  }
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