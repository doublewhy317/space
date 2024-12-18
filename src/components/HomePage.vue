<script setup lang="ts">
import type { PlumeHomeConfigBase } from "vuepress-theme-plume";
import { VPHomeBox } from "vuepress-theme-plume/client";
import { HomePageProps } from "./index.ts";
import bg from "../../public/imgs/funingna.png";

const props = defineProps<PlumeHomeConfigBase & Partial<HomePageProps>>();
console.log(props, "props");
const opacity = 0.1;
</script>

<template>
  <!-- 自定义你的内容 -->
  <div class="home-page-container" :style="{ backgroundImage: `url(${bg})` }">
    <div class="home-page-mask" :style="{ opacity }"></div>
    <div class="home-page-content">
      <div class="home-page-item"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-page-container {
  position: relative;
  width: 100%;
  min-height: calc(100vh - var(--vp-nav-height));
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all var(--vp-t-color);
}
.home-page-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  transition: opacity var(--vp-t-color);
}
.home-page-content {
  display: grid;
  // grid-template-columns: repeat(auto-fit, 250px); 

  .home-page-content-item {
    backdrop-filter: blur(4px) brightness(1.5);
  }
}
</style>
