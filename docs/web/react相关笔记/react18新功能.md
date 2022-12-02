<end-time time="更新时间: 2022-12-02 10:13" />

### 你需要知道关于React-18的几个新功能

[//]: # (> 来源: https://github.com/reactwg/react-18/discussions)



::: details React.flushSync

-------------

React更新优先级如下

flushSync 中的 setState **>** 正常执行上下文中 setState **>** setTimeout ，Promise 中的 setState。

```javascript {5-8,12}
handerClick = () => {
  setTimeout(() => {
    this.setState({number: 1})
  })
  this.setState({number: 2})
  ReactDOM.flushSync(() => {
    this.setState({number: 3})
  })
  this.setState({number: 4})
}

// 结果 3, 4, 1
```

**flushSync补充说明:** flushSync在同步条件下, 会合并之前的setState|useState,可以理解, 如果发现了flushSync就会先执行更新,
如果之前有未更新的setState｜useState, 就会合并

-------------

:::
