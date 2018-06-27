<template>
 <div><el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px" height="800px">
      <el-tree
  :data="menu"
  :props="defaultProps"
  accordion
  @node-click="handleNodeClick">
</el-tree>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container></div>
</template>
<script>
import Vue from 'vue';
export default class Test extends Vue {
  handleNodeClick(data) {
    console.log(data);
  }
  menu = [
    {
      label: '一级 1',
      children: [
        {
          label: '二级 1-1'
        }, {
          label: '二级 1-2'
        }
      ]
    },
      {
      label: '一级 1',
      children: [
        {
          label: '二级 1-1'
        }, {
          label: '二级 1-2'
        }
      ]
    },
      {
      label: '一级 1',
      children: [
        {
          label: '二级 1-1'
        }, {
          label: '二级 1-2'
        }
      ]
    }
  ];
  defaultProps = {
    children: 'children',
    label: 'label'
  };
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-container{
  height: 500px;
}
</style>

