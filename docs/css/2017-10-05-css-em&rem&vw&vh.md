---
title: em、rem、vw、vh
date: 2017-10-05
author: Ruiyoung
tag:
  - css
---

### em

> em 作为 font-size 的单位时，其代表相对父元素的字体大小，em 作为其他属性单位时，代表相对自身字体大小

```{.html}
<div class="p1">
  <div class="s1">1</div>
  <div class="s2">1</div>
</div>
<div class="p2">
  <div class="s5">1</div>
  <div class="s6">1</div>
</div>
```

```{.css}
.p1 {font-size: 16px; line-height: 32px;}
.s1 {font-size: 2em;}
.s2 {font-size: 2em; line-height: 2em;}

.p2 {font-size: 16px; line-height: 2;}
.s5 {font-size: 2em;}
.s6 {font-size: 2em; line-height: 2em;}
```

计算 px 的结果

```{.css}
p1 {
  font-size: 16px;
  line-height: 32px;
}
s1 {
  font-size: 32px;  // 作为font-size的单位,相对父元素p1的字体大小 2em = 2 * 16px = 32px
  line-height: 32px; // 无赋值，line-height继承父元素p1计算值32px
}
s2 {
  font-size: 32px;  // 作为font-size的单位,相对父元素p1的字体大小 2em = 2 * 16px = 32px
  line-height: 64px;  // 作为其他属性单位, 相对自身字体大小 2em = 2 * 32px = 64px
}
p2 {
  font-size: 16px;
  line-height: 32px; // 作为其他属性单位, 相对自身字体大小, 2的意思是两倍, 2 * 16px = 32px
}
s5 {
  font-size: 32px; // 作为font-size的单位,相对父元素p2的字体大小 2em = 2 * 16px = 32px
  line-height: 64px; // 无赋值，line-height继承父元素p2计算值2, 作为其他属性单位, 相对自身字体大小 2 * 32px = 64px
}
s6 {
  font-size: 32px; // 作为font-size的单位,相对父元素p2的字体大小 2em = 2 * 16px = 32px
  line-height: 64px; // 作为其他属性单位, 相对自身字体大小 2em = 2 * 32px = 64px
}
```

### rem

> rem 作用于非根元素时，相对于根元素字体大小；rem 作用于根元素字体大小时，相对于其出初始字体大小

```{.css}
/* 作用于根元素，相对于原始大小（16px），所以html的font-size为32px*/
html {font-size: 2rem}

/* 作用于非根元素，相对于根元素字体大小，所以为64px */
p {font-size: 2rem}
```

#### rem 布局原理

其实 rem 布局的本质是等比缩放，一般是基于宽度，试想一下如果 UE 图能够等比缩放，那该多么美好啊

假设我们将屏幕宽度平均分成 100 份，每一份的宽度用 x 表示，x = 屏幕宽度 / 100，如果将 x 作为单位，x 前面的数值就代表屏幕宽度的百分比

```{.css}
p {width: 50x} /* 屏幕宽度100x的50% */
```

如果想要页面元素随着屏幕宽度等比变化，我们需要上面的 x 单位，不幸的是 css 中并没有这样的单位，幸运的是在 css 中有 rem，通过 rem 这个桥梁，可以实现神奇的 x

如果子元素设置 rem 单位的属性，通过更改 html 元素的字体大小，就可以让子元素实际大小发生变化

```{.css}
html {font-size: 16px}
p {width: 2rem} /* 32px*/

html {font-size: 32px}
p {width: 2rem} /*64px*/
```

如果让 html 元素字体的大小，恒等于屏幕宽度的 1/100，那 1rem 和 1x 就等价了

```{.css}
html {fons-size: width / 100}
p {width: 50rem} /* 50rem = 50x = 屏幕宽度的50% */
```

如何让 html 字体大小一直等于屏幕宽度的百分之一呢？ 可以通过 js 来设置，一般需要在页面 dom ready、resize 和屏幕旋转中设置

```{.javaScript}
document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px';
```

那么如何把 UE 图中的获取的像素单位的值，转换为已 rem 为单位的值呢？公式是**元素宽度 / UE 图宽度 \* 100**，让我们举个例子，假设 UE 图尺寸是 640px，UE 图中的一个元素宽度是 100px，根据公式 100/640\*100 = 15.625

