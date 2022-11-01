## TS（Typescript）-- ?. （问号+点）,? ?（问号问号）

- a?.b ---> a && a.b ? a.b : undefined
  - 也就是说：如果a和a.b都为真（即二者not null or undefined）那么取a.b的值，如果不为真则返回undefined
- a.b ?? []  ---> a.b ? a.b : []
