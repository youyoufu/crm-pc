<template>
  <div>
    <TopNav />
    <div class="publicrefund">
      <el-form :model="refundForm" ref="refundForm" style="width: 350px" label-width="100px" class="demo-dynamic">
        <div class="sign-title">{{curStatus}}挖宝活动</div>
        <el-form-item label="活动标题">
          <el-input v-model="refundForm.title" style="width: 180px"></el-input>
        </el-form-item>
        <el-form-item label="宝贝ID">
          <el-input v-model="refundForm.treasureId" style="width: 180px"></el-input>
        </el-form-item>
        <el-form-item label="关键字1">
          <el-input v-model="refundForm.keyword1" auto-complete="off" style="width: 110px"></el-input>
          比例
          <el-input v-model="refundForm.keywordRate1" auto-complete="off" style="width: 40px"></el-input>
        </el-form-item>
        <el-form-item label="关键字2">
          <el-input v-model="refundForm.keyword2" auto-complete="off" style="width: 110px"></el-input>
          比例
          <el-input v-model="refundForm.keywordRate2" auto-complete="off" style="width: 40px"></el-input>
        </el-form-item>
        <el-form-item label="关键字3">
          <el-input v-model="refundForm.keyword3" auto-complete="off" style="width: 110px"></el-input>
          比例
          <el-input v-model="refundForm.keywordRate3" auto-complete="off" style="width: 40px"></el-input>
        </el-form-item>
        <el-form-item label="关键字4">
          <el-input v-model="refundForm.keyword4" auto-complete="off" style="width: 110px"></el-input>
          比例
          <el-input v-model="refundForm.keywordRate4" auto-complete="off" style="width: 40px"></el-input>
        </el-form-item>
        <el-form-item label="关键字5">
          <el-input v-model="refundForm.keyword5" auto-complete="off" style="width: 110px"></el-input>
          比例
          <el-input v-model="refundForm.keywordRate5" auto-complete="off" style="width: 40px"></el-input>
        </el-form-item>
        <el-form-item label="关键字6">
          <el-input v-model="refundForm.keyword6" auto-complete="off" style="width: 110px"></el-input>
          比例
          <el-input v-model="refundForm.keywordRate6" auto-complete="off" style="width: 40px"></el-input>
        </el-form-item>
        <div class="good-img">
          <span class="good-img-text">产品主图方图：</span>
          <el-upload action="" accept="image/*" name="mainPictureUrl" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload0">
            <img v-if="refundForm.mainPictureUrl" :src="refundForm.mainPictureUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="good-img">
          <span class="good-img-text">主图长图：</span>
          <el-upload action="" accept="image/*" name="verticalPictureUrl" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload1">
            <img v-if="refundForm.verticalPictureUrl" :src="refundForm.verticalPictureUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <el-form-item label="活动要求">
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
          <el-button type="primary" @click="submitForm('refundForm')">发布活动</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  refundOrderPublic,
  setUploadImg,
  refundOrderPublicInfo,
  refundOrderDeatilPublic,
  HourData
} from '@/api/taskpublic';
import TopNav from '@/components/TopNav.vue';
import { getQuery } from '@/util/cookie';

@Component({
  components: { TopNav }
})
export default class PubilcRefund extends Vue {
  private value1: string = '';
  private selectTime: string = '';
  private hourArry: Array<{ time: string; val: string }> = HourData;
  private tid: string = getQuery('freeid') || '';
  private isadd: string = getQuery('isadd') || '';
  private curStatus: string = '新建';
  refundForm: refundOrderPublicInfo = {
    title: '',
    treasureId: '',
    keyword1: '',
    keywordRate1: '1',
    keyword2: '',
    keywordRate2: '1',
    keyword3: '',
    keywordRate3: '1',
    keyword4: '',
    keywordRate4: '1',
    keyword5: '',
    keywordRate5: '1',
    keyword6: '',
    keywordRate6: '1',
    executeTime: '',
    mainPictureUrl: '',
    verticalPictureUrl: '',
    time_range: '',
    require: '任意规格'
  };
  private created() {
    if (this.isadd === '1') {
      this.curStatus = '复制';
    } else if (this.tid !== '') {
      this.curStatus = '编辑';
    }
    if (this.tid !== '') {
      refundOrderDeatilPublic(this.tid)
        .then((res: any) => {
          this.refundForm = res;
          this.refundForm.executeTime = '';
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    }
  }
  private uploadIng(file: any, type: string) {
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      this.$message.error('上传图片大小不能超过 2MB!');
    }
    setUploadImg(file)
      .then(result => {
        let url = JSON.parse(result.data).url;
        if (type === 'mainPictureUrl') {
          this.refundForm.mainPictureUrl = url;
        } else if (type === 'verticalPictureUrl') {
          this.refundForm.verticalPictureUrl = url;
        }
      })
      .catch(() => {
        this.$message.error('图片上传错误');
      });
  }
  private beforeAvatarUpload0(file: any) {
    this.uploadIng(file, 'mainPictureUrl');
  }
  private beforeAvatarUpload1(file: any) {
    this.uploadIng(file, 'verticalPictureUrl');
  }
  private handleAvatarSuccess() {
    // this.imageUrl = URL.createObjectURL(file.raw);
  }
  private setSelectTime() {
    let week: string = new Date(this.refundForm.executeTime).getDay().toString();
    if (week === '0') {
      week = '天';
    }
    this.selectTime = '星期' + week;
  }
  private submitForm(formName: string) {
    let hourStr = '';
    this.hourArry.map((item, idx) => {
      hourStr += item.val + ',';
    });
    this.refundForm.time_range = hourStr;
    if (
      this.refundForm.title === '' ||
      this.refundForm.treasureId === '' ||
      this.refundForm.keyword1 === '' ||
      this.refundForm.keywordRate1 === '' ||
      this.refundForm.keyword2 === '' ||
      this.refundForm.keywordRate2 === '' ||
      this.refundForm.keyword3 === '' ||
      this.refundForm.keywordRate3 === '' ||
      this.refundForm.keyword4 === '' ||
      this.refundForm.keywordRate4 === '' ||
      this.refundForm.keyword5 === '' ||
      this.refundForm.keywordRate5 === '' ||
      this.refundForm.keyword6 === '' ||
      this.refundForm.keywordRate6 === '' ||
      this.refundForm.executeTime === '' ||
      this.refundForm.mainPictureUrl === '' ||
      this.refundForm.verticalPictureUrl === '' ||
      this.refundForm.time_range === '' ||
      this.refundForm.require === ''
    ) {
      this.$message.error('请填写完整的发布数据');
      return;
    } else {
      let id = this.tid;
      if (this.isadd === '1') {
        id = '';
      }
      refundOrderPublic(this.refundForm, id)
        .then((res: {}) => {
          this.$message.success('活动发布成功～');
          setTimeout(() => {
            window.location.href = '/listrefund';
          }, 3000);
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    }
  }
}
</script>
<style lang="scss">
@import '../scss/theme.scss';
.publicrefund {
  display: inline-block;
  font-size: 14px;
  text-align: center;
  padding: 50px;
  width: 350px;
  .sign-title {
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
}
@import '../scss/global.scss';
</style>