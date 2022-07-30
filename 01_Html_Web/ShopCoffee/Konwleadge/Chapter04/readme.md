### 第四章：CSS基础
#### 4.1 CSS基本语法
    CSS概念
        CSS是Cascading Style Sheets 的缩写，中文的意思是层叠样式表或级联样式表。
    CSS功能简介
        CSS可以用来精确的控制页面里每一个元素的字体样式、背景、排列方式、区域尺寸、边框等。
        使用CSS能够简化网页的格式代码，加快下载显示的速度，外部链接样式可以同时定义多个页面，
        大大减少了重复劳动的工作量。 

##### 4.1.1 CSS语句格式
    css语句格式如下：
        selector {property: value} (选择符 {属性：值})
        选择符的作用：限制样式作用的范围
        p {font-size:15}
    当属性的值是多个单词组成时，必须在值上加引号
        h1 {font-family: "Courier New"}
    如果需要对一个选择符指定多个属性时，使用分号隔开。
        p {font-size:15;color:red}

##### 4.1.2 CSS选择符
    基本选择器
    id选择符和class选择符的区别
        区别 1：一个id只能在文档中使用一次，而class可以重复使用。
        区别 2：不能使用id词列表。id 选择符不能结合使用，因为id属性不允许有以空格分隔的词列表。而class选择符可以结合使用，一个HTML元素可以同时具有多个class属性值。
        注意，class选择符和 id 选择符可能是区分大小写的。这取决于文档的语言。HTML和XHTML将class和id值定义为区分大小写，所以class和id值的大小写必须与文档中的相应值匹配。

    组合选择器
    属性选择器
    伪类选择器
    伪元素

#### 4.2 文本和字体相关属性
    字体 (Font)
    文本 (Text)
    背景 (Background)
    定位 (Positioning)
    布局 (Layout)
    外补丁 (Margins)
    轮廓 (Outlines)
    边框 (Border)
    内补丁 (Padding)
    表格 (Table)
    滚动条 (Scrollbar)

#### 4.2.1 字体属性
    常用字体属性
功 能       |属性名       |描 述
:---------:|:-----------:|:---------:|
字体风格    |font-style   |设置字体风格，取normal,italic(倾斜),oblique(倾斜),inherit(继承自父元素)
字体系列    |font-family  |设置文本的字体，可取宋体、隶属、Microsoft Yahei以及serif,Verdana(英文,中文)
字体变形    |font-variant |设定小型大写字母，取值small-caps
字体加粗    |font-weight  |设置100-900，其中lighter(细体对应100),bold(加粗对应900),normal(普通对应400)
字体大小    |font-size    |设置文本的大小,取值可以为数字、或者xx-small、x-samll、samll、medium、large、x-large、xx-large
属性合并简写 |font:        |font-style font-variant font-weight font-size/line-height font-family;<br>font:oblique small-caps xx-small 14px/20px Cambria,Microsoft Yahei;

#### 4.2.2 文本属性
    常用文本属性
功 能      |   属性名   |    描 述    
:---------:|:---------:|:---------:|
文本缩进    |text-indent    |设置行的缩进大小,值可以为正值或负值,单位可以为em,px,%
文本方向    |direction      |设置文本方向
文本颜色    |color          |设置文本颜色，取值如red、rgb(255,0,0)、#F0000
水平对齐    |text-align     |设置文本的水平对齐方式,取值left、right、center、justify
垂直对齐    |vertical-align |设置文本的垂直对齐方式,取值bottom,middle,top,baseline
行间距      |line-height    |设置文本的行高
字间距      |word-spacing   |设置单词之间的间隔
字符间距    |letter-spacing |设置字符（汉字）之间的间隔
字符转换    |text-transform |设置段落中需要强调的文字，取值uppercase,lowercase,capitalize,
文本修饰符  |text-decoration|设置段落中需要强调的文字,取值underline,overline,line-through,
文本溢出符  |text-overflow  |规定当前我呢本溢出时发生的事情
文本阴影    |text-shadow    |给页面添加阴影效果
空白字符    |white-space    |设置处理原文档多余的空白自动的方式，normal(忽略多余)，pre(正常显示)，nowrap(文本不换行)

    文本阴影语法：text-shadow:h-shdow v-shadow blur color;
