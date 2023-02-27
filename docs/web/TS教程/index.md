## TS 入门到精通

::: danger 温馨提示
本教程来源自己总结+网上收集  
目的为了大家更方便,更直观的理解其中的意思
:::

---

::: details 索引类型 keyof

```js
class KeyCls {
  name: string
  age: number
}
type KeyClsExample1 = keyof KeyCls // name | age

function getParams(params: keyof KeyCls) {}

getParams('name') // 正常
getParams('age') // 正常
getParams('sex') // 报错
```

:::

---

::: details in
in 可以遍历枚举类型

```js
type Keys = 'a' | 'b'
type Obj = {
  [p in Keys]: any;
}

// type Obj = {
//     a: any;
//     b: any;
// }
```

:::

---

::: details extends

```js
type TExtends<T, U> = T extends U ? number : never;
type TExtendExample = TExtends<number, number | string> // number


// 联合类型, 表示如果T中的类型是U的子集, 那么返回never, 否则返回T, 这个过程可以理解为对T中的类型进行一次遍历, 每个类型都执行一次extends
type NonNullable1<T, U> = T extends U ? never : T
type NonExample = NonNullable1<null | string, null | undefined> // string

```

:::

::: details Pick
Pick 英文意思挑选, 也就是从某种类型中挑选出一个或多个属性

```js
interface Todo {
  title: string
  desc: string
  Done: boolean
}

type TodoPreview = Pick<Todo, 'Done'>
// type TodoPreview = {
//     Done: boolean;
// }

// 实现
type MyPick<T, K extends keyof T = keyof T> = {
  [P in K]: T[P]
}
// K in extends keyof T = keyof T, 意思是取值必须是在T的key上面取, 如果不传递取值默认为keyof T,所有的key, 内部取值是如果传递了K, 则属性就在K中任意一个
```

:::

---

::: details Readonly

```js
interface Todo {
  title: string
  desc: string
  Done: boolean
}
const todo: Pick<Readonly<Todo>, 'title'> = {
  title: '你好'
}

todo.title = '啊啊啊'; // 无法为“title”赋值，因为它是只读属性

// 实现
type myReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
// 分析: 通过keyof拿到所有的key属性值组成联合类型, 然后通过in遍历类型,在属性值前面加上readonly, 值value则是 T[K]

// 通过上面案例还可以实现可选类型

type myOptional<T> = {
  [K in keyof T]?: T[K]
}
```

:::

---

::: details Exclude

- 语法: Exclude<T, U>, 返回 T 中不存在于 U 的部分

```js
type myExclude<T, U> = T extends U ? never : T

// 测试
type excludeExample = myExclude<'a' | 'b', 'a' | 'c'> // 'b'
// 分析: 对T也就是'a'|'b'遍历, a extends 'a'|'b', 返回never, 'b', 'a'|'b',返回'b', 所以上面的返回'b'
```

:::

---

::: details infer
infer 可以推荐一个类型变量, 相当于声明一个类型变量, 这个变量的类型取决于传入的泛型 T

```js
type Flatten<T> = T extends Array<infer U> ? U : T;

type flattenExample1 = Flatten<string> // string
type flattenExample2 = Flatten<string[]>

type Fn<T> = T extends () => infer R ? R : T;
type TFuncExample1 = Fn<string> // string
type TFuncExample2 = Fn<() => boolean> // boolean

type TObj<T> = T extends { a: infer VType, b: infer UType } ? VType | UType : T;
type TObjExample = TObj<string> // string
type TObjExample2 = TObj<{
  a: number
  b: string
}>
// type TObjExample2 = string | number

function vb() {
  return {a: 2, b: true}
}
type TObjExample3 = TObj<typeof vb>
// type TObjExample3 = () => {
//     a: number;
//     b: boolean;
// }
```

:::

---

::: details ReturnType\<T>

```js
type ReturnType<T> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
// infer R 就是生命一个变量来承载传入函数签名的返回值类型,简单说就是用它取到函数返回值的类型方便之后使用.

function foo(x: number): Array<number> {
  return Array(10).fill(10).map((res, i) => i+1)
}

type fn2Type2 = myReturnType<typeof foo> // number[]
```

:::

---

::: details Partial
将传入的属性变为可选项

