### 4. CSS语言基础
#### 4.1 CSS概述
##### 4.1.1 CSS发展史
    A. 早先在页面排版时，内容与样式的混合设计方式将导致页面代码过于臃肿，难以维护，不利于搜索引擎的检索
    B. CSS层叠样式表，将页面内容与样式分离，单独控制HTML标签的样式，如页面布局、字体、颜色、背景和图文混排效果
    C.一个CSS样式可以在多个页面应用，当用户修改CSS样式文件时，所有应用改样式的页面均会改变，有利于风格控制
##### 4.1.2 CSS基本语法结构
	样式是CSS的基本单位，每个样式分为 ：选择器(Selector) 和 声明(Declaration) 两个部分:
		A. 第一项必须为选择器或者选择器表达式，选择器后紧跟一对大括号，
		B. 大括号内是由属性和值的键值对组成的声明组，键值对间用冒号连接，组间用分号隔开
		C. 建议可以每个声明独占一行并进行缩进


#### 4.2 CSS的使用
	• CSS样式有三种样式：内嵌样式表、内部样式表、外部样式表（链接样式表、导入样式表）

##### 4.2.1 内嵌样式
	i. 内嵌样式表(行内样式表)
		A. 内嵌样式又称行内样式，将CSS样式嵌入到HTML标签中可以很简单地对某个标签单独定义样式。
		B. 内嵌样式相对比较灵活，但只对当前标签有效，作用范围小。
		在页面中大量使用内嵌样式会导致页面代码臃肿，不利于后期维护，所以尽量不要使用内嵌样式。

##### 4.2.2 内部样式
	ii. 内部样式表
		A. 内部样式表将CSS样式从HTML标签中分离出来，使得HTML代码更加整洁，而且CSS样式可以被多次使用。
		B. 内部样式表是一种写在Style标签中的样式，声明仅对当前页面有效。
        C.一般情况下Style标签位于Header标签之内，在页面加载过程中，先加载样式，后加载页面元素
##### 4.2.3 外部样式
	iii. 外部样式表
		A. 外部样式表是将CSS样式以独立的文件进行存放，然后在页面中引入该外部样式表，
		这可以让网站中的部分页面和所有页面引用同一个样式文件使页面的风格保持一致，
		有利于页面的维护与更新从而降低网站的维护成本。
		B. 用户浏览页面时CSS样式会被暂时缓存，继续浏览其他页面时会优先使用缓存中的CSS文件，
		避免重复从服务器上下载从而提高了网页的加载速度。
			a. 链接外部样式表
			在HTML中link标签用于将文档与外部资源进行关联经常用于链接网页中的外部样式表。
			<link>标签常见的属性有：type、rel、href属性
				□ type属性：用于设置链接目标文件的MIME类型。CSS样式表中的MIME类型是test/CSS
				□ rel属性：用于设置链接目标文件与当前文档的关系。外部文件的类型是CSS文件
				□ href属性：用于设置链接目标文件的URL地址.
			b. 导入外部样式表
			外部样式表是指在页面的内部样式表中导入一个外部样式表其语法格式如下：

##### 4.2.4 样式表优先级
    a. 多重样式表（Mulitple Styles）：
        § 指外部样式表、内部样式表和内嵌样式同时应用于页面中的某一个元素。
        § 在多重样式表的情况下，样式表的优先级采用就近原则。
	一般情况下多重样式的优先级由高到低的顺序是：内嵌 ->内部 ->外部->浏览器缺省默认模式
        § 如果header内部和外部样式的位置，违反规则掉换成，外部样式在内部样式之后，
	此时优先级：内嵌 - > 外部 - > 内部 - > 浏览器缺省默认。但不建议违反规则调换。


