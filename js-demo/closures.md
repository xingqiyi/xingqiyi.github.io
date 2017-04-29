 

<h1 id="introduction">闭包</h1>

 
<h2 id="grammar">css 中的各种巧妙实现</h2>

- [background-border](css3-demo/2.html)
- [shapes](css3-demo/3.html)
- [shadow-foldedcorner](css3-demo/4.html)
- [font](css3-demo/5.html)
- [user-experience](css3-demo/6.html)
- [layout](css3-demo/7.html)
- [animation](css3-demo/8.html)
  


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

- makeAdder 是一个函数工厂
- add5,add10 都是 闭包
- add5 和 add10 享有相同的函数体定义
- 但是存储不同的词汇环境
- 在 add5的词汇环境中 x 为 5   add10 词汇环境中 x 为10


---

<h2 id="library">javascript</h2>

 
 
 
