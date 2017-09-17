## es6 import  export default



### 数组的解构赋值
```js
let [a, b, c] = [1, 2, 3];
```

### 对象的解构赋值

```js
let { foo, bar } = { foo: "aaa", bar: "bbb" };
```


### ...

```js
var todo = {id: 0, text: "sdfasdf", completed: false};
var b = {...todo, completed: !todo.completed}
```

### Object.assign()  合并对象

```js
Object.assign(target, source1, source2);
```

### Object.keys(), Object.values(), Object.entries()

```js
var obj = { foo: 'bar', baz: 42 };
Object.keys(obj)
// ["foo", "baz"]
```

```js
let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}```