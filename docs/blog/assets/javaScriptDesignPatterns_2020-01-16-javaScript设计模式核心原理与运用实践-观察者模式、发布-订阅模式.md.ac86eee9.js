import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.544e8ca7.js";const p="/img/vue-deep.png",e="/img/vue-circle.png",o="/img/diff-moshi.png",v=JSON.parse('{"title":"观察者模式、发布-订阅模式","description":"","frontmatter":{"title":"观察者模式、发布-订阅模式","date":"2020-01-16T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript设计模式"]},"headers":[],"relativePath":"javaScriptDesignPatterns/2020-01-16-javaScript设计模式核心原理与运用实践-观察者模式、发布-订阅模式.md","lastUpdated":null}'),c={name:"javaScriptDesignPatterns/2020-01-16-javaScript设计模式核心原理与运用实践-观察者模式、发布-订阅模式.md"},t=l(`<h4 id="观察者模式" tabindex="-1">观察者模式 <a class="header-anchor" href="#观察者模式" aria-label="Permalink to &quot;观察者模式&quot;">​</a></h4><blockquote><p>观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新。</p></blockquote><p>观察者模式有一个“别名”，叫发布 - 订阅模式（之所以别名加了引号，是因为两者之间存在着细微的差异）。这个别名非常形象地诠释了观察者模式里两个核心的角色要素——“发布者”与“订阅者”。</p><h5 id="最基本的发布者和订阅者类的设计和编写" tabindex="-1">最基本的发布者和订阅者类的设计和编写: <a class="header-anchor" href="#最基本的发布者和订阅者类的设计和编写" aria-label="Permalink to &quot;最基本的发布者和订阅者类的设计和编写:&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 定义发布者类</span></span>
<span class="line"><span style="color:#A6ACCD;">class Publisher {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.observers = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;Publisher created&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 增加订阅者</span></span>
<span class="line"><span style="color:#A6ACCD;">  add(observer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;Publisher.add invoked&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.observers.push(observer)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 移除订阅者</span></span>
<span class="line"><span style="color:#A6ACCD;">  remove(observer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;Publisher.remove invoked&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.observers.forEach((item, i) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (item === observer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.observers.splice(i, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 通知所有订阅者</span></span>
<span class="line"><span style="color:#A6ACCD;">  notify() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;Publisher.notify invoked&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.observers.forEach((observer) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      observer.update(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义订阅者类</span></span>
<span class="line"><span style="color:#A6ACCD;">class Observer {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;Observer created&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    update() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;Observer.update invoked&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>在实际的业务开发中，我们所有的定制化的发布者/订阅者逻辑都可以基于这两个基本类来改写。比如我们可以通过拓展发布者类，来使所有的订阅者来监听某个特定状态的变化。举例：产品韩梅梅拉群（有前端开发李雷，还有后端开发 A，测试同学 B）开发新年需求，甩出需求文档（prd），开发者们来监听需求文档（prd）的变化，展开工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 定义一个具体的需求文档（prd）发布类</span></span>
<span class="line"><span style="color:#A6ACCD;">class PrdPublisher extends Publisher {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 初始化需求文档</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.prdState = null</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 韩梅梅还没有拉群，开发群目前为空</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.observers = []</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;PrdPublisher created&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 该方法用于获取当前的prdState</span></span>
<span class="line"><span style="color:#A6ACCD;">    getState() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;PrdPublisher.getState invoked&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.prdState</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 该方法用于改变prdState的值</span></span>
<span class="line"><span style="color:#A6ACCD;">    setState(state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;PrdPublisher.setState invoked&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // prd的值发生改变</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.prdState = state</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 需求文档变更，立刻通知所有开发者</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.notify()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义一个具体的订阅方类</span></span>
<span class="line"><span style="color:#A6ACCD;">class DeveloperObserver extends Observer {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 需求文档一开始还不存在，prd初始为空对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.prdState = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;DeveloperObserver created&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 重写一个具体的update方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    update(publisher) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;DeveloperObserver.update invoked&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 更新需求文档</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.prdState = publisher.getState()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 调用工作函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.work()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // work方法，一个专门搬砖的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    work() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 获取需求文档</span></span>
<span class="line"><span style="color:#A6ACCD;">        const prd = this.prdState</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 开始基于需求文档提供的信息搬砖。。。</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;996 begins...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 工作流程</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建订阅者：前端开发李雷</span></span>
<span class="line"><span style="color:#A6ACCD;">const liLei = new DeveloperObserver()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建订阅者：服务端开发小A</span></span>
<span class="line"><span style="color:#A6ACCD;">const A = new DeveloperObserver()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建订阅者：测试同学小B</span></span>
<span class="line"><span style="color:#A6ACCD;">const B = new DeveloperObserver()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 韩梅梅出现了</span></span>
<span class="line"><span style="color:#A6ACCD;">const hanMeiMei = new PrdPublisher()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 需求文档出现了</span></span>
<span class="line"><span style="color:#A6ACCD;">const prd = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 具体的需求内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 韩梅梅开始拉群</span></span>
<span class="line"><span style="color:#A6ACCD;">hanMeiMei.add(liLei)</span></span>
<span class="line"><span style="color:#A6ACCD;">hanMeiMei.add(A)</span></span>
<span class="line"><span style="color:#A6ACCD;">hanMeiMei.add(B)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 韩梅梅发送了需求文档，并@了所有人</span></span>
<span class="line"><span style="color:#A6ACCD;">hanMeiMei.setState(prd)</span></span></code></pre></div><h4 id="vue-数据双向绑定-响应式系统-的实现原理" tabindex="-1">Vue 数据双向绑定（响应式系统）的实现原理 <a class="header-anchor" href="#vue-数据双向绑定-响应式系统-的实现原理" aria-label="Permalink to &quot;Vue 数据双向绑定（响应式系统）的实现原理&quot;">​</a></h4><p><img src="`+p+'" alt="vue"></p><p>在 Vue 中，每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新——这是一个典型的观察者模式。</p><p>在 Vue 数据双向绑定的实现逻辑里，有这样三个关键角色：</p><ul><li>observer（监听器）：注意，此 observer 非彼 observer。在我们上节的解析中，observer 作为设计模式中的一个角色，代表“订阅者”。但在 Vue 数据双向绑定的角色结构里，所谓的 observer 不仅是一个数据监听器，它还需要对监听到的数据进行转发——也就是说它同时还是一个发布者。</li><li>watcher（订阅者）：observer 把数据转发给了真正的订阅者——watcher 对象。watcher 接收到新的数据后，会去更新视图。</li><li>compile（编译器）：MVVM 框架特有的角色，负责对每个节点元素指令进行扫描和解析，指令的数据初始化、订阅者的创建这些“杂活”也归它管。</li></ul><p><img src="'+e+`" alt="vue"></p><h5 id="实现-observer" tabindex="-1">实现 observer <a class="header-anchor" href="#实现-observer" aria-label="Permalink to &quot;实现 observer&quot;">​</a></h5><p>需要实现一个方法，这个方法会对需要监听的数据对象进行遍历、给它的属性加上定制的 getter 和 setter 函数。这样但凡这个对象的某个属性发生了改变，就会触发 setter 函数，进而通知到订阅者。这个 setter 函数，就是我们的监听器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// observe方法遍历并包装对象属性</span></span>
<span class="line"><span style="color:#A6ACCD;">function observe(target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 若target是一个对象，则遍历它</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(target &amp;&amp; typeof target === &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.keys(target).forEach((key)=&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // defineReactive方法会给目标属性装上“监听器”</span></span>
<span class="line"><span style="color:#A6ACCD;">            defineReactive(target, key, target[key])</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义defineReactive方法</span></span>
<span class="line"><span style="color:#A6ACCD;">function defineReactive(target, key, val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 属性值也可能是object类型，这种情况下需要调用observe进行递归遍历</span></span>
<span class="line"><span style="color:#A6ACCD;">    observe(val)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 为当前属性安装监听器</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.defineProperty(target, key, {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 可枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">        enumerable: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 不可配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        configurable: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        get: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return val;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 监听器函数</span></span>
<span class="line"><span style="color:#A6ACCD;">        set: function (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(\`\${target}属性的\${key}属性从\${val}值变成了了\${value}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">            val = value</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 通知所有订阅者</span></span>
<span class="line"><span style="color:#A6ACCD;">            dep.notify()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h5 id="实现订阅者-dep" tabindex="-1">实现订阅者 Dep <a class="header-anchor" href="#实现订阅者-dep" aria-label="Permalink to &quot;实现订阅者 Dep&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 定义订阅者类Dep</span></span>
<span class="line"><span style="color:#A6ACCD;">class Dep {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 初始化订阅队列</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.subs = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 增加订阅者</span></span>
<span class="line"><span style="color:#A6ACCD;">    addSub(sub) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.subs.push(sub)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 通知订阅者</span></span>
<span class="line"><span style="color:#A6ACCD;">    notify() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.subs.forEach((sub)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            sub.update()</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="在-vue-中使用-event-bus-来实现组件间的通讯" tabindex="-1">在 Vue 中使用 Event Bus 来实现组件间的通讯 <a class="header-anchor" href="#在-vue-中使用-event-bus-来实现组件间的通讯" aria-label="Permalink to &quot;在 Vue 中使用 Event Bus 来实现组件间的通讯&quot;">​</a></h4><p>Event Bus/Event Emitter 作为全局事件总线，它起到的是一个沟通桥梁的作用。我们可以把它理解为一个事件中心，我们所有事件的订阅/发布都不能由订阅方和发布方“私下沟通”，必须要委托这个事件中心帮我们实现。</p><p>在 Vue 中，有时候 A 组件和 B 组件中间隔了很远，看似没什么关系，但我们希望它们之间能够通信。这种情况下除了求助于 Vuex 之外，我们还可以通过 Event Bus 来实现我们的需求。</p><p>创建一个 Event Bus（本质上也是 Vue 实例）并导出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const EventBus = new Vue()</span></span>
<span class="line"><span style="color:#A6ACCD;">export default EventBus</span></span></code></pre></div><p>在主文件里引入 EventBus，并挂载到全局：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import bus from &#39;EventBus的文件路径&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.prototype.bus = bus</span></span></code></pre></div><p>订阅事件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 这里func指someEvent这个事件的监听函数</span></span>
<span class="line"><span style="color:#A6ACCD;">this.bus.$on(&#39;someEvent&#39;, func)</span></span></code></pre></div><p>发布（触发）事件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 这里params指someEvent这个事件被触发时回调函数接收的入参</span></span>
<span class="line"><span style="color:#A6ACCD;">this.bus.$emit(&#39;someEvent&#39;, params)</span></span></code></pre></div><p>大家会发现，整个调用过程中，没有出现具体的发布者和订阅者（比如上节的 PrdPublisher 和 DeveloperObserver），全程只有 bus 这个东西一个人在疯狂刷存在感。这就是全局事件总线的特点——所有事件的发布/订阅操作，必须经由事件中心，禁止一切“私下交易”！</p><h5 id="实现一个-event-bus" tabindex="-1">实现一个 Event Bus <a class="header-anchor" href="#实现一个-event-bus" aria-label="Permalink to &quot;实现一个 Event Bus&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class EventEmitter {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // handlers是一个map，用于存储事件与回调之间的对应关系</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.handlers = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // on方法用于安装事件监听器，它接受目标事件名和回调函数作为参数</span></span>
<span class="line"><span style="color:#A6ACCD;">  on(eventName, cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 先检查一下目标事件名有没有对应的监听函数队列</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!this.handlers[eventName]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 如果没有，那么首先初始化一个监听函数队列</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.handlers[eventName] = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 把回调函数推入目标事件的监听函数队列里去</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.handlers[eventName].push(cb)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // emit方法用于触发目标事件，它接受事件名和监听函数入参作为参数</span></span>
<span class="line"><span style="color:#A6ACCD;">  emit(eventName, ...args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 检查目标事件是否有监听函数队列</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.handlers[eventName]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 如果有，则逐个调用队列里的回调函数</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.handlers[eventName].forEach((callback) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        callback(...args)</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 移除某个事件回调队列里的指定回调函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  off(eventName, cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const callbacks = this.handlers[eventName]</span></span>
<span class="line"><span style="color:#A6ACCD;">    const index = callbacks.indexOf(cb)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (index !== -1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      callbacks.splice(index, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 为事件注册单次监听器</span></span>
<span class="line"><span style="color:#A6ACCD;">  once(eventName, cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 对回调函数进行包装，使其执行完毕自动被移除</span></span>
<span class="line"><span style="color:#A6ACCD;">    const wrapper = (...args) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      cb.apply(...args)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.off(eventName, wrapper)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.on(eventName, wrapper)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="观察者模式与发布-订阅模式的区别" tabindex="-1">观察者模式与发布-订阅模式的区别 <a class="header-anchor" href="#观察者模式与发布-订阅模式的区别" aria-label="Permalink to &quot;观察者模式与发布-订阅模式的区别&quot;">​</a></h4><p>韩梅梅把所有的开发者拉了一个群，直接把需求文档丢给每一位群成员，这种发布者直接触及到订阅者的操作，叫观察者模式。但如果韩梅梅没有拉群，而是把需求文档上传到了公司统一的需求平台上，需求平台感知到文件的变化、自动通知了每一位订阅了该文件的开发者，这种发布者不直接触及到订阅者、而是由统一的第三方来完成实际的通信的操作，叫做发布-订阅模式。</p><p>观察者模式和发布-订阅模式之间的区别，在于是否存在第三方、发布者能否直接感知订阅者.</p><p><img src="`+o+'" alt="diff"></p><p>观察者模式，解决的其实是模块间的耦合问题，有它在，即便是两个分离的、毫不相关的模块，也可以实现数据通信。但观察者模式仅仅是减少了耦合，并没有完全地解决耦合问题——被观察者必须去维护一套观察者的集合，这些观察者必须实现统一的方法供被观察者调用，两者之间还是有着说不清、道不明的关系。</p><p>发布-订阅模式，则是快刀斩乱麻了——发布者完全不用感知订阅者，不用关心它怎么实现回调方法，事件的注册和触发都发生在独立于双方的第三方平台（事件总线）上。发布-订阅模式下，实现了完全地解耦。</p><p>在实际开发中，我们的模块解耦诉求并非总是需要它们完全解耦。如果两个模块之间本身存在关联，且这种关联是稳定的、必要的，那么我们使用观察者模式就足够了。而在模块与模块之间独立性较强、且没有必要单纯为了数据通信而强行为两者制造依赖的情况下，我们往往会倾向于使用发布-订阅模式。</p>',39),r=[t];function C(i,A,y,D,d,u){return n(),a("div",null,r)}const b=s(c,[["render",C]]);export{v as __pageData,b as default};
