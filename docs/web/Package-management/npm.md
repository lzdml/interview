---
title: Npm
---

# {{ $frontmatter.title }}

- 查看全局安装过的包：**npm list -g --depth=0**
- 卸载模块
  - 卸载局部模块：**npm uninstall package-name**
  - 卸载全局模块：**npm uninstall -g package-name**
- 更新模块
  - 更新局部模块：**npm update package-name**
  - 更新全局模块：**npm update -g package-name**
  - 安装模块到指定版本：**npm install package-name@x.x.x**
- 查看某个模块的全部版本：**npm view package-name versions**
- 清除缓存：**npm cache clean --force**
- 设置指定镜像源: **npm config set registry **[**https://registry.npmmirror.com**](https://registry.npmmirror.com)
