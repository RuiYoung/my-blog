import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.544e8ca7.js";const u=JSON.parse('{"title":"适配器模式","description":"","frontmatter":{"title":"适配器模式","date":"2020-01-06T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript设计模式"]},"headers":[],"relativePath":"javaScriptDesignPatterns/2020-01-09-javaScript设计模式核心原理与运用实践-适配器模式.md","lastUpdated":null}'),l={name:"javaScriptDesignPatterns/2020-01-09-javaScript设计模式核心原理与运用实践-适配器模式.md"},e=p(`<h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><blockquote><p>适配器模式通过把一个类的接口变换成客户端所期待的另一种接口，可以帮我们解决不兼容的问题。</p></blockquote><h5 id="兼容接口-适配器运用场景" tabindex="-1">兼容接口-适配器运用场景 <a class="header-anchor" href="#兼容接口-适配器运用场景" aria-label="Permalink to &quot;兼容接口-适配器运用场景&quot;">​</a></h5><p>封装了一个基于 fetch 的 http 方法库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export default class HttpUtils {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // get方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  static get(url) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 调用fetch</span></span>
<span class="line"><span style="color:#A6ACCD;">      fetch(url)</span></span>
<span class="line"><span style="color:#A6ACCD;">        .then(response =&gt; response.json())</span></span>
<span class="line"><span style="color:#A6ACCD;">        .then(result =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .catch(error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // post方法，data以object形式传入</span></span>
<span class="line"><span style="color:#A6ACCD;">  static post(url, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 调用fetch</span></span>
<span class="line"><span style="color:#A6ACCD;">      fetch(url, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        method: &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        headers: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          Accept: &#39;application/json&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 将object类型的数据格式化为合法的body参数</span></span>
<span class="line"><span style="color:#A6ACCD;">        body: this.changeData(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .then(response =&gt; response.json())</span></span>
<span class="line"><span style="color:#A6ACCD;">        .then(result =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resolve(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        .catch(error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          reject(error)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // body请求体的格式化方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  static changeData(obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var prop,</span></span>
<span class="line"><span style="color:#A6ACCD;">      str = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var i = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (prop in obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (!prop) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (i == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        str += prop + &#39;=&#39; + obj[prop]</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        str += &#39;&amp;&#39; + prop + &#39;=&#39; + obj[prop]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      i++</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return str</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>想使用 fetch 发起请求时，只需要这样轻松地调用，而不必再操心繁琐的数据配置和数据格式化：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 定义目标url地址</span></span>
<span class="line"><span style="color:#A6ACCD;">const URL = &quot;xxxxx&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义post入参</span></span>
<span class="line"><span style="color:#A6ACCD;">const params = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 发起post请求</span></span>
<span class="line"><span style="color:#A6ACCD;"> const postResponse = await HttpUtils.post(URL,params) || {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> // 发起get请求</span></span>
<span class="line"><span style="color:#A6ACCD;"> const getResponse = await HttpUtils.get(URL)</span></span></code></pre></div><p>假如有一些古老业务封装的网络请求库，是基于 XMLHttpRequest 的，差不多长这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Ajax(type, url, data, success, failed){</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 创建ajax对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    var xhr = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(window.XMLHttpRequest){</span></span>
<span class="line"><span style="color:#A6ACCD;">        xhr = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        xhr = new ActiveXObject(&#39;Microsoft.XMLHTTP&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   ...(此处省略一系列的业务逻辑细节)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   var type = type.toUpperCase();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 识别请求类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(type == &#39;GET&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(data){</span></span>
<span class="line"><span style="color:#A6ACCD;">          xhr.open(&#39;GET&#39;, url + &#39;?&#39; + data, true); //如果有数据就拼接</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 发送get请求</span></span>
<span class="line"><span style="color:#A6ACCD;">        xhr.send();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if(type == &#39;POST&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">        xhr.open(&#39;POST&#39;, url, true);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 如果需要像 html 表单那样 POST 数据，使用 setRequestHeader() 来添加 http 头。</span></span>
<span class="line"><span style="color:#A6ACCD;">        xhr.setRequestHeader(&quot;Content-type&quot;, &quot;application/x-www-form-urlencoded&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 发送post请求</span></span>
<span class="line"><span style="color:#A6ACCD;">        xhr.send(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 处理返回数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    xhr.onreadystatechange = function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(xhr.readyState == 4){</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(xhr.status == 200){</span></span>
<span class="line"><span style="color:#A6ACCD;">                success(xhr.responseText);</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if(failed){</span></span>
<span class="line"><span style="color:#A6ACCD;">                    failed(xhr.status);</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>它是这样调用的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 发送get请求</span></span>
<span class="line"><span style="color:#A6ACCD;">Ajax(&#39;get&#39;, url地址, post入参, function(data){</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 成功的回调逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">}, function(error){</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 失败的回调逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>现在要把古老业务基于 XMLHttpRequest 的网络请求全部换成基于 fetch 的 http 方法库，我们可以在引入接口时进行一次适配，为我们抹平差异,这就是适配器模式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// Ajax适配器函数，入参与旧接口保持一致</span></span>
<span class="line"><span style="color:#A6ACCD;">async function AjaxAdapter(type, url, data, success, failed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const type = type.toUpperCase()</span></span>
<span class="line"><span style="color:#A6ACCD;">    let result</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // **实际的请求全部由新接口发起**</span></span>
<span class="line"><span style="color:#A6ACCD;">         if(type === &#39;GET&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            result = await HttpUtils.get(url) || {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if(type === &#39;POST&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            result = await HttpUtils.post(url, data) || {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 假设请求成功对应的状态码是1</span></span>
<span class="line"><span style="color:#A6ACCD;">        result.statusCode === 1 &amp;&amp; success ? success(result) : failed(result.statusCode)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch(error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 捕捉网络错误</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(failed){</span></span>
<span class="line"><span style="color:#A6ACCD;">            failed(error.statusCode);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 用适配器适配旧的Ajax方法</span></span>
<span class="line"><span style="color:#A6ACCD;">async function Ajax(type, url, data, success, failed) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    await AjaxAdapter(type, url, data, success, failed)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,13),o=[e];function t(c,r,C,A,i,y){return n(),a("div",null,o)}const d=s(l,[["render",t]]);export{u as __pageData,d as default};
