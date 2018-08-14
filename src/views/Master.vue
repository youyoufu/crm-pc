<template>
  <div class="master">
      <div class="title">超级管理</div>
    <div class="block">
      <p class="title">系统大盘看板</p>
      <p>昨日商家总订单量：
        <span>0</span>
      </p>
      <p>昨日商家总放单量：
        <span>0</span>
      </p>
      <p>今日商家总放单量：
        <span>0</span>
      </p>
      <p>昨日新增用户量：
        <span>0</span>
      </p>
      <p>昨日新增绑定用户总量：
        <span>0</span>
      </p>
      <p>待返款订单总量：
        <span>0</span>
      </p>
      <p>昨日活动订单量前5商户：
        <span>0</span>
      </p>
    </div>
    <div class="block textinput">
      <p class="title">新增用户配置</p>
    <p><span>商家简称：</span>
        <el-input  v-model="sellerForm.name" />
      </p>
          <p><span>公众号原始ID：</span>
        <el-input v-model="sellerForm.account" />
      </p>
          <p><span>手机号：</span>
        <el-input v-model="sellerForm.phone" />
      </p>
     <p><span>密码：</span>
        <el-input  v-model="sellerForm.password" />
      </p>
        <p><span>公众号appid：</span>
        <el-input  v-model="sellerForm.app_id" />
      </p>
         <p><span>公众号AppSecret：</span>
        <el-input v-model="sellerForm.app_secret" />
      </p>
           <p class="title">
        <el-button type="button" @click="submitAddSeller()">新增或更新商户</el-button>
      </p>
      <p>运营注意：微信公众号授权域名www.niurouzhou.com</p>
    </div>
    <div class="block textinput">
      <p class="title">商户增加微信支付</p>
  <p>公众号原始ID：
        <el-input  v-model="payForm.account" />
      </p>
        <p>微信支付商号：
        <el-input  v-model="payForm.mch_id" />
      </p>
        <p>微信支付Key:
        <el-input  v-model="payForm.sign_key" />
      </p>
      <div class="upload-block">
     <div>  <span>证书上传：</span>
          <el-upload class="uploadfile"  action="" accept="" name="key_url" :on-success="handleAvatarSuccess" :before-upload="beforeUpload0">
            <el-button slot="trigger" size="small" type="button">上传apiclient_key.pem 证书</el-button>
          </el-upload>    
          {{payForm.key_url}}
    </div> <div>   <span>证书上传：</span>
          <el-upload class="uploadfile" action="" accept="" name="cert_url" :on-success="handleAvatarSuccess" :before-upload="beforeUpload0">
              <el-button slot="trigger" size="small" type="button">上传apiclient_cert.pem证书</el-button>
          </el-upload>
           {{payForm.cert_url}}
      </div>
           </div>

         <p class="title">
        <el-button type="button" @click="submitAddSellerPay()">新增或更新商户微信支付</el-button>
      </p>
      <p>删除账号资料，微信登录跟新用户一样</p>
    </div>
    <div class="block height300">
      <p class="title">删除测试账号</p>
      <p>手机号：
        <el-input type="number"  v-model="mobile1" />
      </p>
      <p class="title">
        <el-button type="button" @click="clickBtn('del')">删除账号</el-button>
      </p>
      <p>删除账号资料，微信登录跟新用户一样</p>

    </div>
    <div class="block height300">
      <p class="title">重置冷却时间</p>
      <p>手机号：
        <el-input type="number"  v-model="mobile2" />
      </p>
      <p class="title">
        <el-button type="button" @click="clickBtn('reset')">重置</el-button>
      </p>
      <p>设置时间为10天外，可以重新接活动</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  resetTenDay,
  deleteUser,
  addSellerInfo,
  addSellerPayInfo,
  addSellerPay,
  addSeller,
  setUploadFile
} from "@/api/master";

@Component({
  components: {}
})
export default class Master extends Vue {
  private mobile1: string = "";
  private mobile2: string = "";
  private payForm: addSellerPayInfo = {
    mch_id: "",
    account: "",
    sign_key: "",
    key_url: "",
    cert_url: ""
  };
  private sellerForm: addSellerInfo = {
    name: "",
    account: "",
    phone: "",
    password: "",
    app_id: "",
    app_secret: ""
  };
  private uploadFile(file: any, type: string) {
    setUploadFile(file)
      .then(result => {
        let url = JSON.parse(result.data).url;
        if (type === "key_url") {
          this.payForm.key_url = url;
        } else if (type === "cert_url") {
          this.payForm.cert_url = url;
        }
      })
      .catch(() => {
        this.$message.error("图片上传错误");
      });
  }
  private beforeUpload0(file: any) {
    this.uploadFile(file, "key_url");
  }
  private beforeUpload1(file: any) {
    this.uploadFile(file, "cert_url");
  }
  private submitAddSellerPay() {
    if (
      this.payForm.mch_id === "" ||
      this.payForm.account === "" ||
      this.payForm.sign_key === "" ||
      this.payForm.key_url === "" ||
      this.payForm.cert_url === ""
    ) {
      this.$message.error("请填写完整的商家信息");
      return;
    } else {
      addSellerPay(this.payForm)
        .then((res: {}) => {
          this.$message.success("商家支付信息添加成功");
          // setTimeout(() => {
          //   window.location.href = "/listrefund";
          // }, 3000);
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    }
  }
  private submitAddSeller() {
    if (
      this.sellerForm.name === "" ||
      this.sellerForm.account === "" ||
      this.sellerForm.phone === "" ||
      this.sellerForm.password === "" ||
      this.sellerForm.app_id === "" ||
      this.sellerForm.app_secret === ""
    ) {
      this.$message.error("请填写完整的商家信息");
      return;
    } else {
      addSeller(this.sellerForm)
        .then((res: {}) => {
          this.$message.success("商家添加成功");
          // setTimeout(() => {
          //   window.location.href = "/listrefund";
          // }, 3000);
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    }
  }

  private clickBtn(type: string) {
    if (type === "del") {
      if (this.mobile1.length !== 11) {
        this.$message.warning("请填写正确的手机号码");
        return;
      }
      deleteUser(this.mobile1)
        .then(() => {
          this.$message.success("账号删除成功");
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    } else if (type === "reset") {
      if (this.mobile2.length !== 11) {
        this.$message.warning("请填写正确的手机号码");
        return;
      }
      resetTenDay(this.mobile2)
        .then(() => {
          this.$message.success("重置成功");
        })
        .catch((err: { message: string }) => {
          this.$message.error(err.message);
        });
    }
  }
}
</script>
<style lang="scss" scoped>
.master {
  width: 1400px;
  margin-top: 10px;
  font-size: 24px;
  .title {
    padding: 10px;
  }

  .block {
    float: left;
    width: 360px;
    border: 1px solid #999;
    margin: 30px 30px 10px;
    padding: 10px;
    height: 420px;
    p {
      text-align: left;
      font-size: 14px;
      line-height: 3;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      padding: 10px 0;
    }
    .el-input {
      width: 220px;
    }
  }
  .textinput {
    .el-input {
      float: right;
    }
  }
  .el-input__inner {
    height: 25px;
    line-height: 25px;
  }
  .height300 {
    height: 300px;
  }
  .upload-block {
    span {
      font-size: 14px;
      line-height: 2;
      float: left;
    }
    button {
      width: 220px;
      margin-left: 70px;
    }
  
  }
}
</style>