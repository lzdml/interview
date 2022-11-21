<end-time time="新增时间: 2022-11-21 13:41" />

### 队列(queue)

::: info 介绍
队列是一种特殊的**线性表**, 类似于生活中的场景, 如: 排队, 优先排队的人, 优先处理

1. **先进先出(FIFO/ First In First Out)**
2. 只允许在表的前端进行删除操作
3. 只允许在表的后端进行插入操作
   :::

-------------------

::: info 队列的实现

- 队列的实现有两种方式

1. 基于数组实现
2. 基于链表实现

- 队列常见的操作

1. **enqueue(element)** 向队列尾部添加一个或者多个新的项
2. **dequeue()** 移除队列的第一项, 并返回被移除的元素
3. **front()** 返回队列中的第一个元素->最先被添加, 也将是最先被移除的元素, 队列不做任何变动(不移除元素,
   只返回元素信息与Map类的peek方法类似)
4. **isEmpty()** 如果队列中不包含任何元素, 返回true, 否则返回false
5. **size()** 返回队列包含的元素个数, 与数组的length属性类似
6. **toString()** 将队列中的内容, 转成字符串形式
   :::

#### 普通队列

```js
function Queue() {
  this.items = []

  Queue.prototype.enqueue = function (element) {
    return this.items.push(element)
  }

  Queue.prototype.dequeue = function () {
    return this.items.shift()
  }

  Queue.prototype.front = function () {
    return this.items[0]
  }

  Queue.prototype.isEmpty = function () {
    return this.items.length === 0
  }

  Queue.prototype.size = function () {
    return this.items.length
  }

  Queue.prototype.toString = function () {
    var resString = '';

    for (var i = 0; i < this.items.length; i++) {
      resString += this.items[i] + ' ';
    }

    return resString;
  }
}

const q = new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
console.log(q.items) // [10, 20, 30]

q.dequeue()

console.log(q.items) // [20, 30]

console.log('front', q.front()) // 20
console.log('isEmpty', q.isEmpty()) // false
console.log(q.size()) // 2
console.log(q.toString()) // 20 30
```

#### 优先级队列

- 优先级队列, 在队列的基础上, 增加优先级, 实际上就是用了splice方法, 在合适的位置插入

```javascript
function PriorityQueue() {

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.items = [];


  PriorityQueue.prototype.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority);

    if (this.items.length == 0) {
      this.items.push(queueElement)
    } else {
      var added = false;

      for (var i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true;
          break;
        }
      }

      if (!added) {
        this.items.push(queueElement)
      }
    }
  }

  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift();
  };

  PriorityQueue.prototype.front = function () {
    return this.items[0];
  };

  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  PriorityQueue.prototype.size = function () {
    return this.items.length;
  };

  PriorityQueue.prototype.toString = function () {
    var resString = "";
    for (var i = 0; i < this.items.length; i++) {
      resString += this.items[i] + " ";
    }
    return resString;
  };
}

const q = new PriorityQueue()

q.enqueue(10, 2);
q.enqueue(20, 1);
q.enqueue(30, 3);
console.log(q)
```

#### 应用

1. 击鼓传花

```javascript
const Queue = require("./queue");

/**
 * 击鼓传花游戏规则：
 * 几个朋友一起玩一个游戏，围成一圈，开始数数，数到某个数字的人自动淘汰
 * 最后剩下的这个人会获得胜利，请问：最后胜利者原来在哪一个位置上
 */
let names = ["小明", "小红", "小亮"];

function passGame(nameList, stopNum = 1) {
  let q = new Queue();
  for (const item of nameList) {
    q.enqueue(item);
  }

  while (q.size() > 1) {
    for (let i = 0; i < stopNum - 1; i++) {
      q.enqueue(q.dequeue());
    }
    q.dequeue();
  }
  console.log("最后剩下的人是:", q.front()); // 最后剩下的人是: 小红
  return nameList.indexOf(q.front()); //返回对应的位置
}

console.log(passGame(names, 3)); // 1

```
