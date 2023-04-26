import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.544e8ca7.js";const g=JSON.parse('{"title":"单例模式","description":"","frontmatter":{"title":"单例模式","date":"2020-01-06T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript设计模式"]},"headers":[],"relativePath":"javaScriptDesignPatterns/2020-01-06-javaScript设计模式核心原理与运用实践-单例模式.md","lastUpdated":null}'),p={name:"javaScriptDesignPatterns/2020-01-06-javaScript设计模式核心原理与运用实践-单例模式.md"},e=l(`<h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><blockquote><p>保证一个类仅有一个实例，并提供一个访问它的全局访问点，这样的模式就叫做单例模式。</p></blockquote><h3 id="如何实现" tabindex="-1">如何实现 <a class="header-anchor" href="#如何实现" aria-label="Permalink to &quot;如何实现&quot;">​</a></h3><p>一般情况下，当我们创建了一个类（本质是构造函数）后，可以通过 new 关键字调用构造函数进而生成任意多的实例对象。像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class SingleDog {</span></span>
<span class="line"><span style="color:#A6ACCD;">    show() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;我是一个单例对象&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const s1 = new SingleDog()</span></span>
<span class="line"><span style="color:#A6ACCD;">const s2 = new SingleDog()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// false</span></span>
<span class="line"><span style="color:#A6ACCD;">s1 === s2</span></span></code></pre></div><p>我们先 new 了一个 s1，又 new 了一个 s2，很明显 s1 和 s2 之间没有任何瓜葛，两者是相互独立的对象，各占一块内存空间。而单例模式想要做到的是，不管我们尝试去创建多少次，它都只给你返回第一次所创建的那唯一的一个实例。</p><p>要做到这一点，就需要构造函数具备判断自己是否已经创建过一个实例的能力。我们现在把这段判断逻辑写成一个静态方法(其实也可以直接写入构造函数的函数体里）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class SingleDog {</span></span>
<span class="line"><span style="color:#A6ACCD;">    show() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;我是一个单例对象&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    static getInstance() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 判断是否已经new过1个实例</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!SingleDog.instance) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 若这个唯一的实例不存在，那么先创建它</span></span>
<span class="line"><span style="color:#A6ACCD;">            SingleDog.instance = new SingleDog()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 如果这个唯一的实例已经存在，则直接返回</span></span>
<span class="line"><span style="color:#A6ACCD;">        return SingleDog.instance</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const s1 = SingleDog.getInstance()</span></span>
<span class="line"><span style="color:#A6ACCD;">const s2 = SingleDog.getInstance()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">s1 === s2</span></span></code></pre></div><p>除了楼上这种实现方式之外，getInstance 的逻辑还可以用闭包来实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SingleDog.getInstance = (function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 定义自由变量instance，模拟私有变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    let instance = null</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 判断自由变量是否为null</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(!instance) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果为null则new出唯一实例</span></span>
<span class="line"><span style="color:#A6ACCD;">            instance = new SingleDog()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return instance</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})()</span></span></code></pre></div>`,10),o=[e];function c(t,i,r,C,A,D){return n(),a("div",null,o)}const _=s(p,[["render",c]]);export{g as __pageData,_ as default};
