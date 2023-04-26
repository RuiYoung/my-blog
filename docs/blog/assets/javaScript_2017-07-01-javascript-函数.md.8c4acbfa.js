import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.544e8ca7.js";const D=JSON.parse('{"title":"函数","description":"","frontmatter":{"title":"函数","date":"2017-07-01T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript"]},"headers":[],"relativePath":"javaScript/2017-07-01-javascript-函数.md","lastUpdated":null}'),p={name:"javaScript/2017-07-01-javascript-函数.md"},e=l(`<h3 id="基本类型和引用类型" tabindex="-1">基本类型和引用类型 <a class="header-anchor" href="#基本类型和引用类型" aria-label="Permalink to &quot;基本类型和引用类型&quot;">​</a></h3><p><strong>1. 基本类型值有：undefined，NUll，Boolean，Number 和 String</strong><br> 这些类型分别在内存中占有固定的大小空间，例如：数值型在内存中占有八个字节，布尔值只占有一个字节...... 他们的值保存在栈空间，我们通过按值来访问的。</p><p><strong>2.引用类型：对象、数组、函数</strong><br> 引用类型内存中占有的空间不固定，但是内存地址大小是固定的，因此存储的实际上是数据的内存地址。</p><p><strong>3.在变量复制时候，基本类型复制的是值本身，而引用类型复制的是地址</strong><br><strong>4.函数的参数都是按值传递的</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//函数的参数都是按值传递的</span></span>
<span class="line"><span style="color:#A6ACCD;">var num = 100;</span></span>
<span class="line"><span style="color:#A6ACCD;">function box(num){</span></span>
<span class="line"><span style="color:#A6ACCD;">    num+=100;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return num;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var result = box(num);</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(result);</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(num);//这里输出100而不是200</span></span></code></pre></div><h3 id="函数创建方式" tabindex="-1">函数创建方式 <a class="header-anchor" href="#函数创建方式" aria-label="Permalink to &quot;函数创建方式&quot;">​</a></h3><ul><li>普通声明方式</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function fun (m,n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(m + n)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fun(3,2)</span></span></code></pre></div><ul><li>使用变量声明</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var fun = function(m, n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(m + n)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fun(3, 2)</span></span></code></pre></div><ul><li>使用构造函数 (了解)</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var fun = new Function(&#39;m&#39;, &#39;n&#39;, &#39;alert(m+n)&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">fun(3, 2)</span></span></code></pre></div><h4 id="函数的内部属性" tabindex="-1">函数的内部属性 <a class="header-anchor" href="#函数的内部属性" aria-label="Permalink to &quot;函数的内部属性&quot;">​</a></h4><ul><li>arguments</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// arguments.length检测函数的参数个数</span></span>
<span class="line"><span style="color:#A6ACCD;">function sum() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //alert(arguments.length);</span></span>
<span class="line"><span style="color:#A6ACCD;">    var result=0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(var i=0;i&lt;arguments.length;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        result+=arguments[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return result</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(sum(12,3,5,10,5,3))</span></span></code></pre></div><ul><li>this</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//在函数外部使用this,this就指的是window对象</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(this)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//全局变量可以看做window对象的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">var x=1;</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(window.x)</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(this.x)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//函数内部调用</span></span>
<span class="line"><span style="color:#A6ACCD;">function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var x=0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(x) //这里的x为0</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(this.x); //这里的x为1</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//test()</span></span>
<span class="line"><span style="color:#A6ACCD;">//用new来调用，那么绑定的将是新创建的对象</span></span>
<span class="line"><span style="color:#A6ACCD;">function test2(){</span></span>
<span class="line"><span style="color:#A6ACCD;">　　this.x = 100;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj = new test2();</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(x); //这里的x为1</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(obj.x);//这里的x为100</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//作为某个对象的方法调用</span></span>
<span class="line"><span style="color:#A6ACCD;">function test3(){</span></span>
<span class="line"><span style="color:#A6ACCD;">　　alert(this.x);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var objo={};</span></span>
<span class="line"><span style="color:#A6ACCD;">objo.x = 1000;</span></span>
<span class="line"><span style="color:#A6ACCD;">objo.m = test3;</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(x);</span></span>
<span class="line"><span style="color:#A6ACCD;">//objo.m(); //1000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//事件监听函数中的this</span></span>
<span class="line"><span style="color:#A6ACCD;">var div1 = document.getElementById(&#39;div1&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">div1.onclick = function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert( this.innerHTML); //this指向的是div元素</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div><h3 id="函数的属性和方法" tabindex="-1">函数的属性和方法 <a class="header-anchor" href="#函数的属性和方法" aria-label="Permalink to &quot;函数的属性和方法&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//length:当前函数希望接受的命名参数的个数</span></span>
<span class="line"><span style="color:#A6ACCD;">function test(num1,num2,num3) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        alert(test.length);</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(arguments.length) //注意arguments是实际传人的参数</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//test(10,20,10,35)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function sum(num1, num2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return num1 + num2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function applySum1(num1, num2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return sum.apply(this, [num1, num2]);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function applySum2(num1, num2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return sum.apply(this, arguments);//传入arguments对象</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(sum(10,20))</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(applySum1(10,20))</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(applySum2(10,20))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//对于apply、call二者而言，作用完全一样，只是接受参数的方式不太一样。　</span></span>
<span class="line"><span style="color:#A6ACCD;">function callSum(num1, num2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return sum.call(this, num1, num2); //传入的是具体的参数</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(callSum(30, 20));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//扩充函数作用域</span></span>
<span class="line"><span style="color:#A6ACCD;">var color = &quot;red&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var o = {color: &quot;blue&quot;};</span></span>
<span class="line"><span style="color:#A6ACCD;">function sayColor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(this.color);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// sayColor();</span></span>
<span class="line"><span style="color:#A6ACCD;">// sayColor.call(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">// sayColor.call(window);</span></span>
<span class="line"><span style="color:#A6ACCD;">sayColor.call(o)</span></span></code></pre></div><h3 id="执行环境及作用域" tabindex="-1">执行环境及作用域 <a class="header-anchor" href="#执行环境及作用域" aria-label="Permalink to &quot;执行环境及作用域&quot;">​</a></h3><ul><li>执行环境定义了变量或函数有权访问其他数据。</li><li>全局执行环境是最外围的执行环境，在 web 浏览器中，全局执行环境是 window 对象，因此，所有的全局变量的函数都是作为 window 的属性和方法创建的。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var name = &quot;张三&quot;;      //定义全局变量</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(window.name);    //全局变量，最外围，属于window属性</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function setName(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &quot;李四&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(setName());</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(window.setName()); //全局函数，最外围，属于window方法</span></span></code></pre></div><ul><li>变量没有在函数内声明或者声明的时候没有带 var 就是全局变量，拥有全局作用域,window 对象的所有属性拥有全局作用域；在代码任何地方都可以访问，函数内部声明并且以 var 修饰的变量就是局部变量，只能在函数体内使用，函数的参数虽然没有使用 var 但仍然是局部变量。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var name = &quot;张三&quot;;      //定义全局变量</span></span>
<span class="line"><span style="color:#A6ACCD;">function setName(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //var name= &quot;李四&quot;;    //定义局部变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    name=&quot;李四&quot;;    //去掉var变成了全局变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    //alert(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">setName()</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(name);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function setName(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var name=&quot;张三&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    function setYear(){ //setYear()方法的作用域在setName()内</span></span>
<span class="line"><span style="color:#A6ACCD;">    var age=21;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var str=name+age+&#39;岁了&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return str;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //alert(setYear())</span></span>
<span class="line"><span style="color:#A6ACCD;">    //alert(age)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return setYear()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">setName()</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(setYear())</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(setName());</span></span></code></pre></div><ul><li>内部环境可以访问所有的外部环境，但是外部环境不能访问内部环境中的任何变量和函数。</li><li>在变量的查询中，访问局部变量要比全局变量快。</li></ul><h3 id="内存管理" tabindex="-1">内存管理 <a class="header-anchor" href="#内存管理" aria-label="Permalink to &quot;内存管理&quot;">​</a></h3><blockquote><p>JS 中内存的分配和回收都是自动完成的，内存在不使用的时候会被垃圾回收器自动回收。</p></blockquote><ul><li>内存的生命周期,JS 环境中分配的内存一般有如下生命周期:<br>   1.内存分配：当我们申明变量、函数、对象的时候，系统会自动为他们分配内存<br>   2.内存使用：即读写内存，也就是使用变量、函数等<br>   3.内存回收：使用完毕，由垃圾回收自动回收不再使用的内存</li><li>垃圾回收算法：对垃圾回收算法来说，核心思想就是如何判断内存已经不再使用了。</li><li>JavaScript 的内存管理注意事项:<br>   1.避免不必要的定义全局变量(当一个变量被定义在全局作用域中，默认情况下 JavaScript 引擎就不会将其回收销毁。如此该变量就会一直存在于老生代堆内存中，直到页面被关闭。)<br>   2.及时解除不再使用的变量引用,即将其赋值为 null;(在内存回收周期中，收回内存不是立即收回，浏览器每隔一段时间检查一次)<br>   3.合理的使用函数，函数中的局部变量函数执行结束后就会自动释放内存。</li></ul><h3 id="全局函数" tabindex="-1">全局函数 <a class="header-anchor" href="#全局函数" aria-label="Permalink to &quot;全局函数&quot;">​</a></h3><blockquote><p>全局函数和属性可用于所有内建的 JavaScript 对象。全局函数又叫顶层函数或系统函数。</p></blockquote><ul><li>parseInt() 函数可解析一个字符串，并返回一个整数。</li><li>parseFloat() 函数可解析一个字符串，并返回一个浮点数。</li><li>isNaN() 函数用于检查其参数是否是非数字值。</li><li>String() 函数把对象的值转换为字符串。</li><li>Number() 把对象的值转换为数字。</li><li>eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。(该方法只接受字符串作为参数，要计算的字符串中必须含有要计算的 JavaScript 表达式或要执行的语句。)</li><li>escape() 对字符串进行编码。<br>   返回值:已编码的 string 的副本。其中某些字符被替换成了十六进制的转义序列。<br>   该方法不会对 ASCII 字母和数字进行编码，也不会对下面这些 ASCII 标点符号进行编码： * @ - _ + . / 。其他所有的字符都会被转义序列替换。</li><li>unescape() 对由 escape() 编码的字符串进行解码。</li><li>encodeURI() 把字符串编码为 URI。</li><li>decodeURI() 解码某个编码的 URI。</li><li>decodeURIComponent() 解码一个编码的 URI 组件。</li><li>encodeURIComponent() 把字符串编码为 URI 组件。</li><li>三种编码方式的区别:<br>   1.escape 不编码字符有 69 个：<em>，+，-，.，/，@，_，0-9，a-z，A-Z(主要是为了防止特殊字符造成计算错误时候应用)<br>   2.encodeURI 不编码字符有 82 个：!，#，$，&amp;，&#39;，(，)，</em>，+，,，-，.，/，:，;，=，?，@，<em>，~，0-9，a-z，A-Z(防止特殊字符串造成 URI 的传递错误，一般用于页面跳转的时候)<br>   3.encodeURIComponent 不编码字符有 71 个：!， &#39;，(，)，*，-，.，</em>，~，0-9，a-z，A-Z(防止 URI 参数中特殊字符串造成参数读取错误，一般用来传递参数。)</li><li>isFinite() 检查某个值是否为无穷大的数。<br> 如果 number 是有限数字（或可转换为有限数字），那么返回 true。否则，如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。<br>   Infinity 无穷大（系统定义常量）<br>   -Infinity 无穷小（系统定义常量）</li></ul>`,31),o=[e];function t(c,i,r,C,A,u){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{D as __pageData,m as default};
