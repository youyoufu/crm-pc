<template>
  <div>
    <TopNav />
  <div class="home">
<el-table
    :data="tableData"
    border
    style="width: 1200px">
    <el-table-column
      fixed
      prop="date"
      label="任务ID"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户淘宝账号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="订单编号"
      width="120">
    </el-table-column>
    <el-table-column
      label="账号验证截图1"
      width="150">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
           <img class="tablebigimg" width="100%" src="https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg" />
          <div slot="reference" class="name-wrapper">
            <span size="medium">
              <img class="tableimg" src="https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg" />
            </span>
          </div>
        </el-popover>
      </template>
    </el-table-column>
        <el-table-column
      label="账号验证截图2"
      width="150">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
           <img class="tablebigimg" width="100%" src="https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg" />
          <div slot="reference" class="name-wrapper">
            <span size="medium">
                       <img class="tableimg"  src="https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg" />
            </span>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="订单审批"
      width="100">
      <template v-if="scope" slot-scope="scope">
        <el-button @click="handleClick(scope.$index,'detail')" type="text" size="small">审批通过</el-button>
        <el-button @click="handleClick(scope.$index,'edit')" type="text" size="small">审批不过过</el-button>
      </template>
        <template v-if="scope" slot-scope="scope">
          <span>已通过</span>
      </template>
    </el-table-column>
    <el-table-column
      label="订单截图"
      width="120">
          <template slot-scope="scope">
        <img class="tableimg" src="https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg" />
      </template>
    </el-table-column>  
    <el-table-column
      label="用户返款微信码"
      width="150">
      <template slot-scope="scope">
        <img class="tableimg" src="https://img1.360buyimg.com/imgb/s136x136_jfs/t20029/83/2466782170/262318/6002985/5b4b525eNec79fd8a.jpg" />
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="返款状态"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.$index,'detail')" type="text" size="small">查看</el-button>
        <el-button @click="handleClick(scope.$index,'edit')" type="text" size="small">编辑</el-button>
        <el-button @click="handleClick(scope.$index,'del', tableData)" type="text" size="small" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TopNav from '@/components/TopNav.vue';

@Component({
  components: {
    TopNav
  }
})
export default class Login extends Vue {
  private tableData = [
    {
      date: '2016-05-03',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },
    {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }
  ];

  private handleClick(rows: [{}], type: string, index: number) {
    if (type === 'del') {
      this.$confirm('你确定要删除该行数据吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          rows.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    } else if (type === 'edit') {
      this.$message({
        type: 'info',
        message: '编辑'
      });
      console.log('edit ', rows);
    } else if (type === 'detail') {
      this.$message({
        type: 'info',
        message: '查看详情'
      });
      console.log('detail ', rows);
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/theme.scss';
.home {
  margin-top: 10px;
  font-size: 24px;
  .tableimg {
    width: 40px;
    height: 40px;
  }
}
</style>