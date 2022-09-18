::: details JavaScript代码调用顺序分析
```js

var a = 2
function add(b,c){
  return b+c
}
function addAll(b,c){
  var d = 10
  result = add(b,c)
  return  a+result+d
}
addAll(3,6)
```

总结: 变量a, 函数add, addAll都保存到了全局上下文的变量环境, 全局执行上下文压入栈中之后,JavaScript开始执行全局代码, a = 2, 执行对该语法会将全局上下文变量a设置为2, 紧接着调用addAll函数, JavaScript编译内部代码, 为其内部创建一个执行上下文, 最后将该函数的执行上下文压入栈中, addAll内部变量为d=undefined,result=undefined, JavaScript开始执行函数内部代码, d = 10, 执行add函数, 为其创建执行上下文, 压入调用栈, 当add函数返回时, 该函数的执行上下文会从栈顶弹出, 并且将result赋值设置为add函数的返回值, 最后返回a+result+d值, 将addAll函数弹出栈

当分配的调用栈空间被占满之后, 会引发堆栈溢出的问题 
:::


::: details 为什么要JavaScript要区别“堆”和“栈”, 为什么不把所有的数据都放在“栈”中
因为JavaScript引擎需要栈来维护程序执行期间上下文的状态, 如何栈空间太大, 所有的数据都存放在栈空间中, 会影响上下文执行的效率

所以通常情况下，栈空间都不会设置太大，主要用来存放一些原始类型的小数据。而引用类型的数据占用的空间都比较大，所以这一类数据会被存放到堆中，堆空间很大，能存放很多大的数据，不过缺点是分配内存和回收内存都会占用一定的时间。


:::
