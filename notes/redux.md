
# redux

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



# react-redux

React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）。

## UI 组件  又称 纯组件

- 只负责 UI 的呈现，不带有任何业务逻辑
- 没有状态（即不使用this.state这个变量）
- 所有数据都由参数（this.props）提供
- 不使用任何 Redux 的 API

## 容器组件  负责管理数据
- 负责管理数据和业务逻辑，不负责 UI 的呈现
- 带有内部状态
- 使用 Redux 的 API

## connect
React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。

## mapStateToProps, mapDispatchToProps
前者负责输入逻辑，即将state映射到 UI 组件的参数（props），后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。

## <Provider> 组件

Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了


# Redux Thunk
