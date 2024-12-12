import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

const notebookNote = defineNoteConfig({
  dir: "notebook",
  link: "/notes/notebook",
  sidebar: [
    {
      text: "2024年",
      prefix: "2024/",
      icon: "/icon/tools/tools-fn.svg",
      items: [
        { text: "生日快乐", link: "uxd4da4g/" },
        { text: "日记", link: "7wcis77b/" },
      ],
    },
  ],
});
const fragmentNote = defineNoteConfig({
  dir: "fragment",
  link: "/notes/fragment/",
  sidebar: [
    {
      text: "js",
      prefix: "js/",
      icon: "/icon/technology/JavaScript.svg",
      items: [{ text: "js", link: "6hucugpj/" }],
    },
    {
      text: "ts",
      prefix: "ts/",
      icon: "/icon/technology/TypeScript.svg",
      items: [
        { text: "常见类型", link: "jb6d7o0u/" },
        { text: "随手记", link: "ndiq8atb/" },
      ],
    },
  ],
});
const memoNote = defineNoteConfig({
  dir: "memo",
  link: "/notes/memo/",
  sidebar: "auto",
});
const interviewTopicNote = defineNoteConfig({
  dir: "interviewTopic",
  link: "/notes/interviewTopic/",
  sidebar: [
    {
      text: "技术相关",
      prefix: "tech/",
      icon: "/icon/comm/technology.svg",
      items: [
        { text: "Js 面试题", link: "c5rp0tr1/" },
        { text: "React 面试题", link: "btkmkqra/" },
      ],
    },
    // {
    //   text: "项目亮点",
    //   prefix: "ts/",
    //   icon: "/icon/TypeScript.svg",
    //   items: [
    //     { text: "常见类型", link: "jb6d7o0u/" },
    //     { text: "随手记", link: "ndiq8atb/" },
    //   ],
    // },
  ],
});
const utilityFuncNote = defineNoteConfig({
  dir: "utilityFunc",
  link: "/notes/utilityFunc/",
  sidebar: [
    {
      text: "tools",
      prefix: "jsFn/",
      icon: "/icon/tools/tools-fn.svg",
      items: [{ text: "工具函数", link: "mzoijdbo/" }],
    },
    {
      text: "css",
      prefix: "css/",
      icon: "/icon/technology/css.svg",
      items: [{ text: "视觉格式化模型", link: "5o3uvhmp/" }],
    },
  ],
});
export const notes = defineNotesConfig({
  dir: "notes",
  link: "/",
  // notes: [fragmentNote, utilityFuncNote],
  notes: [
    utilityFuncNote,
    interviewTopicNote,
    memoNote,
    fragmentNote,
    notebookNote,
  ],
});
