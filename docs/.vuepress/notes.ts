import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

const demoNote = defineNoteConfig({
  dir: "demo",
  link: "/demo",
  sidebar: ["", "foo", "bar"],
});
const utilityFuncNote = defineNoteConfig({
  dir: "utilityFunc",
  link: "/notes/",
  sidebar: [
    {
      text: "工具函数",
      prefix: "/tools",
      icon: "/icon/tools-fn.svg",
      items: [
        {
          text: "foo",
          link: "/notes/tools/1al76ym4/",
          icon: "https://cn.vuejs.org/images/logo.png",
        },
        {
          text: "bar",
          link: "/notes/tools/c4rvbbli/",
          icon: "ph:info-light",
        },
        /* "/notes/tools/",
      "/notes/tools/array",
      "/notes/tools/date",
      "/notes/tools/number",
      "/notes/tools/object",
      "/notes/tools/string",
      "/notes/tools/type",
      "/notes/tools/url",
      "/notes/tools/validate", */
      ],
    },
    {
      text: "工具函数",
      prefix: "/notes/tools",
      icon: "/icon/tools-fn.svg",
      items: [
        {
          text: "foo",
          link: "1al76ym4",
          icon: "/icon/tools-fn.svg",
        },
      ],
    },
  ],
});
const noteNote = defineNoteConfig({
  dir: "utilityFunc",
  link: "/notes/",
  sidebar: [
    {
      text: "js",
      prefix: "/notes/notes/js",
      icon: "/icon/tools-fn.svg",
      items: [
        {
          text: "js",
          link: "/notes/notes/js/6hucugpj/",
        },
      ],
    },
    {
      text: "ts",
      prefix: "/notes/notes/ts/",
      icon: "/icon/TypeScript.svg",
      items: [
        {
          text: "常见类型",
          link: "/notes/notes/ts/jb6d7o0u/",
        },
        {
          text: "随手记",
          link: "/notes/notes/ts/ndiq8atb/",
        },
      ],
    },
  ],
});
export const notes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [demoNote, utilityFuncNote, noteNote],
});
