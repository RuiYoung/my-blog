---
title: 迭代器模式
date: 2020-01-17
author: Ruiyoung
tag:
  - javaScript设计模式
---

#### 前言

> 迭代器模式提供一种方法顺序访问一个聚合对象中的各个元素，而又不暴露该对象的内部表示。

在 JS 中，本身也内置了一个比较简陋的数组迭代器的实现——Array.prototype.forEach

```{.javaScript}
const arr = [1, 2, 3]
arr.forEach((item, index)=>{
    console.log(`索引为${index}的元素是${item}`)
})
```

然而对于类数组对象，就失效了！

```{.html}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>事件代理</title>
</head>
<body>
    <a href="#">链接1号</a>
    <a href="#">链接2号</a>
    <a href="#">链接3号</a>
    <a href="#">链接4号</a>
    <a href="#">链接5号</a>
    <a href="#">链接6号</a>
</body>
<script>
  const aNodes = document.getElementsByTagName('a') // 拿到一个类数组对象
  console.log('aNodes are', aNodes)
  // 取其中一个a标签
  const aNode = aNodes[i]
  // 报错 aNodes.forEach is not a function
  aNodes.forEach((aNode, index){
    console.log(aNode, index)
  })
</script>
</html>
```

#### ES6 对迭代器的实现

JS 原生的集合类型数据结构，有 Array（数组）和 Object（对象）；而 ES6 中，又新增了 Map 和 Set。四种数据结构各自有着自己特别的内部实现，但我们仍期待以同样的一套规则去遍历它们，所以 ES6 在推出新数据结构的同时也推出了一套统一的接口机制——迭代器（Iterator）。

ES6 约定，任何数据结构只要具备 Symbol.iterator 属性（这个属性就是 Iterator 的具体实现，它本质上是当前数据结构默认的迭代器生成函数），就可以被遍历——准确地说，是被 for...of...循环和迭代器的 next 方法遍历。 事实上，for...of...的背后正是对 next 方法的反复调用。

```{.javaScript}
const arr = [1, 2, 3]
const len = arr.length
for(item of arr) {
    console.log(`当前元素是${item}`)
}
```

之所以能够按顺序一次一次地拿到数组里的每一个成员，是因为我们借助数组的 Symbol.iterator 生成了它对应的迭代器对象，通过反复调用迭代器对象的 next 方法访问了数组成员，像这样：

```{.javaScript}
const arr = [1, 2, 3]
// 通过调用iterator，拿到迭代器对象
const iterator = arr[Symbol.iterator]()

// 对迭代器对象执行next，就能逐个访问集合的成员
iterator.next() // {value: 1, done: false}
iterator.next() // {value: 2, done: false}
iterator.next() // {value: 3, done: false}
```

而 for...of...做的事情，基本等价于下面这通操作：

```{.javaScript}
// 通过调用iterator，拿到迭代器对象
const iterator = arr[Symbol.iterator]()

// 初始化一个迭代结果
let now = { done: false }

// 循环往外迭代成员
while(!now.done) {
    now = iterator.next()
    if(!now.done) {
        console.log(`现在遍历到了${now.value}`)
    }
}
```

#### 实现一个迭代器生成函数

在 ES6 中，实现一个迭代器生成函数并不是什么难事儿，因为 ES6 早帮我们考虑好了全套的解决方案，内置了贴心的生成器（Generator）供我们使用：

```{.javaScript}
// 编写一个迭代器生成函数
function *iteratorGenerator() {
    yield '1号选手'
    yield '2号选手'
    yield '3号选手'
}

const iterator = iteratorGenerator()

iterator.next()
iterator.next()
iterator.next()
```

用 ES5 去写一个能够生成迭代器对象的迭代器生成函数:

```{.javaScript}
// 定义生成器函数，入参是任意集合
function iteratorGenerator(list) {
    // idx记录当前访问的索引
    var idx = 0
    // len记录传入集合的长度
    var len = list.length
    return {
        // 自定义next方法
        next: function() {
            // 如果索引还没有超出集合长度，done为false
            var done = idx >= len
            // 如果done为false，则可以继续取值
            var value = !done ? list[idx++] : undefined

            // 将当前值与遍历是否完毕（done）返回
            return {
                done: done,
                value: value
            }
        }
    }
}

var iterator = iteratorGenerator(['1号选手', '2号选手', '3号选手'])
iterator.next()
iterator.next()
iterator.next()
```