| UE 图宽度 | UE 图中元素宽度 |
| :-------: | :-------------: |
|   640px   |      100px      |
|   480px   |      75px       |
|   320px   |      50px       |

通过我们的元素在不同屏幕宽度下的计算值

| 页面宽度 |  html 字体大小  |    p 元素宽度     |
| :------: | :-------------: | :---------------: |
|  640px   | 640/100 = 6.4px | 15.625\*6.4=100px |
|  480px   |  480/100=4.8px  | 15.625\*4.8=75px  |
|  320px   |  320/100=3.2px  | 15.625\*3.2=50px  |

##### saas 预处理转换

```{.css}
$ue-width: 640; /* ue图的宽度 */

@function px2rem($px) {
  @return #{$px/$ue-width*100}rem;
}

p {
  width: px2rem(100);
}
```

上面的代码编译完的结果如下

```{.css}
p {width: 15.625rem}
```

现在有了 postcss 后，这个过程应该放到 postcss 中,

```{.css}
p {width: 100px2rem} /* postcss会对px2rem这个单位进行处理 */
```

#### 比 Rem 更好的方案 vw、vh

想让页面元素随着页面宽度变化，需要一个新的单位 x，x 等于屏幕宽度的百分之一，css3 带来了 rem 的同时，也带来了 vw 和 vh

> vw —— 视口宽度的 1/100；vh —— 视口高度的 1/100

根据定义可以发现 1vw=1x，有了 vw 我们完全可以绕过 rem 这个中介了，下面两种方案是等价的，可以看到 vw 比 rem 更简单，毕竟 rem 是为了实现 vw 么

```{.css}
/* rem方案 */
html {fons-size: width / 100}
p {width: 15.625rem}

/* vw方案 */
p {width: 15.625vw}
```

vw 还可以和 rem 方案结合，这样计算 html 字体大小就不需要用 js 了

```{.css}
html {fons-size: 1vw} /* 1vw = width / 100 根据屏幕宽度自动变更大小*/
p {width: 15.625rem}
```

| 兼容性 | Ios  | 安卓 |
| ------ | ---- | ---- |
| rem    | 4.1+ | 2.1+ |
| vw     | 6.1+ | 4.4+ |

vw 的兼容性不如 rem 好  
在使用弹性布局时，一般会限制最大宽度，比如在 pc 端查看我们的页面，此时 vw 就无法力不从心了，因为除了 width 有 max-width 外，其他单位都没有，而 rem 可以通过控制 html 根元素的 font-size 最大值，vw 永远是视口宽度的 1/100，没有办法控制最大值

#### 一些重要的问题

> rem 是弹性布局的一种实现方式，弹性布局可以算作响应式布局的一种，但响应式布局不是弹性布局，弹性布局强调等比缩放，100%还原；响应式布局强调不同屏幕要有不同的显示，比如媒体查询
> 用户选择大屏幕有两个几个出发点，有些人想要更大的字体，更大的图片，比如老花眼的我；有些人想要更多的内容，并不想要更大的图标
> 一般内容型的网站，都不太适合使用 rem，因为大屏用户可以自己选择是要更大字体，还是要更多内容，一旦使用了 rem，就剥夺了用户的自由，比如百度知道，百度经验都没有使用 rem 布局；一些偏向 app 类的，图标类的，图片类的，比如淘宝，活动页面，比较适合使用 rem，因为调大字体时并不能调大图标的大小

###### 字体问题

字体大小并不能使用 rem，字体的大小和字体宽度，并不成线性关系，所以字体大小不能使用 rem；由于设置了根元素字体的大小，会影响所有没有设置字体大小的元素，因为字体大小是会继承的，我们可以在 body 上做字体修正，比如把 body 字体大小设置为 16px

```{.css}
html {fons-size: width / 100}
body {font-size: 16px}
```

字体的大小如何实现响应式呢？可以通过修改 body 字体的大小来实现，同时所有设置字体大小的地方都是用 em 单位，对就是 em，因为只有 em 才能实现，同步变化，em 就是为字体而生的

