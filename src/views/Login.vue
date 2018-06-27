<template>
  <div class="sign">
   <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
  <el-form-item
    prop="email"
    label="邮箱"
    :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
  >

    <el-input v-model="dynamicValidateForm.email"></el-input>
  </el-form-item>
    <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="dynamicValidateForm.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { actions } from '@/store/modules/user/CONSTANTS';
// import { Getter } from 'vuex-class';

@Component({
  components: {
  },
})
export default class Sign extends Vue {
  // @Getter info;
  dynamicValidateForm={
    domains: [{
      value: ''
    }],
    email: ''
  };
  private  submitForm(formName) {
      alert('submit!');

  // this.$refs[formName].validate((valid) => {
  //   if (valid) {
  //     alert('submit!');
  //   } else {
  //     console.log('error submit!!');
  //     return false;
  //   }
  // });
}}
</script>

<style>
.sign{
  text-align:center;
  border:1px solid #ebebeb;
  padding:100px;
  width: 560px;
}
form{width: 460px;}
input {
  height:60px;
}
</style>

