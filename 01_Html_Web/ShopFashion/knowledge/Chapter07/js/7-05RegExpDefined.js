/* RegExp 对象-定义与创建*/

// 直接量方式
// var reg=/pattern/attributes;
// 构造函数方式
// var regExp=new RegExp(pattern,attributes);
// 示例
var reg = /^\d* $ /;
var regExp = new RegExp("^\\d* $ ");
var str = "漫步时代广场\nCopyright © 2021-2022";
document.write("str.match(/^Copyright/):" + str.match(/^Copyright/) + "<br>");		//null,匹配失败
document.write("str.match(/^Copyright/m):" + str.match(/^Copyright/m));	//Copyright,匹配成功

/* RegExp对象的方法 */
// exec()方法
// var result=RegExpObject.exec(string);
// test()方法
// RegExpObject.test(string);
// compile()方法

/* 常用的校验正则表达式 - 数字校验 */
var regNum1 = /^[0-9]*$/;						/* 0~n个数字 */
var regNum2 = /^\d{n}$/;						/* n位整数 */
var regNum3 = /^\d{n,}*$/;						/* 至少n位数字 */
var regNum4 = /^\d{m,n}$/;						/* m-n位的数字 */
var regNum5 = /^([1-9][0-9*])+(.[0-9]{1,2})?$/; /* 非零开头,且最多带两位小数的数字 */
var regNum6 = /^((\-)?\d)+(\.\d{1,2})?$/;		/* 带1-2位小数的整数或负数 */
var regNum7 = /^[1-9]\d*$/;						/* 带零正整数 */
var regNum8 = /^\-[1-9]\d*$/;					/* 非零负整数 */
var regNum9 = /^(-? \d+)(\.\d+)?$/;				/* 浮点数 */

/* 常用的校验正则表达式 - 字符串校验 */
var regletter1 = /^[\u4e00-\u9fa5]{0,}$/;		/* 汉字 */
var regletter2 = /^[A-Za-z0-9]+$/;				/* 数字和字母组成的字符串 */
var regletter3 = /^.(6,30)$/;					/* 长度6-30的所有字符 */
var regletter4 = /^[A-Za-z]+$/;					/* 英文字符组成的字符串，不区分大小写 */
var regletter5 = /^[A-Z]+$/;					/* 小写英文字符组成的字符串 */
var regletter6 = /^[a-z]+$/;					/* 大写英文字符组成的字符串 */
var regletter7 = /^\w+$/;						/* 数字，字母，下划线组成的字符串 */
var regletter8=/^[\u4e00-\u9fa5A-Za-z0-9_]+$/;	/* 汉字，字母，下划线组成的字符串 */
var regletter9=/^[\u4e00-\u9fa5A-Za-z0-9]+$/;	/* 汉字，字母，组成的字符串 */
var regletter10=/^#?([a-f0-9]{6}[a-f0-9]{3})$/;	/* 16进制值 */

/* 常用的校验正则表达式 - 用户信息校验*/
var userInfo1 = /^((\d{3}-\d{8})|(\d{4}-\d{7}))$/;	/* 国内电话号码 */
var userInfo2 = /(^\d{15}$)|(^\d{17}([0-9]|X))$/  	/* 身份证号码 */
var userInfo3 = /^\d{4}-\d{1,2}-\d{1,2}/			/* 日期格式 */
var userInfo4 = /[1-9][0-9]{4,}/;					/* QQ号，从10000开始 */
var userInfo5 = /\n\s* \r/;							/* 可用来删除空白行 */
var userInfo6 = /[1-9]\d{5}(?! \d)/;				/* 邮政编码，其中(?! \d)表示位置的后面不能匹配\d */
var userInfo7 = /^[+]{0,1}(d){1,3}[]?([-]?((d)|[]){1,12})+$/;			/* 手机号码(不好用) */
var mobilePhoneReg = /^[+]{0,1}\d{1,3}[-| ]?(1[3|4|5|7|8][0-9]{9})$/;   /* 手机号码(好用) */
var userInfo8 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; 		/* Email邮箱 */
var userInfo9 = /((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))/;		/* IP地址 */
