import {
  defineConfig
} from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  base: '/vitepress-template/',
  appearance: true,
  title: '前端Blog',
  description: 'VitePress is a Vite-powered static site generator',
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true,
  },
  themeConfig: {
    algolia: {
      apiKey: '599cec31baffa4868cae4e79f180729b',
      appId: 'R2IYF7ETH7',
      indexName: 'vitepress-template'
    },
    siteTitle: 'DL-Blog',
    logo: '/favicon.ico',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2012-present DL',
    },
    socialLinks: [{
      icon: 'github',
      link: 'https://gitee.com/du_zhao_lin'
    }],
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '前端',
        link: '/web/前端面试题/前端面试题汇总',
      },
      {
        text: '后端',
        link: '/back/'
      },
      {
        text: '大杂烩',
        items: [{
          text: 'shell入门',
          link: '/messy/shell/',
        }]
      },
      {
        text: '相关问题',
        link: '/computer/',
      },
      {
        text: '关于',
        link: '/about/',
      }
    ],
    sidebar: {
      '/web/': [{
          text: 'JavaScript教程笔记',
          collapsible: true,
          collapsed: true,
          items: [{
              text: 'flexible原理解析',
              link: '/web/flexible原理解析'
            },
            {
              text: 'JavaScript基础',
              link: '/web/'
            },
            {
              text: '数组操作方法',
              link: '/web/数组操作方法'
            },
          ]
        },
        {
          text: 'TypeScript教程笔记',
          collapsible: true,
          collapsed: true,
          items: [{
            text: 'TS教程',
            link: '/web/TS教程/'
          }]
        },
        {
          text: 'css汇总',
          collapsible: true,
          collapsed: true,
          items: [{
            text: 'css动画过渡相关',
            link: '/web/css/'
          }, ]
        },
        {
          text: 'es6教程笔记',
          collapsible: true,
          collapsed: true,
          items: [{
              text: 'async 函数',
              link: '/web/es6教程笔记/'
            },
            {
              text: '数组的扩展',
              link: '/web/es6教程笔记/数组的扩展'
            }
          ]
        },
        {
          text: 'vue相关笔记',
          collapsible: true,
          collapsed: true,
          items: [{
              text: 'vue工具函数汇总',
              link: '/web/vue相关笔记/'
            },
            {
              text: 'vue3语法',
              link: '/web/vue相关笔记/vue3语法'
            },
          ]
        },
        {
          text: 'react相关笔记',
          collapsible: true,
          collapsed: true,
          items: [{
              text: 'react工具函数汇总',
              link: '/web/react相关笔记/'
            },
            {
              text: 'redux一篇搞懂',
              link: '/web/react相关笔记/redux一篇搞懂'
            },
          ]
        },
        {
          text: '前端面试题汇总',
          collapsible: true,
          items: [{
            text: '前端面试题汇总',
            link: '/web/前端面试题/前端面试题汇总'
          }]
        }
      ],
      '/back/': [{
          text: '后端教程简介',
          collapsible: true,
          items: [{
            text: 'start',
            link: '/back/'
          }]
        },
        {
          text: 'mysql教程',
          collapsible: true,
          collapsed: true,
          items: [{
            text: 'mysql安装',
            link: '/back/mysql/'
          }]
        },
        {
          text: ' python教程及demo',
          collapsible: true,
          collapsed: true,
          items: [{
            text: 'python安装',
            link: '/back/python/'
          }]
        }
      ],
      '/computer/': [{
          text: '电脑环境配置相关',
          collapsible: true,
          items: [{
              text: 'SHELL',
              link: '/computer/',
            },
            {
              text: 'homebrew',
              link: '/computer/mac/homebrew',
            }
          ]
        },
        {
          text: 'uniapp相关',
          collapsible: true,
          collapsed: true,
          items: [{
            text: '项目搭建报错',
            link: '/computer/uniapp/',
          }]
        },
        {
          text: 'pnpm相关',
          collapsible: true,
          collapsed: true,
          items: [{
            text: '使用pnpm创建vue/react项目报错',
            link: '/computer/pnpm/',
          }]
        }
      ],
      '/messy/': [{
        text: 'shell入门教程',
        collapsible: true,
        collapsed: true,
        items: [{
            text: 'shell入门',
            link: '/messy/shell/'
          },
          {
            text: 'shell命令',
            link: '/messy/shell/shell命令'
          },
        ]
      }]
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: '/vitepress-template/favicon.ico'
    }]
  ]
})