```{.css}
@media screen and (min-width: 320px) {
  body {font-size: 16px}
}
@media screen and (min-width: 481px) and (max-width:640px) {
  body {font-size: 18px}
}
@media screen and (min-width: 641px) {
  body {font-size: 20px}
}

p {font-size: 1.2em}
p a {font-size: 1.2em}
```

###### 页面过宽问题

用户在 PC 端浏览，页面过宽了，一般我们都会设置一个最大宽度，大于这个宽度的话页面居中，两边留白

```{.javaScript}
var clientWidth = document.documentElement.clientWidth;
clientWidth = clientWidth < 780 ? clientWidth : 780;
document.documentElement.style.fontSize = clientWidth / 100 + 'px';
```

设置 body 的宽度为 100rem，并水平居中

```{.css}
body { margin: auto; width: 100rem }
```

###### 用户禁用了 js 问题 （一般不会出现）

rem 布局中，如果用户禁用了 js, 无法通过 js 去修改 html 的 fontSize

首先可以添加 noscript 标签提示用户

```{.javaScript}
<noscript>开启JavaScript，获得更好的体验</noscript>
```

添加媒体查询设定

```{.css}
@media screen and (min-width: 320px) {
  html {font-size: 3.2px}
}
@media screen and (min-width: 481px) and (max-width:640px) {
  html {font-size: 4.8px}
}
@media screen and (min-width: 641px) {
  html {font-size: 6.4px}
}
```

这里有个问题，分成 100 份的话，假设屏幕宽度 320，**此时 html 大小是 3.2px，但浏览器支持最小字体大小是 12px**，怎么办？那就分成 10 份呗，只要把上面的 100 都换成 10 就好了

```{.css}
@media screen and (min-width: 320px) {
  html {font-size: 32px}
}
@media screen and (min-width: 481px) and (max-width:640px) {
  html {font-size: 48px}
}
@media screen and (min-width: 641px) {
  html {font-size: 64px}
}
```

### 总结

**最好的弹性布局方案是，rem+js 方案，同时还要解决 noscript 问题，解决字体问题，解决屏幕过宽问题**

完整例子

```{.html}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>rem布局</title>
</head>
<body>
    <noscript>开启JavaScript，获得更好的体验</noscript>

    <div class="p1">
        宽度为屏幕宽度的50%，字体大小1.2em
        <div class="s1">
            字体大小1.2.em
        </div>
    </div>

    <div class="p2">
        宽度为屏幕宽度的40%，字体大小默认
        <div class="s2">
            字体大小1.2em
        </div>
    </div>
</body>
```

```{.css}
html {
    font-size: 32px; /* 320/10 */
}
body {
    font-size: 16px; /* 修正字体大小 */
    /* 防止页面过宽 */
    margin: auto;
    padding: 0;
    width: 10rem;
    /* 防止页面过宽 */
    outline: 1px dashed green;
}

/* js被禁止的回退方案 */
@media screen and (min-width: 320px) {
    html {font-size: 32px}
    body {font-size: 16px;}
}
@media screen and (min-width: 481px) and (max-width:640px) {
    html {font-size: 48px}
    body {font-size: 18px;}
}
@media screen and (min-width: 641px) {
    html {font-size: 64px}
    body {font-size: 20px;}
}

noscript {
    display: block;
    border: 1px solid #d6e9c6;
    padding: 3px 5px;
    background: #dff0d8;
    color: #3c763d;
}
/* js被禁止的回退方案 */

.p1, .p2 {
    border: 1px solid red;
    margin: 10px 0;
}

.p1 {
    width: 5rem;
    height: 5rem;

    font-size: 1.2em; /* 字体使用em */
}

.s1 {
    font-size: 1.2em; /* 字体使用em */
}

.p2 {
    width: 4rem;
    height: 4rem;
}
.s2 {
    font-size: 1.2em /* 字体使用em */
}
```

```{.javaScript}
var documentElement = document.documentElement;

function callback() {
    var clientWidth = documentElement.clientWidth;
    // 屏幕宽度大于780，不在放大
    clientWidth = clientWidth < 780 ? clientWidth : 780;
    documentElement.style.fontSize = clientWidth / 10 + 'px';
}

document.addEventListener('DOMContentLoaded', callback);
window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', callback);
```
