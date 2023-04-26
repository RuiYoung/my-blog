import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.544e8ca7.js";const g=JSON.parse('{"title":"策略模式、状态模式","description":"","frontmatter":{"title":"策略模式、状态模式","date":"2020-01-14T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript设计模式"]},"headers":[],"relativePath":"javaScriptDesignPatterns/2020-01-14-javaScript设计模式核心原理与运用实践-策略模式、状态模式.md","lastUpdated":null}'),p={name:"javaScriptDesignPatterns/2020-01-14-javaScript设计模式核心原理与运用实践-策略模式、状态模式.md"},e=l(`<h4 id="策略模式" tabindex="-1">策略模式 <a class="header-anchor" href="#策略模式" aria-label="Permalink to &quot;策略模式&quot;">​</a></h4><p>场景举例：马上大促要来了，我们本次大促要做差异化询价。啥是差异化询价？就是说同一个商品，我通过在后台给它设置不同的价格类型，可以让它展示不同的价格。具体的逻辑如下：</p><ul><li>当价格类型为“预售价”时，满 100 - 20，不满 100 打 9 折</li><li>当价格类型为“大促价”时，满 100 - 30，不满 100 打 8 折</li><li>当价格类型为“返场价”时，满 200 - 50，不叠加</li><li>当价格类型为“尝鲜价”时，直接打 5 折</li></ul><h5 id="if-else-实现" tabindex="-1">if-else 实现 <a class="header-anchor" href="#if-else-实现" aria-label="Permalink to &quot;if-else 实现&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 四种价格标签化</span></span>
<span class="line"><span style="color:#A6ACCD;">// 预售价 - pre</span></span>
<span class="line"><span style="color:#A6ACCD;">// 大促价 - onSale</span></span>
<span class="line"><span style="color:#A6ACCD;">// 返场价 - back</span></span>
<span class="line"><span style="color:#A6ACCD;">// 尝鲜价 - fresh</span></span>
<span class="line"><span style="color:#A6ACCD;">// 询价方法，接受价格标签和原价为入参</span></span>
<span class="line"><span style="color:#A6ACCD;">function askPrice(tag, originPrice) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 处理预热价</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(tag === &#39;pre&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(originPrice &gt;= 100) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return originPrice - 20</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return originPrice * 0.9</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 处理大促价</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(tag === &#39;onSale&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(originPrice &gt;= 100) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return originPrice - 30</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return originPrice * 0.8</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 处理返场价</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(tag === &#39;back&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(originPrice &gt;= 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return originPrice - 50</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return originPrice</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 处理尝鲜价</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(tag === &#39;fresh&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     return originPrice * 0.5</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><strong>if-else 弊端：</strong></p><ul><li>违背了“单一功能”原则。一个 function 里面，它竟然处理了四坨逻辑——这个函数的逻辑太胖了！万一其中一行代码出了 Bug，那么整个询价逻辑都会崩坏；与此同时出了 Bug 你很难定位到底是哪个代码块坏了事；再比如说单个能力很难被抽离复用等等等等。</li><li>违背了“开放封闭”原则。在 askPrice 里面，我们新增了一个 if-else 判断。可以看出，这样其实还是在修改 askPrice 的函数体，没有实现“对扩展开放，对修改封闭”的效果。</li></ul><h5 id="单一功能改造-抽" tabindex="-1">单一功能改造（抽） <a class="header-anchor" href="#单一功能改造-抽" aria-label="Permalink to &quot;单一功能改造（抽）&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 处理预热价</span></span>
<span class="line"><span style="color:#A6ACCD;">function prePrice(originPrice) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(originPrice &gt;= 100) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return originPrice - 20</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return originPrice * 0.9</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 处理大促价</span></span>
<span class="line"><span style="color:#A6ACCD;">function onSalePrice(originPrice) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(originPrice &gt;= 100) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return originPrice - 30</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return originPrice * 0.8</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 处理返场价</span></span>
<span class="line"><span style="color:#A6ACCD;">function backPrice(originPrice) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(originPrice &gt;= 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return originPrice - 50</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return originPrice</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 处理尝鲜价</span></span>
<span class="line"><span style="color:#A6ACCD;">function freshPrice(originPrice) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return originPrice * 0.5</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function askPrice(tag, originPrice) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 处理预热价</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(tag === &#39;pre&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return prePrice(originPrice)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 处理大促价</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(tag === &#39;onSale&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return onSalePrice(originPrice)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 处理返场价</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(tag === &#39;back&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return backPrice(originPrice)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 处理尝鲜价</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(tag === &#39;fresh&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     return freshPrice(originPrice)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h5 id="开放封闭改造" tabindex="-1">开放封闭改造 <a class="header-anchor" href="#开放封闭改造" aria-label="Permalink to &quot;开放封闭改造&quot;">​</a></h5><p><strong>对象映射</strong>既能够既帮我们明确询价标签-询价函数映射关系，同时不破坏代码的灵活性,取代 if-else 的好办法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 定义一个询价处理器对象，询价算法全都收敛到一个对象里去</span></span>
<span class="line"><span style="color:#A6ACCD;">const priceProcessor = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  pre(originPrice) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (originPrice &gt;= 100) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return originPrice - 20;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return originPrice * 0.9;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  onSale(originPrice) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (originPrice &gt;= 100) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return originPrice - 30;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return originPrice * 0.8;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  back(originPrice) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (originPrice &gt;= 200) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return originPrice - 50;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return originPrice;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  fresh(originPrice) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return originPrice * 0.5;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 询价函数</span></span>
<span class="line"><span style="color:#A6ACCD;">function askPrice(tag, originPrice) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return priceProcessor[tag](originPrice)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><strong>这，就是策略模式！</strong></p><blockquote><p>定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。</p></blockquote><h4 id="状态模式" tabindex="-1">状态模式 <a class="header-anchor" href="#状态模式" aria-label="Permalink to &quot;状态模式&quot;">​</a></h4><p>实现一台咖啡机</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//- 美式咖啡态（american)：只吐黑咖啡</span></span>
<span class="line"><span style="color:#A6ACCD;">//- 普通拿铁态(latte)：黑咖啡加点奶</span></span>
<span class="line"><span style="color:#A6ACCD;">//- 香草拿铁态（vanillaLatte）：黑咖啡加点奶再加香草糖浆</span></span>
<span class="line"><span style="color:#A6ACCD;">//- 摩卡咖啡态(mocha)：黑咖啡加点奶再加点巧克力</span></span>
<span class="line"><span style="color:#A6ACCD;">const stateToProcessor = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  american() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;我只吐黑咖啡&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  latte() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.american();</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;加点奶&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  vanillaLatte() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.latte();</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;再加香草糖浆&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  mocha() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.latte();</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;再加巧克力&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class CoffeeMaker {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">    这里略去咖啡机中与咖啡状态切换无关的一些初始化逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">  **/</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 初始化状态，没有切换任何咖啡模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.state = &#39;init&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 关注咖啡机状态切换函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  changeState(state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 记录当前状态</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.state = state;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 若状态不存在，则返回</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!stateToProcessor[state]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return ;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    stateToProcessor[state]();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const mk = new CoffeeMaker();</span></span>
<span class="line"><span style="color:#A6ACCD;">mk.changeState(&#39;latte&#39;);</span></span></code></pre></div><p>这种方法仅仅是看上去完美无缺，其中却暗含一个非常重要的隐患——<strong>stateToProcessor 里的工序函数，感知不到咖啡机的内部状况。</strong></p><p>把状态-行为映射对象作为主体类对应实例的一个属性添加进去：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class CoffeeMaker {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">    这里略去咖啡机中与咖啡状态切换无关的一些初始化逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">  **/</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 初始化状态，没有切换任何咖啡模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.state = &#39;init&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 初始化牛奶的存储量</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.leftMilk = &#39;500ml&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  stateToProcessor = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    that: this,</span></span>
<span class="line"><span style="color:#A6ACCD;">    american() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 尝试在行为函数里拿到咖啡机实例的信息并输出</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;咖啡机现在的牛奶存储量是:&#39;, this.that.leftMilk)</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;我只吐黑咖啡&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    latte() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.american()</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;加点奶&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    vanillaLatte() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.latte();</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;再加香草糖浆&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    mocha() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.latte();</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;再加巧克力&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 关注咖啡机状态切换函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  changeState(state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.state = state;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!this.stateToProcessor[state]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.stateToProcessor[state]();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const mk = new CoffeeMaker();</span></span>
<span class="line"><span style="color:#A6ACCD;">mk.changeState(&#39;latte&#39;);</span></span></code></pre></div><h4 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h4><blockquote><p>状态模式(State Pattern) ：允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类。<br> 状态模式主要解决的是当控制一个对象状态的条件表达式过于复杂时的情况。把状态的判断逻辑转移到表示不同状态的一系列类中，可以把复杂的判断逻辑简化。</p></blockquote><h5 id="策略与状态的辨析" tabindex="-1">策略与状态的辨析 <a class="header-anchor" href="#策略与状态的辨析" aria-label="Permalink to &quot;策略与状态的辨析&quot;">​</a></h5><p>策略模式和状态模式确实是相似的，它们都封装行为、都通过委托来实现行为分发。</p><p>策略模式中的行为函数是”潇洒“的行为函数，它们不依赖调用主体、互相平行、各自为政，井水不犯河水。(如例子中的询价算法，我只需要读取一个数字，我就能啪啪三下五除二给你吐出另一个数字作为返回结果——它和计算主体之间可以是分离的，我们只要关注计算逻辑本身就可以了。)</p><p>状态模式中的行为函数，首先是和状态主体之间存在着关联，由状态主体把它们串在一起；另一方面，正因为关联着同样的一个（或一类）主体，所以不同状态对应的行为函数可能并不会特别割裂。（如例子中的咖啡机）</p>`,26),o=[e];function c(i,t,r,C,A,y){return n(),a("div",null,o)}const h=s(p,[["render",c]]);export{g as __pageData,h as default};
