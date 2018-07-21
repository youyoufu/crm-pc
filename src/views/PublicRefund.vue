<template>
  <div>
    <TopNav />

    <div class="sign">
      <el-form :model="refundForm" ref="refundForm" style="width: 350px" label-width="100px" class="demo-dynamic">
        <div class="sign-title">挖宝任务</div>
        <el-form-item label="宝贝ID">
          <el-input v-model="refundForm.treasureId" style="width: 180px"></el-input>
          <!-- <input type="file"  /> -->
        </el-form-item>
        <el-form-item label="关键字1">
          <el-input v-model="refundForm.keyword1" auto-complete="off" style="width: 110px"></el-input>
          比例
          <el-input v-model="refundForm.keywordRate1" auto-complete="off" style="width: 20px"></el-input>
        </el-form-item>
        <el-form-item label="关键字2">
          <el-input v-model="refundForm.keyword2" auto-complete="off" style="width: 110px"></el-input>
          比例
          <el-input v-model="refundForm.keywordRate2" auto-complete="off" style="width: 20px"></el-input>
        </el-form-item>
        <el-form-item label="关键字3">
          <el-input v-model="refundForm.keyword3" auto-complete="off" style="width: 110px"></el-input>
          比例
          <el-input v-model="refundForm.keywordRate3" auto-complete="off" style="width: 20px"></el-input>
        </el-form-item>
        <div class="good-img">
          <span class="good-img-text">产品主图方图：</span>
          <el-upload action="" accept="image/*" name="mainPictureUrl" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload0">
            <img v-if="refundForm.mainPictureUrl" :src="refundForm.mainPictureUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="good-img">
          <span>主图长图：</span>
          <el-upload action="" accept="image/*" name="verticalPictureUrl" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload1">
            <img v-if="refundForm.verticalPictureUrl" :src="refundForm.verticalPictureUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <el-form-item label="任务要求">
          <el-input v-model="refundForm.require" style="width: 180px"></el-input>
        </el-form-item>
        <el-form-item label="24小时分布">
          <p class="time" v-for="(item) in hourArry">{{item.time}}
            <el-input v-model="item.val" style="width: 140px"></el-input>
          </p>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-date-picker v-model="refundForm.executeTime" type="date" placeholder="选择日期" style="width: 170px" @change="setSelectTime" value-format="timestamp">
          </el-date-picker>
          <span>{{selectTime}}</span>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('refundForm')">发布任务</el-button>
          <!-- <el-button @click="forgetPsw(refundForm)">忘记密码</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { refundOrderPublic, setUploadImg, refundOrderPublicInfo, HourData } from '@/api/taskpublic';
import TopNav from '@/components/TopNav.vue';

@Component({
  components: { TopNav }
})
export default class PubilcRefund extends Vue {
  private value1: string = '';
  private selectTime: string = '';
  private hourArry: Array<{ time: string; val: string }> = HourData;
  refundForm: refundOrderPublicInfo = {
    treasureId: '',
    keyword1: '',
    keywordRate1: '',
    keyword2: '',
    keywordRate2: '',
    keyword3: '',
    keywordRate3: '',
    executeTime: '',
    mainPictureUrl: '',
    verticalPictureUrl: '',
    time_range: '',
    require: ''
  };
  private uploadIng(file: any) {
    const isLt5M = file.size / 1024 / 1024 / 1024 / 1024 / 1024 < 5;
    if (!isLt5M) {
      this.$message.error('上传图片大小不能超过 5MB!');
    }
    return setUploadImg(file);
  }
  private beforeAvatarUpload0(file: any) {
    this.refundForm.mainPictureUrl = this.uploadIng(file) || '';
  }
  private beforeAvatarUpload1(file: any) {
    this.refundForm.verticalPictureUrl = this.uploadIng(file) || '';
  }
  private handleAvatarSuccess() {
    // this.imageUrl = URL.createObjectURL(file.raw);
  }
  private setSelectTime() {
    this.selectTime = '星期' + new Date(this.refundForm.executeTime).getDay();
  }
  private submitForm(formName: string) {
    // this.$refs[formName].validate((valid:boolean) => {
    let valid: boolean = false; // = this.refundForm.account !== '' && this.refundForm.pass !== '';
    if (valid) {
      let hourStr = '';
      this.hourArry.map((item, idx) => {
        hourStr += item.val + ',';
      });
      this.refundForm.time_range = hourStr;
      console.log('this.refundForm', this.refundForm);
      refundOrderPublic(this.refundForm)
        .then((res: {}) => {
          // window.location.href = '/';
        })
        .catch((err: { message: string }) => {
          this.$notify({
            title: '错误',
            message: err.message,
            type: 'warning'
          });
          // window.location.href = '/';
        });
    } else {
      this.$notify({
        title: '错误',
        message: '请填入完整的登陆信息',
        type: 'error'
      });
      return false;
    }
  }
}
</script>
<style lang="scss">
.sign {
  display: inline-block;
  font-size: 14px;
  text-align: center;
  padding: 50px;
  width: 350px;
  &-title {
    padding-bottom: 20px;
    font-size: 24px;
  }
  .time {
    padding: 4px;
  }

  .good-img {
    position: relative;
    height: 200px;
    .good-img-text {
      float: left;
    }
  }
  .avatar-uploader {
    position: absolute;
    left: 85px;
    top: 0;
    width: 178px;
  }
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader-icon {
    border: 1px dashed #d9d9d9;
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>