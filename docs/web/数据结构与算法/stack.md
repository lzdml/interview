<end-time time="新增时间: 2022-11-20 11:47" />

### 栈(stack)

-----------------

#### 介绍

- **数组**是一种线性结构, 并且可以在数组的任意位置插入和删除元素, 但是有时候, 我们为了实现某些功能, 必须对这种任意性加以限制.
  栈和队列就是比较常见的**受限的线性结构**

特点:

- 栈是**后进先出(last in first out)**, 就是最后进入的元素, 先出栈
- 栈的最上面的元素被称为**栈顶**, 栈的最内的元素, 被成为**栈底**
- 向一个栈插入新元素又成为**进栈, 入栈, 压栈**, 把新元素放到栈顶元素的上一层, 使之成为新的栈顶元素
- 从一个栈删除元素又称为出栈或者退栈, 它是把栈顶元素删除掉, 使其相邻的元素成为新的栈顶元素

#### 程序中的栈

- **函数调用栈: A(B(C(D())))**, 即A函数中调用B, B调用C, C调用D, 在A执行的过程中会将A压入栈,
  随后B执行事B也压入栈,函数C和D执行时也会被压入栈, 所以当前栈执行顺序A->B-C-D(栈顶), 当函数D执行完之后, 会弹出栈被释放,
  弹出栈的顺序为D->C->B->A
- **递归:** 为什么会出现**栈溢出**, 就是因为函数不断的调用自身, 没有弹出栈

#### 实现栈结构

栈常见的操作

- push() 添加一个新元素到栈顶位置
- pop() 移除栈顶的元素, 同时返回被移除的元素
- peek() 返回栈顶的元素, 不对栈做任何修改(该方法不会移除栈顶元素, 仅仅是返回)
- isEmpty() 如果栈里面没有任何元素就返回true, 否则返回false
- size() 返回栈里的元素个数, 这个方法和数组的length属性类似
- toString() 将栈结构的内容以字符串的形式返回

#### 代码实现

```js
function Stack() {
  this.items = [];

  //  如栈
  Stack.prototype.push = function (element) {
    return this.items.push(element)
  }

  // 出栈
  Stack.prototype.pop = function () {
    return this.items.pop()
  }
  // 查看栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }
  // 判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  }
  // 返回栈的长度
  Stack.prototype.size = function () {
    return this.items.length
  }
  // toString方法
  Stack.prototype.toString = function () {
    let resString = '';
    for (var i = 0; i < this.items.length; i++) {
      resString += this.items[i] + ' ';
    }
    return resString;
  }
}


// 测试

var stack = new Stack()
stack.push('10')
stack.push('20')
stack.push('30')

console.log(stack.items) // ['10', '20', '30']

stack.pop()
console.log(stack.items) // ['10', '20']

console.log(stack.peek()) // 20
console.log(stack.isEmpty()) // false
console.log(stack.size()) // 2
console.log(stack.toString()) // 10 20
```

#### 应用

1. 利用栈结构实现十进制转换为二进制的方法

```js
function dec2bin(decNumber) {
  var stack = new Stack();
  while (decNumber > 0) {
    stack.push(decNumber % 2);
    decNumber = Math.floor(decNumber / 2);
  }

  var binnerString = '';
  while (!stack.isEmpty()) {
    binnerString += stack.pop();
  }

  return binnerString;
}

console.log(dec2bin(100)) // 110010
```

2. [有效的括号(leetcode)](https://leetcode.cn/problems/valid-parentheses/)

```js
function isValid(s) {
  if (s.length % 2 === 1) {
    return false
  }

  var stack = [];
  var length = s.length;
  var map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  for (var i = 0; i < length; i++) {
    var c = s[i];
    if (map.has(c)) {
      stack.push(c);
    } else {
      var stackTop = stack[stack.length - 1];
      if (map.get(stackTop) === c) {
        stack.pop()
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
```

#### 解题思路

- 使用栈结构先进后出的特性

- 先声明一个栈stack变量
- 遍历整个字符串
- 发现 ( 、 {、 [ 就入栈
- 发现 )、}、] 就和栈顶做比较，若栈顶存在对应的括号，将与之对应的括号出栈
- 遍历结束后，若栈空，则说明所有括号都能找到相匹配的
