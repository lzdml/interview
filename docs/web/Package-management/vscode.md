---
title: Vscode
---

# {{ $frontmatter.title }}

## 自身：

### 1. 设置资源管理器字体大小

1.  进入文件 ：&#x20;

    ```bash
    open /Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/workbench/workbench.desktop.main.css
    ```

2.  搜索内容：**.monaco-workbench .part>.content**

3.  修改字号：**font-size：16px**

4.  保存重启

### 2. 设置字体样式

1.  搜索内容: **.monaco-icon-name-container>.label-name**

2.  设置样式: **font-family:FiraCode Nerd Font Mono,雅痞-简**

3.  保存重启

## 插件：

### 1. gitlens

1.  关闭 gitlens 的悬停展示

```javascript
"gitlens.hovers.enabled": false,
"gitlens.hovers.avatars": false,

```

2\. 设置 gitlens 时间格式化

```javascript
"gitlens.defaultDateStyle": "absolute",
"gitlens.currentLine.dateFormat": "YYYY年MM月D日, HH:mm:ss",

```

### 2. prettier

```json
{
  // 使能每一种语言默认格式化规则
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.useTabs": false, // 缩进不使用tab，使用空格
  "prettier.semi": false, // 句尾不添加分号
  "prettier.singleQuote": true, // 使用单引号代替双引号
  "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  "prettier.htmlWhitespaceSensitivity": "ignore", // 优化vue模板中尖括号掉落到下一行开头的效果
  "editor.formatOnSave": true // 保存时自动格式化代码
}
```
