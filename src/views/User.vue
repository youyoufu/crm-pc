<template>
  <div class="user">
    <div class="my">
      <div class="tips">Hello,*****</div>
      <div class="text mtop50">
        免单任务：
        <span class="red">**</span>
        <span class="mright40">次</span>
        挖宝任务：
        <span class="red">**</span>
        <span class="mright40">次</span>
        积分：
        <span class="red">**</span>
      </div>
      <p class="text mtop50">
        您绑定的淘宝账户为：
        <span class="red">******</span>， 京东账户为：
        <span class="red">******</span>， 手机号为：
        <span class="red">******</span>，做任务时，请注意使用对应的淘宝京东账户。
      </p>
      <p class="text mtop50">
        您的邀请码为：
        <span class="red">******</span>，
        <span>点击复制邀请链接</span>
      </p>
    </div>
    <div class="tips big">返还提现记录</div>
    <div class="my">
      <div class="record">
        <span class="time">2018-07-09 11:11:11</span>
        <span class="money">提现：66.66</span>
      </div>
      <div class="record">
        <span class="time">2018-07-09 11:11:11</span>
        <span class="money">提现：66.66</span>
      </div>
      <div class="record">
        <span class="time">2018-07-09 11:11:11</span>
        <span class="money">提现：66.66</span>
      </div>
      <div class="record">
        <span class="time">2018-07-09 11:11:11</span>
        <span class="money">提现：66.66</span>
      </div>
    </div>
    <div class="btn">
      <span>更换手机号，京东和淘宝账户</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import UploadImg from '@/components/UploadImg.vue';
@Component({
  components: {
    // UploadImg
  }
})
export default class User extends Vue {
  private created() {}
}
</script>
<style lang="scss" scoped>
@import '../scss/theme.scss';
.user {
  font-size: 28px;
  .tips {
    text-align: center;
    margin: 10px auto;
    line-height: 38px;
  }
  .big {
    font-size: 34px;
  }
  .my {
    border-radius: 8px;
    background: rgba(204, 204, 204, 0.1);
    padding: 20px;
    margin: 30px;
  }
  p {
    line-height: 40px;
  }
  .record {
    height: 70px;
    position: relative;
    .time {
      position: absolute;
      left: 20px;
    }
    .money {
      position: absolute;
      right: 20px;
    }
  }
  .btn {
    position: absolute;
    bottom: 20px;
    left: 200px;
  }
}
@import '../scss/global.scss';

</style>