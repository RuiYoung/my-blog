import{_ as l,o as t,c as e,A as a,G as p,C as c,a as s,Q as n,H as r}from"./chunks/framework.544e8ca7.js";const D=JSON.parse('{"title":"JSON","description":"","frontmatter":{"title":"JSON","date":"2017-07-05T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript"]},"headers":[],"relativePath":"javaScript/2017-07-12-javaScript-JSON.md","lastUpdated":null}'),i={name:"javaScript/2017-07-12-javaScript-JSON.md"},u=n(`<blockquote><p>JSON 是存储和交换文本信息的语法。类似 XML。(JSON 比 XML 更小、更快，更易解析。)<br> JSON 是轻量级的文本数据交换格式<br> JSON 独立于语言(JSON 使用 JavaScript 语法来描述数据对象，但是 JSON 仍然独立于语言和平台。)<br> JSON 具有自我描述性，更易理解<br> JSON 是在 AJAX 中代替 XML 交换数据的更佳方案。</p></blockquote><h3 id="json-语法" tabindex="-1">JSON 语法 <a class="header-anchor" href="#json-语法" aria-label="Permalink to &quot;JSON 语法&quot;">​</a></h3><ul><li>数据在名称/值对中</li><li>数据由逗号分隔</li><li>花括号保存对象</li><li>方括号保存数组</li><li>JSON 值可以是：<br>   数字（整数或浮点数）<br>   字符串（在双引号中）<br>   逻辑值（true 或 false）<br>   数组（在方括号中）<br>   对象（在花括号中）<br>   null</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//js中的对象表示</span></span>
<span class="line"><span style="color:#A6ACCD;">var user={</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&#39;张三&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age:&#39;30&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//josn对象表示</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot;:&quot;张三&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;age&quot;:&quot;30&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//普通数组</span></span>
<span class="line"><span style="color:#A6ACCD;">var arr=[&quot;aaa&quot;,100,true]</span></span>
<span class="line"><span style="color:#A6ACCD;">//json数组</span></span>
<span class="line"><span style="color:#A6ACCD;">[&quot;aaa&quot;,100,true] //少了变量赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">//数组对象组合嵌套使用</span></span>
<span class="line"><span style="color:#A6ACCD;">[{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot;:&quot;aaa&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;age&quot;:30</span></span>
<span class="line"><span style="color:#A6ACCD;">},{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot;:&quot;bbb&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;age&quot;:25</span></span>
<span class="line"><span style="color:#A6ACCD;">},{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot;:&quot;ccc&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;age&quot;:18</span></span>
<span class="line"><span style="color:#A6ACCD;">}]</span></span></code></pre></div><h3 id="json-的解析和序列化" tabindex="-1">JSON 的解析和序列化 <a class="header-anchor" href="#json-的解析和序列化" aria-label="Permalink to &quot;JSON 的解析和序列化&quot;">​</a></h3><blockquote><p>一般情况下，我们的 json 数据都是从服务端获取到的，获取的 json 数据是以字符串的形式返回的。这个字符串虽然是 json 格式的，但是不能被直接使用，我们必须将该字符串转化为一个对象才能正常解析它</p></blockquote>`,6),C=a("p",null,"JavaScript 函数 eval() 可用于将 JSON 文本转换为 JavaScript 对象。",-1),A=a("li",null,[a("p",null,[s("使用 JSON 解析器将 JSON 转换为 JavaScript 对象是更安全的做法。JSON 解析器只会识别 JSON 文本,而不会执行。"),a("br"),s("   JSON 的解析:json 数据转换成 js 对象 JSON.parse()"),a("br"),s("   JSON 的序列化:js 对象转换成 json 数据(字符串) JSON.stringify()")])],-1),q=n(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//实际使用的时候json数据需要从服务器加载，这里假定下面的数据是从服务器加载过来的，来演示后续的操作。</span></span>
<span class="line"><span style="color:#A6ACCD;">var jsonstr=&#39;[{&quot;name&quot;:&quot;aaa&quot;,&quot;age&quot;:30},{&quot;name&quot;:&quot;bbb&quot;,&quot;age&quot;:25},{&quot;name&quot;:&quot;ccc&quot;,&quot;age&quot;:18}]&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var jsonobj=JSON.parse(jsonstr);</span></span>
<span class="line"><span style="color:#A6ACCD;">jsonstr=JSON.stringify(jsonobj)</span></span></code></pre></div><h3 id="json-法创建对象" tabindex="-1">JSON 法创建对象 <a class="header-anchor" href="#json-法创建对象" aria-label="Permalink to &quot;JSON 法创建对象&quot;">​</a></h3><blockquote><p>JSON 非常易于人阅读与编写，同时利于机器解析与生成.我们可以使用 JSON 语法创建 JavaScript 对象</p></blockquote><ul><li>优点：语法简单</li><li>缺点：不适用多个对象的创建</li></ul>`,4);function S(_,J,d,N,b,y){const o=r("font");return t(),e("div",null,[u,a("ul",null,[a("li",null,[C,p(o,{color:"red"},{default:c(()=>[s(" eval()函数可编译并执行任何 JavaScript 代码。这隐藏了一个潜在的安全问题。(如果 JSON 中包含恶意代码也会被直接执行) ")]),_:1})]),A]),q])}const h=l(i,[["render",S]]);export{D as __pageData,h as default};
