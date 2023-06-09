---
title: 装饰器模式
date: 2020-01-06
author: Ruiyoung
tag:
  - javaScript设计模式
---

### 前言

> 装饰器模式，又名装饰者模式。它的定义是“在不改变原对象的基础上，通过对其进行**包装拓展**，使原有对象可以满足用户的更复杂需求”。

#### 场景举例

初始需求是：每个业务中的按钮在点击后都弹出「您还未登录哦」的弹框。

```{.html}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>按钮点击需求1.0</title>
</head>
<style>
    #modal {
        height: 200px;
        width: 200px;
        line-height: 200px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid black;
        text-align: center;
    }
</style>
<body>
  <button id='open'>点击打开</button>
  <button id='close'>关闭弹框</button>
</body>
<script>
    // 弹框创建逻辑，这里我们运用用了**单例模式**
    const Modal = (function() {
      let modal = null
      return function() {
            if(!modal) {
              modal = document.createElement('div')
              modal.innerHTML = '您还未登录哦~'
              modal.id = 'modal'
              modal.style.display = 'none'
              document.body.appendChild(modal)
            }
            return modal
      }
    })()

    // 点击打开按钮展示模态框
    document.getElementById('open').addEventListener('click', function() {
        // 未点击则不创建modal实例，避免不必要的内存占用
      const modal = new Modal()
      modal.style.display = 'block'
    })

    // 点击关闭按钮隐藏模态框
    document.getElementById('close').addEventListener('click', function() {
      const modal = document.getElementById('modal')
      if(modal) {
          modal.style.display = 'none'
      }
    })
</script>
</html>
```

假如新增需求：在弹框被关闭后把按钮的文案改为“快去登录”，同时把按钮置灰。

找到按钮的 click 监听函数，手动往里面添加了文案修改&按钮置灰逻辑引发问题：  
1.需要深入到每一个业务的深处去给不同的按钮添加这部分逻辑  
2.直接去修改已有的函数体，这种做法违背了我们的“开放封闭原则”；往一个函数体里塞这么多逻辑，违背了我们的“单一职责原则”。

#### 我们需要一个只添加，不修改的装饰器模式

```{.javaScript}
// 为了不被已有的业务逻辑干扰，当务之急就是将旧逻辑与新逻辑分离，把旧逻辑抽出去
// 将展示Modal的逻辑单独封装
function openModal() {
    const modal = new Modal()
    modal.style.display = 'block'
}

// 编写新逻辑
// 按钮文案修改逻辑
function changeButtonText() {
    const btn = document.getElementById('open')
    btn.innerText = '快去登录'
}
// 按钮置灰逻辑
function disableButton() {
    const btn =  document.getElementById('open')
    btn.setAttribute("disabled", true)
}
// 新版本功能逻辑整合
function changeButtonStatus() {
    changeButtonText()
    disableButton()
}

// 把三个操作逐个添加open按钮的监听函数里
document.getElementById('open').addEventListener('click', function() {
    openModal()
    changeButtonStatus() // 使用changeButtonStatus的逻辑装饰了旧的按钮点击逻辑
})
```

ES6 中，我们可以以一种更加面向对象化的方式去写:

```{.javaScript}
// 定义打开按钮
class OpenButton {
    // 点击后展示弹框（旧逻辑）
    onClick() {
      const modal = new Modal()
      modal.style.display = 'block'
    }
}

// 定义按钮对应的装饰器
class Decorator {
    // 将按钮实例传入
    constructor(open_button) {
        this.open_button = open_button
    }

    onClick() {
        this.open_button.onClick()
        // “包装”了一层新逻辑
        this.changeButtonStatus()
    }

    changeButtonStatus() {
        this.changeButtonText()
        this.disableButton()
    }

    disableButton() {
        const btn =  document.getElementById('open')
        btn.setAttribute("disabled", true)
    }

    changeButtonText() {
        const btn = document.getElementById('open')
        btn.innerText = '快去登录'
    }
}

const openButton = new OpenButton()
const decorator = new Decorator(openButton)

document.getElementById('open').addEventListener('click', function() {
    // openButton.onClick()
    // 此处可以分别尝试两个实例的onClick方法，验证装饰器是否生效
    decorator.onClick()
})
```

### ES7 中的装饰器

##### 在 ES7 中，我们可以@语法糖轻松地给一个类装上装饰器：

```{.javaScript}
// 装饰器函数，它的第一个参数是目标类
function classDecorator(target) {
    // 此处的 target 就是被装饰的类本身Button
    target.hasDecorator = true
    return target
}

// 将装饰器“安装”到Button类上
@classDecorator
class Button {
    // Button类的相关逻辑
}

// 验证装饰器是否生效
console.log('Button 是否被装饰了：', Button.hasDecorator)
```

##### @语法糖去装饰类里面的方法：

```{.javaScript}
// 具体的参数意义，在下个小节，这里大家先感知一下操作
function funcDecorator(target, name, descriptor) {
    // target 变成了Button.prototype，即类的原型对象。这是因为 onClick 方法总是要依附其实例存在的，修饰 onClik 其实是修饰它的实例。但我们的装饰器函数执行的时候，Button 实例还并不存在。为了确保实例生成后可以顺利调用被装饰好的方法，装饰器只能去修饰 Button 类的原型对象
    // 参数name，是我们修饰的目标属性属性名
    // descriptor 属性描述对象,用来描述对象的属性。它由各种各样的属性描述符组成，这些描述符又分为数据描述符和存取描述符
      //数据描述符：包括 value（存放属性值，默认为默认为 undefined）、writable（表示属性值是否可改变，默认为true）、enumerable（表示属性是否可枚举，默认为 true）、configurable（属性是否可配置，默认为true）。
      //存取描述符：包括 get 方法（访问属性时调用的方法，默认为 undefined），set（设置属性时调用的方法，默认为 undefined ）
    let originalMethod = descriptor.value
    descriptor.value = function() {
    console.log('我是Func的装饰器逻辑')
    return originalMethod.apply(this, arguments)
  }
  return descriptor
}

class Button {
    @funcDecorator
    onClick() {
        console.log('我是Func的原有逻辑')
    }
}

// 验证装饰器是否生效
const button = new Button()
button.onClick()
```
