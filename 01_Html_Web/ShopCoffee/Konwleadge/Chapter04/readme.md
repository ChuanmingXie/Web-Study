### 第四章：CSS基础
#### 4.1 CSS基本语法
##### 4.1.1 CSS语句格式
##### 4.1.2 CSS选择符
    基本选择器
    组合选择器
    属性选择器
    伪类选择器
    伪元素

#### 4.2 文本和字体相关属性
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
#### 4.3.4 图形边框
#### 4.3.5 背景
