<template>
  <div>
    <TopNav />
  <div class="home">
我的主页
  </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TopNav from '@/components/TopNav.vue';

@Component({
  components: {
    TopNav
  }
})
export default class Login extends Vue {
  
}
</script>
<style lang="scss" scoped>
@import '../scss/theme.scss';
.home{
font-size: 24px;
}
</style>