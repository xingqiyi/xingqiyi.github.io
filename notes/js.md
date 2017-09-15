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

var todo = {id: 0, text: "sdfasdf", completed: false};
var b = {...todo, completed: !todo.completed}