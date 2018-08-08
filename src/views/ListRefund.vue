<template>
  <div>
    <TopNav />
    <div class="listrefund">
      <div class="title">已发布挖宝列表</div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="title" label="活动标题" width="180">
        </el-table-column>   
        <el-table-column fixed prop="id" label="活动ID" width="150">
        </el-table-column>
        <el-table-column prop="bonus_point" label="积分" width="120">
        </el-table-column>
        <el-table-column prop="content" label="活动要求" width="120">
        </el-table-column>
        <el-table-column prop="execute_time" label="执行时间" width="120">
        </el-table-column>
        <el-table-column prop="total" label="活动总数" width="120">
        </el-table-column>
        <el-table-column label="活动主图" width="130">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <img class="tablebigimg"  style="max-width:500px"  :src="scope.row.url" />
              <div slot="reference" class="name-wrapper">
                <span size="medium">
                  <img class="tableimg" :src="scope.row.url" />
                </span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row,'copy')" type="text">复制</el-button>
            <el-button @click="handleClick(scope.row,'edit')" type="text">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    <el-pagination @current-change="setPage" background layout="pager" page-size="20" :total="pageCount">
      </el-pagination>  </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TopNav from "@/components/TopNav.vue";

import { refundOrderList, getPageTotal } from "@/api/tasklist";
@Component({
  components: {
    TopNav
  }
})
export default class RefundList extends Vue {
  private tableData = [
    {
      id: "",
      bonus_point: "",
      content: "",
      execute_time: "",
      total: "",
      url: "",
      title:''
    }
  ];
  private pageCount: string = "0";
  private curPage: number = 1;
  private setPage(idx: number) {
    if (idx !== this.curPage) {
      this.curPage = idx;
      this.getListData(idx.toString());
    }
  }
  private getListData(page: string) {
    refundOrderList(page)
      .then((res: any) => {
        this.tableData = res;
        getPageTotal("refund_task")
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
  private handleClick(row: any, type: string) {
    console.log(1111, row);
    if (type === "edit") {
      window.location.href = "/publicrefund?freeid=" + row.id;
    } else if (type === "copy") {
      window.location.href = "/publicrefund?freeid=" + row.id + "&isadd=1";
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../scss/theme.scss";
.listrefund {
  margin-top: 10px;
  font-size: 24px;
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