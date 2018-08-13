<template>
  <div>
    <TopNav />
    <div class="publicfree">
      <el-form :model="freeForm" ref="freeForm" :inline="true">
        <div class="sign-title">{{curStatus}}免单活动</div>
        <div class="first-line">
          <el-form-item :prop="freeForm.title" label="活动标题:">
            <el-input v-model="freeForm.title" style="width: 160px"></el-input>
          </el-form-item>
          <el-form-item :prop="freeForm.gift" label="产品/赠品:">
            <el-input v-model="freeForm.gift" style="width: 160px"></el-input>
          </el-form-item>
          <el-form-item label="订单总金额:">
            <el-input v-model="freeForm.amount" style="width: 100px" :rules="[{ required: true, message: '订单总金额'},
                      { type: 'number', message: '订单总金额为数字值'}]">
            </el-input>
          </el-form-item>
          <el-form-item label="返现比例:">
            <el-select style="width: 100px" v-model="freeForm.rate" placeholder="请选择">
              <el-option v-for="item in selectRate" :key="item[1]" :label="item[0]" :value="item[1]">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item :prop="freeForm.extra_gift" label="额外奖励:">
            <el-input v-model="freeForm.extra_gift" style="width: 100px"></el-input>
          </el-form-item>

        </div>
        <div class="first-line">
          <el-form-item :prop="freeForm.content" label="活动说明:">
            <el-input v-model="freeForm.content" style="width: 680px"></el-input>
          </el-form-item>
          <el-form-item label="性别选择:">
            <el-select style="width: 100px" v-model="freeForm.sex" placeholder="全部">
              <el-option v-for="item in selectSex" :key="item[1]" :label="item[0]" :value="item[1]">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="goods">
          <div class="good0">
            <el-form-item label="宝贝01-ID:">
              <el-input v-model="freeForm.goods[0].treasureId" style="width: 180px"></el-input>
            </el-form-item>
            <p>
              <el-form-item label="关键字1">
                <el-input v-model="freeForm.goods[0].keyword1" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[0].keywordRate1" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <p>
              <el-form-item label="关键字2">
                <el-input v-model="freeForm.goods[0].keyword2" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[0].keywordRate2" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <p>
              <el-form-item label="关键字3">
                <el-input v-model="freeForm.goods[0].keyword3" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[0].keywordRate3" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <p>
              <el-form-item label="关键字4">
                <el-input v-model="freeForm.goods[0].keyword4" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[0].keywordRate4" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <p>
              <el-form-item label="关键字5">
                <el-input v-model="freeForm.goods[0].keyword5" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[0].keywordRate5" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <p>
              <el-form-item label="关键字6">
                <el-input v-model="freeForm.goods[0].keyword6" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[0].keywordRate6" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <el-form-item label="下单规格:">
              <el-input v-model="freeForm.goods[0].sku" style="width: 180px"></el-input>
            </el-form-item>
            <div class="good-img">
              <span>产品主图方图：</span>
              <el-upload action="" accept="image/*" name="mainPictureUrl" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload0">
                <img v-if="freeForm.goods[0].mainPictureUrl" :src="freeForm.goods[0].mainPictureUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="good-img">
              <span>主图长图：</span>
              <el-upload action="" accept="image/*" name="verticalPictureUrl" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload1">
                <img v-if="freeForm.goods[0].verticalPictureUrl" :src="freeForm.goods[0].verticalPictureUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </div>
          <div class="good1">
            <el-form-item label="宝贝02-ID:">
              <el-input v-model="freeForm.goods[1].treasureId" style="width: 180px"></el-input>
            </el-form-item>
            <p>
              <el-form-item label="关键字1">
                <el-input v-model="freeForm.goods[1].keyword1" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[1].keywordRate1" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <p>
              <el-form-item label="关键字2">
                <el-input v-model="freeForm.goods[1].keyword2" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[1].keywordRate2" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <p>
              <el-form-item label="关键字3">
                <el-input v-model="freeForm.goods[1].keyword3" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[1].keywordRate3" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <p>
              <el-form-item label="关键字4">
                <el-input v-model="freeForm.goods[1].keyword4" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[1].keywordRate4" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <p>
              <el-form-item label="关键字5">
                <el-input v-model="freeForm.goods[1].keyword5" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[1].keywordRate5" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <p>
              <el-form-item label="关键字6">
                <el-input v-model="freeForm.goods[1].keyword6" auto-complete="off" style="width: 110px"></el-input>
                比例
                <el-input v-model="freeForm.goods[1].keywordRate6" auto-complete="off" style="width: 60px"></el-input>
              </el-form-item>
            </p>
            <el-form-item label="下单规格:">
              <el-input v-model="freeForm.goods[1].sku" style="width: 180px"></el-input>
            </el-form-item>
            <div class="good-img">
              <span>产品主图方图：</span>
              <el-upload action="" accept="image/*" name="mainPictureUrl" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload2">
                <img v-if="freeForm.goods[1].mainPictureUrl" :src="freeForm.goods[1].mainPictureUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="good-img">
              <span>主图长图：</span>
              <el-upload action="" accept="image/*" name="verticalPictureUrl" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload3">
                <img v-if="freeForm.goods[1].verticalPictureUrl" :src="freeForm.goods[1].verticalPictureUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </div>
        </div>
        <div class="order">
          <div class="order-left">
            <div class="good-img">
              <span>订单截图参考：</span>
              <el-upload action="" accept="image/*" name="verticalPictureUrl" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload4">
                <img v-if="freeForm.orderPictureUrl" :src="freeForm.orderPictureUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="order-right">
              <p>
                <el-form-item label="活动总量:">
                  <el-input v-model="freeForm.total" style="width: 180px"></el-input>
                </el-form-item>
              </p>
              <p>
                <el-form-item label="执行日期:">
                  <el-date-picker v-model="freeForm.executeTime" type="date" placeholder="选择日期" style="width: 180px" @change="setSelectTime" value-format="timestamp">
                  </el-date-picker>
                  <span>{{selectTime}}</span>
                </el-form-item>

              </p>
            </div>
          </div>
          <div class="time">
            <el-form-item label="24小时分布:">
              <div style="padding-left: 100px;margin-top: -60px;">
                <el-form-item style="width:80px" :label="item.time" v-for="item in hourArry">
                  <el-input v-model="item.val" style="width: 60px;padding:0"></el-input>
                </el-form-item>
              </div>
            </el-form-item>
          </div>
          <div style="text-align:center">
            <el-form-item>
              <el-button type="primary" @click="submitForm('freeForm')">发布活动</el-button>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { freeOrderPublic, freeOrderPublicInfo, HourData, setUploadImg, freeOrderDeatilPublic } from '@/api/taskpublic';
