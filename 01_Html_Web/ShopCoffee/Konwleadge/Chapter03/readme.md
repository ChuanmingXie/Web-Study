### 第三章 HTML5新增元素和属性

#### 3.1 新增文档结构元素
##### 3.1.1 认识H5
    A. HTML5 是下一代的 HTML，是开放Web标准的基石，它是一个完整的编程环境，
    适用于跨平台应用程序、视频和动画、图形、风格、排版和其它数字内容发布工具、广泛的网络功能等等。

    B. HTML5优点主要包括：
        1.提高可用性和用户体验；
        2.增加新的标签，有助于开发人员定义重要的内容；
        3.给站点带来更多的多媒体元素（视频和音频)）；
        4.很好的替代FLASH和Silverlight；
        5.当涉及到网站的抓取和索引的时候，对于SEO很友好；
        6.将被大量应用于移动应用程序和游戏；
        7.可移植性好。

##### 3.1.2 H5页面结构
    具有正确文档类型（DOCTYPE）的 HTML5 文档代码如下：
        <!DOCTYPE HTML>
        <html>
        <head>
            <title>Title of the document</title>
        </head>
        <body>
            The content of the document......
        </body>
        </html>


##### 3.1.3 H5主体结构元素
    i.article 
        A. 独立、完整、可独自被外部独自引用（文章、帖子、评论等）.
        B. 可嵌套使用，内层内容原则上需要与外层内容关联
        C. 可作为插件使用,如下所示在页面主体嵌入一个外部评论页面作为插件使用
            <article>
                <h2>My Fruit Spinner</h2>
                <object data="" type="">
                    <param name="allowFullScreen" value="true">
                    <embed src="./3-2-4H5formDemo.html" type="" width="800" height="385"/>
                </object>
            </article>

    ii. Section元素    
        A. section元素用于对网站或应用程序中页面上的内容进行分块，通常由标题及内容组成。
        但section元素并非一个普通的容器元素，当一个容器需要被直接定义样式或行为时，
        推荐使用div而非section元素。
        B. section强调分段和分块，article强调独立性。
        C. section的使用禁忌：
            a. 不要用section做设置样式的容器，那是div的工作；
            b. 如果article、aside、nav更适合，不要使用section；
            c. 不要给没有标题的内容区块使用section

    iii. nav 元素：页面导航链接组
        A. 使用场景
            a. 传统导航条
            b. 侧边栏导航
            c. 页内导航
            d. 翻页操作
        注：不要用menu元素代替nav，menu是交互性元素，使用在web程序中

    iv. aside: 页面或文章附属信息。
        A. 使用方法：
            a. 包含在article中作为主要内容的附属信息，与当前文章相关的参考资料、名词解释等等。
            b. article之外使用，作为页面和站点全局的附属信息。
    
    v. time 元素
        A. time元素代表24小时中锋某个时刻或某个日期，表示时刻时允许带时差，它可以定义很多种格式的日期和时间，如下：
            <time datetime="2022-3-24">2022年3月24日</time> <br>
            <time datetime="2022-3-24">3月24日</time> <br>
            <time datetime="2022-3-24">我的生日</time> <br>
            <time datetime="2022-3-24T20:00">我时晚上8点出生的</time> <br>
            <time datetime="2022-3-24T20:00z">我生日的晚上八点</time> <br>
            <time datetime="2022-3-24T20:00+09:00">我生日晚上八点的美国时间</time> <br>
        B. 在页面上没有特殊的显示效果，但对SEO有用
        C. 多个时间同时存在时，可以使用pubdate属性表明发布时间

##### 3.1.4 H5非主体结构元素
    i. header：具有引导和导航作用的辅助元素。
    ii. hgroup：标题组合。有时候除了主标题，可能还需要子标题、副标题、宣传语，这时就需要对标题进行组合。
    iii. footer：元素可以做一个区块的尾部内容，通常包括附加信息，如文档作者、创作日期、相关链接及版权信息。
    iv. address：用于呈现联系信息，如姓名，地址，网站，邮箱等联系方式。

#### 3.2 新增表单元素
    HTML表单一直都是Web的核心技术之一，有了它我们才能在Web上进行各种各样的应用,
    才能和服务器进行方便快捷的交互。HTML5 Forms新增了许多新控件及其API，
    方便我们做更复杂的应用，而不用借助其它前端脚本语言(如:javascript),
    极大的解放了我们的双手。

