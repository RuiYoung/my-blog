---
title: 代理模式
date: 2020-01-11
author: Ruiyoung
tag:
  - javaScript设计模式
---

### 前言

> 在某些情况下，出于种种考虑/限制，一个对象不能直接访问另一个对象，需要一个第三者（代理）牵线搭桥从而间接达到访问目的，这样的模式就是代理模式。

##### VPN 代理访问外网

![vpn](/img/vpn.png)

代理服务器的 ip 地址，不在被禁用的那批 ip 地址之列，我们可以顺利访问到这台服务器。而这台服务器的 DNS 解析过程，没有被施加咒语，所以它是可以顺利访问 Google.com 的。代理服务器在请求到 Google.com 后，将响应体转发给你，使你得以间接地访问到目标网址 —— 像这种第三方代替我们访问目标对象的模式，就是代理模式。

##### ES6 中的 Proxy

在 ES6 中，提供了专门以代理角色出现的代理器 —— Proxy。它的基本用法如下：

```{.javaScript}
const proxy = new Proxy(obj, handler)
```

第一个参数是我们的目标对象。handler 也是一个对象，用来定义代理的行为。当我们通过 proxy 去访问目标对象的时候，handler 会对我们的行为作一层拦截，我们的每次访问都需要经过 handler 这个第三方。

##### “婚介所”的实现(举例)

婚介所收到了小美的信息，开始营业。大家想，这个姓名、自我介绍、假头像，这些信息大差不差，曝光一下没问题。但是人家妹子的年龄、职业、真实头像、手机号码，是不是属于非常私密的信息了？要想 get 这些信息，平台要考验一下你的诚意了 —— 首先，你是不是已经通过了实名审核？如果通过实名审核，那么你可以查看一些相对私密的信息（年龄、职业）。然后，你是不是 VIP ？只有 VIP 可以查看真实照片和联系方式。满足了这两个判定条件，你才可以顺利访问到别人的全部私人信息，不然，就劝退你提醒你去完成认证和 VIP 购买再来。 此外，我们还允许会员间互送礼物，每个会员可以告知婚介所自己愿意接受的礼物的价格下限。

```{.javaScript}
// 未知妹子
const girl = {
  // 姓名
  name: '小美',
  // 自我介绍
  aboutMe: '...'（大家自行脑补吧）
  // 年龄
  age: 24,
  // 职业
  career: 'teacher',
  // 假头像
  fakeAvatar: 'xxxx'(新垣结衣的图片地址）
  // 真实头像
  avatar: 'xxxx'(自己的照片地址),
  // 手机号
  phone: 123456,
  // 礼物数组
  presents: [],
  // 拒收50块以下的礼物
  bottomValue: 50,
  // 记录最近一次收到的礼物
  lastPresent: present,
}

// 普通私密信息
const baseInfo = ['age', 'career']
// 最私密信息
const privateInfo = ['avatar', 'phone']

// 用户（同事A）对象实例
const user = {
    ...(一些必要的个人信息)
    isValidated: true,
    isVIP: false,
}

// 婚介所登场了
const Lovers = new Proxy(girl, {
  get: function(girl, key) {
      if(baseInfo.indexOf(key)!==-1 && !user.isValidated) {
          alert('您还没有完成验证哦')
          return
      }

      //...(此处省略其它有的没的各种校验逻辑)

      // 此处我们认为只有验证过的用户才可以购买VIP
      if(user.isValidated && privateInfo.indexOf(key) && !user.isVIP) {
          alert('只有VIP才可以查看该信息哦')
          return
      }
  }

  set: function(girl, key, val) {

    // 最近一次送来的礼物会尝试赋值给lastPresent字段
    if(key === 'lastPresent') {
      if(val.value < girl.bottomValue) {
          alert('sorry，您的礼物被拒收了')
          return
      }

      // 如果没有拒收，则赋值成功，同时并入presents数组
      girl[lastPresent] = val
      girl[presents] = [...presents, val]
    }
  }
})
```

#### 最常见的四种代理类型

##### 事件代理

用代理模式实现多个子元素的事件监听

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
  <div id="father">
    <a href="#">链接1号</a>
    <a href="#">链接2号</a>
    <a href="#">链接3号</a>
    <a href="#">链接4号</a>
    <a href="#">链接5号</a>
    <a href="#">链接6号</a>
  </div>
