import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.544e8ca7.js";const h=JSON.parse('{"title":"em、rem、vw、vh","description":"","frontmatter":{"title":"em、rem、vw、vh","date":"2017-10-05T00:00:00.000Z","author":"Ruiyoung","tag":["css"]},"headers":[],"relativePath":"css/2017-10-05-css-em&rem&vw&vh.md","lastUpdated":null}'),p={name:"css/2017-10-05-css-em&rem&vw&vh.md"},e=l(`<h3 id="em" tabindex="-1">em <a class="header-anchor" href="#em" aria-label="Permalink to &quot;em&quot;">​</a></h3><blockquote><p>em 作为 font-size 的单位时，其代表相对父元素的字体大小，em 作为其他属性单位时，代表相对自身字体大小</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;p1&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;s1&quot;&gt;1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;s2&quot;&gt;1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;p2&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;s5&quot;&gt;1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;s6&quot;&gt;1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.p1 {font-size: 16px; line-height: 32px;}</span></span>
<span class="line"><span style="color:#A6ACCD;">.s1 {font-size: 2em;}</span></span>
<span class="line"><span style="color:#A6ACCD;">.s2 {font-size: 2em; line-height: 2em;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.p2 {font-size: 16px; line-height: 2;}</span></span>
<span class="line"><span style="color:#A6ACCD;">.s5 {font-size: 2em;}</span></span>
<span class="line"><span style="color:#A6ACCD;">.s6 {font-size: 2em; line-height: 2em;}</span></span></code></pre></div><p>计算 px 的结果</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">p1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 16px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  line-height: 32px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">s1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 32px;  // 作为font-size的单位,相对父元素p1的字体大小 2em = 2 * 16px = 32px</span></span>
<span class="line"><span style="color:#A6ACCD;">  line-height: 32px; // 无赋值，line-height继承父元素p1计算值32px</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">s2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 32px;  // 作为font-size的单位,相对父元素p1的字体大小 2em = 2 * 16px = 32px</span></span>
<span class="line"><span style="color:#A6ACCD;">  line-height: 64px;  // 作为其他属性单位, 相对自身字体大小 2em = 2 * 32px = 64px</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">p2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 16px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  line-height: 32px; // 作为其他属性单位, 相对自身字体大小, 2的意思是两倍, 2 * 16px = 32px</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">s5 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 32px; // 作为font-size的单位,相对父元素p2的字体大小 2em = 2 * 16px = 32px</span></span>
<span class="line"><span style="color:#A6ACCD;">  line-height: 64px; // 无赋值，line-height继承父元素p2计算值2, 作为其他属性单位, 相对自身字体大小 2 * 32px = 64px</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">s6 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  font-size: 32px; // 作为font-size的单位,相对父元素p2的字体大小 2em = 2 * 16px = 32px</span></span>
<span class="line"><span style="color:#A6ACCD;">  line-height: 64px; // 作为其他属性单位, 相对自身字体大小 2em = 2 * 32px = 64px</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="rem" tabindex="-1">rem <a class="header-anchor" href="#rem" aria-label="Permalink to &quot;rem&quot;">​</a></h3><blockquote><p>rem 作用于非根元素时，相对于根元素字体大小；rem 作用于根元素字体大小时，相对于其出初始字体大小</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* 作用于根元素，相对于原始大小（16px），所以html的font-size为32px*/</span></span>
<span class="line"><span style="color:#A6ACCD;">html {font-size: 2rem}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* 作用于非根元素，相对于根元素字体大小，所以为64px */</span></span>
<span class="line"><span style="color:#A6ACCD;">p {font-size: 2rem}</span></span></code></pre></div><h4 id="rem-布局原理" tabindex="-1">rem 布局原理 <a class="header-anchor" href="#rem-布局原理" aria-label="Permalink to &quot;rem 布局原理&quot;">​</a></h4><p>其实 rem 布局的本质是等比缩放，一般是基于宽度，试想一下如果 UE 图能够等比缩放，那该多么美好啊</p><p>假设我们将屏幕宽度平均分成 100 份，每一份的宽度用 x 表示，x = 屏幕宽度 / 100，如果将 x 作为单位，x 前面的数值就代表屏幕宽度的百分比</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">p {width: 50x} /* 屏幕宽度100x的50% */</span></span></code></pre></div><p>如果想要页面元素随着屏幕宽度等比变化，我们需要上面的 x 单位，不幸的是 css 中并没有这样的单位，幸运的是在 css 中有 rem，通过 rem 这个桥梁，可以实现神奇的 x</p><p>如果子元素设置 rem 单位的属性，通过更改 html 元素的字体大小，就可以让子元素实际大小发生变化</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">html {font-size: 16px}</span></span>
<span class="line"><span style="color:#A6ACCD;">p {width: 2rem} /* 32px*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">html {font-size: 32px}</span></span>
<span class="line"><span style="color:#A6ACCD;">p {width: 2rem} /*64px*/</span></span></code></pre></div><p>如果让 html 元素字体的大小，恒等于屏幕宽度的 1/100，那 1rem 和 1x 就等价了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">html {fons-size: width / 100}</span></span>
<span class="line"><span style="color:#A6ACCD;">p {width: 50rem} /* 50rem = 50x = 屏幕宽度的50% */</span></span></code></pre></div><p>如何让 html 字体大小一直等于屏幕宽度的百分之一呢？ 可以通过 js 来设置，一般需要在页面 dom ready、resize 和屏幕旋转中设置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + &#39;px&#39;;</span></span></code></pre></div><p>那么如何把 UE 图中的获取的像素单位的值，转换为已 rem 为单位的值呢？公式是<strong>元素宽度 / UE 图宽度 * 100</strong>，让我们举个例子，假设 UE 图尺寸是 640px，UE 图中的一个元素宽度是 100px，根据公式 100/640*100 = 15.625</p><table><thead><tr><th style="text-align:center;">UE 图宽度</th><th style="text-align:center;">UE 图中元素宽度</th></tr></thead><tbody><tr><td style="text-align:center;">640px</td><td style="text-align:center;">100px</td></tr><tr><td style="text-align:center;">480px</td><td style="text-align:center;">75px</td></tr><tr><td style="text-align:center;">320px</td><td style="text-align:center;">50px</td></tr></tbody></table><p>通过我们的元素在不同屏幕宽度下的计算值</p><table><thead><tr><th style="text-align:center;">页面宽度</th><th style="text-align:center;">html 字体大小</th><th style="text-align:center;">p 元素宽度</th></tr></thead><tbody><tr><td style="text-align:center;">640px</td><td style="text-align:center;">640/100 = 6.4px</td><td style="text-align:center;">15.625*6.4=100px</td></tr><tr><td style="text-align:center;">480px</td><td style="text-align:center;">480/100=4.8px</td><td style="text-align:center;">15.625*4.8=75px</td></tr><tr><td style="text-align:center;">320px</td><td style="text-align:center;">320/100=3.2px</td><td style="text-align:center;">15.625*3.2=50px</td></tr></tbody></table><h5 id="saas-预处理转换" tabindex="-1">saas 预处理转换 <a class="header-anchor" href="#saas-预处理转换" aria-label="Permalink to &quot;saas 预处理转换&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ue-width: 640; /* ue图的宽度 */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@function px2rem($px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @return #{$px/$ue-width*100}rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">p {</span></span>
<span class="line"><span style="color:#A6ACCD;">  width: px2rem(100);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>上面的代码编译完的结果如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">p {width: 15.625rem}</span></span></code></pre></div><p>现在有了 postcss 后，这个过程应该放到 postcss 中,</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">p {width: 100px2rem} /* postcss会对px2rem这个单位进行处理 */</span></span></code></pre></div><h4 id="比-rem-更好的方案-vw、vh" tabindex="-1">比 Rem 更好的方案 vw、vh <a class="header-anchor" href="#比-rem-更好的方案-vw、vh" aria-label="Permalink to &quot;比 Rem 更好的方案 vw、vh&quot;">​</a></h4><p>想让页面元素随着页面宽度变化，需要一个新的单位 x，x 等于屏幕宽度的百分之一，css3 带来了 rem 的同时，也带来了 vw 和 vh</p><blockquote><p>vw —— 视口宽度的 1/100；vh —— 视口高度的 1/100</p></blockquote><p>根据定义可以发现 1vw=1x，有了 vw 我们完全可以绕过 rem 这个中介了，下面两种方案是等价的，可以看到 vw 比 rem 更简单，毕竟 rem 是为了实现 vw 么</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* rem方案 */</span></span>
<span class="line"><span style="color:#A6ACCD;">html {fons-size: width / 100}</span></span>
<span class="line"><span style="color:#A6ACCD;">p {width: 15.625rem}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* vw方案 */</span></span>
<span class="line"><span style="color:#A6ACCD;">p {width: 15.625vw}</span></span></code></pre></div><p>vw 还可以和 rem 方案结合，这样计算 html 字体大小就不需要用 js 了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">html {fons-size: 1vw} /* 1vw = width / 100 根据屏幕宽度自动变更大小*/</span></span>
<span class="line"><span style="color:#A6ACCD;">p {width: 15.625rem}</span></span></code></pre></div><table><thead><tr><th>兼容性</th><th>Ios</th><th>安卓</th></tr></thead><tbody><tr><td>rem</td><td>4.1+</td><td>2.1+</td></tr><tr><td>vw</td><td>6.1+</td><td>4.4+</td></tr></tbody></table><p>vw 的兼容性不如 rem 好<br> 在使用弹性布局时，一般会限制最大宽度，比如在 pc 端查看我们的页面，此时 vw 就无法力不从心了，因为除了 width 有 max-width 外，其他单位都没有，而 rem 可以通过控制 html 根元素的 font-size 最大值，vw 永远是视口宽度的 1/100，没有办法控制最大值</p><h4 id="一些重要的问题" tabindex="-1">一些重要的问题 <a class="header-anchor" href="#一些重要的问题" aria-label="Permalink to &quot;一些重要的问题&quot;">​</a></h4><blockquote><p>rem 是弹性布局的一种实现方式，弹性布局可以算作响应式布局的一种，但响应式布局不是弹性布局，弹性布局强调等比缩放，100%还原；响应式布局强调不同屏幕要有不同的显示，比如媒体查询 用户选择大屏幕有两个几个出发点，有些人想要更大的字体，更大的图片，比如老花眼的我；有些人想要更多的内容，并不想要更大的图标 一般内容型的网站，都不太适合使用 rem，因为大屏用户可以自己选择是要更大字体，还是要更多内容，一旦使用了 rem，就剥夺了用户的自由，比如百度知道，百度经验都没有使用 rem 布局；一些偏向 app 类的，图标类的，图片类的，比如淘宝，活动页面，比较适合使用 rem，因为调大字体时并不能调大图标的大小</p></blockquote><h6 id="字体问题" tabindex="-1">字体问题 <a class="header-anchor" href="#字体问题" aria-label="Permalink to &quot;字体问题&quot;">​</a></h6><p>字体大小并不能使用 rem，字体的大小和字体宽度，并不成线性关系，所以字体大小不能使用 rem；由于设置了根元素字体的大小，会影响所有没有设置字体大小的元素，因为字体大小是会继承的，我们可以在 body 上做字体修正，比如把 body 字体大小设置为 16px</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">html {fons-size: width / 100}</span></span>
<span class="line"><span style="color:#A6ACCD;">body {font-size: 16px}</span></span></code></pre></div><p>字体的大小如何实现响应式呢？可以通过修改 body 字体的大小来实现，同时所有设置字体大小的地方都是用 em 单位，对就是 em，因为只有 em 才能实现，同步变化，em 就是为字体而生的</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 320px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  body {font-size: 16px}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 481px) and (max-width:640px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  body {font-size: 18px}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 641px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  body {font-size: 20px}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">p {font-size: 1.2em}</span></span>
<span class="line"><span style="color:#A6ACCD;">p a {font-size: 1.2em}</span></span></code></pre></div><h6 id="页面过宽问题" tabindex="-1">页面过宽问题 <a class="header-anchor" href="#页面过宽问题" aria-label="Permalink to &quot;页面过宽问题&quot;">​</a></h6><p>用户在 PC 端浏览，页面过宽了，一般我们都会设置一个最大宽度，大于这个宽度的话页面居中，两边留白</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var clientWidth = document.documentElement.clientWidth;</span></span>
<span class="line"><span style="color:#A6ACCD;">clientWidth = clientWidth &lt; 780 ? clientWidth : 780;</span></span>
<span class="line"><span style="color:#A6ACCD;">document.documentElement.style.fontSize = clientWidth / 100 + &#39;px&#39;;</span></span></code></pre></div><p>设置 body 的宽度为 100rem，并水平居中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">body { margin: auto; width: 100rem }</span></span></code></pre></div><h6 id="用户禁用了-js-问题-一般不会出现" tabindex="-1">用户禁用了 js 问题 （一般不会出现） <a class="header-anchor" href="#用户禁用了-js-问题-一般不会出现" aria-label="Permalink to &quot;用户禁用了 js 问题 （一般不会出现）&quot;">​</a></h6><p>rem 布局中，如果用户禁用了 js, 无法通过 js 去修改 html 的 fontSize</p><p>首先可以添加 noscript 标签提示用户</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;noscript&gt;开启JavaScript，获得更好的体验&lt;/noscript&gt;</span></span></code></pre></div><p>添加媒体查询设定</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 320px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  html {font-size: 3.2px}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 481px) and (max-width:640px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  html {font-size: 4.8px}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 641px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  html {font-size: 6.4px}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>这里有个问题，分成 100 份的话，假设屏幕宽度 320，<strong>此时 html 大小是 3.2px，但浏览器支持最小字体大小是 12px</strong>，怎么办？那就分成 10 份呗，只要把上面的 100 都换成 10 就好了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 320px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  html {font-size: 32px}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 481px) and (max-width:640px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  html {font-size: 48px}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 641px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  html {font-size: 64px}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p><strong>最好的弹性布局方案是，rem+js 方案，同时还要解决 noscript 问题，解决字体问题，解决屏幕过宽问题</strong></p><p>完整例子</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, maximum-scale=1&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;rem布局&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;noscript&gt;开启JavaScript，获得更好的体验&lt;/noscript&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;p1&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        宽度为屏幕宽度的50%，字体大小1.2em</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;s1&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            字体大小1.2.em</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;p2&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        宽度为屏幕宽度的40%，字体大小默认</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;s2&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            字体大小1.2em</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">html {</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: 32px; /* 320/10 */</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">body {</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: 16px; /* 修正字体大小 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* 防止页面过宽 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin: auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 10rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* 防止页面过宽 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    outline: 1px dashed green;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* js被禁止的回退方案 */</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 320px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    html {font-size: 32px}</span></span>
<span class="line"><span style="color:#A6ACCD;">    body {font-size: 16px;}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 481px) and (max-width:640px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    html {font-size: 48px}</span></span>
<span class="line"><span style="color:#A6ACCD;">    body {font-size: 18px;}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@media screen and (min-width: 641px) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    html {font-size: 64px}</span></span>
<span class="line"><span style="color:#A6ACCD;">    body {font-size: 20px;}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">noscript {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: block;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border: 1px solid #d6e9c6;</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding: 3px 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    background: #dff0d8;</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: #3c763d;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">/* js被禁止的回退方案 */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.p1, .p2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    border: 1px solid red;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin: 10px 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.p1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 5rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 5rem;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: 1.2em; /* 字体使用em */</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.s1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: 1.2em; /* 字体使用em */</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.p2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 4rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 4rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.s2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: 1.2em /* 字体使用em */</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var documentElement = document.documentElement;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function callback() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var clientWidth = documentElement.clientWidth;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 屏幕宽度大于780，不在放大</span></span>
<span class="line"><span style="color:#A6ACCD;">    clientWidth = clientWidth &lt; 780 ? clientWidth : 780;</span></span>
<span class="line"><span style="color:#A6ACCD;">    documentElement.style.fontSize = clientWidth / 10 + &#39;px&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">document.addEventListener(&#39;DOMContentLoaded&#39;, callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">window.addEventListener(&#39;orientationchange&#39; in window ? &#39;orientationchange&#39; : &#39;resize&#39;, callback);</span></span></code></pre></div>`,65),t=[e];function o(c,i,r,C,A,d){return n(),a("div",null,t)}const m=s(p,[["render",o]]);export{h as __pageData,m as default};
