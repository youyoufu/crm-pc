<template>
  <div class="info" >
     <div class="tips1">每天最多做10个挖宝任务，每小时最多3个。挖一个宝奖励2毛钱+1积分。30个积分可兑换一次免单任务。</div>
    <div class="task-list mtop50">
  <div class="task">
    <img class="task-img" src="../assets/imgs/demo.png"  />
 <span class="btn-gray">挖这个宝</span>
  </div>
  <div class="task"> 
    <img class="task-img" src="../assets/imgs/demo.png"  />
    <span class="btn-gray">挖这个宝</span>
    </div>
    </div>
    </div> 
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UploadImg from '@/components/UploadImg.vue';

@Component({
  components: { UploadImg }
})
export default class TaskFree extends Vue {
  private taskName = '北极绒女士';
  private created() {
    // document.title="任务列表"
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/theme.scss';
@import '../scss/_px2px.scss';
.info {
  font-size: 28px;
  padding: 20px 20px;

  .tips {
    margin: 10px auto;
    line-height: 38px;
    margin: 0 -20px;
    text-align: center;
  }
  .task-list {
    display: flex;
    text-align: center;
    .task-img {
      margin: 10px 40px;
      width: 250px;
      height: 100px;
    }
  }
}
</style>