<template>
  <div class="sign">
   <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
     <div class="sign-title">您好，请登陆</div>
  <el-form-item
    prop="email"
    label="邮箱"
    :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
    ]"
  >
    <el-input v-model="dynamicValidateForm.email"></el-input>
  </el-form-item>
    <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="dynamicValidateForm.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
       <el-button @click="forgetPsw(dynamicValidateForm)">忘记密码</el-button>
  </el-form-item>
</el-form>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { actions } from '@/store/modules/user/CONSTANTS';

@Component({
  components: {}
})
export default class Login extends Vue {
  dynamicValidateForm = {
    domains: [
      {
        value: ''
      }
    ],
    email: ''
  };
  private submitForm(formName:string) {
    // this.$refs[formName].validate((valid:boolean) => {
    //   console.log('valid', valid);
    let valid:boolean=true;
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        this.$notify({
          title: '错误',
          message: 'error submit!!',
          type: 'warning'
        });
        return false;
      }
    // });
    // alert('submit!');
    // this.$router.push('/');
  }
  private forgetPsw() {
    this.$router.push('/task');
  }
}
</script>
<style lang="scss" scoped>
.sign {
  display: inline-block;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  padding: 100px;
  width: 300px;
  &-title {
    padding-bottom: 20px;
  }

 
}
</style>