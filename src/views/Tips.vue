<template>
  <div>
    <TopNav />
  <div class="tipsblock">全自动返现需要对接商家的CRM系统，联系我们进行定制开发。</div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TopNav from "@/components/TopNav.vue";
@Component({
  components: {
    TopNav
  }
})
export default class Tips extends Vue {}
</script>
<style lang="scss" scoped>
@import "../scss/theme.scss";
.tipsblock {
  text-align: center;
  font-size: 24px;
  padding-top: 30px;
}
@import "../scss/global.scss";
</style>