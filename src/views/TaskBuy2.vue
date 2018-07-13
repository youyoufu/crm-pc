<template>
  <div class="info" >
    <div class="my">
    <div class="base mtop50">
    <div class="left">
      任务编号：<span class="red">**</span>
    </div>
    <div class="right">
      任务赠品：<span class="red">**</span>
    </div>
    </div>
    <div class="bgcolor tips big">已完成验证，下面是任务介绍</div>
     <div class="tips1">任务简短说明：所有任务都是组合任务，就是要一起拍2个产品，搜索关键词，找到产品，收藏宝贝，并放入购物车，拍下后不要付款，复制订单号进行提交</div>

   <div class="copy-block">
    <input v-model="otherid" readonly value="taskName"/>
    <div class="btn-hollow copy"  v-clipboard:copy="taskName"
        v-clipboard:success="onCopy"><span class="hollow">点击复制</span></div>
    </div>
     <div class="tips1">复制关键词后，打开手机淘宝搜索关键词，找到下图宝贝，关注宝贝，并将****加入购物车</div>
   <img class="longGoodimg" src="../assets/imgs/demo.png"  />
    <div class="bgcolor mtop50 tips big">参照下图，核对订单产品和订单金额</div>
   <img class="longGoodimg mtop50" src="../assets/imgs/demo.png"  />
    <div class="bgcolor mtop50 tips big">确定后，留言*****，提交订单，不要付款</div>
     <div class="tips1">复制订单号，在下面粘贴订单号</div>
   <div class="textcenter">
 <div>   <input value="" placeholder="订单编号"/>
    </div> 
    <div class="btn ">提交订单号</div></div>
    </div> 
    <div class="bottom-tips">提交订单号后，进入自我校验任务</div>
    </div> 
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class TaskFree extends Vue {
  private taskName = '北极绒女士';
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
  textarea {
    border: 1px solid #999;
    margin-top: 20px;
    width: 710px;
    height: 100px;
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
  .tips {
    margin: 10px auto;
    line-height: 38px;
    margin: 0 -20px;
    text-align: center;
  }
  .tips1 {
    margin: 10px auto;
    line-height: 38px;
    color: #333;
    font-size: 24px;
  }
  .big {
    font-size: 34px;
  }
  .copy-block {
    height: 100px;
    position: relative;
    input {
      position: absolute;
      left: 160px;
    }
    .copy {
      top: 5px;
      position: absolute;
      left: 0;
    }
  }
  .mtop50 {
    margin-top: 50px;
  }
  .red {
    color: brown;
    font-weight: bold;
  }
  .bottom {
    text-align: center;
    font-size: 32px;
    position: absolute;
    left: 0;
    right: 0;
    color: #999;
    background-color: #f4f4f8;
    height: 56px;
    padding-top: 20px;
  }
}
</style>