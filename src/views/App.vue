<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  private created() {
    // let user = this.$store.state[PREFIX];
    // if (!user || !user.id) {
    //   console.log(1111);
    //   // this.$store.dispatch(actions.getUserInfo);
    // }
  }
}
</script>

