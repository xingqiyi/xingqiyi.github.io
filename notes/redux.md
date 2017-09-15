
1. 用户发出Action
```js
store.dispatch(action);
```

2. Store 自动调用 Reducer,  传2个参数 当前 State 和 收到的 Action
```
let nextState = todoApp(previousState, action);
```

3. Reducer 会返回新的 State

4. State 一旦有变化, Store 就会触发更新 View

