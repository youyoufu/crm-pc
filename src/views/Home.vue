<template>
  <div>
    <TopNav />
    <div class="home">
      <div class="title">客户订单列表</div>
      <el-table :data="tableData" border style="width: 1265px;margin:0 auto">
        <el-table-column fixed prop="task_no" label="任务ID" width="150">
        </el-table-column>
        <el-table-column prop="account" label="用户淘宝账号" width="130">
        </el-table-column>
        <el-table-column prop="order_no" label="订单编号" width="130">
        </el-table-column>
        <el-table-column label="账号验证截图1" width="130">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <img class="tablebigimg" :src="scope.row.check_first_url" />
              <div slot="reference" class="name-wrapper">
                <span size="medium">
                  <img class="tableimg" :src="scope.row.check_first_url" />
                </span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="账号验证截图2" width="130">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <img class="tablebigimg" :src="scope.row.check_second_url" />
              <div slot="reference" class="name-wrapper">
                <span size="medium">
                  <img class="tableimg" :src="scope.row.check_second_url" />
                </span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="订单审批" width="210">
          <template slot-scope="scope">
            <div v-if="scope.row.status!=='3'">
              <el-button @click="handleClick(scope.row.id,'4',scope.$index)" size="small">审批通过</el-button>
              <el-button @click="handleClick(scope.row.id,'3',scope.$index)" size="small">审批不过</el-button>
            </div>
            <span v-else>已通过</span>
          </template>
        </el-table-column>
        <el-table-column label="订单截图" width="125">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <img class="tablebigimg" :src="scope.row.order_pic_url" />
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
              <img class="tablebigimg" :src="scope.row.wechat_code_url" />
              <div slot="reference" class="name-wrapper">
                <span size="medium">
                  <img class="tableimg" :src="scope.row.wechat_code_url" />
                </span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="返款状态" width="130">
          <template slot-scope="scope">
            <el-button v-if="scope.row.status!=='5'" @click="handleClick(scope.row.id,'5',scope.$index)" size="small">手动已返款确认</el-button>
            <span v-else>未返款</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @current-change="setPage" background layout="pager" :total="pageCount">
        <!-- prev, , next -->
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TopNav from "@/components/TopNav.vue";
import {
  getOrderList,
  orderListData,
  getPageTotal,
  setAuditFreeOrder
} from "@/api/tasklist";

@Component({
  components: {
    TopNav
  }
})
export default class orderList extends Vue {
  private tableData: Array<orderListData> = [];
  private pageCount: string = "0";
  private curPage: number = 1;
  private ss: boolean = false;
  private setPage(idx: number) {
    if (idx !== this.curPage) {
      this.curPage = idx;
      this.getListData(idx.toString());
    }
  }

  private getListData(page: string) {
    getOrderList(page)
      .then((res: any) => {
        this.tableData = res;
        getPageTotal("free_task_order")
          .then((total: any) => {
            this.pageCount = total;
          })
          .catch((err: { message: string }) => {});
      })
      .catch((err: { message: string }) => {
        this.$message.error(err.message);
        this.tableData = [
          {
            id: "111",
            task_no: "111",
            account: "222",
            order_no: "333",
            check_first_url:
              "https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg",
            check_second_url:
              "https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg",
            status: "3",
            order_pic_url:
              "https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg",
            wechat_code_url:
              "https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg",
            is_refund: "0"
          },
          {
            id: "222",
            task_no: "aaa",
            account: "vvv",
            order_no: "ddd",
            check_first_url:
              "https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg",
            check_second_url:
              "https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg",
            status: "5",
            order_pic_url:
              "https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg",
            wechat_code_url:
              "https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg",
            is_refund: "1"
          }
        ];
      });
  }
  private created() {
    this.getListData("1");
  }
  private handleClick(id: string, type: string, idx: number) {
    let text = "";
    if (type === "4") {
      text = "通过该订单吗？";
    } else if (type === "3") {
      text = "否决该订单吗？";
    } else if (type === "5") {
      text = "手动返款吗？";
    }
    this.$confirm("你确定要" + text, "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        setAuditFreeOrder(id, type)
          .then((res: any) => {
            this.$message({
              type: "success",
              message: "操作成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "操作失败"
            });
          });
      })
      .catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '取消操作'
        // });
      });
  }
}
</script>
<style lang="scss" scoped>
@import "../scss/theme.scss";
.home {
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
  .tablebigimg {
    width: 50%;
    max-width: 500px;
  }
}
@import "../scss/global.scss";
</style>