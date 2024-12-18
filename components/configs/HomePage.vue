<script setup lang="ts">
import type { PlumeHomeConfigBase } from "vuepress-theme-plume";
import { VPHomeBox } from "vuepress-theme-plume/client";

const props = defineProps<
  PlumeHomeConfigBase & {
    // 组件 props, frontmatter 中的属性将会传递给组件
  }
>();
console.log(props);
const type = "custom"
const backgroundImage = "/imgs/funingna.png"
const backgroundAttachment = "fixed"
const full = true
// const {
//   type = "custom",
//   backgroundImage = "https://api.pengzhanbo.cn/wallpaper/bing",
//   backgroundAttachment = 'local',
//   full = true,
// } = props;
</script>

<template>
  <VPHomeBox
    :type="type"
    :background-image="backgroundImage"
    :background-attachment="backgroundAttachment"
    :full="full"
  >
    <!-- 自定义你的内容 -->
    <div>...</div>
  </VPHomeBox>
</template>
