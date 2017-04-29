 

 
- makeAdder 是一个函数工厂
- add5,add10 都是 闭包
- add5 和 add10 享有相同的函数体定义
- 但是存储不同的词汇环境
- 在 add5的词汇环境中 x 为 5   add10 词汇环境中 x 为10


```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

```


##闭包
 
- 闭包让你能 把 一些数据(词汇环境 如 x) 和操作这些数据的函数关联起来
- 这一点 和 object oriented programming 目标一致的
- objects 让你能把 一些数据(对象的属性) 与 一个或多个函数关联
- 因此 你想正常使用只有一个方法的对象时 你都能用闭包
- 比较常见的是 我们定义一个行为函数  然后绑定到一个用户事件上

```javascript
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);


document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
```


