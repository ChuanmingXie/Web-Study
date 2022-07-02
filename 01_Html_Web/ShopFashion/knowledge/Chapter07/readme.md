### 7. JS对象
	i. JavaScript是一种基于对象的语言。对象是一种特殊的数据类型，由变量函数共同构成。
    其中变量称为对象的属性，函数称为对象的方法
	ii. Js中的对象分为：
		A. 内置对象：系统预先定义好的，直接使用的对象，如：
		    Array数组对象、String字符串对象、Date日期对象、Math数学对象、RegExp正则表达式对象
		B. 自定义对象

#### 7.1 Array 数组对象
##### 7.1.1 Array对象的创建
	语法
        new Array();
        new Array(size);
        new Array(element0,element1,element2,...,elementn);
        var goodTypes=new Array();
        goodTypes[0]="男装";
	示例
        goodTypes[1]="女装";
        var foodTypes=new Array("卤菜","川菜"，"粤菜");
        var MovieTypes=new Array(8);
    简写：
        var foods=["兰州拉面","潍坊火烧","背景烤鸭","德州扒鸡"];
##### 7.1.2 Array对象的属性
以上面的foods为例。
属性|含义|
:--------:|:--------:|
foods.constructor| 	返回对此对象的构造函数的引用
foods.length|    	数组的长度
foods.prototype| 	为对象添加属性和方法

##### 7.1.3 Array对象的常用方法
    A. 常用方法
方法|用途|
:--------:|:--------:|
arrayA.concat(arrayB,arrayC,...arrayN);	|用于连接俩个或多个数组，返回合并后的新数组,而原数组保持不变
arrayA.join(separator);	|将数组中的元素通过指定的字符串连接
arrayA.push(newElement1,newElement2,...,newElementX);|	用于向数组尾部添加一个或多个元素，返回数组的新长度
arrayA.pop()|	用于删除并返回数组中尾部最后一个元素
arrayA.unshift(newElement1,newElement2,...,newElementX);|	用于向数组开头添加一个或多个元素，并返回新的数组长度
arrayA.shift()|	用于删除并返回数组中开头第一个元素
arrayA.sort([sortby]);|	用于对当前数组进行排序
arrayA.reverse()|	在原有的数组的基础上颠倒数组中元素的顺序,不会创建新数组
arrayA.slice(start,[end]);|	从数组中返回指定的一部分元素<br>index必选：规定添加和删除元素的位置，<br>index<0 时从数组尾部向前计数,-1表示最后一个元素，-2表示导数第二
arrayA.splice(index,howmany,[item1,...itemX)]);|howmany必选：表示要删除元素的数量，0代表不删除数据<br>[items]可选：表示向数组中添加和替换的元素 <br>向数组中添加1-n个元素或者从数组中删除元素，

    B. Sort()方法，数组排序详解
        a. 使用JavaScript中的if条件句和sort()函数按照字母对象对数组进行排序
            1) 组排序

            2) 对象排序：在对象排序中，必须使用if条件句进行判断，直接相减，排序无效

        b. 使用 JavaScript 中的 localeCompare() 和 sort() 函数按字母顺序对对象数组进行排序
            1) 除了使用if条件句，localeCompre()提供了许多其他的比较选项，可在函数内部设置这些选项

            2) 在比较期间可以设置，忽略任何标点符号和特殊字符。例如，如果我们在某人的姓氏之前有标点符号，
            则该函数不会对数组进行排序。在这种情况下，我们可以使用 localeCompare() 函数
            并将其设置为在比较期间忽略标点符号。

        c. 使用 JavaScript 中的 Collator() 和 sort() 函数按字母顺序对对象数组进行排序
