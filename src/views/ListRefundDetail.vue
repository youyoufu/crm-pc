<template>
  <div>
    <TopNav />
    <div class="listrefund-detail">
      <div class="title">挖宝详情列表</div>
  <el-table :data="tableData" border style="width: 100%;margin:0 auto">
        <el-table-column  prop="task_id" label="活动ID" width="80">
        </el-table-column>
        <el-table-column  prop="task_no" label="活动订单编号" width="160">
        </el-table-column>
        <el-table-column prop="account" label="淘宝账号" width="120">
        </el-table-column>
           <el-table-column  prop="title" label="活动标题" width="150">
        </el-table-column>
        <el-table-column  prop="bonus_point" label="积分" width="100">
        </el-table-column>
         <el-table-column label="方图" width="100">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <img class="tablebigimg"  style="max-width:500px"  :src="scope.row.square_url" />
              <div slot="reference" class="name-wrapper">
                <span size="medium">
                  <img class="tableimg" :src="scope.row.square_url" />
                </span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="长图" width="100">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <img class="tablebigimg"  style="max-width:500px"  :src="scope.row.long_url" />
              <div slot="reference" class="name-wrapper">
                <span size="medium">
                  <img class="tableimg" :src="scope.row.long_url" />
                </span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="keyword" label="关键字" width="100">
        </el-table-column>
         <el-table-column label="订单状态" width="100">
          <template slot-scope="scope">
            <span  v-if="scope.row.status===0">领取任务</span>
            <span  v-else-if="scope.row.status===1">挖宝成功</span>
            <span  v-else-if="scope.row.status===2">挖宝失败</span>

          </template>
        </el-table-column>
        <el-table-column prop="execute_time" label="执行时间" width="120">
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="180">
        </el-table-column>
      </el-table>
      <el-pagination @current-change="setPage" background layout="pager" page-size="20" :total="pageCount">
        <!-- prev, , next -->
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TopNav from "@/components/TopNav.vue";
import {
  RefundTaskOrderDetail,
  getRefundTaskOrderCount,
  RefundTaskOrderDetailData
} from "@/api/tasklist";

@Component({
  components: {
    TopNav
  }
})
export default class orderDetailList extends Vue {
  private tableData: Array<RefundTaskOrderDetailData> = [];
  private pageCount: string = "0";
  private curPage: number = 1;
  private setPage(idx: number) {
    if (idx !== this.curPage) {
      this.curPage = idx;
      this.getListData(idx.toString());
    }
  }
  private getListData(page: string) {
    RefundTaskOrderDetail(page)
      .then((res: any) => {
        this.tableData = res;
        getRefundTaskOrderCount()
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
    this.getListData("1");
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
@import "../scss/theme.scss";
.listrefund-detail {
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
@import "../scss/global.scss";
</style>