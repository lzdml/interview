---
title: Pnpm
---

# {{ $frontmatter.title }}

## 安装 pnpm

其他方法就不介绍了，感兴趣可以去[官网查询](https://pnpm.io/zh/installation)，既然想安装 pnpm 那么 node.js 肯定是有了，npm 也肯定是有了

```Bash
npm install -g pnpm
```

- 查看全局安装过的包：`pnpm list --global -depth 0`
- 安装模块
  - 安装局部模块: `pnpm add [package]`
  - 安装全局模块: `pnpm add -g [package]`
- 卸载模块
  - 卸载局部模块：`pnpm remove [package]`
  - 卸载全局模块：`pnpm remove —-global [package]`
- 更新模块
  - 更新局部模块：`pnpm up [package]`
  - 更新全局模块：`pnpm up —-global`
  - 安装模块到指定版本：`pnpm up [package]@[version]`
- 查看某个模块的全部版本：`npm view package-name versions`
- 清除缓存：`pnpm store prune`
- 设置指定镜像源: **pnpm 使用与 npm 相同的配置进行安装。 如果您有一个私有源并且 npm 被配置使用它， pnpm 应该不需要额外的配置也能够授权请求。**
- 从其他包管理器迁移到 Pnpm
  - pnpm import 从另一个软件包管理器的 lock 文件生成 `pnpm-lock.yaml`。 支持的源文件：
    - `package-lock.json`
    - `npm-shrinkwrap.json`
    - `yarn.lock`

## 脚本安装 pnpm

Windows:

```PowerShell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

macOS:

```Bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
# 或者
wget -qO- https://get.pnpm.io/install.sh | sh -

```

Linux:

```Bash
curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;
```

## 卸载 pnpm

### 1. 移除全局安装的包

```Bash
# 查看全局安装的包
pnpm ls -g
```

### 2. 移除 pnpm CLI

如果您的 pnpm 是通过独立脚本进行安装的，您应该可以直接删除 pnpm 的主目录。

```Bash
rm -rf $PNPM_HOME
```

如果您使用 npm 安装 pnpm，那么您应该使用 npm 卸载 pnpm：

```Bash
npm rm -g pnpm
```

### 3. 删除全局内容可寻址存储

```Bash
rm -rf $(pnpm store path)
```
