<template>
  <div class="login" >
    <div class="tips">先点击解绑账号，再绑定新的账号</div>
    <div>
      <span class="btn mright40">解绑淘宝账户</span>
      <span class="btn">解绑京东账户</span>
    </div>
    <div class="tips">上传账户截图，绑定新账号</div>
    <div class="tips-white">进入手机淘宝，我的淘宝->设置，进行截图</div>
    <div class="tips-white">进入手机京东， 我 的 -> 设 置 ， 进行截图</div>
    <div class="demo">
      <span>示例：</span><img src="../assets/imgs/demo.png"  />
    </div>
    <div><span class="btn longbtn">上传账户截图</span></div>
    <div class="tips-white">自动识别账户：</div>
    <div class="mtop50"><span class="btn longbtn">点击绑定新账户</span></div>
    <div class="tips-white bigger">绑定结果</div>
    </div> 
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UploadImg from '@/components/UploadImg.vue';
@Component({
  components: {
    UploadImg
  }
})
export default class BindUser extends Vue {
  private created() {}
}
</script>
<style lang="scss" scoped>
@import '../scss/theme.scss';
@import '../scss/_px2px.scss';
.login {
  font-size: 28px;
  margin: 40px auto;
  text-align: center;
  .tips {
    font-size: 34px;
    font-weight: bold;
    line-height: 44px;
    padding-bottom: 20px;
  }
  .tips-white {
    margin: 10px auto;
    line-height: 38px;
  }
  .btn {
    color: #fff;
    span {
      display: inline-block;
      line-height: 34px;
      background: $themeMain;
      border-radius: 4px;
      padding: 10px 15px;
      margin: 20px;
    }
  }
  .demo {
    margin-top: 50px;
    position: relative;
    span {
      position: absolute;
      top: 50%;
      left: 100px;
    }
    img {
      width: 450px;
      height: 350px;
      margin-left: 50px;
    }
  }
  .longbtn {
    width: 400px;
  }

  .bigger {
    font-size: 34px;
  }
}
</style>