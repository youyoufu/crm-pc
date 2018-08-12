<template>
  <div>
    <TopNav />
    <div class="redpackage">
        <div class="sign-title">红包返现明细</div>
      <el-table :data="tableData.refund_list" border style="width: 100%;margin:0 auto">
        <el-table-column prop="id" label="返款记录ID" width="150">
        </el-table-column>
        <el-table-column prop="order_no" label="订单号" width="120">
        </el-table-column>
        <el-table-column prop="open_id" label="用户OPENID" width="120">
        </el-table-column>
        <el-table-column prop="phone" label="用户手机号" width="120">
        </el-table-column>
        <el-table-column prop="amount" label="订单金额" width="120">
        </el-table-column>
        <el-table-column prop="refund" label="返款金额" width="120">
        </el-table-column>
        <el-table-column prop="refund_time" label="返款时间" width="120">
        </el-table-column>
        <el-table-column label="红包状态" width="140">
          <template slot-scope="scope">
            <span v-if="scope.row.status===0">发送红包失败</span>
            <span v-else-if="scope.row.status===1">发送红包成功</span>
            <span v-else-if="scope.row.status===2">失败，订单已返款</span>
          </template>
        </el-table-column>

      </el-table>
      <el-pagination @current-change="setPage" background layout="pager" page-size="20" :total="pageCount">
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TopNav from "@/components/TopNav.vue";
import {
  submitMoney,
  getMoneyList,
  getMoneyPages,
  moneyList
} from "@/api/money";

@Component({
  components: {
    TopNav
  }
})
export default class RentrnMoney extends Vue {
  private orderStr: string = "";
  private tableData: moneyList = {
    success_num: "0",
    fail_num: "0",
    last_refund_num: "0",
    refund_list: []
  };
  private pageCount: string = "0";
  private curPage: number = 1;
  private bid: string = "";
  private setPage(idx: number) {
    if (idx !== this.curPage) {
      this.curPage = idx;
      this.getListData(idx.toString());
    }
  }
  private created() {
    this.getListData("1");
  }
  private getListData(page: string) {
    getMoneyList(this.bid, page)
      .then((res: any) => {
        this.tableData = res;
        getMoneyPages(this.bid)
          .then((total: any) => {
            this.pageCount = total;
          })
          .catch((err: { message: string }) => {
            this.$message.error(err.message);
          });
      })
      .catch((err: { message: string }) => {
        this.$message.error(err.message);
      });
  }
}
</script>
<style lang="scss" scoped>
@import "../scss/theme.scss";

.redpackage {
  width: 100%;
  text-align: center;
  margin: 10px auto;
  position: absolute;
  font-size: 12px;
  .sign-title {
    padding-bottom: 20px;
    font-size: 24px;
  }
  .tableimg {
    width: 60px;
    height: 60px;
  }
  .tips {
    font-size: 18px;
    line-height: 1.5;
    padding: 20px 0;
  }
}
@import "../scss/global.scss";
</style>