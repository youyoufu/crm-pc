<template>
  <div>
    <TopNav />
    <div class="listfree-detail">
      <div class="title">免单订单明细</div>
      <el-table :data="tableData" border style="width: 100%;margin:0 auto">
        <el-table-column prop="id" label="活动ID" width="100">
        </el-table-column>
        <el-table-column prop="task_no" label="活动编号" width="180">
        </el-table-column>
        <el-table-column prop="account" label="淘宝账号" width="100">
        </el-table-column>
        <el-table-column prop="order_no" label="订单编号" width="140">
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="180">
        </el-table-column>
        <el-table-column prop="amount" label="订单金额" width="100">
        </el-table-column>
        <el-table-column prop="refund" label="返款金额" width="100">
        </el-table-column>
        <el-table-column prop="extra_gift" label="额外奖励" width="100">
        </el-table-column>
        <el-table-column prop="title" label="活动标题" width="100">
        </el-table-column>
        <el-table-column prop="gift" label="活动赠品" width="100">
        </el-table-column>
        <el-table-column label="账号验证1" width="100">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <img class="tablebigimg" style="max-width:500px" :src="scope.row.check_first_url" />
              <div slot="reference" class="name-wrapper">
                <span size="medium">
                  <img class="tableimg" :src="scope.row.check_first_url" />
                </span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="账号验证2" width="100">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <img class="tablebigimg" style="max-width:500px" :src="scope.row.check_second_url" />
              <div slot="reference" class="name-wrapper">
                <span size="medium">
                  <img class="tableimg" :src="scope.row.check_second_url" />
                </span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="订单截图" width="125">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <img class="tablebigimg" style="max-width:500px" :src="scope.row.order_pic_url" />
              <div slot="reference" class="name-wrapper">
                <span size="medium">
                  <img class="tableimg" :src="scope.row.order_pic_url" />
                </span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="用户返款微信码" width="130">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <img class="tablebigimg" style="max-width:500px" :src="scope.row.wechat_code_url" />
              <div slot="reference" class="name-wrapper">
                <span size="medium">
                  <img class="tableimg" :src="scope.row.wechat_code_url" />
                </span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="订单状态" width="140">
          <template slot-scope="scope">
            <span v-if="scope.row.status===0">领取任务</span>
            <span v-else-if="scope.row.status===1">淘口令验证成功</span>
            <span v-else-if="scope.row.status===2">提交订单号</span>
            <span v-else-if="scope.row.status===3">审核失败</span>
            <span v-else-if="scope.row.status===4">审核成功</span>
            <span v-else-if="scope.row.status===5">已返款</span>
            <span v-else-if="scope.row.status===9">关闭</span>
          </template>
        </el-table-column>
        <el-table-column label="返款状态" width="100">
          <template slot-scope="scope">
            <span v-if="scope.row.status===5">已返款</span>
            <span v-else>未返款</span>
          </template>
        </el-table-column>

      </el-table>
      <el-pagination @current-change="setPage" background layout="pager" page-size="20" :total="pageCount">
        <!-- prev, , next -->
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TopNav from '@/components/TopNav.vue';
import { getFreeTaskOrderCount, TaskOrderDetail, TaskOrderDetailData } from '@/api/tasklist';

@Component({
  components: {
    TopNav
  }
})
export default class orderDetailList extends Vue {
  private tableData: Array<TaskOrderDetailData> = [];
  private pageCount: string = '0';
  private curPage: number = 1;
  private setPage(idx: number) {
    if (idx !== this.curPage) {
      this.curPage = idx;
      this.getListData(idx.toString());
    }
  }
  private getListData(page: string) {
    TaskOrderDetail(page)
      .then((res: any) => {
        this.tableData = res;
        getFreeTaskOrderCount()
          .then((total: any) => {
            this.pageCount = total;
          })
          .catch((err: { message: string }) => {});
      })
      .catch((err: { message: string }) => {
        this.$message.error(err.message);
      });
  }
  private created() {
    this.getListData('1');
  }
  // private handleClick(row: any, type: string) {
  //   console.log(1111, row);
  //   if (type === 'edit') {
  //     window.location.href = '/publicfree?freeid=' + row.id;
  //   } else if (type === 'copy') {
  //     window.location.href = '/publicfree?freeid=' + row.id + '&isadd=1';
  //   }
  // }
}
</script>
<style lang="scss" scoped>
@import '../scss/theme.scss';
.listfree-detail {
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