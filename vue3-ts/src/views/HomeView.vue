<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>开始学习vue和ts</div>
    <div @click="goAbout">跳转详情</div>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { defineComponent } from "vue";

import { useRouter } from "vue-router";

export default defineComponent({
  setup() {

    const router = useRouter();

    // components: {
    //   HelloWorld
    // }

    // let that = this;
    const goAbout = (): void => {
      
      router.push("studyView");
    };
    return {
      goAbout,
    };
  },
});
</script>
