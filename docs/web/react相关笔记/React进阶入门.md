## React进阶入门

-------------------

<end-time time="2022-110-25 00:23" mood="一般" />


-------------------

### React.Children

```javascript {2-7}
const Children: {
  map<T, C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => T):
    C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
  forEach<C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => void): void;
  count(children: any): number;
  only<C>(children: C): C extends any[] ? never : C;
  toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
};
```

#### React.Children.toArray

```javascript
const flatChildren = React.Children.toArray(children)
console.log(flatChildren)

// - eg:

// ---before---
{
  $$typeof: Symbol(react.element)
  key: '.0'
  props: {
    children: '...'
  }
  ref: null
  type: 'ul'
}
//---after---
[{
  $$typeof: Symbol(react.element),
  key: '.0',
  props: {
    children: '...'
  },
  ref: null,
  type: 'ul'
}]
```

