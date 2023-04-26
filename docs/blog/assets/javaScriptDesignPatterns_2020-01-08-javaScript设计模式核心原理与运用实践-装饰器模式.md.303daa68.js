import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.544e8ca7.js";const d=JSON.parse('{"title":"装饰器模式","description":"","frontmatter":{"title":"装饰器模式","date":"2020-01-06T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript设计模式"]},"headers":[],"relativePath":"javaScriptDesignPatterns/2020-01-08-javaScript设计模式核心原理与运用实践-装饰器模式.md","lastUpdated":null}'),p={name:"javaScriptDesignPatterns/2020-01-08-javaScript设计模式核心原理与运用实践-装饰器模式.md"},e=l(`<h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><blockquote><p>装饰器模式，又名装饰者模式。它的定义是“在不改变原对象的基础上，通过对其进行<strong>包装拓展</strong>，使原有对象可以满足用户的更复杂需求”。</p></blockquote><h4 id="场景举例" tabindex="-1">场景举例 <a class="header-anchor" href="#场景举例" aria-label="Permalink to &quot;场景举例&quot;">​</a></h4><p>初始需求是：每个业务中的按钮在点击后都弹出「您还未登录哦」的弹框。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;按钮点击需求1.0&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #modal {</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        line-height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        position: fixed;</span></span>
<span class="line"><span style="color:#A6ACCD;">        left: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">        top: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">        transform: translate(-50%, -50%);</span></span>
<span class="line"><span style="color:#A6ACCD;">        border: 1px solid black;</span></span>
<span class="line"><span style="color:#A6ACCD;">        text-align: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;button id=&#39;open&#39;&gt;点击打开&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;button id=&#39;close&#39;&gt;关闭弹框&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 弹框创建逻辑，这里我们运用用了**单例模式**</span></span>
<span class="line"><span style="color:#A6ACCD;">    const Modal = (function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let modal = null</span></span>
<span class="line"><span style="color:#A6ACCD;">      return function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(!modal) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              modal = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">              modal.innerHTML = &#39;您还未登录哦~&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">              modal.id = &#39;modal&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">              modal.style.display = &#39;none&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">              document.body.appendChild(modal)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            return modal</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 点击打开按钮展示模态框</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.getElementById(&#39;open&#39;).addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 未点击则不创建modal实例，避免不必要的内存占用</span></span>
<span class="line"><span style="color:#A6ACCD;">      const modal = new Modal()</span></span>
<span class="line"><span style="color:#A6ACCD;">      modal.style.display = &#39;block&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 点击关闭按钮隐藏模态框</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.getElementById(&#39;close&#39;).addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const modal = document.getElementById(&#39;modal&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(modal) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          modal.style.display = &#39;none&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span></code></pre></div><p>假如新增需求：在弹框被关闭后把按钮的文案改为“快去登录”，同时把按钮置灰。</p><p>找到按钮的 click 监听函数，手动往里面添加了文案修改&amp;按钮置灰逻辑引发问题：<br> 1.需要深入到每一个业务的深处去给不同的按钮添加这部分逻辑<br> 2.直接去修改已有的函数体，这种做法违背了我们的“开放封闭原则”；往一个函数体里塞这么多逻辑，违背了我们的“单一职责原则”。</p><h4 id="我们需要一个只添加-不修改的装饰器模式" tabindex="-1">我们需要一个只添加，不修改的装饰器模式 <a class="header-anchor" href="#我们需要一个只添加-不修改的装饰器模式" aria-label="Permalink to &quot;我们需要一个只添加，不修改的装饰器模式&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 为了不被已有的业务逻辑干扰，当务之急就是将旧逻辑与新逻辑分离，把旧逻辑抽出去</span></span>
<span class="line"><span style="color:#A6ACCD;">// 将展示Modal的逻辑单独封装</span></span>
<span class="line"><span style="color:#A6ACCD;">function openModal() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const modal = new Modal()</span></span>
<span class="line"><span style="color:#A6ACCD;">    modal.style.display = &#39;block&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 编写新逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">// 按钮文案修改逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">function changeButtonText() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const btn = document.getElementById(&#39;open&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    btn.innerText = &#39;快去登录&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 按钮置灰逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">function disableButton() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const btn =  document.getElementById(&#39;open&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    btn.setAttribute(&quot;disabled&quot;, true)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 新版本功能逻辑整合</span></span>
<span class="line"><span style="color:#A6ACCD;">function changeButtonStatus() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeButtonText()</span></span>
<span class="line"><span style="color:#A6ACCD;">    disableButton()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 把三个操作逐个添加open按钮的监听函数里</span></span>
<span class="line"><span style="color:#A6ACCD;">document.getElementById(&#39;open&#39;).addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    openModal()</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeButtonStatus() // 使用changeButtonStatus的逻辑装饰了旧的按钮点击逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>ES6 中，我们可以以一种更加面向对象化的方式去写:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 定义打开按钮</span></span>
<span class="line"><span style="color:#A6ACCD;">class OpenButton {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 点击后展示弹框（旧逻辑）</span></span>
<span class="line"><span style="color:#A6ACCD;">    onClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const modal = new Modal()</span></span>
<span class="line"><span style="color:#A6ACCD;">      modal.style.display = &#39;block&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义按钮对应的装饰器</span></span>
<span class="line"><span style="color:#A6ACCD;">class Decorator {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 将按钮实例传入</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(open_button) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.open_button = open_button</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    onClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.open_button.onClick()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // “包装”了一层新逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.changeButtonStatus()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    changeButtonStatus() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.changeButtonText()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.disableButton()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    disableButton() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const btn =  document.getElementById(&#39;open&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        btn.setAttribute(&quot;disabled&quot;, true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    changeButtonText() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const btn = document.getElementById(&#39;open&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        btn.innerText = &#39;快去登录&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const openButton = new OpenButton()</span></span>
<span class="line"><span style="color:#A6ACCD;">const decorator = new Decorator(openButton)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">document.getElementById(&#39;open&#39;).addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // openButton.onClick()</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 此处可以分别尝试两个实例的onClick方法，验证装饰器是否生效</span></span>
<span class="line"><span style="color:#A6ACCD;">    decorator.onClick()</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h3 id="es7-中的装饰器" tabindex="-1">ES7 中的装饰器 <a class="header-anchor" href="#es7-中的装饰器" aria-label="Permalink to &quot;ES7 中的装饰器&quot;">​</a></h3><h5 id="在-es7-中-我们可以-语法糖轻松地给一个类装上装饰器" tabindex="-1">在 ES7 中，我们可以@语法糖轻松地给一个类装上装饰器： <a class="header-anchor" href="#在-es7-中-我们可以-语法糖轻松地给一个类装上装饰器" aria-label="Permalink to &quot;在 ES7 中，我们可以@语法糖轻松地给一个类装上装饰器：&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 装饰器函数，它的第一个参数是目标类</span></span>
<span class="line"><span style="color:#A6ACCD;">function classDecorator(target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 此处的 target 就是被装饰的类本身Button</span></span>
<span class="line"><span style="color:#A6ACCD;">    target.hasDecorator = true</span></span>
<span class="line"><span style="color:#A6ACCD;">    return target</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 将装饰器“安装”到Button类上</span></span>
<span class="line"><span style="color:#A6ACCD;">@classDecorator</span></span>
<span class="line"><span style="color:#A6ACCD;">class Button {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Button类的相关逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 验证装饰器是否生效</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;Button 是否被装饰了：&#39;, Button.hasDecorator)</span></span></code></pre></div><h5 id="语法糖去装饰类里面的方法" tabindex="-1">@语法糖去装饰类里面的方法： <a class="header-anchor" href="#语法糖去装饰类里面的方法" aria-label="Permalink to &quot;@语法糖去装饰类里面的方法：&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 具体的参数意义，在下个小节，这里大家先感知一下操作</span></span>
<span class="line"><span style="color:#A6ACCD;">function funcDecorator(target, name, descriptor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // target 变成了Button.prototype，即类的原型对象。这是因为 onClick 方法总是要依附其实例存在的，修饰 onClik 其实是修饰它的实例。但我们的装饰器函数执行的时候，Button 实例还并不存在。为了确保实例生成后可以顺利调用被装饰好的方法，装饰器只能去修饰 Button 类的原型对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 参数name，是我们修饰的目标属性属性名</span></span>
<span class="line"><span style="color:#A6ACCD;">    // descriptor 属性描述对象,用来描述对象的属性。它由各种各样的属性描述符组成，这些描述符又分为数据描述符和存取描述符</span></span>
<span class="line"><span style="color:#A6ACCD;">      //数据描述符：包括 value（存放属性值，默认为默认为 undefined）、writable（表示属性值是否可改变，默认为true）、enumerable（表示属性是否可枚举，默认为 true）、configurable（属性是否可配置，默认为true）。</span></span>
<span class="line"><span style="color:#A6ACCD;">      //存取描述符：包括 get 方法（访问属性时调用的方法，默认为 undefined），set（设置属性时调用的方法，默认为 undefined ）</span></span>
<span class="line"><span style="color:#A6ACCD;">    let originalMethod = descriptor.value</span></span>
<span class="line"><span style="color:#A6ACCD;">    descriptor.value = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;我是Func的装饰器逻辑&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return originalMethod.apply(this, arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return descriptor</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Button {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @funcDecorator</span></span>
<span class="line"><span style="color:#A6ACCD;">    onClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;我是Func的原有逻辑&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 验证装饰器是否生效</span></span>
<span class="line"><span style="color:#A6ACCD;">const button = new Button()</span></span>
<span class="line"><span style="color:#A6ACCD;">button.onClick()</span></span></code></pre></div>`,16),o=[e];function t(c,C,A,i,r,y){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
