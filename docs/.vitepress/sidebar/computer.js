export default {
  "/computer/": [
    {
      text: "电脑环境配置相关",
      collapsible: true,
      items: [
        {
          text: "SHELL",
          link: "/computer/",
        },
        {
          text: "homebrew",
          link: "/computer/mac/homebrew",
        },
      ],
    },
    {
      text: "uniapp相关",
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: "项目搭建报错",
          link: "/computer/uniapp/",
        },
      ],
    },
    {
      text: "pnpm相关",
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: "使用pnpm创建vue/react项目报错",
          link: "/computer/pnpm/",
        },
      ],
    },
  ]
}