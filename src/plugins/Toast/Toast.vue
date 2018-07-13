<template>
  <div class="toast" :class="{showing}">
    <p>{{msg}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Toast extends Vue {
  private msg: string = '';
  private showTimer: number | null = null;
  private hideTimer: number | null = null;
  private showing: boolean = false;
  public show(msg: string) {
    if (msg) {
      this.msg = msg;
      this.$nextTick(function() {
        this.showTimer = window.setTimeout(() => {
          this.showing = false;
        }, 5000);
      });
    }
  }
  private destroyed() {
    if (this.showTimer !== null) {
      window.clearTimeout(this.showTimer);
    }
    if (this.hideTimer !== null) {
      window.clearTimeout(this.hideTimer);
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/_px2px.scss';
@import '../../scss/theme.scss';
.toast {
  position: fixed;
  z-index: 999;
  bottom: 240px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
  font-size: 28px;
  padding: 10px 30px;
  border-radius: 4px;
}
</style>

