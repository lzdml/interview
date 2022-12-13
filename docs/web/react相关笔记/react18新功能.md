<end-time time="更新时间: 2022-12-02 10:13" />


----------------------
#### 你需要知道关于React-18的几个新功能

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


:::

-------------

<end-time time="更新时间: 2022-12-13 21:42" />

::: details 累组件获取Ref三种方式
```javascript {19,20,23,24,26,7,8,9}
/* 类组件 */
class Children extends Component{  
    render=()=><div>hello,world</div>
}
/* TODO: 1. Ref属性是一个字符串 */
export default class Index extends React.Component{
  currentDom1 = null
  currentComponentInstance = null
  currentDom2 = React.createRef()
  componentDidMount(){
    console.log(this.refs) //1. 此方法高版本已弃用, 不推荐使用

    console.log(this.currentDom1)
    console.log(this.currentComponentInstance)

    console.log('currentDom2: ', currentDom2.current)
  }
  render=()=> <div>
    <div ref="currentDom"  >字符串模式获取元素或组件</div>
    <Children ref="currentComInstance"  />

    {/* TODO: 2. ref value 是一个函数, 回调参数就是DOM元素或者组件实例 */}
    <div ref={(node)=> this.currentDom1 = node }  >Ref模式获取元素或组件</div>
    <Children ref={(node) => this.currentComponentInstance = node  }  />

    <div ref={this.currentDom2}  >Ref模式获取元素或组件</div>
  </div>
}
```
:::