### uniapp项目搭建报错

1. 搭建好脚手架之后真机运行
::: danger 解决方案
1. 找到工具
2. 插件安装
3. app真机运行, 找到对应的hbuilder安装包卸载重新安装, 可能是因为app真机运行的原因导致的
:::

2. 搭建好脚手架之后真机运行报错
::: danger 解决方案
1.在终端执行一下命令   
curl -O https://registry.npmjs.org/esbuild-darwin-64/-/esbuild-darwin-64-0.14.42.tgz  
tar xf ./esbuild-darwin-64-0.14.42.tgz  

解压之后得到package,将该文件改名为 esbuild-darwin-64并且将其复制到项目的node_modules中再次运行
:::


::: danger Cannot start service: Host version "0.14.48" does not match binary version "0.14.42" 解决方案
node_modules/esbuild-darwin-arm64 修改为 esbuild-darwin-64再次运行
:::