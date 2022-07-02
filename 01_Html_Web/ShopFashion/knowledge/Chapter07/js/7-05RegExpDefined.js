/* RegExp 对象-定义与创建*/

	// 直接量方式
	// var reg=/pattern/attributes;
	// 构造函数方式
	// var regExp=new RegExp(pattern,attributes);
	// 示例
	var reg=/^\d* $ /;
	var regExp=new RegExp("^\\d* $ ");
	var str="漫步时代广场\nCopyright © 2021-2022";
	document.write("str.match(/^Copyright/):"+str.match(/^Copyright/)+"<br>");		//null,匹配失败
	document.write("str.match(/^Copyright/m):"+str.match(/^Copyright/m));	//Copyright,匹配成功

/* RegExp对象的方法 */
	// exec()方法
	// var result=RegExpObject.exec(string);
	// test()方法
	// RegExpObject.test(string);
	// compile()方法

