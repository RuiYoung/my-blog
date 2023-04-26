import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.544e8ca7.js";const p="/img/vpn.png",u=JSON.parse('{"title":"代理模式","description":"","frontmatter":{"title":"代理模式","date":"2020-01-11T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript设计模式"]},"headers":[],"relativePath":"javaScriptDesignPatterns/2020-01-11-javaScript设计模式核心原理与运用实践-代理模式.md","lastUpdated":null}'),e={name:"javaScriptDesignPatterns/2020-01-11-javaScript设计模式核心原理与运用实践-代理模式.md"},o=l('<h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><blockquote><p>在某些情况下，出于种种考虑/限制，一个对象不能直接访问另一个对象，需要一个第三者（代理）牵线搭桥从而间接达到访问目的，这样的模式就是代理模式。</p></blockquote><h5 id="vpn-代理访问外网" tabindex="-1">VPN 代理访问外网 <a class="header-anchor" href="#vpn-代理访问外网" aria-label="Permalink to &quot;VPN 代理访问外网&quot;">​</a></h5><p><img src="'+p+`" alt="vpn"></p><p>代理服务器的 ip 地址，不在被禁用的那批 ip 地址之列，我们可以顺利访问到这台服务器。而这台服务器的 DNS 解析过程，没有被施加咒语，所以它是可以顺利访问 Google.com 的。代理服务器在请求到 Google.com 后，将响应体转发给你，使你得以间接地访问到目标网址 —— 像这种第三方代替我们访问目标对象的模式，就是代理模式。</p><h5 id="es6-中的-proxy" tabindex="-1">ES6 中的 Proxy <a class="header-anchor" href="#es6-中的-proxy" aria-label="Permalink to &quot;ES6 中的 Proxy&quot;">​</a></h5><p>在 ES6 中，提供了专门以代理角色出现的代理器 —— Proxy。它的基本用法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const proxy = new Proxy(obj, handler)</span></span></code></pre></div><p>第一个参数是我们的目标对象。handler 也是一个对象，用来定义代理的行为。当我们通过 proxy 去访问目标对象的时候，handler 会对我们的行为作一层拦截，我们的每次访问都需要经过 handler 这个第三方。</p><h5 id="婚介所-的实现-举例" tabindex="-1">“婚介所”的实现(举例) <a class="header-anchor" href="#婚介所-的实现-举例" aria-label="Permalink to &quot;“婚介所”的实现(举例)&quot;">​</a></h5><p>婚介所收到了小美的信息，开始营业。大家想，这个姓名、自我介绍、假头像，这些信息大差不差，曝光一下没问题。但是人家妹子的年龄、职业、真实头像、手机号码，是不是属于非常私密的信息了？要想 get 这些信息，平台要考验一下你的诚意了 —— 首先，你是不是已经通过了实名审核？如果通过实名审核，那么你可以查看一些相对私密的信息（年龄、职业）。然后，你是不是 VIP ？只有 VIP 可以查看真实照片和联系方式。满足了这两个判定条件，你才可以顺利访问到别人的全部私人信息，不然，就劝退你提醒你去完成认证和 VIP 购买再来。 此外，我们还允许会员间互送礼物，每个会员可以告知婚介所自己愿意接受的礼物的价格下限。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 未知妹子</span></span>
<span class="line"><span style="color:#A6ACCD;">const girl = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 姓名</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;小美&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 自我介绍</span></span>
<span class="line"><span style="color:#A6ACCD;">  aboutMe: &#39;...&#39;（大家自行脑补吧）</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 年龄</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: 24,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 职业</span></span>
<span class="line"><span style="color:#A6ACCD;">  career: &#39;teacher&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 假头像</span></span>
<span class="line"><span style="color:#A6ACCD;">  fakeAvatar: &#39;xxxx&#39;(新垣结衣的图片地址）</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 真实头像</span></span>
<span class="line"><span style="color:#A6ACCD;">  avatar: &#39;xxxx&#39;(自己的照片地址),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 手机号</span></span>
<span class="line"><span style="color:#A6ACCD;">  phone: 123456,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 礼物数组</span></span>
<span class="line"><span style="color:#A6ACCD;">  presents: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 拒收50块以下的礼物</span></span>
<span class="line"><span style="color:#A6ACCD;">  bottomValue: 50,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 记录最近一次收到的礼物</span></span>
<span class="line"><span style="color:#A6ACCD;">  lastPresent: present,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 普通私密信息</span></span>
<span class="line"><span style="color:#A6ACCD;">const baseInfo = [&#39;age&#39;, &#39;career&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">// 最私密信息</span></span>
<span class="line"><span style="color:#A6ACCD;">const privateInfo = [&#39;avatar&#39;, &#39;phone&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 用户（同事A）对象实例</span></span>
<span class="line"><span style="color:#A6ACCD;">const user = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...(一些必要的个人信息)</span></span>
<span class="line"><span style="color:#A6ACCD;">    isValidated: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    isVIP: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 婚介所登场了</span></span>
<span class="line"><span style="color:#A6ACCD;">const Lovers = new Proxy(girl, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  get: function(girl, key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(baseInfo.indexOf(key)!==-1 &amp;&amp; !user.isValidated) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          alert(&#39;您还没有完成验证哦&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">          return</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      //...(此处省略其它有的没的各种校验逻辑)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // 此处我们认为只有验证过的用户才可以购买VIP</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(user.isValidated &amp;&amp; privateInfo.indexOf(key) &amp;&amp; !user.isVIP) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          alert(&#39;只有VIP才可以查看该信息哦&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">          return</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  set: function(girl, key, val) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 最近一次送来的礼物会尝试赋值给lastPresent字段</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(key === &#39;lastPresent&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(val.value &lt; girl.bottomValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          alert(&#39;sorry，您的礼物被拒收了&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">          return</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // 如果没有拒收，则赋值成功，同时并入presents数组</span></span>
<span class="line"><span style="color:#A6ACCD;">      girl[lastPresent] = val</span></span>
<span class="line"><span style="color:#A6ACCD;">      girl[presents] = [...presents, val]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h4 id="最常见的四种代理类型" tabindex="-1">最常见的四种代理类型 <a class="header-anchor" href="#最常见的四种代理类型" aria-label="Permalink to &quot;最常见的四种代理类型&quot;">​</a></h4><h5 id="事件代理" tabindex="-1">事件代理 <a class="header-anchor" href="#事件代理" aria-label="Permalink to &quot;事件代理&quot;">​</a></h5><p>用代理模式实现多个子元素的事件监听</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;事件代理&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;father&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接1号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接2号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接3号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接4号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接5号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接6号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 考虑到事件本身具有“冒泡”的特性，当我们点击 a 元素时，点击事件会“冒泡”到父元素 div 上，从而被监听到。</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 获取父元素</span></span>
<span class="line"><span style="color:#A6ACCD;">  const father = document.getElementById(&#39;father&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 给父元素安装一次监听函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  father.addEventListener(&#39;click&#39;, function(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 识别是否是目标子元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(e.target.tagName === &#39;A&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 以下是监听函数的函数体</span></span>
<span class="line"><span style="color:#A6ACCD;">          e.preventDefault()</span></span>
<span class="line"><span style="color:#A6ACCD;">          alert(\`我是\${e.target.innerText}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } )</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><h5 id="虚拟代理" tabindex="-1">虚拟代理 <a class="header-anchor" href="#虚拟代理" aria-label="Permalink to &quot;虚拟代理&quot;">​</a></h5><blockquote><p>图片懒加载: 针对图片加载时机的优化,主要是为了避免一些图片量比较大的网站,当用户打开页面的时候，就把所有的图片资源加载完毕，那么很可能会造成白屏、卡顿等现象。采取“先占位、后加载”的方式来展示图片 —— 在元素露出之前，我们给它一个 div 作占位，当它滚动到可视区域内时，再即时地去加载真实的图片资源，这样做既减轻了性能压力、又保住了用户体验。<br> 图片预加载: 主要是为了避免网络不好、或者图片太大时，页面长时间给用户留白的尴尬。常见的操作是先让这个 img 标签展示一个占位图，然后创建一个 Image 实例，让这个 Image 实例的 src 指向真实的目标图片地址、观察该 Image 实例的加载情况 —— 当其对应的真实图片加载完毕后，即已经有了该图片的缓存内容，再将 DOM 上的 img 元素的 src 指向真实的目标图片地址。此时我们直接去取了目标图片的缓存，所以展示速度会非常快.</p></blockquote><p>我们可以用虚拟代理来实现图片预加载</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// PreLoadImage 专心去做 DOM 层面的事情（真实 DOM 节点的获取、img 节点的链接设置）</span></span>
<span class="line"><span style="color:#A6ACCD;">class PreLoadImage {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(imgNode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 获取真实的DOM节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.imgNode = imgNode</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 操作img节点的src属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    setSrc(imgUrl) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.imgNode.src = imgUrl</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class ProxyImage {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 占位图的url地址</span></span>
<span class="line"><span style="color:#A6ACCD;">    static LOADING_URL = &#39;xxxxxx&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(targetImage) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 目标Image，即PreLoadImage实例</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.targetImage = targetImage</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 该方法主要操作虚拟Image，完成加载</span></span>
<span class="line"><span style="color:#A6ACCD;">    setSrc(targetUrl) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 真实img节点初始化时展示的是一个占位图</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.targetImage.setSrc(ProxyImage.LOADING_URL)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 创建一个帮我们加载图片的虚拟Image实例</span></span>
<span class="line"><span style="color:#A6ACCD;">        const virtualImage = new Image()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 监听目标图片加载的情况，完成时再将DOM上的真实img节点的src属性设置为目标图片的url</span></span>
<span class="line"><span style="color:#A6ACCD;">        virtualImage.onload = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.targetImage.setSrc(targetUrl)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 设置src属性，虚拟Image实例开始加载图片</span></span>
<span class="line"><span style="color:#A6ACCD;">        virtualImage.src = targetUrl</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // virtualImage代替真实 DOM 发起了图片加载请求、完成了图片加载工作，却从未在渲染层面抛头露面。</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h5 id="缓存代理" tabindex="-1">缓存代理 <a class="header-anchor" href="#缓存代理" aria-label="Permalink to &quot;缓存代理&quot;">​</a></h5><blockquote><p>缓存代理，它应用于一些计算量较大的场景里。在这种场景下，我们需要“用空间换时间”——当我们需要用到某个已经计算过的值的时候，不想再耗时进行二次计算，而是希望能从内存里去取出现成的计算结果。这种场景下，就需要一个代理来帮我们在进行计算的同时，进行计算结果的缓存了。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// addAll方法会对你传入的所有参数做求和操作</span></span>
<span class="line"><span style="color:#A6ACCD;">const addAll = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;进行了一次新计算&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    let result = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    const len = arguments.length</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(let i = 0; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        result += arguments[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return result</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 为求和方法创建代理</span></span>
<span class="line"><span style="color:#A6ACCD;">const proxyAddAll = (function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 求和结果的缓存池</span></span>
<span class="line"><span style="color:#A6ACCD;">    const resultCache = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 将入参转化为一个唯一的入参字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">        const args = Array.prototype.join.call(arguments, &#39;,&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 检查本次入参是否有对应的计算结果</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(args in resultCache) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果有，则返回缓存池里现成的结果</span></span>
<span class="line"><span style="color:#A6ACCD;">            return resultCache[args]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return resultCache[args] = addAll(...arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// proxyAddAll 针对重复的入参只会计算一次</span></span>
<span class="line"><span style="color:#A6ACCD;">proxyAddAll(1,2,3,4,5,6)</span></span>
<span class="line"><span style="color:#A6ACCD;">// log打印： 进行了一次新计算</span></span>
<span class="line"><span style="color:#A6ACCD;">// log打印： 21</span></span>
<span class="line"><span style="color:#A6ACCD;">proxyAddAll(1,2,3,4,5,6)</span></span>
<span class="line"><span style="color:#A6ACCD;">// log打印： 21</span></span></code></pre></div><h5 id="保护代理" tabindex="-1">保护代理 <a class="header-anchor" href="#保护代理" aria-label="Permalink to &quot;保护代理&quot;">​</a></h5><p>“婚介所”的实现就是&quot;保护代理&quot;, 有权限限制，保护拦截。ES6 中的 Proxy，本身就是为拦截而生的，所以我们目前实现保护代理时，考虑的首要方案就是 ES6 中的 Proxy。</p>`,25),t=[o];function c(r,A,C,i,y,D){return n(),a("div",null,t)}const d=s(e,[["render",c]]);export{u as __pageData,d as default};
