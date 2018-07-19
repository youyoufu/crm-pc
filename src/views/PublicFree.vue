<template>
  <div class="sign">
   <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" style="width: 300px" label-width="100px" class="demo-dynamic">
     <div class="sign-title">免单任务</div>
  <el-form-item
    label="宝贝ID">
    <el-input v-model="dynamicValidateForm.account"   style="width: 180px"></el-input>
<!-- <input type="file"  /> -->
  </el-form-item>
    <el-form-item label="关键字1">
    <el-input v-model="dynamicValidateForm.pass" auto-complete="off"  style="width: 110px"></el-input>
    比例
    <el-input v-model="dynamicValidateForm.pass" auto-complete="off"  style="width: 20px"></el-input>
  </el-form-item>
      <el-form-item label="关键字2">
    <el-input v-model="dynamicValidateForm.pass" auto-complete="off"  style="width: 110px"></el-input>
    比例
    <el-input v-model="dynamicValidateForm.pass" auto-complete="off"  style="width: 20px"></el-input>
  </el-form-item>
      <el-form-item label="关键字3">
    <el-input v-model="dynamicValidateForm.pass" auto-complete="off"  style="width: 110px"></el-input>
    比例
    <el-input v-model="dynamicValidateForm.pass" auto-complete="off"  style="width: 20px"></el-input>
  </el-form-item>
      <el-form-item>
        <img src="" />
        <img src="" />
  </el-form-item>
    <el-form-item
    label="任务要求">
    <el-input v-model="dynamicValidateForm.account"   style="width: 180px"></el-input>
  </el-form-item>
    <el-form-item
    label="24小时分布" >
 <p class="time">00点<el-input v-model="dynamicValidateForm.account"   style="width: 140px"></el-input></p>
 <p class="time">11点<el-input v-model="dynamicValidateForm.account"   style="width: 140px"></el-input></p>
</el-form-item>
      <el-form-item
    label="发布时间" > 
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"  style="width: 140px" @change="setSelectTime" value-format="timestamp">
    </el-date-picker>
    <span>{{selectTime}}</span>
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

@Component({
  components: {}
})
export default class PubilcFree extends Vue {
  private value1: string = '';
  private selectTime: string = '';
  dynamicValidateForm = {
    pass: '',
    account: ''
  };
  private setSelectTime() {
    this.selectTime = '星期' + new Date(this.value1).getDay();
  }
  private submitForm(formName: string) {
    // this.$refs[formName].validate((valid:boolean) => {
    //   console.log('valid', valid);
    let valid: boolean = this.dynamicValidateForm.account !== '' && this.dynamicValidateForm.pass !== '';
    if (valid) {
      loginAdmin(this.dynamicValidateForm.account, this.dynamicValidateForm.pass)
        .then((res: {}) => {
          window.location.href = '/';
        })
        .catch((err: { message: string }) => {
          this.$notify({
            title: '错误',
            message: err.message,
            type: 'warning'
          });
          window.location.href = '/';
        });
    } else {
      this.$notify({
        title: '错误',
        message: '请填入正确的登陆信息',
        type: 'error'
      });
      return false;
    }
    // });
    // alert('submit!');
    // this.$router.push('/');
  }
  // private forgetPsw() {
  //   this.$router.push('/task');
  // }
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
  .time {
    padding: 4px;
  }
}
</style>