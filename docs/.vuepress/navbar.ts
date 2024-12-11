import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "博客", link: "/blog/" },
  { text: "标签", link: "/blog/tags/" },
  { text: "归档", link: "/blog/archives/" },
  {
    text: "笔记",
    items: [
      { text: "随笔", icon: "/icon/comm/pen.svg", link: "/notes/notebook/README.md" },
      { text: "知识碎片", icon: "/icon/comm/knowledge.svg", link: "/notes/fragment/README.md" },
      { text: "面试题", icon: "/icon/comm/interview.svg", link: "/notes/interviewTopic/README.md" },
      { text: "备忘录", icon: "/icon/comm/memo.svg", link: "/notes/memo/README.md" },
      { text: "工具", icon: "/icon/tools/tools-fn.svg", link: "/notes/utilityFunc/README.md" },
    ],
  },
  {
    text: "笔记2",
    items: [{ text: "示例", link: "/notes/demo/README.md" }],
  },
]);
