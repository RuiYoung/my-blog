import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.544e8ca7.js";const d=JSON.parse('{"title":"构造器模式、工厂模式","description":"","frontmatter":{"title":"构造器模式、工厂模式","date":"2020-01-02T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript设计模式"]},"headers":[],"relativePath":"javaScriptDesignPatterns/2020-01-02-javaScript 设计模式核心原理与应用实践-构造器模式、工厂模式.md","lastUpdated":null}'),p={name:"javaScriptDesignPatterns/2020-01-02-javaScript 设计模式核心原理与应用实践-构造器模式、工厂模式.md"},e=l(`<h4 id="构造器模式-解决多个对象实例的问题" tabindex="-1">构造器模式 （解决多个对象实例的问题） <a class="header-anchor" href="#构造器模式-解决多个对象实例的问题" aria-label="Permalink to &quot;构造器模式 （解决多个对象实例的问题）&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function User(name , age, career) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.age = age</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.career = career</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const user1 = new User(&#39;xiaomei&#39;, 22, &#39;ui&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const user2 = new User(&#39;xiaoming&#39;, 25, &#39;产品经理&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">......</span></span></code></pre></div><p>像 User 这样当新建对象的内存被分配后，用来初始化该对象的特殊函数，就叫做构造器。在 JavaScript 中，我们使用构造函数去初始化对象，就是应用了构造器模式。<br> 很明显，变的是每个 user 的姓名、年龄、工种这些值，这是用户的个性，不变的是每个员工都具备姓名、年龄、工种这些属性，这是用户的共性。<br><strong>使用构造器模式的时候，我们本质上是去抽象了每个对象实例的变与不变</strong></p><h4 id="工厂模式" tabindex="-1">工厂模式 <a class="header-anchor" href="#工厂模式" aria-label="Permalink to &quot;工厂模式&quot;">​</a></h4><p><strong>将创建对象的过程单独封装</strong></p><h5 id="简单工厂-解决多个类的问题" tabindex="-1">简单工厂（解决多个类的问题） <a class="header-anchor" href="#简单工厂-解决多个类的问题" aria-label="Permalink to &quot;简单工厂（解决多个类的问题）&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function User(name , age, career, work) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.age = age</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.career = career</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.work = work</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Factory(name, age, career) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let work</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不同的工种，原则上划于不同的类，但我们可以对共性封装得彻底一些，让其属于更上层的类User，把个性写入逻辑判断中，这就是简单工厂模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch(career) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &#39;coder&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            work =  [&#39;写代码&#39;,&#39;写系分&#39;, &#39;修Bug&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">            break</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &#39;product manager&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            work = [&#39;订会议室&#39;, &#39;写PRD&#39;, &#39;催更&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">            break</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &#39;boss&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            work = [&#39;喝茶&#39;, &#39;看报&#39;, &#39;见客户&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &#39;xxx&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 其它工种的职责分配</span></span>
<span class="line"><span style="color:#A6ACCD;">            ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new User(name, age, career, work)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>应用场景：有构造函数的地方，我们就应该想到简单工厂；在写了大量构造函数、调用了大量的 new、自觉非常不爽的情况下，我们就应该思考是不是可以掏出工厂模式重构我们的代码了。</p><h5 id="抽象工厂" tabindex="-1">抽象工厂 <a class="header-anchor" href="#抽象工厂" aria-label="Permalink to &quot;抽象工厂&quot;">​</a></h5><p>在实际的业务中，我们往往面对的复杂度并非数个类、一个工厂可以解决，而是需要动用多个工厂。</p><p>简单工厂中每考虑到一个新的工种，就回去修改一次 Factory 的函数体，这样做糟糕透了——首先，是 Factory 会变得异常庞大，庞大到你每次添加的时候都不敢下手，生怕自己万一写出一个 Bug，就会导致整个 Factory 的崩坏，进而摧毁整个系统；其次，你坑死了你的队友：Factory 的逻辑过于繁杂和混乱，没人敢维护它；最后，你还连带坑了隔壁的测试同学：你每次新加一个工种，他都不得不对整个 Factory 的逻辑进行回归——谁让你的改变是在 Factory 内部原地发生的呢！这一切悲剧的根源只有一个——没有遵守开放封闭原则。<br><strong>开放封闭原则的内容：对拓展开放，对修改封闭。说得更准确点，软件实体（类、模块、函数）可以扩展，但是不可修改。Factory 这波操作错就错在我们不是在拓展，而是在疯狂地修改。</strong></p><h6 id="example" tabindex="-1">example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;example&quot;">​</a></h6><p>假设我要开一个山寨手机工厂，那我这个工厂里必须是既准备好了操作系统，也准备好了硬件，才能实现手机的量产。</p><p>先来一个抽象类来约定住这台手机的基本组成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class MobilePhoneFactory {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 提供操作系统的接口</span></span>
<span class="line"><span style="color:#A6ACCD;">    createOS(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&quot;抽象工厂方法不允许直接调用，你需要将我重写！&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 提供硬件的接口</span></span>
<span class="line"><span style="color:#A6ACCD;">    createHardWare(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&quot;抽象工厂方法不允许直接调用，你需要将我重写！&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>抽象工厂不干活，具体工厂（ConcreteFactory）来干活！当我们明确了生产方案，明确某一条手机生产流水线具体要生产什么样的手机了之后，就可以化抽象为具体，比如我现在想要一个专门生产 Android 系统 + 高通硬件的手机的生产线，我给这类手机型号起名叫 FakeStar，那我就可以为 FakeStar 定制一个具体工厂：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 具体工厂继承自抽象工厂</span></span>
<span class="line"><span style="color:#A6ACCD;">class FakeStarFactory extends MobilePhoneFactory {</span></span>
<span class="line"><span style="color:#A6ACCD;">    createOS() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 提供安卓系统实例</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new AndroidOS()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    createHardWare() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 提供高通硬件实例</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new QualcommHardWare()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>这里我们在提供安卓系统的时候，调用了两个构造函数：AndroidOS 和 QualcommHardWare，它们分别用于生成具体的操作系统和硬件实例。像这种被我们拿来用于 new 出具体对象的类，叫做<strong>具体产品类（ConcreteProduct）。</strong> 具体产品类往往不会孤立存在，不同的具体产品类往往有着共同的功能，比如安卓系统类和苹果系统类，它们都是操作系统，都有着可以操控手机硬件系统这样一个最基本的功能。因此我们可以用一个<strong>抽象产品（AbstractProduct）类</strong>来声明这一类产品应该具有的基本功能</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 定义操作系统这类产品的抽象产品类</span></span>
<span class="line"><span style="color:#A6ACCD;">class OS {</span></span>
<span class="line"><span style="color:#A6ACCD;">    controlHardWare() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&#39;抽象产品方法不允许直接调用，你需要将我重写！&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义具体操作系统的具体产品类</span></span>
<span class="line"><span style="color:#A6ACCD;">class AndroidOS extends OS {</span></span>
<span class="line"><span style="color:#A6ACCD;">    controlHardWare() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;我会用安卓的方式去操作硬件&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class AppleOS extends OS {</span></span>
<span class="line"><span style="color:#A6ACCD;">    controlHardWare() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;我会用🍎的方式去操作硬件&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义手机硬件这类产品的抽象产品类</span></span>
<span class="line"><span style="color:#A6ACCD;">class HardWare {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性</span></span>
<span class="line"><span style="color:#A6ACCD;">    operateByOrder() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&#39;抽象产品方法不允许直接调用，你需要将我重写！&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义具体硬件的具体产品类</span></span>
<span class="line"><span style="color:#A6ACCD;">class QualcommHardWare extends HardWare {</span></span>
<span class="line"><span style="color:#A6ACCD;">    operateByOrder() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;我会用高通的方式去运转&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class MiWare extends HardWare {</span></span>
<span class="line"><span style="color:#A6ACCD;">    operateByOrder() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;我会用小米的方式去运转&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span></code></pre></div><p>如此一来，当我们需要生产一台 FakeStar 手机时，我们只需要这样做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 这是我的手机</span></span>
<span class="line"><span style="color:#A6ACCD;">const myPhone = new FakeStarFactory()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 让它拥有操作系统</span></span>
<span class="line"><span style="color:#A6ACCD;">const myOS = myPhone.createOS()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 让它拥有硬件</span></span>
<span class="line"><span style="color:#A6ACCD;">const myHardWare = myPhone.createHardWare()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 启动操作系统(输出‘我会用安卓的方式去操作硬件’)</span></span>
<span class="line"><span style="color:#A6ACCD;">myOS.controlHardWare()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 唤醒硬件(输出‘我会用高通的方式去运转’)</span></span>
<span class="line"><span style="color:#A6ACCD;">myHardWare.operateByOrder()</span></span></code></pre></div><p>关键的时刻来了——假如有一天，FakeStar 过气了，我们需要产出一款新机投入市场，这时候怎么办？我们是不是<strong>不需要对抽象工厂 MobilePhoneFactory 做任何修改</strong>，只需要拓展它的种类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class newStarFactory extends MobilePhoneFactory {</span></span>
<span class="line"><span style="color:#A6ACCD;">    createOS() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 操作系统实现代码</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    createHardWare() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 硬件实现代码</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>抽象工厂本质上处理的其实也是类，但是是一帮非常棘手、繁杂的类，这些类中不仅能划分出门派，还能划分出等级，同时存在着千变万化的扩展可能性——这使得我们必须对共性作更特别的处理、使用抽象类去降低扩展的成本，同时需要对类的性质作划分，于是有了这样的四个关键角色：</p><ul><li><strong>抽象工厂（抽象类，它不能被用于生成具体实例）</strong>： 用于声明最终目标产品的共性。在一个系统里，抽象工厂可以有多个（大家可以想象我们的手机厂后来被一个更大的厂收购了，这个厂里除了手机抽象类，还有平板、游戏机抽象类等等），每一个抽象工厂对应的这一类的产品，被称为“产品族”。</li><li><strong>具体工厂（用于生成产品族里的一个具体的产品）</strong>： 继承自抽象工厂、实现了抽象工厂里声明的那些方法，用于创建具体的产品的类。</li><li><strong>抽象产品（抽象类，它不能被用于生成具体实例）</strong>： 上面我们看到，具体工厂里实现的接口，会依赖一些类，这些类对应到各种各样的具体的细粒度产品（比如操作系统、硬件等），这些具体产品类的共性各自抽离，便对应到了各自的抽象产品类。</li><li><strong>具体产品（用于生成产品族里的一个具体的产品所依赖的更细粒度的产品）</strong>： 比如我们上文中具体的一种操作系统、或具体的一种硬件等。</li></ul>`,25),o=[e];function c(r,t,C,i,A,y){return a(),n("div",null,o)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};
