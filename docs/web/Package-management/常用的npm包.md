<end-time time="新增时间: 2022-01-04" />

::: details cross-env / dotenv
> 前言：我们很多时候会通过不同的打包命令控制环境变量，从而根据不同的环境变量调用相应的域名，达到一个测试环境和正式环境分离的目标。

-------------

在 **macOS** 我们一般可以直接通过命令参数传入环境变量，例如在 **package.json** 下传入 **NODE_ENV变量**


```javascript
// package.json
{
  "name": "xx",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "serve": "NODE_ENV=development && vue-cli-service serve",
    "build": "NODE_ENV=test vue-cli-service build",
    "build:prod": "NODE_ENV=production vue-cli-service build",
    ...
  },
  ...
}
```

在具体的业务代码里访问进程环境 **process.env** 里获得该变量，从而设置不同的请求域名

```javascript
// index.js
const BASE_URL = process.env.NODE_ENV === 'test' ? 'http://test.xx.com' : 'https://online.xx.com'

```

---------------

**然而，上面的设置在windows系统下会报错，此时可以通过cross-env插件解决**


---------------


接下来安装 **cross-env**插件  

```js
npm i --save-dev cross-env
```

```javascript
// package.json
{
  "name": "xx",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "serve": "cross-env NODE_ENV=development && vue-cli-service serve",
    "build": "cross-env NODE_ENV=test vue-cli-service build",
    "build:prod": "cross-env NODE_ENV=production vue-cli-service build",
    ...
  },
  ...
  "devDependencies": {
      "cross-env": "^6.0.3",
  }
}
```

接下来重新运行, 发现非常丝滑，我们可以通过执行不同的打包命令，去达成我们打不同环境的包的目的。

但是当业务越来越复杂的时候，我们需要设置的 **不止一个域名，而且环境也很多套** ，需要根据不同的环境去加载不同的环境变量参数，来维护这么一个映射关系，例如：


```javascript
// index.js
let baseUrl = ''
let paramA = ''
let paramB = ''
// 第一套测试环境
if (process.env.NODE_ENV === 'test1') {
    baseUrl = 'http://test1.xx.com'
    paramA = 'a'
    paramB = 'b'
// 第二套测试环境
} else if (process.env.NODE_ENV === 'test2') {
    baseUrl = 'http://test2.xx.com'
    paramA = 'a2'
    paramB = 'b2'
// 预发环境
} else if (process.env.NODE_ENV === 'pre') {
    baseUrl = 'http://pre.xx.com'
    paramA = 'preA'
    paramB = 'preB'
// 正式环境
} else {
    baseUrl = 'http://online.xx.com'
    paramA = 'onlineA'
    paramB = 'onlineB'
}
```


后面会觉得不够清晰简洁，因此引入了 **dotenv** ，它能将环境变量中的变量从 **.env** 文件中加载到 **process.env** 中，也可以很好地避免我们在业务代码中引入配置文件，避免安全问题以及更好地维护。


- 安装 **dotenv** 插件
```javascript
npm i --save-dev dotenv
```


- 创建 **.env.dev**文件

```javascript
BASE_URL = 'http://dev.xx.com'
PARAM_A = 'a'
PARAM_B = 'b'
```

- 创建 **.env.test**文件

```javascript
BASE_URL = 'http://dev.xx.com'
PARAM_A = 'a'
PARAM_B = 'b'
```

- 创建 **.env.prod**文件
```javascript
BASE_URL = 'http://prod.xx.com'
PARAM_A = 'a'
PARAM_B = 'b'
```

在配置文件中引入  

```javascript
const path = require('path');
const customPath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
require('dotenv').config({ path: customPath });
```

在业务文件中打印
```javascript
console.log(process.env.PARAM_A) // 对应环境的变量
```

:::