<template>
  <div>
    <TopNav />
    <div class="home">
      <div class="title">待处理免单返现订单</div>
      <el-form :model="freeForm" ref="freeForm" :inline="true">
        <div class="first-line">
          <el-form-item :prop="task_id" label="活动ID:">
            <el-input v-model="task_id" style="width: 160px"></el-input>
          </el-form-item>
          <el-form-item :prop="order_no" label="平台订单号:">
            <el-input v-model="order_no" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item :prop="phone" label="手机号:">
            <el-input v-model="phone" style="width: 160px"></el-input>
          </el-form-item>
          <el-form-item :prop="account" label="淘宝账号:">
            <el-input v-model="account" style="width: 200px"></el-input>
          </el-form-item>
          <el-button type="button" @click="searchFun()">搜索</el-button>
        </div>
      </el-form>
      <el-table :data="tableData" border style="width: 100%;margin:0 auto">
        <el-table-column prop="task_id" label="活动ID" width="100">
        </el-table-column>
        <el-table-column prop="task_no" label="活动订单编号" width="180">
        </el-table-column>
        <el-table-column prop="order_no" label="平台订单编号" width="150">
        </el-table-column>
        <el-table-column prop="account" label="淘宝账号" width="130">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="120">
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="180">
        </el-table-column>
        <el-table-column prop="amount" label="订单金额" width="100">
        </el-table-column>
        <el-table-column prop="extra_gift" label="额外奖励" width="100">
        </el-table-column>
        <el-table-column prop="refund" label="应返款金额" width="100">
        </el-table-column>
        <el-table-column prop="gift" label="活动赠品" width="100">
        </el-table-column>
        <el-table-column label="账号验证截图1" width="130">
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
        <el-table-column label="账号验证截图2" width="130">
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
        <el-table-column label="订单审批" width="170">
          <template slot-scope="scope">
            <div v-if="scope.row.status===2">
              <el-button @click="handleClick(scope.row.id,'4',scope.$index)" size="small">通过</el-button>
              <el-button @click="handleClick(scope.row.id,'3',scope.$index)" size="small">不通过</el-button>
            </div>
            <span v-if="scope.row.status===4">已通过</span>
            <span v-else-if="scope.row.status===3">不通过</span>

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
        <el-table-column label="返款状态" width="130">
          <template slot-scope="scope">
            <span v-if="scope.row.status===5">已返款</span>
            <el-button v-else-if="scope.row.status!==5" @click="handleClick(scope.row.id,'5',scope.$index)" size="small">已返款确认</el-button>
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
import { getOrderList, orderListData, getPageTotal, setAuditFreeOrder } from '@/api/tasklist';

@Component({
  components: {
    TopNav
  }
})
export default class orderList extends Vue {
  private tableData: Array<orderListData> = [];
  private pageCount: string = '0';
  private curPage: number = 1;
  private order_no: string = '';
  private phone: string = '';
  private account: string = '';
  private task_id: string = '';
  private searchFun() {
    this.getListData(this.curPage);
  }
  private setPage(idx: number) {
    if (idx !== this.curPage) {
      this.curPage = idx;
      this.getListData(idx);
    }
  }
  private getListData(page: number) {
    getOrderList(page.toString(),this.task_id,this.order_no,this.phone,this.account)
      .then((res: any) => {
        this.tableData = res;
        getPageTotal('free_task_order')
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
    this.getListData(1);
  }
  private handleClick(id: string, type: string, idx: number) {
    let text = '';

    setAuditFreeOrder(id, type)
      .then((res: any) => {
        this.$message({
          type: 'success',
          message: '操作成功!'
        });
        this.getListData(this.curPage);
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '操作失败'
        });
      });
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/theme.scss';
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
  .first-line{
    padding-top: 10px;
    // border-bottom: 1px solid #999;
  }
}
@import '../scss/global.scss';
</style>