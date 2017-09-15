# css 在 android 中的兼容问题

##  文字 垂直居中  在 android 中偏上
```css
outer{
  display:table;
  position:relative;
}
inner{
  display:table-cell;
  position: absolute;
}

```

## border-radius:50% 不圆
把rem宽高改为px就ok



## space-evenly 在 android 中不支持