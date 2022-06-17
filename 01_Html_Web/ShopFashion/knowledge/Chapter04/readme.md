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
##### 4.4.2 字体属性
##### 4.4.3 背景属性
##### 4.4.4 表格属性
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