---
title: Yarn
---

# {{ $frontmatter.title }}

- 查看全局安装过的包：**yarn global list --depth=0**
- 卸载模块
  - 卸载局部模块：**yarn remove [package]**
  - 卸载全局模块：**yarn remove global \*\***[package]\*\*
- 更新模块
  - 更新局部模块：**yarn upgrade [package]**
  - 更新全局模块：**yarn global add** **[package]**
  - 安装模块到指定版本：**yarn upgrade [package]@[version]**
- 查看某个模块的全部版本：**yarn info [package]**
- 清除缓存：**yarn cache clean**
- 设置指定镜像源: **yarn config set registry **[**https://registry.npmmirror.com**](https://registry.npmmirror.com)