</body>
</html>
<script>
  // 考虑到事件本身具有“冒泡”的特性，当我们点击 a 元素时，点击事件会“冒泡”到父元素 div 上，从而被监听到。
  // 获取父元素
  const father = document.getElementById('father')

  // 给父元素安装一次监听函数
  father.addEventListener('click', function(e) {
      // 识别是否是目标子元素
      if(e.target.tagName === 'A') {
          // 以下是监听函数的函数体
          e.preventDefault()
          alert(`我是${e.target.innerText}`)
      }
  } )
</script>
```

##### 虚拟代理

> 图片懒加载: 针对图片加载时机的优化,主要是为了避免一些图片量比较大的网站,当用户打开页面的时候，就把所有的图片资源加载完毕，那么很可能会造成白屏、卡顿等现象。采取“先占位、后加载”的方式来展示图片 —— 在元素露出之前，我们给它一个 div 作占位，当它滚动到可视区域内时，再即时地去加载真实的图片资源，这样做既减轻了性能压力、又保住了用户体验。  
> 图片预加载: 主要是为了避免网络不好、或者图片太大时，页面长时间给用户留白的尴尬。常见的操作是先让这个 img 标签展示一个占位图，然后创建一个 Image 实例，让这个 Image 实例的 src 指向真实的目标图片地址、观察该 Image 实例的加载情况 —— 当其对应的真实图片加载完毕后，即已经有了该图片的缓存内容，再将 DOM 上的 img 元素的 src 指向真实的目标图片地址。此时我们直接去取了目标图片的缓存，所以展示速度会非常快.

我们可以用虚拟代理来实现图片预加载

```{.javaScript}
// PreLoadImage 专心去做 DOM 层面的事情（真实 DOM 节点的获取、img 节点的链接设置）
class PreLoadImage {
    constructor(imgNode) {
        // 获取真实的DOM节点
        this.imgNode = imgNode
    }

    // 操作img节点的src属性
    setSrc(imgUrl) {
        this.imgNode.src = imgUrl
    }
}

class ProxyImage {
    // 占位图的url地址
    static LOADING_URL = 'xxxxxx'

    constructor(targetImage) {
        // 目标Image，即PreLoadImage实例
        this.targetImage = targetImage
    }

    // 该方法主要操作虚拟Image，完成加载
    setSrc(targetUrl) {
       // 真实img节点初始化时展示的是一个占位图
        this.targetImage.setSrc(ProxyImage.LOADING_URL)
        // 创建一个帮我们加载图片的虚拟Image实例
        const virtualImage = new Image()
        // 监听目标图片加载的情况，完成时再将DOM上的真实img节点的src属性设置为目标图片的url
        virtualImage.onload = () => {
            this.targetImage.setSrc(targetUrl)
        }
        // 设置src属性，虚拟Image实例开始加载图片
        virtualImage.src = targetUrl

        // virtualImage代替真实 DOM 发起了图片加载请求、完成了图片加载工作，却从未在渲染层面抛头露面。
    }
}
```

##### 缓存代理

> 缓存代理，它应用于一些计算量较大的场景里。在这种场景下，我们需要“用空间换时间”——当我们需要用到某个已经计算过的值的时候，不想再耗时进行二次计算，而是希望能从内存里去取出现成的计算结果。这种场景下，就需要一个代理来帮我们在进行计算的同时，进行计算结果的缓存了。

```{.javaScript}
// addAll方法会对你传入的所有参数做求和操作
const addAll = function() {
    console.log('进行了一次新计算')
    let result = 0
    const len = arguments.length
    for(let i = 0; i < len; i++) {
        result += arguments[i]
    }
    return result
}

// 为求和方法创建代理
const proxyAddAll = (function(){
    // 求和结果的缓存池
    const resultCache = {}
    return function() {
        // 将入参转化为一个唯一的入参字符串
        const args = Array.prototype.join.call(arguments, ',')

        // 检查本次入参是否有对应的计算结果
        if(args in resultCache) {
            // 如果有，则返回缓存池里现成的结果
            return resultCache[args]
        }
        return resultCache[args] = addAll(...arguments)
    }
})()

// proxyAddAll 针对重复的入参只会计算一次
proxyAddAll(1,2,3,4,5,6)
// log打印： 进行了一次新计算
// log打印： 21
proxyAddAll(1,2,3,4,5,6)
// log打印： 21

```

##### 保护代理

“婚介所”的实现就是"保护代理", 有权限限制，保护拦截。ES6 中的 Proxy，本身就是为拦截而生的，所以我们目前实现保护代理时，考虑的首要方案就是 ES6 中的 Proxy。
