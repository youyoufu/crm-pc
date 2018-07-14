<template>
  <div>
    <TopNav />
  <div class="home">
<el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
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

  private handleClick(rows:{}, type:string, index:number) {
    if (type === 'del') {
      this.$confirm('你确定要删除该行数据吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // rows.splice(index, 1);
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
  font-size: 24px;
}
</style>