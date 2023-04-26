import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.544e8ca7.js";const u=JSON.parse('{"title":"匿名函数和闭包","description":"","frontmatter":{"title":"匿名函数和闭包","date":"2017-07-05T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript"]},"headers":[],"relativePath":"javaScript/2017-07-05-javaScript-匿名函数和闭包.md","lastUpdated":null}'),p={name:"javaScript/2017-07-05-javaScript-匿名函数和闭包.md"},e=l(`<h3 id="匿名函数" tabindex="-1">匿名函数 <a class="header-anchor" href="#匿名函数" aria-label="Permalink to &quot;匿名函数&quot;">​</a></h3><blockquote><p>没有函数名字的函数</p></blockquote><ul><li>单独的匿名函数是无法运行和调用的</li><li>可以把匿名函数赋值给变量</li><li>通过表达式自我执行，语法：(匿名函数)()</li><li>匿名函数传递参数，语法：(匿名函数)(参数)</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 情况1.把匿名函数赋值给变量</span></span>
<span class="line"><span style="color:#A6ACCD;">var fn=function (){</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(&#39;我是匿名函数&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(fn)   //会将函数表达式输出</span></span>
<span class="line"><span style="color:#A6ACCD;">fn()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//情况2.匿名函数通过表达式自我执行</span></span>
<span class="line"><span style="color:#A6ACCD;">(function (){</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(&#39;我是匿名函数&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//匿名函数传递参数</span></span>
<span class="line"><span style="color:#A6ACCD;">function myfn(m,n){</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(m+n)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">myfn(100,100);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(function(m,n){</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(m+n)</span></span>
<span class="line"><span style="color:#A6ACCD;">})(1000,1000)</span></span></code></pre></div><h3 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h3><blockquote><p>闭包的英文单词是 closure，是指有权访问另一个函数作用域中变量的函数。<br> 在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。内层的函数可以使用外层函数的所有变量，即使外层函数已经执行完毕。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function myfn(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function (){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return(&#39;**********&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(myfn)  //输出整个函数表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(myfn())  //输出匿名函数表达式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//调用方式1</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(myfn()())</span></span>
<span class="line"><span style="color:#A6ACCD;">//调用方式2</span></span>
<span class="line"><span style="color:#A6ACCD;">var bb=myfn()</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(bb())</span></span></code></pre></div><h5 id="闭包的相关知识点" tabindex="-1">闭包的相关知识点 <a class="header-anchor" href="#闭包的相关知识点" aria-label="Permalink to &quot;闭包的相关知识点&quot;">​</a></h5><ul><li>常见的方式是在函数内部创建另一个函数</li><li>闭包的第一个用途：通过闭包可以访问局部变量</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function myfn(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var bb=&#39;局部变量bb&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function (){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return(bb) // 通过匿名函数返回myfn()的局部变量bb;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//调用方式1</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(myfn()())</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//调用方式2</span></span>
<span class="line"><span style="color:#A6ACCD;">var csbb=myfn()</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(csbb())</span></span></code></pre></div><ul><li>闭包的第二个用途：可以让局部变量的值始终保持在内存中<br>   优点:可以把局部变量驻留在内存中,可以避免使用全局变量;[全局变量在复杂程序中会造成许多麻烦（比如命名冲突，垃圾回收等），所以推荐使用私有的,封装的局部变量。而闭包可以实现这一点。]<br>   缺点：由于闭包里作用域返回的局部变量资源不会被立刻销毁回收,所以可能会占用更多的内存;所以过度使用闭包会导致性能下降</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function add(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var num= 100; // 这里改为局部变量;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        num++;</span></span>
<span class="line"><span style="color:#A6ACCD;">        alert(num);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// add()();add()();add()();//这种调用方式会出错,因为每次调用 num都会初始化一次;</span></span>
<span class="line"><span style="color:#A6ACCD;">var fn=add()//只在这里初始化一次，后边调用的时候执行的是里边的匿名函数</span></span>
<span class="line"><span style="color:#A6ACCD;">fn();fn();fn();</span></span>
<span class="line"><span style="color:#A6ACCD;">fn=null //应及时解除引用，否则会占用更多内存</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function fun(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var arr=[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(var i=0; i&lt;5; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        arr[i]=function(n){</span></span>
<span class="line"><span style="color:#A6ACCD;">            return function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">                return &#39;元素&#39;+n;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return arr</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var Bb=fun()</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(Bb.length)</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(Bb[0]())</span></span>
<span class="line"><span style="color:#A6ACCD;">for(var i=0; i&lt;5; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //alert(Bb[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(Bb[i]())</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//这次成功的输出了 ‘元素0 元素1 元素2 元素3 元素4 ’，而不再都是[元素5]</span></span>
<span class="line"><span style="color:#A6ACCD;">/*</span></span>
<span class="line"><span style="color:#A6ACCD;">    1.这里的匿名函数有一个参数 n，也就是最终将返回的结果数值；</span></span>
<span class="line"><span style="color:#A6ACCD;">    2.在调用每个匿名函数时传入变量i</span></span>
<span class="line"><span style="color:#A6ACCD;">    3.变量i的当前值会赋值给n，</span></span>
<span class="line"><span style="color:#A6ACCD;">    4.匿名函数内部创建并返回了一个访问n的闭包</span></span>
<span class="line"><span style="color:#A6ACCD;">    5.如此数组arr中的每个函数中都有了自己的n变量的一个副本(闭包可以将局部变量贮存在内存中)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span></code></pre></div><h5 id="闭包中的-this-问题" tabindex="-1">闭包中的 this 问题 <a class="header-anchor" href="#闭包中的-this-问题" aria-label="Permalink to &quot;闭包中的 this 问题&quot;">​</a></h5><ul><li>this 是在运行时基于函数的执行环境来绑定的</li><li>全局函数中的 this 是 window，而当函数作为某个对象的方法调用时，this 就是指的那个对象</li><li>匿名函数的执行环境具有全局性，this 通常是指向 window 的</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var name=&#39;The Window&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj={</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&#39;my obj&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    get:function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            return this.name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">alert(obj.get()()) //这次返回的是全局变量 &#39;The Window&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(obj.get().call(obj))//这次又返回的是&#39;my obj&#39;，因为call()强制改变了this的指向</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var name=&#39;The Window&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj={</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&#39;my obj&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    get:function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        //这里的this指的是对象，这里为obj</span></span>
<span class="line"><span style="color:#A6ACCD;">        var self=this</span></span>
<span class="line"><span style="color:#A6ACCD;">        return function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            //闭包里的this指的是window</span></span>
<span class="line"><span style="color:#A6ACCD;">            return self.name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(obj.get()())</span></span></code></pre></div><h5 id="模仿块级作用域" tabindex="-1">模仿块级作用域 <a class="header-anchor" href="#模仿块级作用域" aria-label="Permalink to &quot;模仿块级作用域&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function myfun() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(var i=0;i&lt;5;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }  //i不会因为离开了for块就失效;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var i; //重新声明后i还是5,</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(i)  //此时的i=5</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//模仿块级作用域</span></span>
<span class="line"><span style="color:#A6ACCD;">function myfun() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    (function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">      for(var i=0;i&lt;5;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">          alert(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })()  // 这里定义并立即调用了一个匿名函数;</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    //此时的i已结不存在 会报错:&#39;i is not defined&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">myfun()</span></span></code></pre></div>`,18),o=[e];function c(t,i,r,C,A,y){return n(),a("div",null,o)}const d=s(p,[["render",c]]);export{u as __pageData,d as default};
