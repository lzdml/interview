export function getNavs() {
  return [
    {
      text: "首页",
      link: "/",
    },
    {
      text: "前端",
      link: "/web/前端面试题/前端面试题汇总all",
    },
    // {
    //   text: "后端",
    //   link: "/back/",
    // },
    {
      text: '练习场',
      link: '/practice/js/'
    },
    {
      text: "大杂烩",
      items: [
        {
          text: "shell入门",
          link: "/messy/shell/",
        },
      ],
    },
    {
      text: "相关问题",
      link: "/computer/",
    },
    {
      text: "常用工具",
      link: "/utils/",
    },
    {
      text: "关于",
      link: "/about/",
    },
  ]
}
