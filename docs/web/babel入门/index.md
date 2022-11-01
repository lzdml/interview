## 介绍  

-------------

**babel**是一个通用的多用途 JavaScript 编译器。通过 Babel 你可以使用（并创建）下一代的 JavaScript，以及下一代的 JavaScript 工具。

Babel 把用最新标准编写的 JavaScript 代码向下编译成可以在今天**随处可用的版本**。 这一过程叫做“源码到源码”编译， 也被称为转换编译（transpiling，是一个自造合成词，即转换＋编译。以下也简称为转译）。

- 例如: 
```JavaScript
-> before
const square = n => n * n;
-> after
const square = function square(n) {
  return n * n;
};
// ./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions

实际上是使用了babel的工具库 @babel/plugin-transform-arrow-functions将ES2015+箭头函数转换成匿名函数的形式
```

------------------


## 安装Babel  
- 注意： 本手册将涉及到一些命令行工具如 node 和 npm。在继续阅读之前请确保你已经熟悉这些工具了。

- 第一步安装全局babel-cli
```JavaScript
npm install --global babel-cli
```
- 我们可以这样来编译我们的第一个文件
```JavaScript
babel my-file.js
```
- 这将把编译后的结果直接输出至终端。使用 **--out-file** 或着 **-o** 可以将结果写入到指定的文件。.
```JavaScript
babel example.js --out-file compiled.js
或
babel example.js -o compiled.js
```
- 如果我们想要把一个目录整个编译成一个新的目录，可以使用 --out-dir 或者 -d。.
```JavaScript
babel src --out-dir lib
或
babel src -d lib
```
#### 在项目内运行Babel CLI    
> 尽管你可以把 Babel CLI 全局安装在你的机器上，但是按项目逐个安装在本地会更好。


1. 在同一台机器上的不同项目或许会依赖不同版本的 Babel 并允许你有选择的更新。  
2. 这意味着你对工作环境没有隐式依赖，这让你的项目有很好的可移植性并且易于安装。


------------------