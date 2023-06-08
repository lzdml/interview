<end-time time="新增时间: 2022-12-29 10:20" />

::: details 微任务宏任务队列

#### => 解析思路

首先 main 函数所在的任务是第一个宏任务，先输出 start，进入 foo 函数后输出 2。遇到第一个 setTimeout，将其放入宏任务队列。进入 Promise 里输出 5，遇到 etTimeout 将其放入宏任务队列。由于此时当前 promise 的状态仍然是 pending 所以无法将.then 放入当前宏任务的微任务队列里（回调函数延迟绑定） 。遇到 Promise.reject(‘10’)，将其放到当前宏任务的微任务队列里，然后输出 end，此时主线程执行结束，开始执行微任务队列里的微任务。发现 Promise.reject(‘10’)，根据错误冒泡机制，它不会进入.then 的第一个函数直接进入.catch，所以输出 10。到此，第一个宏任务执行结束。

进入第二个宏任务，首先输出 3。遇到 Promise.resolve(‘4-1’)，将其放到当前宏任务的微任务队列里，又遇到 Promise.resolve(‘4-5’)，再将其放到当前宏任务的微任务队列里，遇到 etTimeout 将其放入宏任务队列。到此，主线程执行结束，开始执行微任务队列里的微任务。发现 Promise.resolve(‘4-1’)，根据返回值穿透特性，执行完 Promise.resolve(‘4-1’).then(‘4-2’)的返回值仍是 4-1 并将其新的结果放入到微任务队列里，发现 Promise.resolve(‘4-5’')，输出 4-5。然后又是重复的微任务队列取值并放值但是仍然是返回值穿透，所以先输出 4-1，由于此时的输出函数是无返回值函数（即返回值为 undefined）,所以下一个返回值就是 undefined。 到此，第二个宏任务执行结束。

进入第三个宏任务，首先输出 6，由于执行了 resolve(‘7’)，此时就将.then 的微任务放入当前的宏任务的微任务队列里（回调函数延迟绑定）。 主线程执行结束，开始执行微任务队列里的微任务。输出 8，遇到 etTimeout 将其放入宏任务队列。到此，第三个宏任务执行结束。

进入第四个宏任务，输出 6，当前主线程执行结束且第四个宏任务也执行结束。

进入第五个宏任务，输出传入的 res 即 7，当前主线程执行结束且第五个宏任务也执行结束。

```javascript
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>微任务， 宏任务</title>
</head>
<body>
<script>
const messageQueue = [];
let id = 1;
function foo() {
  console.log('2---------4');
  messageQueue.push([id++]);
  console.log(`向消息队列中添加宏任务${id - 1}-------5`);
  setTimeout(() => {
    console.log(`执行第${messageQueue[0][0]}个宏任务，消息队列的宏任务：${messageQueue} --------- 10`);
    console.log('3 ----------- 11');
    //返回值穿透
    Promise.resolve('4-1').then('4-2').then(Promise.resolve('4-3')).then((res) => {
      console.log(res, '------------ 14');
    }).then((res) => {
      console.log(res, '------------ 15');
      console.log(`第${messageQueue[0][0]}个宏任务执行结束，消息队列的宏任务：${messageQueue.slice(1)} -------------- 16`);
      messageQueue.shift();
    })
    Promise.resolve('4-5').then((res) => {
      console.log(res, '--------- 13');
    })
    messageQueue.push([id++]);
    console.log(`向消息队列中添加宏任务${id - 1} ------------ 12`);
    setTimeout(() => {
      console.log(`执行第${messageQueue[0][0]}个宏任务，消息队列的宏任务：${messageQueue} ----------- 22`);
      console.log('9 ------------ 23');
      console.log(`第${messageQueue[0][0]}个宏任务执行结束，消息队列的宏任务：${messageQueue.slice(1)} ------------ 24`);
      messageQueue.shift();
    }, 0);
  }, 0);
  new Promise((resolve, reject) => {
    console.log('5 ------------ 5');
    messageQueue.push([id++]);
    console.log(`向消息队列中添加宏任务${id - 1} -------------- 6`);
    setTimeout(() => {
      console.log(`执行第${messageQueue[0][0]}个宏任务，消息队列的宏任务：${messageQueue} ----------- 17`);
      console.log('6 ------------- 18');
      resolve('7');
    }, 0)
  }).then((res) => {//回调函数延迟绑定
    console.log('8 -------------- 19');
    messageQueue.push([id++]);
    console.log(`向消息队列中添加宏任务${id - 1} ------------- 20`);
    setTimeout(() => {
      console.log(`执行第${messageQueue[0][0]}个宏任务，消息队列的宏任务：${messageQueue} ------------ 25`);
      console.log(res, '---------------- 26');
      console.log(`第${messageQueue[0][0]}个宏任务执行结束，消息队列的宏任务：${messageQueue.slice(1)} -------------- 27`);
      messageQueue.shift();
    }, 0)
    console.log(`第${messageQueue[0][0]}个宏任务执行结束，消息队列的宏任务：${messageQueue.slice(1)} ---------- 21`);
    messageQueue.shift();
  });
  //错误冒泡
  Promise.reject('10').then(() => {
    throw '11';
  }).catch((res) => {
    console.log(res, '------------- 8');
    console.log(`第${messageQueue[0][0]}个宏任务执行结束，消息队列的宏任务：${messageQueue.slice(1)}-----------9`);
    messageQueue.shift();
  })
  return 'end ----------- 7';
}

function main() {
  console.log('start---------3');
  console.log(foo());
}
messageQueue.push([id++]);
console.log(`向消息队列中添加宏任务${id - 1}---------1`);
console.log(`执行第${messageQueue[0][0]}个宏任务，消息队列的宏任务：${messageQueue}-------2`);
// 模拟第一个宏任务的开始
main();


</script>
</body>
</html>

```

:::

---

<end-time time="新增时间: 2022-12-29 10:20" />
::: details 慢两拍
```javascript
Promise.resolve().then(() => {
    console.log(0)
    return Promise.resolve(4)
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
console.log(1)
}).then(() => {
console.log(2)
}).then(() => {
console.log(3)
}).then(() => {
console.log(5)
}).then(() =>{
console.log(6)
})

// 答案: 0 1 2 3 4 5 6

// 上面的代码相当于下面这种情况
Promise.resolve().then(() => {
console.log(0)
}).then(() => {
  // 第一拍
  const p = Promise.resolve(4)
  Promise.resolve().then(() => {
    // 第一拍
    p.then(res => {
      console.log(res)
    })
  })
})

```

:::