##### 7.1.4 二维数组
	A. 在JS中，没有二维数组或多维数组，不能通过new Array()的方式来创建。
    只能利用Js的若数据类型特点，在一维数组中存放另一个数组的方式来模拟实现二维数组
    示例:
        var array=new Array();
        array[0] = new Array('科幻','流浪地球',80);
        array[1]=new Array('战争','长津湖',79);
        array[2]='从1992到2012年这二十年时本次太阳纪的最后一个周期,又被称为"地球更新期"...';
        array[3]=88;
	简写:
        var movies=[
                ['科幻','流浪地球',80],
                ['战争','长津湖',79],
                ['动漫','雄狮少年',6],
                ['戏剧','赵氏孤儿',100]
        ]

#### 7.2 String 字符串对象
##### 7.2.1 字符串的创建
    A. 字面量方式
        § 字符串类型是一个基本的数据类型，而字符串对象是将字符串封装成了一个对象。
        § 封装后的对象可以调用该对象的属性和方法。在Js中可以隐式地将一个字符串转换成一个字符串对象。
    B. new方式
        § new方式创建字符串对象是通过调用String()构造函数来完成的，并返回一个String对象
        § 使用字面量方式创建字符串时，其类型是string类型，而通过new方式创建时，返回的是String对象。
        § 仅使用构造函数而没有new关键字时，类型也是string类型
    C. Js中string和String的区别
        § String是string的包装类
        § String是构造函数，使用其创建字符串对象具有substring()等方法；
        string是一种基本的数据类型，没提供substring()等方法；
        § String对象具有prototype原型对象，string没有提供prototype。通过浏览器的端点调试方式可查看此区别
        § 使用typeof()函数查看类型时，string变量返回string，String对象返回Object，String返回function
        § 使用==比较时，string类型判断其值是否相等，而String对象则是判断是否对同一对象进行引用
        § 两者生命周期不同，使用new创建的对象会一直存在，而string类型自动生成的虎仔代码执行后立即销毁

##### 7.2.2 字符串对象的常用方法

#### 7.3 Date 日期对象
##### 7.3.1 Date的创建
##### 7.3.2 Date对象的方法

#### 7.4 Math 数学对象
##### 7.4.1 Math对象的属性
##### 7.4.2 Math对象的方法

#### 7.5 RegExp 正则表达式对象
	• 正则表达式(Regular Expression)最早出现在20世纪40年代，在数学与计算机科学理论中用于反映“正则性”的数学表达特征。
	直到20世纪70年代末，才真正用于程序设计领域。目前流行的程序设计语言都支持正则表达式。
	• 正则表达式是一种字符串匹配的模式，通过单个字符串来描述和匹配一些列符合某个语法的规则。
	Js提供了一个RegExp对象来完成有关正则表达式的匹配功能

##### 7.5.1 RegExp对象的创建
方式|语法|示例
:--------:|:--------:|:--------:|
直接量方式  | var reg=/pattern/attributes; | var reg=/^\d* $/;
构造函数方式| var regExp=new RegExp(pattern,attributes); | var regExp=new RegExp("^\\d* $");

当时学习的时候，没有针对直接量的格式进行有效的理解，再加上学习C#出身，对弱数据类型的接受能力不够透彻，
总感觉不明白直接量方式的reg=/^\d*$/ 前后两个反斜杠 / 干嘛的.实际上就是实例中没有添加attributes.
更好的语法格式描述应该是 var reg=/pattern/[attributes];

attributes的取值及含义
取值|含义
:--------:|:--------:|
i   |匹配时忽略大小写
g   |全局匹配 遇到第一个匹配不会停止，会继续查找，直到完成所有的匹配
m   |多行匹配 ^匹配一行的开头(\n)或字符串的开头；$匹配一行的结尾或字符串的结尾。