#### 4.3 CSS选择器
##### 4.3.1 基本选择器
    /* ----------------------基本选择器--------------------------- */

    /* 通过用选择器 */
    *{property1:value1;property2:value2;...}
    *{font-size: 12px; color: red;}

    /* 标签选择器 */
    element{property1:value1;property2:value2;...}
    p{font-family: 楷体;}

    /* 类选择器 */
    .classname{property1:value1;property2:value2;...}
    .myClass{width: 970px; background-color: #CCCCCC;}

    /* ID选择器 */
    #idvalue{property1:value1;property2:value2;...}
    #myId{color: red;text-decoration: line-through;}

##### 4.3.2 组合选择器
    /* ----------------------组合选择器--------------------------- */

    /* 多元选择器 */
    selector1,selector2{property1:value1;...}
    p,div{font-size:14px ;color: blue;}

    /* 后代选择器(包含选择器) */
    selector1 selector2 ...{property1:value1;...}
    div p{background-color: #CCC;}

    /* 子选择器 */
    selector1 > selector2 >...{property1:value1;...}
    div>p{font-weight: bold;border:solid 2px #066;}

    /* 相邻兄弟选择器 */
    selector1 + selector2 + ... {property1:value1;...}
    h3 + p{font -weight:bold;}

    /* 普通兄弟选择器 */
    selector1 ~ selector2 ~ ...{property1:value1;...}
    h3 ~ p{background: #CCC;}

##### 4.3.1 属性选择器
    /* ------------------------属性选择器---------------------------- */

    /* 存在选择器 */
    element[attribute]{property1:value1;...}
    div[id]{font-family: "microsoft yahei";}

    /* 相等选择器 */
    element[attribute=value]{property1:value1;...}
    p[name="teaName"]{font-weight: bold;}

    /* 包含选择器 */
    element[attribute~=value]{property1:value1;...}
    p[name~="stu"]{color: red;}

    /* 连接子串选择器 */
    element[attribute|=value]{property1:value1;...}
    p[name|="zh"]{background-color: #999;}

    /* 子串选择器 */
    element[attribute*=value]{property1:value1;...}
    p[title*="j"]{font-size: 12px;}

    /* 前缀选择器 */
    element[attribute^=value]{property1:value1;...}
    p[title^="e"]{block-size: 20px;}

    /* 后缀选择器 */
    element[attribute$=value]{property1:value1;...}
    p[title$="o"]{background-color: #603;}

#### 4.4 CSS样式属性
##### 4.4.1 文本属性
功 能|属性名|描 述
:---------:|:---------:|:---------:|
文本缩进|text-index|设置行的缩进大小,值可以为正值或负值,单位可以为em,px,%
水平对齐|text-align|设置文本的水平对齐方式,取值left、right、center、justify
垂直对齐|vertical-align|设置文本的垂直对齐方式,取值bottom,middle,top,baseline
字间距|word-spacing|设置单词之间的间隔
字符间距|letter-spacing|设置字符（汉字）之间的间隔
字符转换|text-transform|设置段落中需要强调的文字，取值uppercase,lowercase,capitalize,
文本修饰符|text-decoration|设置段落中需要强调的文字,取值underline,overline,line-through,
空白字符|white-space|设置处理原文档多余的空白自动的方式，normal(忽略多余)，pre(正常显示)，nowrap(文本不换行)

##### 4.4.2 字体属性
功 能|属性名|描 述
:---------:|:---------:|:---------:|
文本颜色|color|设置文本颜色，取值如red、rgb(255,0,0)、#F0000
字体风格|font-family|设置文本的字体，可取宋体、隶属、Microsoft Yahei以及serif,Verdana(英文,中文)
字体变形|font-variant|设定小型大写字母，取值small-caps
字体加粗|font-weight|设置100-900，其中lighter(细体对应100),bold(加粗对应900),normal(普通对应400)
字体大小|font-size|设置文本的大小,取值可以为数字、或者xx-small、x-samll、samll、medium、large、x-large、xx-large
行间距|line-height|设置文本的行高
属性合并简写|font:|font-style font-variant font-weight font-size/line-height font-family;<br>font:oblique small-caps xx-small 14px/20px Cambria,Microsoft Yahei;

##### 4.4.3 背景属性
功 能|属性名|描 述
:---------:|:---------:|:---------:|
背景颜色|background-color|设置元素背景色
背景定位|background-posotion|设置图像在背景中的位置，<br>取值top、bottom、left、right、center或具体值（10px）、百分比(%)
背景图像|background-image|设置背景图片，<br>格式：background-image:url(bg.jpg); 没有图像,则该值为none
背景重复|background-repeat|设置背景平铺的方式,<br>取值no-repeat(不平铺)、repeat-x(横向平铺)、repeat-y(纵向平铺)
背景关联|background-attachment|设置背景图片是否随页面内容一起滚动，<br>取值默认为scroll(滚动)、还可取fixed(固定)
背景尺寸|background-size|CSS3新增属性，用来设置背景图像的尺寸，<br>可以使用图像的像素或%设定图片的尺寸。<br>在CSS3之前，背景图片的尺寸由图片的实际尺寸决定
填充区域|background-origin|CSS3新增属性，规定background-position属性相对什么位置来定位，<br>取值border-box、padding-box、content-box
绘制区域|background-clip|CSS3新增属性，规定背景的绘制区域，<br>取值border-box、padding-box、content-box
背景简写|background|可以综合设置以上属性[background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background "示例")<br>background: #FBA414 center 5% / 80% 50% repeat-y <br> padding-box border-box scroll url("../img/backimg3.jpg");

##### 4.4.4 表格属性
功 能|属性名|描 述
:---------:|:---------:|:---------:|
宽度            |width           |宽
高度            |height          |高
标题位置        |caption-side    |设置表格标题的位置,取值top,bottom
边框            |border          |设置表格边框宽度
折叠边框        |border-collapse |设置将表格边框折叠为单一边框（separate双边框,默认;collapse 单边框）
单元格间距      |border-spacing  |设置相邻单元格的边框间的距离，仅用于双边模式
内边距          |padding         |设置表格中内容与边框的距离
内容水平对齐方式 |text-align      |设置表格单元格的内容水平对齐方式
内容垂直对齐方式 |vertical-align  |设置表格单元格内容的垂直对齐方式
表格元素内居中   |margin:auto     |将表格在父元素内设置为居中对齐

##### 4.4.5 ul列表li的属性
功 能|属性名|描 述
:---------:|:---------:|:---------:|
列表类型|list-style-type|设置浏览器的图形符号，<br>取值为none,disc,circle,square,decimal,lower-latin,lower-roman,lower-alpha,upper-latin
列表项图像|list-style-image|指定图像符号为图像，list-style-image:url(xxx.gif)
列表项图像|list-style-position|设置列表图项符号的位置，取值inside,outside
列表简写|list-style|设置顺序为type、image、position
##### 4.4.6 分类属性

position属性
取值|描述
:---------:|:---------:|
static|	默认，元素在页面流中正常出现，并作为页面流的一部分
relative|	相对定位，相对于其正常位置进行定位，并保持其定位前的形状和所占的空间
absolute|	绝对定位，相对于浏览器窗口进行定位，将元素框从页面流中完全删除后，<br>重新定位，当拖拽页面滚动条时，该元素随页面一起滚动
fixed|	固定定位，相对浏览器窗口进行定位，将元素框从页面流中完全删除后，重新定位，拖拽滚动条，元素不随页面一起滚动

float属性
取值|描述
:---------:|:---------:|
left|	元素浮动到左侧边界
right|	元素浮动到右边界
none|	默认值，元素不浮动

clear属性
取值|描述
:---------:|:---------:|
left|	清除左侧浮动产生的影响
right|	清除右侧浮动产生的影响
both|	清除两侧浮动产生的影响
none|	默认值，允许浮动元素出现在两侧

#### 4.5 CSS伪类和伪元素
##### 4.5.1 伪类
    /*----------------------- 伪类选择器 ---------------------------*/

    element:active{{property1:value1;...}
    a:active{font-size: 20px; background-color: #FF6;color: red;}

    element:focus{{property1:value1;...}
    #userName:focus{border:solid 1px #FF66FF;}

    element:hover{{property1:value1;...}
    a:hover{font-size: 16px; background-color: #CCC;}

    a:link{{property1:value1;...}
    a:link{font-size: 12px;color:back;text-decoration: none;}

    a:visited{{property1:value1;...}
    a:visited{
        font-size: 12px;color:#036;
        text-decoration: line-through;
    }

    element:read-only{{property1:value1;...}
    :read-only{border: solid 1px #CC0000;}

    element:checked{{property1:value1;...}
    :checked{outline: solid 2px #336633;}

    element:disabled{{property1:value1;...}
    :disabled{background-color: #999; font-size: 12px;}

    element:enabled{{property1:value1;...}
    #userName:enabled,.enanbedButton:enabled{
        background-color: #FF9;
        color: #00F;
        font-size: 16px;
    }
##### 4.5.1 伪元素
事项|说明
:---------:|:---------:|
简介|       选取元素时，除了以上三种选择器，    还可以根据元素的特殊状态来选取元素，即位伪类和伪元素
伪类选择器|     伪类与类选择器相似。以（：）开始，    含类型选择符时冒号前后不能出现空白。常用伪类参见附件
伪元素选择器|	伪元素表示某元素的部分内容，虽然逻辑上存在，    但在DOM中并无与指定应的部分，常见伪元素见附件

