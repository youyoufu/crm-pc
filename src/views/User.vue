<template>
  <div>
    <TopNav />
    <div class="user">
      <div class="title">用户列表</div>
  <el-table :data="tableData" border style="width: 1000px;margin:0 auto">
        <el-table-column prop="account" label="淘宝账号" width="100">
        </el-table-column>
           <el-table-column  prop="name" label="昵称" width="100">
        </el-table-column>
              <el-table-column prop="phone" label="手机号" width="100">
        </el-table-column>
           <el-table-column  prop="free_task_time" label="免单任务次数" width="120">
        </el-table-column>
             <el-table-column  prop="refund_task_time" label="挖宝次数" width="100">
        </el-table-column>
        <el-table-column  prop="bonus_point" label="积分" width="100">
        </el-table-column>
        <el-table-column :prop="status==='1'?'有效':'无效'" label="账号状态" width="100">
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="100">
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
  getUserList,
  getUserCount,
  UserCntData
} from "@/api/user";

@Component({
  components: {
    TopNav
  }
})
export default class orderDetailList extends Vue {
  private tableData: Array<UserCntData> = [];
  private pageCount: string = "0";
  private curPage: number = 1;
  private setPage(idx: number) {
    if (idx !== this.curPage) {
      this.curPage = idx;
      this.getListData(idx.toString());
    }
  }
  private getListData(page: string) {
    getUserList(page)
      .then((res: any) => {
        this.tableData = res;
        getUserCount()
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
.user {
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