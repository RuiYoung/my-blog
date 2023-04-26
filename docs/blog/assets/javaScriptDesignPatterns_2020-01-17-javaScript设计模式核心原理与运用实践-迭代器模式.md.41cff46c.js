import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.544e8ca7.js";const D=JSON.parse('{"title":"迭代器模式","description":"","frontmatter":{"title":"迭代器模式","date":"2020-01-17T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript设计模式"]},"headers":[],"relativePath":"javaScriptDesignPatterns/2020-01-17-javaScript设计模式核心原理与运用实践-迭代器模式.md","lastUpdated":null}'),e={name:"javaScriptDesignPatterns/2020-01-17-javaScript设计模式核心原理与运用实践-迭代器模式.md"},p=l(`<h4 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h4><blockquote><p>迭代器模式提供一种方法顺序访问一个聚合对象中的各个元素，而又不暴露该对象的内部表示。</p></blockquote><p>在 JS 中，本身也内置了一个比较简陋的数组迭代器的实现——Array.prototype.forEach</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const arr = [1, 2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr.forEach((item, index)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`索引为\${index}的元素是\${item}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>然而对于类数组对象，就失效了！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;事件代理&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接1号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接2号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接3号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接4号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接5号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a href=&quot;#&quot;&gt;链接6号&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const aNodes = document.getElementsByTagName(&#39;a&#39;) // 拿到一个类数组对象</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;aNodes are&#39;, aNodes)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 取其中一个a标签</span></span>
<span class="line"><span style="color:#A6ACCD;">  const aNode = aNodes[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 报错 aNodes.forEach is not a function</span></span>
<span class="line"><span style="color:#A6ACCD;">  aNodes.forEach((aNode, index){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(aNode, index)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span></code></pre></div><h4 id="es6-对迭代器的实现" tabindex="-1">ES6 对迭代器的实现 <a class="header-anchor" href="#es6-对迭代器的实现" aria-label="Permalink to &quot;ES6 对迭代器的实现&quot;">​</a></h4><p>JS 原生的集合类型数据结构，有 Array（数组）和 Object（对象）；而 ES6 中，又新增了 Map 和 Set。四种数据结构各自有着自己特别的内部实现，但我们仍期待以同样的一套规则去遍历它们，所以 ES6 在推出新数据结构的同时也推出了一套统一的接口机制——迭代器（Iterator）。</p><p>ES6 约定，任何数据结构只要具备 Symbol.iterator 属性（这个属性就是 Iterator 的具体实现，它本质上是当前数据结构默认的迭代器生成函数），就可以被遍历——准确地说，是被 for...of...循环和迭代器的 next 方法遍历。 事实上，for...of...的背后正是对 next 方法的反复调用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const arr = [1, 2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">const len = arr.length</span></span>
<span class="line"><span style="color:#A6ACCD;">for(item of arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`当前元素是\${item}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>之所以能够按顺序一次一次地拿到数组里的每一个成员，是因为我们借助数组的 Symbol.iterator 生成了它对应的迭代器对象，通过反复调用迭代器对象的 next 方法访问了数组成员，像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const arr = [1, 2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">// 通过调用iterator，拿到迭代器对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const iterator = arr[Symbol.iterator]()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 对迭代器对象执行next，就能逐个访问集合的成员</span></span>
<span class="line"><span style="color:#A6ACCD;">iterator.next() // {value: 1, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">iterator.next() // {value: 2, done: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">iterator.next() // {value: 3, done: false}</span></span></code></pre></div><p>而 for...of...做的事情，基本等价于下面这通操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 通过调用iterator，拿到迭代器对象</span></span>
<span class="line"><span style="color:#A6ACCD;">const iterator = arr[Symbol.iterator]()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 初始化一个迭代结果</span></span>
<span class="line"><span style="color:#A6ACCD;">let now = { done: false }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 循环往外迭代成员</span></span>
<span class="line"><span style="color:#A6ACCD;">while(!now.done) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    now = iterator.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!now.done) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(\`现在遍历到了\${now.value}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="实现一个迭代器生成函数" tabindex="-1">实现一个迭代器生成函数 <a class="header-anchor" href="#实现一个迭代器生成函数" aria-label="Permalink to &quot;实现一个迭代器生成函数&quot;">​</a></h4><p>在 ES6 中，实现一个迭代器生成函数并不是什么难事儿，因为 ES6 早帮我们考虑好了全套的解决方案，内置了贴心的生成器（Generator）供我们使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 编写一个迭代器生成函数</span></span>
<span class="line"><span style="color:#A6ACCD;">function *iteratorGenerator() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    yield &#39;1号选手&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    yield &#39;2号选手&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    yield &#39;3号选手&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const iterator = iteratorGenerator()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">iterator.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">iterator.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">iterator.next()</span></span></code></pre></div><p>用 ES5 去写一个能够生成迭代器对象的迭代器生成函数:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 定义生成器函数，入参是任意集合</span></span>
<span class="line"><span style="color:#A6ACCD;">function iteratorGenerator(list) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // idx记录当前访问的索引</span></span>
<span class="line"><span style="color:#A6ACCD;">    var idx = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    // len记录传入集合的长度</span></span>
<span class="line"><span style="color:#A6ACCD;">    var len = list.length</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 自定义next方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        next: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果索引还没有超出集合长度，done为false</span></span>
<span class="line"><span style="color:#A6ACCD;">            var done = idx &gt;= len</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果done为false，则可以继续取值</span></span>
<span class="line"><span style="color:#A6ACCD;">            var value = !done ? list[idx++] : undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // 将当前值与遍历是否完毕（done）返回</span></span>
<span class="line"><span style="color:#A6ACCD;">            return {</span></span>
<span class="line"><span style="color:#A6ACCD;">                done: done,</span></span>
<span class="line"><span style="color:#A6ACCD;">                value: value</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var iterator = iteratorGenerator([&#39;1号选手&#39;, &#39;2号选手&#39;, &#39;3号选手&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">iterator.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">iterator.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">iterator.next()</span></span></code></pre></div>`,19),t=[p];function o(c,r,i,C,A,y){return a(),n("div",null,t)}const u=s(e,[["render",o]]);export{D as __pageData,u as default};