##### 3.2.1 H5表单新功能
    表单结构更自由
    HTML4之前中需要放在form之中的诸如input/button/select/textarea等标签元素，
    在HTML5中完全可以放在页面任何位置，然后通过新增的form属性指向元素所属表单
    的ID值，即可关联起来。
        <form id="myform"></form>
        <input type="text" form="myform" value="">

##### 3.2.2 H5表单新文本框类型
    i. email输入类型
        说明：此类型要求输入格式正确的email地址,否则浏览器是不允许提交的,
        并会有一个错误信息提示.此类型必须指定name值,否则无效果.
        格式：<input type=email name=email>
    ii. url输入类型
        说明：上面代码展示的文本域要求输入格式正确的URL地址,Opera中会自动在开始处添加http://.
        格式：<input type=url>
    iii. 日期时间相关输入类型
        说明：这一系列是很酷的一个类型,完全解决了烦琐的JS日历控件问题.
        但目前MS只有Opera/Chrome新版本支持,且展示效果也不一样..
        格式：
            <input type=date>
            <input type=time>
            <input type=month>
            <input type=week>
            <input type=datetime>
            <input type=datetime-local>
    iv. number输入类型
        说明：输入一个数字字符,若未输入则会抛出一个错误
        格式：
            <input type="number" max=10 min=0 step=1 value=5 />
属性    |   值    |    描述
:------:|:------:|:------:|
max     | number | 规定允许的最大值
min     | number | 规定允许的最小值
step    | number | 规定合法的数字间隔（如果 step="3"，则合法的数是 -3,0,3,6 等）
value   | number | 规定默认值
    v. range滑块类型
        说明：特定值的范围的数值，以滑动条显示
        格式：&lt; input type="range" max=10 min=0 step=1 value=5/&gt;
        属性与number相同
    vi. search输入类型
        说明：此类型表示输入的将是一个搜索关键字,通过results=s可显示一个搜索小图标。
        格式：&lt; input type=search &gt;
    vii. tel输入类型
        说明：此此类型要求输入一个电话号码。
        格式：&lt; input type=“tel” pattern=“\d\d\d-\d\d\d\d\d” &gt;
    viii. color输入类型
        说明：此类型表单,可让用户通过颜色选择器选择一个颜色值,并反馈到该控件的value值中
        格式：Color: &lt; input type=color &gt;

##### 3.2.3 H5表单新属性
    placeholder属性
        说明：这是一个很实用的属性,免去了用JS去实现点击清除表单初始值.浏览器支持也还不错,
        MS除了Firefox,其他标准浏览器都能很好的支持.
        格式： <input id=placeholder placeholder="点击我会以清除">
    required/pattern属性
        说明：这是html5新加的验证属性。
        required类型，值不能为空，并会有一个提示。
            required 属性适用于：text, search, url, telephone, email, 
            password, date pickers, number, checkbox, radio 以及 file。
        pattern类型为正则验证，可以完成各种复杂的验证。
            格式：
                <input id=placeholder name=require required>
                <input id=placeholder name=require1 required="required">
                <input name=require2 pattern="^[1-9]\d{5}$">
    autofocus自动聚焦属性
        说明：自动聚焦属性,可在页面加载时聚焦到一个表单控件,类似于js的focus()
        格式：<input autofocus="true">
    autocomplete自动完成属性
        说明：此属性是为表单提供自动完成功能。如果该属性为打开状态可很好地自动完成。
        一般来说，此属性必须启动浏览器的自动完成功能。
        格式：<input autocomplete="on/off">
    novalidate 属性
        说明：novalidate 属性规定在提交表单时不应该验证 form 或 input 域。
        格式：<form action="demo_form.asp" method="get" novalidate="true">
    multiple 属性
        说明：multiple 属性规定输入域中可选择多个.multiple 属性适用于以下类型的 <input> 标签：email 和 file。
        格式：<input type="file" name="img" multiple="multiple" />
    表单重写属性
        说明：表单重写属性（form override attributes）允许您重写 form 元素的
        某些属性设定。表单重写属性适用于以下类型的 <input> 标签：submit 
        表单重写属性有：
            formaction - 重写表单的 action 属性
            formenctype - 重写表单的 enctype 属性
            formmethod - 重写表单的 method 属性
            formnovalidate - 重写表单的 novalidate 属性
            formtarget - 重写表单的 target 属性
    list属性
        <datalist> 标签定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值，datalist 及其选项不会被显示出来，它仅仅是合法的输入值列表。
        请使用 input 元素的 list 属性来绑定 datalist。
            <input list="cars" />
            <datalist id="cars">
                <option value="BMW">
                <option value="Ford">
                <option value="Volvo">
            </datalist>




