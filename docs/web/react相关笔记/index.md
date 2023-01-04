## react API 入门

------------------

::: details React useRef Hook

[React官网useRef](https://zh-hans.reactjs.org/docs/hooks-reference.html#useref)

### 语法

```javascript
const refContainer = useRef(initialValue);
```

**useRef**返回一个**可变的**ref对象, 其.**current**属性被初始化为传入的参数(**initialValue**), 回的 ref 对象在组件的整个生命周期内持续存在。

### 案例
```javascript
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>useRef</title>
</head>
<body>
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js" charset="utf-8"></script>


<div id="root"></div>

<script type="text/babel">

const App = () => {
  const buttonRef = React.useRef();
  const inputEl = React.useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <div>
      <button
        ref={buttonRef}
        onClick={() => {
          console.log('buttonRef: >>>', buttonRef.current)
        }}
      >
        Special Button
      </button>

      <div>
        <input type="text" ref={inputEl} />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
</script>
</body>
</html>

```


当**ref对象**内容发生变化时, useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用**回调 ref** 来实现。
```javascript

// 

function MeasureExample() {
  const [height, setHeight] = React.useState(0);

  // callback ref 可以确保 即便子组件延迟显示被测量的节点 (比如为了响应一次点击)，我们依然能够在父组件接收到相关的信息，以便更新测量结果。
  const measuredRef = React.useCallback(node => {
    console.log(node) // <h2>hello, world</h2>
    if (node !== null) {
      console.log(node.getBoundingClientRect())
      // {
      //   "x": 8,
      //   "y": 74.9140625,
      //   "width": 359,
      //   "height": 33.5,
      //   "top": 74.9140625,
      //   "right": 367,
      //   "bottom": 108.4140625,
      //   "left": 8
      // }
      setHeight(node.getBoundingClientRect().height)
    }
  // 传递了 [] 作为 useCallback 的依赖列表, 这确保了 ref callback 不会在再次渲染时改变，因此 React 不会在非必要的时候调用它。
  }, [])

  return (
    <div>
      <h2 ref={measuredRef}>hello, world</h2>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </div>
  )
}
```

在此示例中，当且仅当组件挂载和卸载时，callback ref 才会被调用，因为渲染的组件在整个重新渲染期间始终存在。如果你希望在每次组件调整大小时都收到通知，则可能需要使用 **ResizeObserver** 或基于其构建的第三方 Hook。

:::


--------------------


::: details React.lazy

[React.lazy中文文档](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy)
```javascript
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>lazy</title>
  <style>
    body {
      height: 100vh;
      margin: 0;
      display: grid;
      place-items: center;
    }

    .box {
      width: 300px;
      box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
      padding: 10px 15px;
    }
    .box h1 {
      font-size: 20px;
      margin: 0 0 1rem 0;
    }
  </style>
</head>
<body>
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js" charset="utf-8"></script>

<div id="root"></div>
<div id="portal"></div>

<script type="text/babel">

const Loading = () => (
  <div className="load-container">
    <h4>Loading...</h4>
  </div>
)

const Resource = () => (
  <div className="box">
    <h1>React Lazy</h1>
    <p>This component loaded after 4 seconds, using React lazy and Suspense</p>
  </div>
)

const Lazy = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      default: () => <Resource />
    })
  }, 4000)
}))

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Lazy />
    </React.Suspense>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
</script>
</body>
</html>

```
:::