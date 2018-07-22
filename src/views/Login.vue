<template>
  <div class="sign">
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <div class="sign-title">您好，请登陆</div>
      <el-form-item prop="account" label="账号">
        <el-input v-model="dynamicValidateForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="dynamicValidateForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">登陆</el-button>
        <!-- <el-button @click="forgetPsw(dynamicValidateForm)">忘记密码</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { loginAdmin } from '@/api/login';
import { saveLogin, TOKEN } from '@/util/session';

@Component({
  components: {}
})
export default class Login extends Vue {
  dynamicValidateForm = {
    pass: '',
    account: ''
  };
  private submitForm(formName: string) {
    let valid: boolean = this.dynamicValidateForm.account !== '' && this.dynamicValidateForm.pass !== '';
    if (valid) {
      loginAdmin(this.dynamicValidateForm.account, this.dynamicValidateForm.pass)
        .then((res: {}) => {
          saveLogin(TOKEN);
          window.location.href = '/home';
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    } else {
      this.$message.error('请填写完整的发布数据');

      return false;
    }
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