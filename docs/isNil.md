```text
* -> boolean
```

检查传入值是否为 undefined 或 null。

> [What is the difference between `undefined` and `void 0` ?](https://stackoverflow.com/questions/5716976/javascript-undefined-vs-void-0)

`isNil` implements in `Dubhe`, `Lodash` and `Ramda`。

`Dubhe`:

```ts
const isNil: (value: any) => boolean = (value) => {
  return value === undefined || value === null
}

export default isNil
```

`Lodash`:

```js
function isNil(value) {
  return value == null
}
export default isNil
```
`Ramda`:

```js
var isNil = _curry1(function isNil(x) { return x == null; });
export default isNil;
```
