### 4. CSS语言基础
#### 4.1 CSS概述
##### 4.1.1 CSS发展史
##### 4.1.2 CSS基本语法结构

#### 4.2 CSS的使用
##### 4.2.1 内嵌样式
##### 4.2.1 内部样式
##### 4.2.1 外部样式
##### 4.2.1 导入的外部样式样式

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
背景定位|background-posotion|设置图像在背景中的位置，取值top、bottom、left、right、center或具体值（10px）、百分比(%)
背景图像|background-image|设置背景图片，格式：background-image:url(bg.jpg); 没有图像,则该值为none
背景重复|background-repeat|设置背景平铺的方式,取值no-repeat(不平铺)、repeat-x(横向平铺)、repeat-y(纵向平铺)
背景关联|background-attachment|设置背景图片是否随页面内容一起滚动，取值默认为scroll(滚动)、还可取fixed(固定)
背景尺寸|background-size|CSS3新增属性，用来设置背景图像的尺寸，可以使用图像的像素或%设定图片的尺寸。在CSS3之前，背景图片的尺寸由图片的实际尺寸决定
填充区域|background-origin|CSS3新增属性，规定background-position属性相对什么位置来定位，取值border-box、padding-box、content-box
绘制区域|background-clip|CSS3新增属性，规定背景的绘制区域，取值border-box、padding-box、content-box
背景简写|background|可以综合设置以上属性[background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background "示例")<br>background: #FBA414 center 5% / 80% 50% repeat-y padding-box border-box scroll url("../img/backimg3.jpg");

##### 4.4.4 表格属性
功 能|属性名|描 述
:---------:|:---------:|:---------:|
宽度|width|宽
高度|height|高
标题位置|caption-side|设置表格标题的位置,取值top,bottom
边框|border|设置表格边框宽度
折叠边框|border-collapse|设置将表格边框折叠为单一边框（separate双边框,默认;collapse 单边框）
单元格间距|border-spacing|设置相邻单元格的边框间的距离，仅用于双边模式
内边距|padding|设置表格中内容与边框的距离
内容水平对齐方式|text-align|设置表格单元格的内容水平对齐方式
内容垂直对齐方式|vertical-align|设置表格单元格内容的垂直对齐方式
表格元素内居中|margin:auto|将表格在父元素内设置为居中对齐

##### 4.4.5 列表属性
##### 4.4.6 分类属性

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