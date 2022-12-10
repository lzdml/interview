## react 入门

::: details 声明式编程/命令式编程

- 命令式编程:
    - 从架子上拿一个酒杯
    - 将杯子放到酒杯前
    - 按下酒桶开关，将杯子倒满
    - 把杯子递给我
- 声明式编程：
    - 请给我倒一杯啤酒
      :::

::: info react元素

```javascript {2}
{
  type: Title,
  props: {
    color: 'red',
    children: 'hello world'
  }
}
```

其中很重要的一个特性是**type**, 他告诉react如何处理元素本身, 实际上如果**type属性是字符串**, 就表示元素是**DOM节点,**
如果**type属性是函数**, 那么元素就是**组件**, DOM元素和组件可互相嵌套, 以表示整个渲染树

特别的：当type为函数的时候，react会调用它，传入props来取回底层元素。然后react会一直对返回操作做相同的操作，直到取回完整的dom节点，这个过程称为 **
一致性比较**

:::


----------------------

::: info 技术点分离与耦合 <==> 组件式开发
在过去的开发中, 我们一直采用的方式都是按照技术点分离, 比如把css/js/html分到不同的文件夹, 但是实际上css对应的选择器标签,
js操作对象的DOM以及样式都不能互相独立开, 所以导致了耦合
而react则使用另外一种维度解决这个问题，它通过建议你编写名为组件的小型代码块来组织应用。

```js
let style = {
  color: 'white',
  background: 'red'
}

ReactDOM.render(<div style={style}>Hello World</div>)
```

:::


------------------

::: danger 常见误解
使用react去开发一个常用组件时, 只需要引入react核心库以及react-dom即可, 如使用jsx旧引入jsx库, 需要react支持路由,
就安装react-router-dom即可, 类似于堆积木一样, 需要什么引入使用即可
:::

-----------------

#### jsx使用

