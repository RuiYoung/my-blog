import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.544e8ca7.js";const D=JSON.parse('{"title":"错误处理","description":"","frontmatter":{"title":"错误处理","date":"2017-09-05T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript"]},"headers":[],"relativePath":"javaScript/2017-09-05-javaScript-错误处理.md","lastUpdated":null}'),p={name:"javaScript/2017-09-05-javaScript-错误处理.md"},e=l(`<h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><blockquote><p>执行过程中，程序可能遇到无法预测的异常情况而报错，例如，网络连接中断，读取不存在的文件，没有操作权限等。对于这种错误，我们需要处理它，并可能需要给用户反馈。</p></blockquote><h4 id="try-catch-finally" tabindex="-1">try ... catch ... finally <a class="header-anchor" href="#try-catch-finally" aria-label="Permalink to &quot;try ... catch ... finally&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var r1, r2, s = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    r1 = s.length; // 此处应产生错误</span></span>
<span class="line"><span style="color:#A6ACCD;">    r2 = 100; // 该语句不会执行</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;出错了：&#39; + e);</span></span>
<span class="line"><span style="color:#A6ACCD;">} finally {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;finally&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;r1 = &#39; + r1); // r1应为undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;r2 = &#39; + r2); // r2应为undefined</span></span></code></pre></div><p>运行后可以发现，输出提示类似“出错了：TypeError: Cannot read property &#39;length&#39; of null”。</p><h6 id="try-catch-finally-的执行流程" tabindex="-1">try ... catch ... finally 的执行流程 <a class="header-anchor" href="#try-catch-finally-的执行流程" aria-label="Permalink to &quot;try ... catch ... finally 的执行流程&quot;">​</a></h6><p>当代码块被 try { ... }包裹的时候，就表示这部分代码执行过程中可能会发生错误，一旦发生错误，就不再继续执行后续代码，转而跳到 catch 块。catch (e) { ... }包裹的代码就是错误处理代码，变量 e 表示捕获到的错误。最后，无论有没有错误，finally 一定会被执行</p><p>catch 和 finally 可以不必都出现，也就是说，try 语句一共有三种形式：</p><p>try ... catch ... finally ... try ... catch ...<br> try ... finally ...</p><h4 id="错误类型" tabindex="-1">错误类型 <a class="header-anchor" href="#错误类型" aria-label="Permalink to &quot;错误类型&quot;">​</a></h4><p>JavaScript 有一个标准的 Error 对象表示错误，还有从 Error 派生的 TypeError、ReferenceError 等错误对象。我们在处理错误时，可以通过 catch(e)捕获的变量 e 访问错误对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch (e) { // 变量e是一个习惯用法，也可以以其他变量名命名</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (e instanceof TypeError) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        alert(&#39;Type error!&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (e instanceof Error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        alert(e.message);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        alert(&#39;Error: &#39; + e);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="抛出错误" tabindex="-1">抛出错误 <a class="header-anchor" href="#抛出错误" aria-label="Permalink to &quot;抛出错误&quot;">​</a></h4><p>程序也可以主动抛出一个错误，让执行流程直接跳转到 catch 块。抛出错误使用 throw 语句。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var r, n, s;</span></span>
<span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    s = prompt(&#39;请输入一个数字&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    n = parseInt(s);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (isNaN(n)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&#39;输入错误&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 计算平方:</span></span>
<span class="line"><span style="color:#A6ACCD;">    r = n * n;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(n + &#39; * &#39; + n + &#39; = &#39; + r);</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;出错了：&#39; + e);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="错误传播" tabindex="-1">错误传播 <a class="header-anchor" href="#错误传播" aria-label="Permalink to &quot;错误传播&quot;">​</a></h4><p>如果在一个函数内部发生了错误，它自身没有捕获，错误就会被抛到外层调用函数，如果外层函数也没有捕获，该错误会一直沿着函数调用链向上抛出，直到被 JavaScript 引擎捕获，代码终止执行。</p><p>所以，我们不必在每一个函数内部捕获错误，只需要在合适的地方来个统一捕获，一网打尽：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function main(s) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;BEGIN main()&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">        foo(s);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;出错了：&#39; + e);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;END main()&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function foo(s) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;BEGIN foo()&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    bar(s);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;END foo()&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function bar(s) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;BEGIN bar()&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;length = &#39; + s.length);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;END bar()&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">main(null);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 当bar()函数传入参数null时，代码会报错，错误会向上抛给调用方foo()函数，foo()函数没有try ... catch语句，所以错误继续向上抛给调用方main()函数，main()函数有try ... catch语句，所以错误最终在main()函数被处理了</span></span></code></pre></div><h4 id="异步错误处理" tabindex="-1">异步错误处理 <a class="header-anchor" href="#异步错误处理" aria-label="Permalink to &quot;异步错误处理&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function printTime() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(printTime, 1000); // 捕获时，回调函数printTime还未执行</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;done&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;error&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 没有捕获到抛出的错误</span></span></code></pre></div><p><strong>涉及到异步代码，无法在调用时捕获，原因就是在捕获的当时，回调函数并未执行。</strong></p><p>类似的，当我们处理一个事件时，在绑定事件的代码处，无法捕获事件处理函数的错误。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    $(.btn).click(()=&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var x = parseFloat($(&#39;x&#39;).val())</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(isNaN(X)){</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&#39;输入有误&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;error&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>必须这样写</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$(.btn).click(()=&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var x = parseFloat($(&#39;x&#39;).val())</span></span>
<span class="line"><span style="color:#A6ACCD;">  try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(isNaN(X)){</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new Error(&#39;输入有误&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } catch (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;error&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div>`,26),o=[e];function c(t,r,i,C,A,y){return a(),n("div",null,o)}const d=s(p,[["render",c]]);export{D as __pageData,d as default};
