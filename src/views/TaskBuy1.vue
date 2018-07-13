<template>
  <div class="info" >
    <div class="base mtop50">
    <div class="left">
      任务编号：<span class="red">**</span>
    </div>
    <div class="right">
      任务赠品：<span class="red">**</span>
    </div>
    </div>
    <div class="bgcolor tips big">完成账户验证后进入任务介绍</div>
     <div class="tips1">复制下面淘口令，打开手机淘宝，按说明截图</div>
   <div class="copy-block">
    <input v-model="otherid" readonly value="taskName"/>
    <div class="btn-hollow copy"   v-clipboard:copy="taskName"
        v-clipboard:success="onCopy"><span class="hollow">立刻点击复制</span></div>
    </div>
<div class="upload-block">
  <div>
    <UploadImg text="上传截图1" />
    <UploadImg text="上传截图1" />
  </div>
  <div class="tips2">
    <p>提示-01:请直接截图，不要下拉再截图</p>
    <p>提示-02:两张图必须都上传</p>
    <p>提示-03:如果上传后不进入下一步，请耐心等待人工复审，或者3小时候咨询微信客服</p>
    <p>提示-04:验证不过会自动关闭任务，明天再试，持续不过就需更换淘宝账户</p>
    </div>
</div>
    <div class="bottom-tips ">验证通过，将自动进入任务说明页面</div>
    </div> 
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UploadImg from '@/components/UploadImg.vue';
import Toast from '../plugins/Toast/Toast.vue';

@Component({
  components: { UploadImg }
})
export default class TaskFree extends Vue {
  private taskName: string = '北极绒女士';

  private created() {}
  private onCopy() {
    this.$toast('复制成功');
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/theme.scss';
@import '../scss/_px2px.scss';
.info {
  font-size: 28px;
  padding: 0 20px;
  .upload-block {
    padding: 50px;
  }
  .base {
    position: relative;
    height: 80px;
    .left {
      display: inline-block;
      position: absolute;
      left: 0;
    }
    .right {
      display: inline-block;
      position: absolute;
      right: 0;
    }
  }
  .tips2 {
    line-height: 1.5;
  }
  .tips {
    margin: 10px auto;
    line-height: 38px;
    margin: 0 -20px;
    text-align: center;
  }
  .tips1 {
    margin: 10px auto;
    line-height: 38px;
  }
  .big {
    font-size: 34px;
  }
  .copy-block {
    height: 100px;
    position: relative;
    input {
      position: absolute;
      left: 210px;
    }
    .copy {
      top: 5px;
      position: absolute;
      left: 0;
    }
  }

  .upload {
    margin-left: 60px;
  }
}
</style>