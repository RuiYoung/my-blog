---
title: 策略模式、状态模式
date: 2020-01-14
author: Ruiyoung
tag:
  - javaScript设计模式
---

#### 策略模式

场景举例：马上大促要来了，我们本次大促要做差异化询价。啥是差异化询价？就是说同一个商品，我通过在后台给它设置不同的价格类型，可以让它展示不同的价格。具体的逻辑如下：

- 当价格类型为“预售价”时，满 100 - 20，不满 100 打 9 折
- 当价格类型为“大促价”时，满 100 - 30，不满 100 打 8 折
- 当价格类型为“返场价”时，满 200 - 50，不叠加
- 当价格类型为“尝鲜价”时，直接打 5 折

##### if-else 实现

```{.javaScript}
// 四种价格标签化
// 预售价 - pre
// 大促价 - onSale
// 返场价 - back
// 尝鲜价 - fresh
// 询价方法，接受价格标签和原价为入参
function askPrice(tag, originPrice) {

  // 处理预热价
  if(tag === 'pre') {
    if(originPrice >= 100) {
      return originPrice - 20
    }
    return originPrice * 0.9
  }

  // 处理大促价
  if(tag === 'onSale') {
    if(originPrice >= 100) {
      return originPrice - 30
    }
    return originPrice * 0.8
  }

  // 处理返场价
  if(tag === 'back') {
    if(originPrice >= 200) {
      return originPrice - 50
    }
    return originPrice
  }

  // 处理尝鲜价
  if(tag === 'fresh') {
     return originPrice * 0.5
  }
}
```

**if-else 弊端：**

- 违背了“单一功能”原则。一个 function 里面，它竟然处理了四坨逻辑——这个函数的逻辑太胖了！万一其中一行代码出了 Bug，那么整个询价逻辑都会崩坏；与此同时出了 Bug 你很难定位到底是哪个代码块坏了事；再比如说单个能力很难被抽离复用等等等等。
- 违背了“开放封闭”原则。在 askPrice 里面，我们新增了一个 if-else 判断。可以看出，这样其实还是在修改 askPrice 的函数体，没有实现“对扩展开放，对修改封闭”的效果。

##### 单一功能改造（抽）

```{.javaScript}
// 处理预热价
function prePrice(originPrice) {
  if(originPrice >= 100) {
    return originPrice - 20
  }
  return originPrice * 0.9
}

// 处理大促价
function onSalePrice(originPrice) {
  if(originPrice >= 100) {
    return originPrice - 30
  }
  return originPrice * 0.8
}

// 处理返场价
function backPrice(originPrice) {
  if(originPrice >= 200) {
    return originPrice - 50
  }
  return originPrice
}

// 处理尝鲜价
function freshPrice(originPrice) {
  return originPrice * 0.5
}

function askPrice(tag, originPrice) {
  // 处理预热价
  if(tag === 'pre') {
    return prePrice(originPrice)
  }
  // 处理大促价
  if(tag === 'onSale') {
    return onSalePrice(originPrice)
  }

  // 处理返场价
  if(tag === 'back') {
    return backPrice(originPrice)
  }

  // 处理尝鲜价
  if(tag === 'fresh') {
     return freshPrice(originPrice)
  }
}
```

##### 开放封闭改造

**对象映射**既能够既帮我们明确询价标签-询价函数映射关系，同时不破坏代码的灵活性,取代 if-else 的好办法。

```{.javaScript}
// 定义一个询价处理器对象，询价算法全都收敛到一个对象里去
const priceProcessor = {
  pre(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 20;
    }
    return originPrice * 0.9;
  },
  onSale(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 30;
    }
    return originPrice * 0.8;
  },
  back(originPrice) {
    if (originPrice >= 200) {
      return originPrice - 50;
    }
    return originPrice;
  },
  fresh(originPrice) {
    return originPrice * 0.5;
  },
};
// 询价函数
function askPrice(tag, originPrice) {
  return priceProcessor[tag](originPrice)
}
```

**这，就是策略模式！**

> 定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。

#### 状态模式

实现一台咖啡机

```{.javaScript}
//- 美式咖啡态（american)：只吐黑咖啡
//- 普通拿铁态(latte)：黑咖啡加点奶
//- 香草拿铁态（vanillaLatte）：黑咖啡加点奶再加香草糖浆
//- 摩卡咖啡态(mocha)：黑咖啡加点奶再加点巧克力
const stateToProcessor = {
  american() {
    console.log('我只吐黑咖啡');
  },
  latte() {
    this.american();
    console.log('加点奶');
  },
  vanillaLatte() {
    this.latte();
    console.log('再加香草糖浆');
  },
  mocha() {
    this.latte();
    console.log('再加巧克力');
  }
}

class CoffeeMaker {
  constructor() {
    /**
    这里略去咖啡机中与咖啡状态切换无关的一些初始化逻辑
  **/
    // 初始化状态，没有切换任何咖啡模式
    this.state = 'init';
  }

  // 关注咖啡机状态切换函数
  changeState(state) {
    // 记录当前状态
    this.state = state;
    // 若状态不存在，则返回
    if(!stateToProcessor[state]) {
      return ;
    }
    stateToProcessor[state]();
  }
}

const mk = new CoffeeMaker();
mk.changeState('latte');
```

这种方法仅仅是看上去完美无缺，其中却暗含一个非常重要的隐患——**stateToProcessor 里的工序函数，感知不到咖啡机的内部状况。**

把状态-行为映射对象作为主体类对应实例的一个属性添加进去：

```{.javaScript}
class CoffeeMaker {
  constructor() {
    /**
    这里略去咖啡机中与咖啡状态切换无关的一些初始化逻辑
  **/
    // 初始化状态，没有切换任何咖啡模式
    this.state = 'init';
    // 初始化牛奶的存储量
    this.leftMilk = '500ml';
  }
  stateToProcessor = {
    that: this,
    american() {
      // 尝试在行为函数里拿到咖啡机实例的信息并输出
      console.log('咖啡机现在的牛奶存储量是:', this.that.leftMilk)
      console.log('我只吐黑咖啡');
    },
    latte() {
      this.american()
      console.log('加点奶');
    },
    vanillaLatte() {
      this.latte();
      console.log('再加香草糖浆');
    },
    mocha() {
      this.latte();
      console.log('再加巧克力');
    }
  }

  // 关注咖啡机状态切换函数
  changeState(state) {
    this.state = state;
    if (!this.stateToProcessor[state]) {
      return;
    }
    this.stateToProcessor[state]();
  }
}

const mk = new CoffeeMaker();
mk.changeState('latte');
```

#### 总结

> 状态模式(State Pattern) ：允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类。  
> 状态模式主要解决的是当控制一个对象状态的条件表达式过于复杂时的情况。把状态的判断逻辑转移到表示不同状态的一系列类中，可以把复杂的判断逻辑简化。

##### 策略与状态的辨析

策略模式和状态模式确实是相似的，它们都封装行为、都通过委托来实现行为分发。

策略模式中的行为函数是”潇洒“的行为函数，它们不依赖调用主体、互相平行、各自为政，井水不犯河水。(如例子中的询价算法，我只需要读取一个数字，我就能啪啪三下五除二给你吐出另一个数字作为返回结果——它和计算主体之间可以是分离的，我们只要关注计算逻辑本身就可以了。)

状态模式中的行为函数，首先是和状态主体之间存在着关联，由状态主体把它们串在一起；另一方面，正因为关联着同样的一个（或一类）主体，所以不同状态对应的行为函数可能并不会特别割裂。（如例子中的咖啡机）
