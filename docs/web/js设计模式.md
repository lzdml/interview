## js设计模式


<end-time time="2022-11-12 14:41" mood="没心没肺的活着" />

::: details 封装多态
```js
// 通用函数
function makeSound(anima) {
  anima.sound()
}

class Duck {
  sound() {
    console.log('嘎嘎嘎')
  }
}

class Chicken {
  sound() {
    console.log('咯咯咯')
  }
}

makeSound(new Duck()) // 嘎嘎嘎
makeSound(new Chicken()) // 咯咯咯
```
:::



------------------

::: details 高阶函数
- 前言
高阶函数至少要满足下面条件之一的  
函数可以作为参数被传递  
函数可以作为返回值输出


#### 回调函数
  - 下面例子中使用回调函数给新建的每个 div 设置样式，如果全部都在一个函数里，显然是不合理的，这样可以将创建 div 和设置样式的两个逻辑进行分离, 其实设置样式可能是用户发起的，所以这样就完美了进行了分离
```js
function renderDiv(callback) {
  for (let i = 0; i < 10; i++) {
    const div = document.createElement('div')
    div.innerText = i
    document.body.appendChild(div)
    if (typeof callback === 'function') {
      callback(div)
    }
  }
}

renderDiv((node) => {
  node.style.color = 'red'
})
```


#### 函数作为返回值输出
```js
function getType(type) {
  return function (target) {
    return Object.prototype.toString.call(target) === `[object ${type}]`
  }
}

const t1 = getType('String')

console.log(t1('123')) // true
console.log(t1(222)) // false

```

:::


::: details 单例模式
```js
class Render {
  constructor(html) {
    if (!Render.instance) {
      Render.instance = this
      this.html = html
      this.init()
    }
    return Render.instance
  }
  init() {
    const div = document.createElement('div')
    div.innerText = this.html
    document.body.appendChild(div)
  }
}

const node1 = new Render('hello')
const node2 = new Render('hello2')

console.log(node1 === node2) // true

```

#### 使用代理实现单例
```js
// 渲染类
class CreateDiv {
  constructor(html) {
    this.html = html
    this.init()
  }
  init() {
    const div = document.createElement('div')
    div.innerText = this.html
    document.body.appendChild(div)
  }
}

// 代理类
class Render {
  constructor(html) {
    if (!Render.instance) {
      Render.instance = new CreateDiv(html)
    }
    return Render.instance
  }
}

const node1 = new Render('hello')
const node2 = new Render('hello-121')

console.log(node1 === node2) // true
```


#### 通用惰性单例
在上面例子中，我们在页面中创建了一个唯一的 div 元素，但是这个函数并不灵活，如果想要吧 div 改为 p 那么就要重写一遍这个函数，所以接下来要封装一个通用惰性单例模式
```js 
<button id="btn">点击</button>


function render(fn) {
  let instance
  return function () {
    return instance || (instance = fn())
  }
}

function createDiv() {
  const div = document.createElement('div')
  div.innerText = '这是一个 div'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}

function createInput() {
  const input = document.createElement('input')
  input.style.display = 'none'
  document.body.appendChild(input)
  return input
}

const createRenderDiv = render(createDiv)
const createRenderInput = render(createInput)

document.getElementById('btn').addEventListener('click', () => {
  const div = createRenderDiv()
  const input = createRenderInput()
  div.style.display = 'block'
  input.style.display = 'block'
})

```
:::



::: details 策略模式
```js
class GradeS {
  computed(bonus) {
    return bonus * 4
  }
}

class GradeA {
  computed(bonus) {
    return bonus * 3
  }
}

class GradeB {
  computed(bonus) {
    return bonus * 2
  }
}

class ComputedBonus {
  constructor(salary, strategy) {
    this.salary = salary
    this.strategy = strategy
  }
  getBonus() {
    return this.strategy.computed(this.salary)
  }
}

const computedBonus1 = new ComputedBonus(3000, new GradeS())
const computedBonus2 = new ComputedBonus(2000, new GradeA())

console.log(computedBonus1.getBonus()) // 12000
console.log(computedBonus2.getBonus()) // 6000

```
:::