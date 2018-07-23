<template>
  <div>
    <TopNav />
    <div class="listrefund">
      <el-table :data="tableData" border style="width: 1200px">
        <el-table-column fixed prop="id" label="任务ID" width="150">
        </el-table-column>
        <el-table-column prop="bonus_point" label="积分" width="120">
        </el-table-column>
        <el-table-column prop="content" label="任务要求" width="120">
        </el-table-column>
        <el-table-column prop="execute_time" label="执行时间" width="120">
        </el-table-column>
        <el-table-column prop="total" label="任务总数" width="120">
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TopNav from '@/components/TopNav.vue';

import { refundOrderPublic } from '@/api/tasklist';
@Component({
  components: {
    TopNav
  }
})
export default class RefundList extends Vue {
  private tableData = [
    {
      id: 'id',
      bonus_point: '积分',
      content: '要求',
      execute_time: '执行时间',
      total: '任务总数'
    }
  ];
  private created() {
    refundOrderPublic()
      .then((res: any) => {
        this.tableData = res.list;
      })
      .catch((err: { message: string }) => {
        this.$message.error(err.message);
      });
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/theme.scss';
.listrefund {
  margin-top: 10px;
  font-size: 24px;
  .tableimg {
    width: 40px;
    height: 40px;
  }
}
@import '../scss/global.scss';

</style>