```js

interface Todo {
  title: string
  desc: string
  Done: boolean
}

class KeyCls {
  name: string
  age: number
}

type Partial<T> = {
  [P in keyof T]?: T[P]
}

type KeyOfExample1 = Partial<Todo>
type KeyOfExample2 = Partial<KeyCls>
let keyofEx1: KeyOfExample1 = {
  title: '1'
}
```

:::

---

::: details -? +?

-? 将可选项代表的 ?去掉, 将该类型变成必选项, 与之对应的还有一个+?,是将可选项变成必选项

```js

interface Todo {
  title: string
  desc: string
  Done: boolean
}

type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}


type mutableExample = Mutable<Readonly<Todo>>
// 将Todo变成可读之后再变成可写
```

:::

---

::: details Required
Required 的作用是将传入的属性变成必选项

```js
type Required<T> = {
  [P in keyof T]-?: T[P]
}
```

:::

---

::: details Record
作用: 将 K 中所有的属性的值转化为 T 类型

```js
type myRecord<K extends keyof any, T> = {
  [P in K]: T
}

enum Methods {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PUT = "put",
}

type IRouter = myRecord<Methods, (req: any, res: any) => void>

// type IRouter = {
//     get: (req: any, res: any) => void;
//     post: (req: any, res: any) => void;
//     delete: (req: any, res: any) => void;
//     put: (req: any, res: any) => void;
// }
```

:::

---

::: details Omit
作用: 排除某个某些字段

```js
interface Todo {
  title: string
  desc: string
  Done: boolean
}

// 上面学习了Pick, 这个意思和Pick相反, 可以使用Pick+Exclude实现
// Exclude<T, U>, 返回T中不存在于U的部分
// Pick<T, K>, 从T中挑出K
type P<T, K> = Exclude<keyof T, K>
type P1 = P<Todo, 'title'> // 'desc' | 'Done'
type myOmit<T, K extends keyof any> = Pick<T, P<T, K>>
type omitExample = myOmit<Todo, 'title'>
// type omitExample = {
//     desc: string;
//     Done: boolean;
// }
```

:::

::: details NonNullable
NonNullable\<T\>：作用是去掉 T 中的 null 和 undefined。T 为字面量/具体类型的联合类型，如果是对象类型是没有效果的。如下

```js
// 4.8版本之前
type NonNullable<T> = T extends null | undefined ? never : T;
// 4.8版本
type NonNullable<T> = T & {}
```

:::

::: details Awaited
Awaited\<T\>：作用是获取 async/await 函数或 promise 的 then() 方法的返回值的类型。而且自带递归效果，如果是这样嵌套的异步方法，也能拿到最终的返回值类型

```js
type N1 = Awaited<Promise<string>>

type N2 = Awaited<Promise<Promise<number>>>

// 联合类型, 会出发分发
type N3 = Awaited<boolean | Promise<number>>

// 源码定义
type Awaited<T> = T extends null | undefined
? T
: T extends object & { then(onfulfilled: infer F): any }
  ? F extends (value: infer V, ...args: any) => any
    ? Awaited<V>
    :never
  : T
```

:::

::: details Parameters
Parameters\<T\>：作用是获取函数所有参数的类型集合，返回的是元组。T 自然就是函数了

```js
type T1 = Parameters<() => string> // []

type T2 = Parameters<(s: string) => void> // [s: string]

// 泛型参数的函数
type T3 = Parameters<<T>(arg: T) => T> // [arg: unknown]

// 下面这样传参是会报错的
type T7 = Parameters<string>;
type T8 = Parameters<Function>;
```
:::

---

::: details 练习题

```js
// 给定一个多层级的对象, 将所有属性改为可选属性
type User = {
    name: string
    age: number
    children: {
        boy: number
        girl: number
    }
}


// 思路: 我们都知道 Partial可以改变第一层, 也就等于说是需要使用Partial进行递归遍历

type Partial<T> = { [P in keyof T]?: T[P] }

// 递归Partial
type DeepOptional<T> = T extends object ? { [P in keyof T]?: DeepOptional<T[P]> } : T

// 递归Required
type DeepRequired<T> = T extends object ? { [P in keyof T]-?: DeepRequired<T[P]> } : T

// 递归Readonly
type DeepReadonly<T> = T extends object ? { readonly [P in keyof T]: DeepReadonly<T[P]> } : T
```

```js
// 需要把如下类型变成 { name: string }
type User = {
    name: string
    age: null,
    gender: undefined
}

// 实现如下
type objNonNullable<T> = { [P in keyof T as T[P] extends null | undefined ? never : P]: T[P] }
```

:::