参数        |    含义
:----------:|:---------:|
h-shadow	|  指定水平阴影的位置，该值允许为负值
v-shadow	|  指定垂直阴影的位置，该值允许为负值
blur		|  指定模糊距离
color		|  指定阴影颜色

#### 4.3 背景和边框相关属性
#### 4.3.1 边框
    边框有三个属性：
        颜色:border-color
        粗细:border-width
        样式:border-style
    示例：
        .borderinfo{
            width: 800px;
            height: 400px;
            margin: 0 auto;
            border-style: solid double dotted dotted;
            border-width: thin 10px thick medium
        }
    说明：
        border-style 方法是按照规定的顺序，给出1个、2个、3个或者4个属性值，它们的含义将有所区别，具体含义如下：   
        1.如果给出1个属性值，表示四个边框的属性一样
        2.如果给出2个属性值，前者表示上下边框的属性，后者表示左右边框的属性；
        3.如果给出3个属性值，前者表示上边框的属性，中间的数值表示左右边框的属性，后者表示下边框的属性；
        4.如果给出4个属性值，依次表示上、右、下、左边框的属性，即顺时针排序。
        注：也可以对某一个边框单独定义属性如：border-left


#### 4.3.2 边框阴影
    语法：box-shadow: h-shadow v-shadow blur spread color inset;
参数        |    含义
:----------:|:---------:|
h-shadow	|  指定水平阴影的位置，该值允许为负值
v-shadow	|  指定垂直阴影的位置，该值允许为负值
blur		|  指定模糊距离
spread		|  指定阴影尺寸
color		|  指定阴影颜色
inset		|  指定外部或内部阴影

#### 4.3.3 圆角边框
    为了美化效果，通常会对一个边框使用圆角属性，使用border-radius可以
    设计元素以圆角的样式显示，其基本语法如下：
        border-radius:10px;  <!—设置圆角半径为10像素 --> 
    示例：
        .radiusdiv{
            width: 100%;
            height: 100px;
            margin: 0 auto;
            border: 1px solid gray;
            border-radius: 10px;
            box-shadow: 10px 10px 5px #888888;
        }
    说明：
        有时候会对元素不同的位置定义圆角，这样就需要分别设置。
        borde-radius属性派生了4个子属性：
            borde-top-right-radius：定义右上角的圆角
            borde-top-left-radius：定义左上角的圆角
            borde-bottom-right-radius：定义右下角的圆角
            borde-bottom-left-radius：定义左下角的圆角

#### 4.3.4 图形边框
    border-image是CSS3新增的属性，用于定义图形边框，可以制作出更加多样化的边框效果。
    示例：
        .borderimage{
            border: 15px solid transparent;
            width: 90%;
            height: 200px;
            border-image:url('./img/border-image.png') 30 30 round;
        }
    说明：
        此例中，图片的路径为img/g2.jpg，剪裁位置向内偏移30像素，
        图片填充宽度为30像素，平铺方式。

#### 4.3.5 背景
    i. 背景色:通过使用background-color属性进行设置，比如使用如下语句设置了纯色背景：
        p {background-color: gray;} <!—段落背景设置为灰色 --> 
    ii. 图像背景: 使用background-image属性，必须为这个属性设置一个url值：
        p{background-image: url(../image/2009.jpg); } 
    上面语句中，将名字为2009.jpg的图片作为背景，但是一定要注意文件存放的位置，
    如果图片文件路径不正确将无法正确显示。

    iii.背景图像的起始位置: 由background-position属性设置背景图像的起始位置，也就是如何定位背景图片。
    示例:
        .backpicbox{
            height: 200px;
            width: 200px;
            border: 1px solid #000;
            border-image: url('./img/star.png');
            background-position:75% 0%; /*x轴偏移75%*/
            background-repeat: no-repeat;
        }
    iv.背景图像的尺寸: 由background-size规定背景图像的尺寸。
    例如：
        div{
            background:url(img_flwr.gif);
            background-size: 63px 100px;
            background-repeat:no-repeat;
        }
    v. 背景图像重复：background-repeat设置背景图像是否及如何重复。
    默认地，背景图像在水平和垂直方向上重复。
        p{
            background-image: url(img/33.jpg); 
            background-repeat: no-repeat;
        }
    取值：
        no-repeat(不平铺)、repeat-x(横向平铺)、repeat-y(纵向平铺)、
        repeat(横向和纵向平铺)、inheirt(继承自父元素)
    


