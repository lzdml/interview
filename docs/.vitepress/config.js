import { defineConfig } from "vitepress";
import { getNavs } from "./nav";
import { getSidebar } from './sidebar/index'

const BASE = "/vitepress-template/";

export default defineConfig({
  lang: "zh-CN",
  base: BASE,
  appearance: true,
  title: "前端Blog",
  description: "VitePress is a Vite-powered static site generator",
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: "one-dark-pro",
    lineNumbers: true,
  },
  themeConfig: {
    siteTitle: "DL-Blog",
    logo: "/favicon.ico",
    algolia: {
      appId: 'KT409G0UNZ',
      apiKey: '0047c6743b891ca8780a1ff00dabd6ac',
      indexName: 'vitepress-template',
      placeholder: '搜索点什么'
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2012-present DL",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://gitee.com/du_zhao_lin",
      },
    ],
    nav: getNavs(),
    sidebar: getSidebar()
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/vitepress-template/favicon.ico",
      },
    ],
  ],
});