##### 7.5.2 RegExp对象的执行方法
方式|语法|说明
:--------:|:--------:|:--------:|
exec()方法 | var result=RegExpObject.exec(string);|string:表示被检索的字符串 <br> exec():用于返回第一个匹配的内容，可以循环方式进行全局匹配<br> result:返回的匹配内容，其中 result.index 表示匹配文本的第一个字符出现的位置
test()方法 | if(RegExpObject.test(string))|表示被检索的字符串在参数string与正则表达式匹配时，返回true
complie()方法 | complie(RegExpObject)     | 用于编译指定的正则表达式，编译后的正则表达式会提高执行速度

    exec()方法功能强大，test()方法方便快捷，RegExpOb.test(string)等价于RegExpob.exec(string)!=null

##### 7.3.3 常用的校验正则表达式
    /* 常用的校验正则表达式 - 数字校验 */
    var regNum1 = /^[0-9]*$/;			    /* 0~n个数字 */
    var regNum2 = /^\d{n}$/;			    /* n位整数 */
    var regNum3 = /^\d{n,}*$/;			    /* 至少n位数字 */
    var regNum4 = /^\d{m,n}$/;			    /* m-n位的数字 */
    var regNum5 = /^([1-9][0-9*])+(.[0-9]{1,2})?$/; /* 非零开头,且最多带两位小数的数字 */
    var regNum6 = /^(\-)?\d)+(\.\d{1,2})?$/;	    /* 带1-2位小数的整数或负数 */
    var regNum7 = /^[1-9]\d*$/;		  	    /* 带零正整数 */
    var regNum8 = /^\-[1-9]\d*$/;		    /* 非零负整数 */
    var regNum9 = /^(-? \d+)(\.\d+)?$/;		    /* 浮点数 */

    /* 常用的校验正则表达式 - 字符串校验 */
    var regletter1 = /^[\u4e00-\u9fa5]{0,}$/;		/* 汉字 */
    var regletter2 = /^[A-Za-z0-9]+$/;			/* 数字和字母组成的字符串 */
    var regletter3 = /^.(6,30)$/;			/* 长度6-30的所有字符 */
    var regletter4 = /^[A-Za-z]+$/;			/* 英文字符组成的字符串，不区分大小写 */
    var regletter5 = /^[A-Z]+$/;			/* 小写英文字符组成的字符串 */
    var regletter6 = /^[a-z]+$/;			/* 大写英文字符组成的字符串 */
    var regletter7 = /^\w+$/;				/* 数字，字母，下划线组成的字符串 */
    var regletter8=/^[\u4e00-\u9fa5A-Za-z0-9_]+$/;	/* 汉字，字母，下划线组成的字符串 */
    var regletter9=/^[\u4e00-\u9fa5A-Za-z0-9]+$/;	/* 汉字，字母，组成的字符串 */
    var regletter10=/^#?([a-f0-9]{6}[a-f0-9]{3})$/;	/* 16进制值 */

    /* 常用的校验正则表达式 - 用户信息校验*/
    var userInfo1 = /^((\d{3}-\d{8})|(\d{4}-\d{7}))$/;	/* 国内电话号码 */
    var userInfo2 = /(^\d{15}$)|(^\d{17}([0-9]|X))$/  	/* 身份证号码 */
    var userInfo3 = /^\d{4}-\d{1,2}-\d{1,2}/		/* 日期格式 */
    var userInfo4 = /[1-9][0-9]{4,}/;			/* QQ号，从10000开始 */
    var userInfo5 = /\n\s* \r/;				/* 可用来删除空白行 */
    var userInfo6 = /[1-9]\d{5}(?! \d)/;		/* 邮政编码，其中(?! \d)表示位置的后面不能匹配\d */
    var userInfo7 = /^[+]{0,1}(d){1,3}[]?([-]?((d)|[]){1,12})+$/ 		/* 手机号码 */
    var userInfo8 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; 		/* Email邮箱 */
    var userInfo9 = /((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))/;	/* IP地址 */


#### 7.6 自定义对象
##### 7.6.1 原始方法

##### 7.6.2 构造函数方法
##### 7.6.3 原型方法
##### 7.6.4 混合方法
##### 7.6.5 JSON方法

