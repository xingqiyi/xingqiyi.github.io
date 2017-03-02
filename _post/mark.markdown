---
layout: post
title:  "Float属性"
date:   2016-06-22 20:43:50 +0800
tags: [CSS]
---

# Float

标签（空格分隔）： CSS Float

---

CSS中的`float`属性被用来在网页上定位和布局。

```CSS
.module{
    float: left;
}
```
### **Values**
* `none`:这个元素不浮动。这是默认值。
* `left`:浮动这个元素到容器的左边
* `right`:浮动元素到容器的右边
* `ingerit`:这个元素继承父元素的浮动方向。

*Note*:一个被设置为float的元素会自动变为  display:block;

### **浮动意味着什么**

为了理解这个最初的目的和`float`的起源，我们可以看印刷设计。在一个印刷布局，图片也许被像这样放在页面上——文本包裹在它的周围。这是一个例子：

![Print Layout][1]


在页面布局编程种，这个包括文本的盒子可能被...
> In page layout programs, the boxes that hold the text can be told to honor the text wrap, or to ignore it.

忽略这个文字换行将浮动到图片的右边。

![Web Layout][2]


在网页设计中，被只为`float`属性的页面元素就像那张图片一样文本将环绕在它周围。

### **Demo**

Demo展示了一篇有两张图片的文章：一个被设置为`float:left`,另外一个被设置为`float:right`。

### **Floats For Layout**

除过简单的文字环绕例子外，floats可以被用来创建整个网页的布局。

![网页布局][3]


Floats在更小的实例中也是很有用的布局。如果我们给我们的头像图片设置`float`，那么当这个图片大小被改变，将会重新渲染。

![此处输入图片的描述][4]


这个同样的布局也可以用相对定位和绝对定位来完成在容器元素内部。但是，相比较而言效果不是特别完美。

![Error][5]


### **Demo**

记住这个文字将重新流动适应这个图片而代替显示在这个图片上面。

### **清除浮动**

浮动的同类型属性是 `clear`。一个被设置了`clear`属性的元素将不会移动靠近临近的浮动元素正如float的期待，但是将移动它本身通过float。行动比说话要更加有用，

![Not Clear][6]



在上面的例子中，`sidebar`被浮动到右边并且比主页面内容要更短。页脚被要求放置在剩余可用的空间。页脚可以被清除浮动来让它放置在两个浮动元素的下面。

```CSS
#footer {
   clear: both;
}
```
![Cleared][7]


Clear有四个有效的属性。`both`是最常用，它清除来自每一个方向的浮动。`left`和`right`都可以被用来仅仅清除其中一个方向的浮动。初始值是`none`，一般认为这个值是没有必要的除非它被显式移除 已经设置的`clear`属性值

`inherit`属性使这个元素它的父元素的`clear`属性。IE直到IE8才支持这个属性。

### **The Great Collapse**

浮动工作时更加令人困惑的事情是他们是怎样影响包含他们的父元素。如果一个父元素只包含浮动元素，那么它的高度将折叠到没有。

![Collapsed][8]


  [1]: https://css-tricks.com/wp-content/csstricks-uploads/print-layout.png
  [2]: https://css-tricks.com/wp-content/csstricks-uploads/web-text-wrap.png
  [3]: https://css-tricks.com/wp-content/csstricks-uploads/web-layout.png
  [4]: https://css-tricks.com/wp-content/csstricks-uploads/reflow-example-1.png
  [5]: https://css-tricks.com/wp-content/csstricks-uploads/reflow-example-2.png
  [6]: https://css-tricks.com/wp-content/csstricks-uploads/unclearedfooter.png
  [7]: https://css-tricks.com/wp-content/csstricks-uploads/clearedfooter.png
  [8]: https://css-tricks.com/wp-content/csstricks-uploads/collapse.png

### **清除浮动的技术**

* **空Div方法** `<div style="clear: both;"></div>`。有时，你也许会看到一个`<br />`元素或者其它随机的元素被用。但是div元素是最常见的因为它没有浏览器默认的样式，没有任何特殊功能。这个方法因为语义问题对于页面而被放弃。当然，严格来说，他们是正确的。它完成了工作并且没有影响其他部分，
* **The Overflow Method** 依赖设置CSS属性 `overflow`在它的父元素上。如果这个属性被设置为 `auto` 或者 `hidden`在父元素上，这个父元素将扩展包含浮动元素。这个方法有着清晰的语义，因为它不要求额外的元素。然而，如果你发现你添加了一个新的`div   `元素仅仅是为了应用这个方法。
* **最简单的清除浮动的方法** （也被了解"clearfix"）用一个CSS伪元素(`:after`）来清除浮动。而不是设置overflow在父元素上。你应用一个额外的类例如 "clearfix"。


{% highlight css %}
.clearfix:after {
  content: "";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
{% endhighlight %}