import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.544e8ca7.js";const D=JSON.parse('{"title":"面向对象","description":"","frontmatter":{"title":"面向对象","date":"2017-07-01T00:00:00.000Z","author":"Ruiyoung","tag":["javaScript"]},"headers":[],"relativePath":"javaScript/2017-07-01-javaScript-面向对象.md","lastUpdated":null}'),p={name:"javaScript/2017-07-01-javaScript-面向对象.md"},e=l(`<h3 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h3><blockquote><p>类：每个对象都由类定义，可以把类看做对象的配方。</p><blockquote><p>类不仅要定义对象的的属性和方法，还要定义对象的内部工作工作原理。<br> JavaScript 并没有正式的类，创建一个对象只要定义一个该对象的构造函数并通过它创建对象即可。虽然类并不真正存在，我们也把对象定义叫做类。而且从功能上说，两者是等价的。<br> 实例：程序使用类创建对象时，生成的对象叫作类的实例。由类创建对象实例的过程叫做实例化<br> JavaScript 对象定义：可以把对象理解为属性集合，每个属性存放一个原始值、对象或函数<br> 对象一般认为由方法和属性构成。方法的实质就是函数，而属性的实质就是变量，只不过这里由于它从属于某个对象所以叫法不同。<br> 面向对象：可以简单的理解为，不必去了解对象的内部结构，就可以去使用它。就比如我们可以使用手机打电话，但是不必去了解它内部的工作原理。就像我们使用 Date 对象的方法可以获取和设置时间，单是我们并不用去弄清楚它为什么会实现这个功能。</p></blockquote></blockquote><h3 id="创建对象的方法" tabindex="-1">创建对象的方法 <a class="header-anchor" href="#创建对象的方法" aria-label="Permalink to &quot;创建对象的方法&quot;">​</a></h3><blockquote><p>本质上都是把&quot;属性&quot;和&quot;方法&quot;，封装成一个对象</p></blockquote><h5 id="基本模式" tabindex="-1">基本模式 <a class="header-anchor" href="#基本模式" aria-label="Permalink to &quot;基本模式&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var people1=new Object();</span></span>
<span class="line"><span style="color:#A6ACCD;">people1.name=&#39;孙悟空&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">people1.weapon=&#39;金箍棒&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//this是指的当前作用域下的对象，注意和谁调用这个方法有关，和在哪定义没啥关系</span></span>
<span class="line"><span style="color:#A6ACCD;">//这里也可以简单理解为this就指的这个函数属于谁，属于谁this就是指的谁</span></span>
<span class="line"><span style="color:#A6ACCD;">people1.run=function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">return this.name+&#39;的武器是&#39;+this.weapon</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(people1.name)</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(people1.run()) //注意方法的调用需要加()</span></span></code></pre></div><p>缺陷：</p><ul><li>如果创建多个对象会比较繁琐，效率低</li><li>实例与原型之间，没有任何办法，可以看出有什么联系</li></ul><h5 id="工厂模式" tabindex="-1">工厂模式 <a class="header-anchor" href="#工厂模式" aria-label="Permalink to &quot;工厂模式&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function creatPeople(name,weapon){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var people=new Object() //可以类比为加工对象的原材料</span></span>
<span class="line"><span style="color:#A6ACCD;">    people.name=name;</span></span>
<span class="line"><span style="color:#A6ACCD;">    people.weapon=weapon;</span></span>
<span class="line"><span style="color:#A6ACCD;">    people.run=function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.name+&#39;的武器是&#39;+this.weapon</span></span>
<span class="line"><span style="color:#A6ACCD;">    }  //以上步骤可以类比为加工对象的过程</span></span>
<span class="line"><span style="color:#A6ACCD;">    return people //注意一定要讲创建的对象返回</span></span>
<span class="line"><span style="color:#A6ACCD;">    //可以类比为产品加工完毕出厂的工作</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var wukong=creatPeople(&#39;孙悟空&#39;,&#39;金箍棒&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var bajian=creatPeople(&#39;猪八戒&#39;,&#39;钉耙&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(wukong.run())</span></span></code></pre></div><ul><li>使用创建并返回特定类型的对象的工厂函数(其实就是普通函数，没啥区别，只是叫法不同)</li><li>创建过程类似于工厂生产产品的过程，即：原材料--加工--产品...</li><li>解决了多次重复创建多个对象的麻烦。</li><li>问题：<br>   1.创建出的实例之间没有内在的联系，不能反映出它们是同一个原型对象的实例。<br>   2.创建对象的时候没有使用 new 关键字<br>   3.会造成资源浪费，因为每生成一个实例，都增加一个重复的内容，多占用一些内存。</li></ul><h5 id="构造函数模式" tabindex="-1">构造函数模式 <a class="header-anchor" href="#构造函数模式" aria-label="Permalink to &quot;构造函数模式&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//注意：构造函数不需要使用 return语句返回对象，它的返回是自动完成的</span></span>
<span class="line"><span style="color:#A6ACCD;">function People(name,weapon){</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name=name;</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.weapon=weapon;</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.run=function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.name+&#39;的武器是&#39;+this.weapon</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var wujing=new People(&#39;沙悟净&#39;,&#39;禅杖&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var wukong=new People(&#39;孙悟空&#39;,&#39;金箍棒&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var bajian=new People(&#39;猪八戒&#39;,&#39;钉耙&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(wujing.run())</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(wujing instanceof People)</span></span>
<span class="line"><span style="color:#A6ACCD;">var monster=new Object();</span></span>
<span class="line"><span style="color:#A6ACCD;">//People.call(monster,&#39;妖怪&#39;,&#39;葫芦&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">People.apply(monster,[&#39;妖怪&#39;,&#39;葫芦&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(monster.run())</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(monster.name)</span></span>
<span class="line"><span style="color:#A6ACCD;">var monster1=new People(&#39;小妖&#39;,&#39;长矛&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">var monster2=new People(&#39;小妖&#39;,&#39;长矛&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(monster1.run()+&#39;\\n&#39;+monster2.run())</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(monster1.run==monster2.run)//两个对象实例的地址是不同的，说明两个对象会占用两个地址空间的内存</span></span></code></pre></div><ul><li>new 调用的函数为构造函数，构造函数和普通函数区别仅仅在于是否使用了 new 来调用。</li><li>所谓“构造函数”，就是专门用来生成“对象”的函数。它提供模板，作为对象的基本结构。</li><li>构造函数内部使用了 this 变量。对构造函数使用 new 运算符，就能生成实例，并且 this 变量会绑定在实例对象上。</li><li>instanceof 验证原型对象与实例对象之间的关系。</li><li>使用 call 和 apply 方法实现对象的冒充</li><li>问题：浪费内存--使用构造函数每生成一个实例，都增加一个重复的内容，多占用一些内存。这样既不环保，也缺乏效率。</li></ul><h5 id="原型-prototype-模式" tabindex="-1">原型(Prototype)模式 <a class="header-anchor" href="#原型-prototype-模式" aria-label="Permalink to &quot;原型(Prototype)模式&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Peopleobj(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">Peopleobj.prototype.name=&#39;喽啰&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">Peopleobj.prototype.weapon=&#39;大刀&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">Peopleobj.prototype.run=function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.name+&#39;的武器是&#39;+this.weapon</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var monster_1=new Peopleobj()</span></span>
<span class="line"><span style="color:#A6ACCD;">monster_1.job=[]</span></span>
<span class="line"><span style="color:#A6ACCD;">var monster_2=new Peopleobj()</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(monster_1.name+&#39;\\n&#39;+monster_1.run())</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(monster_2.name+&#39;\\n&#39;+monster_2.run())</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(monster_1.run)</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(monster_2.run)</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(monster_1.run==monster_2.run) //说明他们的引用是同一个地址</span></span>
<span class="line"><span style="color:#A6ACCD;">//这时所有实例的方法，其实都是同一个内存地址，指向prototype对象，因此就提高了运行效率。</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(Peopleobj.prototype.isPrototypeOf(monster_1));</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(monster_1.hasOwnProperty(&quot;name&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(monster_1.hasOwnProperty(&quot;job&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(&quot;jobb&quot; in monster_1);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//这种写法和前面的方式在使用上基本相同，注意是基本</span></span>
<span class="line"><span style="color:#A6ACCD;">function Monster(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">Monster.prototype={</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor: Monster, //此外强制指回Monster</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&#39;喽啰&#39;, //原型字面量方式会将对象的constructor变为Object，</span></span>
<span class="line"><span style="color:#A6ACCD;">    weapon:&#39;大刀&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    job:[&#39;巡山&#39;,&#39;打更&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    run:function() {return this.name+&#39;的工作是&#39;+this.job }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var monsterA=new Monster()</span></span>
<span class="line"><span style="color:#A6ACCD;">monsterA.job.push(&#39;砍柴&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">var monsterB=new Monster()</span></span>
<span class="line"><span style="color:#A6ACCD;">monsterB.job.push(&#39;挑水&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(monsterA.job)</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(monsterB.job)</span></span>
<span class="line"><span style="color:#A6ACCD;">//alert(monsterA.constructor)</span></span></code></pre></div><blockquote><p>Javascript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。可以把那些不变的属性和方法，直接定义在 prototype 对象上。</p></blockquote><ul><li>prototype 方式定义的方式，函数不会拷贝到每一个实例中，所有的实例共享 prototype 中的定义，节省了内存。</li><li>Prototype 模式的验证方法<br>   1.isPrototypeOf()这个方法用来判断，某个 proptotype 对象和某个实例之间的关系。<br>   2.hasOwnProperty()每个实例对象都有一个 hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自 prototype 对象的属性。<br>   3.in 运算符 in 运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。in 运算符还可以用来遍历某个对象的所有属性。</li><li>对象的 constructor 属性用于返回创建该对象的构造函数(在 JavaScript 中，每个具有原型的对象都会自动获得 constructor 属性)</li><li>原型方式的问题:<br>   构造函数没有参数。使用原型方式，不能通过给构造函数传递参数来初始化属性的值<br>   属性指向的是对象，而不是函数时。函数共享不会造成问题，但对象却很少被多个实例共享，如果共享的是对象就会造成问题。</li></ul><h5 id="构造函数和原型组合模式" tabindex="-1">构造函数和原型组合模式 <a class="header-anchor" href="#构造函数和原型组合模式" aria-label="Permalink to &quot;构造函数和原型组合模式&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//构造函数和原型组合模式</span></span>
<span class="line"><span style="color:#A6ACCD;">function Monster(name,arr){</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor: Monster,</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name=name</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.job=arr</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Monster.prototype={</span></span>
<span class="line"><span style="color:#A6ACCD;">    run:function() {return this.name+&#39;的工作是&#39;+this.job }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var monsterI=new Monster(&#39;小旋风&#39;,[&#39;巡山&#39;,&#39;打更&#39;,&#39;砍柴&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">var monsterII=new Monster(&#39;小钻风&#39;,[&#39;巡山&#39;,&#39;打更&#39;,&#39;挑水&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(monsterI.run())</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(monsterII.run())</span></span></code></pre></div><blockquote><p>目前最为常用的创建对象的方式。(jQuery 类型的封装就是使用组合模式来实例的)<br> 这种概念非常简单，即用构造函数定义对象的所有非函数属性，用原型方式定义对象的函数属性（方法）。结果是，所有函数都只创建一次，而每个对象都具有自己的对象属性实例。<br> 组合模式还支持向构造函数传递参数，可谓是集两家之所长</p></blockquote><h5 id="动态原型模式" tabindex="-1">动态原型模式 <a class="header-anchor" href="#动态原型模式" aria-label="Permalink to &quot;动态原型模式&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function MonsterGo(name,arr){</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name=name</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.job=arr</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof this.run!= &quot;function&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // {alert(&#39;对象初始化&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        MonsterGo.prototype.run=function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">          return this.name+&#39;的工作是&#39;+this.job</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // alert(&#39;初始化结束&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var monsterI=new MonsterGo(&#39;小旋风&#39;,[&#39;巡山&#39;,&#39;打更&#39;,&#39;砍柴&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">var monsterII=new MonsterGo(&#39;小钻风&#39;,[&#39;巡山&#39;,&#39;打更&#39;,&#39;挑水&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">var monsterI2=new MonsterGo(&#39;小旋风&#39;,[&#39;巡山&#39;,&#39;打更&#39;,&#39;砍柴&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">var monsterII2=new MonsterGo(&#39;小钻风&#39;,[&#39;巡山&#39;,&#39;打更&#39;,&#39;挑水&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(monsterI.run())</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(monsterII.run())</span></span></code></pre></div><blockquote><p>动态原型方法的基本想法与混合的构造函数原型方式相同，即在构造函数内定义非函数属性，而函数属性则利用原型属性定义。<br> 组合模式中实例属性与共享方法（由原型定义）是分离的，这与纯面向对象语言不太一致；动态原型模式将所有构造信息都封装在构造函数中，又保持了组合的优点。<br> 其原理就是通过判断构造函数的原型中是否已经定义了共享的方法或属性，如果没有则定义，否则不再执行定义过程。该方式只原型上方法或属性只定义一次，且将所有构造过程都封装在构造函数中，对原型所做的修改能立即体现所有实例</p></blockquote><h3 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h3><blockquote><p>两个类的继承关系，就包含以以三个意思：</p><blockquote><p>子类的实例可以共享父类的方法<br> 子类可以覆盖或扩展父类的方法<br> 子类和父类都是子类实例的类型</p></blockquote></blockquote><ul><li>对象冒充<br> 使用对象冒充（call 或 apply 方法）（实质上是改变了 this 指针的指向）继承基类。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Monkey(_type,_home){</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.type=_type;</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.home=_home;</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.say= function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        alert(&#39;我是快乐的小猴子，家住&#39;+this.home)</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Hero(_HP){</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.HP=_HP;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Magic_monkey(_type,_home,arr,_HP){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //Monkey.call(this,_type,_home)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Monkey.apply(this,[_type,_home])</span></span>
<span class="line"><span style="color:#A6ACCD;">    Hero.call(this,_HP)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.skill=arr;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var wukong=new Magic_monkey(&#39;猴子&#39;,&#39;花果山&#39;,[&#39;七十二变&#39;,&#39;筋斗云&#39;],1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(wukong.home);</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(wukong.type);</span></span>
<span class="line"><span style="color:#A6ACCD;">// alert(wukong.skill);</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(wukong.HP);</span></span>
<span class="line"><span style="color:#A6ACCD;">wukong.say();</span></span></code></pre></div><ul><li>原型链继承</li></ul><blockquote><p>prototype 对象是个模板，要实例化的对象都以这个模板为基础。总而言之，prototype 对象的任何属性和方法都被传递给那个类的所有实例。原型链利用这种功能来实现继承机制。<br> 原型链的弊端是不支持多重继承。记住，原型链会用另一类型的对象重写类的 prototype 属性。<br> 子类的所有属性和方法都必须出现在 prototype 属性被赋值后，因为在它之前赋值的所有方法都会被删除。因为 prototype 属性被替换成了新对象，添加了新方法的原始对象将被销毁。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Monkey(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">Monkey.prototype.type=&#39;猴子&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">Monkey.prototype.say=function(){alert(&#39;我是快乐的猴子&#39;)}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Magicmonkey(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">//将Magicmonkey的prototype对象指向一个Monkey的实例。</span></span>
<span class="line"><span style="color:#A6ACCD;">//相当于删除了prototype 对象原先的值，然后赋予一个新值。</span></span>
<span class="line"><span style="color:#A6ACCD;">//不能继承多个类，后边的会覆盖前边的</span></span>
<span class="line"><span style="color:#A6ACCD;">Magicmonkey.prototype=new Monkey();</span></span>
<span class="line"><span style="color:#A6ACCD;">Magicmonkey.prototype.skill=&#39;法术&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var sunWukong=new Magicmonkey()</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(sunWukong.type)</span></span>
<span class="line"><span style="color:#A6ACCD;">sunWukong.say()</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(sunWukong.skill)</span></span></code></pre></div><ul><li>混合方式继承</li></ul><blockquote><p>创建类的最好方式是用构造函数定义属性，用原型定义方法。这种方式同样适用于继承机制，用对象冒充继承构造函数的属性，用原型链继承 prototype 对象的方法。</p></blockquote>`,33),o=[e];function t(r,c,i,C,A,y){return n(),a("div",null,o)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
