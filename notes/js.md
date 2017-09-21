## es6 import  export default



### 数组的解构赋值
```js
let [a, b, c] = [1, 2, 3];
```

### 对象的解构赋值

```js
let { foo, bar } = { foo: "aaa", bar: "bbb" };

// 错误的写法
let x;
{x} = {x: 1};
// SyntaxError: syntax error

// 正确的写法
let x;
({x} = {x: 1});
```

### 字符串的结构复制
```js
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
```

### 函数参数的解构
```js
function add([x, y]){
  return x + y;
}
add([1, 2]); // 3
//上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。

[[1, 2], [3, 4]].map(([a, b]) => a + b);
// [ 3, 7 ]
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