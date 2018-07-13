<template>
  <div class="upload"  @click.stop="uploadImg">
上传图片
  </div>
</template>

<script lang="ts">
/// <reference path="../../typings/window.extend.d.ts" />
import { Component, Prop, Vue } from 'vue-property-decorator';
// import AppIcon from './AppIcon.vue';
// import {PREFIX} from '@/store/modules/user/CONSTANTS';
import px2px from '@/util/px2px';
import { getClient } from '@/util/network';
import { upLoad } from '@/util/upload';

@Component({

})
export default class UploadImg extends Vue {
  private uploadImg() {
    upLoad();
    console.log('aaa');
  }
}
</script>

<style lang="scss" scoped>

</style>

