<template>
  <div class="info" >
     <div class="tips1">确认收货后，系统返款给你，就是完成任务啦，系统多奖励您一次免单任务，请从下面任务中挑选一个，当日完成。</div>
    <div class="task-list mtop50">
  <div class="task">
    <img class="task-img" src="../assets/imgs/demo.png"  />
 <span class="btn-gray">立即领取</span>
  </div>
  <div class="task"> 
    <img class="task-img" src="../assets/imgs/demo.png"  />
    <span class="btn-gray">立即领取</span>
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