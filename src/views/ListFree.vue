<template>
  <div>
    <TopNav />
    <div class="listfree">
      <div class="title">已发布免单列表</div>
      <el-table :data="tableData" border style="width: 100%;margin:0 auto">
            <el-table-column prop="id" label="活动ID" width="100">
        </el-table-column> <el-table-column prop="title" label="活动标题" width="150">
        </el-table-column>
        <el-table-column prop="amount" label="订单总金额" width="120">
        </el-table-column>
        <el-table-column prop="refund_rate" label="返点比例(%)" width="120">
        </el-table-column>
         <el-table-column prop="extra_gift" label="额外奖励" width="100">
        </el-table-column>
           <el-table-column prop="refund" label="应返现金额" width="100">
        </el-table-column>
              <el-table-column prop="total_count" label="活动总量" width="120">
        </el-table-column>
          <el-table-column prop="receive_count" label="已领活动量" width="100">
        </el-table-column>
          <el-table-column prop="finish_count" label="用户已完成量" width="120">
        </el-table-column>
        <el-table-column label="订单截图参考" width="120">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" width="200px">
              <img class="tablebigimg" style="max-width:500px" :src="scope.row.url" />
              <div slot="reference" class="name-wrapper">
                <span size="medium">
                  <img class="tableimg" :src="scope.row.url" />
                </span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="execute_time" label="执行时间" width="120">
        </el-table-column>
        <el-table-column prop="gift" label="活动赠品" width="120">
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row,'copy')" type="text">复制</el-button>
            <el-button @click="handleClick(scope.row,'edit')" type="text">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @current-change="setPage" background layout="pager" page-size="20" :total="pageCount">
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TopNav from '@/components/TopNav.vue';
import { getFreeList, freeListData, getPageTotal } from '@/api/tasklist';

@Component({
  components: {
    TopNav
  }
})
export default class orderList extends Vue {
  private tableData: Array<freeListData> = [];
  private pageCount: string = '0';
  private curPage: number = 1;
  private setPage(idx: number) {
    if (idx !== this.curPage) {
      this.curPage = idx;
      this.getListData(idx.toString());
    }
  }
  private getListData(page: string) {
    getFreeList(page)
      .then((res: any) => {
        this.tableData = res;
        getPageTotal('free_task')
          .then((total: any) => {
            this.pageCount = total;
          })
          .catch((err: { message: string }) => {});
      })
      .catch((err: { message: string }) => {
        this.$message.warning(err.message);
      });
  }
  private created() {
    this.getListData('1');
  }
  private handleClick(row: any, type: string) {
    if (type === 'edit') {
      window.location.href = '/publicfree?freeid=' + row.id;
    } else if (type === 'copy') {
      window.location.href = '/publicfree?freeid=' + row.id + '&isadd=1';
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/theme.scss';
.listfree {
  width: 100%;
  text-align: center;
  margin: 10px auto;
  position: absolute;
  font-size: 12px;
  .title {
    font-size: 24px;
    padding: 10px;
  }
  .tableimg {
    width: 60px;
    height: 60px;
  }

}
@import '../scss/global.scss';
</style>