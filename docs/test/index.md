---
title: '学习VitePress1'
editLink: true
---


# {{ $frontmatter.title }}

## 学习vite-press




![vue](https://v3.cn.vuejs.org/logo.png)


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


:smirk:

:hankey:

[所有表情包地址](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)


[[toc]]



::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::



::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::



```js
export default {
  name: 'MyComponent',
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

```css{1-2}
* {
  margin: 0;
  padding: 0;
}
```


<!-- 导入代码片段 -->
<<< @/index.md



![vue](/favicon.ico)


```js
<script setup>
  {{ 1 + 1 }}
</script>
```

```html
<span v-for="i in 3">{{ i }}</span>
```

<script setup>
import CustomComponent from '../../components/CustomComponent.vue'
</script>

# Docs

This is a .md using a custom component

<CustomComponent />

## More docs


<VueClickAway />