import TopNav from '@/components/TopNav.vue';
import { getQuery } from '@/util/cookie';

@Component({
  components: { TopNav }
})
export default class PubilcRefund extends Vue {
  private value1: string = '';
  private selectTime: string = '';
  private hourArry: Array<{ time: string; val: string }> = HourData;
  private goodIndex: Array<string> = ['good0', 'good1'];
  private imageUrl: string = '';
  private selectRate: Array<Array<string>> = [['100%', '100'], ['70%', '70'], ['50%', '50']];
  private selectSex: Array<Array<string>> = [['全部', 'all'], ['男', 'male'], ['女', 'female']];
  private tid: string = getQuery('freeid') || '';
  private isadd: string = getQuery('isadd') || '';
  private curStatus: string = '新建';
  freeForm: freeOrderPublicInfo = {
    title: '',
    amount: '',
    rate: '100%',
    content: '特别提示：本活动产品正参加聚划算、淘抢购活动，拍下后需要15分钟内付款，建议自行验证后立即付款。',
    gift: '',
    extra_gift: '0',
    sex: 'all',
    total: '',
    orderPictureUrl: '',
    executeTime: '',
    time_range: '',
    goods: [
      {
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
        sku: '任意规格',
        mainPictureUrl: '',
        verticalPictureUrl: ''
      },
      {
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
        sku: '任意规格',
        mainPictureUrl: '',
        verticalPictureUrl: ''
      }
    ]
  };
  private created() {
    if (this.isadd === '1') {
      this.curStatus = '复制';
    } else if (this.tid !== '') {
      this.curStatus = '编辑';
    }
    if (this.tid !== '') {
      freeOrderDeatilPublic(this.tid)
        .then((res: any) => {
          this.freeForm = res;
          this.freeForm.executeTime = '';
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    }
  }
  private setSelectTime() {
    let week: string = new Date(this.freeForm.executeTime).getDay().toString();
    if (week === '0') {
      week = '天';
    }
    this.selectTime = '星期' + week;
  }
  private uploadIng(file: any, type: string) {
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      this.$message.error('上传图片大小不能超过 2MB!');
    }
    setUploadImg(file)
      .then(result => {
        let url = JSON.parse(result.data).url;
        if (type === 'orderPictureUrl') {
          this.freeForm.orderPictureUrl = url;
        } else if (type === 'mainPictureUrl0') {
          this.freeForm.goods[0].mainPictureUrl = url;
        } else if (type === 'mainPictureUrl1') {
          this.freeForm.goods[1].mainPictureUrl = url;
        } else if (type === 'verticalPictureUrl0') {
          this.freeForm.goods[0].verticalPictureUrl = url;
        } else if (type === 'verticalPictureUrl1') {
          this.freeForm.goods[1].verticalPictureUrl = url;
        }
      })
      .catch(() => {
        this.$message.error('图片上传错误');
      });
  }
  private beforeAvatarUpload4(file: any) {
    this.uploadIng(file, 'orderPictureUrl');
  }
  private beforeAvatarUpload0(file: any) {
    this.uploadIng(file, 'mainPictureUrl0');
  }
  private beforeAvatarUpload1(file: any) {
    this.uploadIng(file, 'verticalPictureUrl0');
  }
  private beforeAvatarUpload2(file: any) {
    this.uploadIng(file, 'mainPictureUrl1');
  }
  private beforeAvatarUpload3(file: any) {
    this.uploadIng(file, 'verticalPictureUrl1');
  }
  private handleAvatarSuccess() {
    // this.imageUrl = URL.createObjectURL(file.raw);
  }
  private submitForm(formName: string) {
    let hourStr = '';
    this.hourArry.map((item, idx) => {
      hourStr += item.val + ',';
    });
    this.freeForm.time_range = hourStr;
    if (
      this.freeForm.title === '' ||
      this.freeForm.amount === '' ||
      this.freeForm.rate === '' ||
      this.freeForm.total === '' ||
      this.freeForm.gift === '' ||
      this.freeForm.extra_gift === '' ||
      this.freeForm.sex === '' ||
      this.freeForm.orderPictureUrl === '' ||
      this.freeForm.executeTime === '' ||
      this.freeForm.time_range === ''
    ) {
      this.$message.error('请填写完整的发布数据');
      return;
    } else if (
      this.freeForm.goods[0].treasureId === '' ||
      this.freeForm.goods[0].keyword1 === '' ||
      this.freeForm.goods[0].keywordRate1 === '' ||
      this.freeForm.goods[0].keyword2 === '' ||
      this.freeForm.goods[0].keywordRate2 === '' ||
      this.freeForm.goods[0].keyword3 === '' ||
      this.freeForm.goods[0].keywordRate3 === '' ||
      this.freeForm.goods[0].keyword4 === '' ||
      this.freeForm.goods[0].keywordRate4 === '' ||
      this.freeForm.goods[0].keyword4 === '' ||
      this.freeForm.goods[0].keywordRate4 === '' ||
      this.freeForm.goods[0].keyword5 === '' ||
      this.freeForm.goods[0].keywordRate5 === '' ||
      this.freeForm.goods[0].sku === '' ||
      this.freeForm.goods[0].mainPictureUrl === '' ||
      this.freeForm.goods[0].verticalPictureUrl === ''
    ) {
      this.$message.error('请填写完整的商品信息');
      return;
      // } else if (
      //   this.freeForm.goods[1].treasureId === "" ||
      //   this.freeForm.goods[1].keyword1 === "" ||
      //   this.freeForm.goods[1].keywordRate1 === "" ||
      //   this.freeForm.goods[1].keyword2 === "" ||
      //   this.freeForm.goods[1].keywordRate2 === "" ||
      //   this.freeForm.goods[1].keyword3 === "" ||
      //   this.freeForm.goods[1].keywordRate3 === "" ||
      //   this.freeForm.goods[1].keyword4 === "" ||
      //   this.freeForm.goods[1].keywordRate4 === "" ||
      //   this.freeForm.goods[1].keyword4 === "" ||
      //   this.freeForm.goods[1].keywordRate4 === "" ||
      //   this.freeForm.goods[1].keyword5 === "" ||
      //   this.freeForm.goods[1].keywordRate5 === "" ||
      //   this.freeForm.goods[1].sku === "" ||
      //   this.freeForm.goods[1].mainPictureUrl === "" ||
      //   this.freeForm.goods[1].verticalPictureUrl === ""
      // ) {
      //   this.$message.error("请填写完整的商品信息");
      //   return;
    } else {
      let id = this.tid;
      if (this.isadd === '1') {
        id = '';
      }
      freeOrderPublic(this.freeForm, id)
        .then((res: {}) => {
          this.$message.success('活动发布成功～');
          setTimeout(() => {
            window.location.href = '/listfree';
          }, 3000);
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/theme.scss';

.publicfree {
  display: inline-block;
  font-size: 14px;

  .sign-title {
    padding: 20px 0;
    font-size: 24px;
  }

  .time {
    display: inline-block;
    width: 550px;
  }
  .time-item {
    width: 100px;
  }
  .first-line {
    text-align: left;
  }

  .goods {
    overflow: hidden;
    padding-bottom: 20px;
  }
  .good0 {
    text-align: left;
    float: left;
    width: 40%;
    padding: 20px;
    border: 1px solid #ebebeb;
  }
  .good1 {
    text-align: left;
    float: right;
    width: 40%;
    padding: 20px;
    border: 1px solid #ebebeb;
  }
  .order {
    border: 1px solid #ebebeb;
    padding: 20px 10px;
    text-align: left;
  }
  .order-left {
    float: left;
    width: 400px;
  }
  .order-right {
    float: right;
    width: 400px;
  }
  .good-img {
    position: relative;
    height: 200px;
  }
}

@import '../scss/global.scss';
</style>