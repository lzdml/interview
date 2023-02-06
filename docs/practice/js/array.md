<end-time time="新增时间: 2023-02-06" />

::: details forEach
```javascript
// call实现
Array.prototype.forEach1 = function (callback, thisArg) {
  // 这里的this指的是 [].forEach1前面的数组
  let len = this.length;
  for (var i = 0; i < len; i++) {
    // 修改callback的this指向, 为forEach的第二个参数
    callback.call(thisArg, this[i], i, this)
  }
}

// bind实现
Array.prototype.forEach2 = function (callback, thisArg) {
  let len = this.length
  callback = callback.bind(this)
  for (let i = 0; i < len; i++) {
    callback(this[i], i, this)
  }
}
```
:::
