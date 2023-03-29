11-11jQuery基本操作 - 属性操作-函数 */
知识点 

1.attr()方法 :获取或设置元素的属性
	语法：
		attr(name)
		
		参数由properties是一个由key/value键值对构成的集合，用户设置元素中1-n个属性		 
		attr(properties)
		attr(key,value)
		
		使用函数的返回值作为属性的值，
		index表示当前元素在集合中的索引位置，oldAttr表示当前元素在修改后前的属性值		 
		attr(key,function(index,oldAttr)
	示例：
		$('img').attr('src');
		$('#myImg').attr('src');
		$('#myImg').attr('src',"img/flower2.png");
		$('#myImg').attr({src:"img/flower2.png",title:"鲜花之王-玫瑰花"});
		$('#myImg').attr('title',function(){return this.src;});
		
2.removeAttr()方法
	语法：
		removeAttr(name)	name 表示要删除的属性名		
	示例：
		$('img').removeAttr("title");


3.prop()方法：
	用户获取匹配元素的集合中第1个元素的属性，
	或者设置所匹配的元素的一个或多个属性，该方法多用于boolean类型的属性，如checked、selected
	语法：
		prop(name)
		prop(properties)
		prop(key,value)
		prop(key,function(index,oldAttr):
	示例:
		$("input[type='checkbox']").prop("checked");		//返回第一个复选框的状态
		$("input[type='checkbox']").prop("checked",true);	//将所有复选框选中
		// 通过属性键值对的方式，将所有复选框设置为禁用、选中状态 
		$("input[type='checkbox']").prop(disabled:true,checked:true);	
		// 使用函数的返回值作为属性值, 此处是为了实现反选
		$("input[type='checkbox']").prop("checked",function(index,oldValue){return !oldValue;})

4.removeProp() 方法：
	语法：
		removeProp(name)	
	示例:
		$("input[type='checkbox']").removeProp("disabled");


11-12jQuery基本操作-样式操作
addClass() | removeClass()


toggle() | css()

ID为userName的元素添加样式，如果存在focusClass样式则移除，没有样式则添加
$('userName').toggleClass("focusClass");
第二个参数为真，样式切换为inverseColor
$('#saleDept').toggleClass("inverseColor",true);

用于返回第一个匹配元素的样式
$('img'),css('width');
设置某一匹配元素的样式，
$('img').css('width','200px');
使用 properties(属性键值对) 的方式一次设置多个样式
$('img').css(backgroundColor:"#CCC",borderColor:"#999");
使用函数的返回值作为 css() 方法的value值
$('img').css({
	width:function(index,value){
		return parseFloat(value)*0.9;
	}
})



11-14jQuery基本操作-内容操作-html|text|val 

知识点 
1.html()
// 返回#mainContentDiv标签的HTML内容
$('#mainContentDiv').html();
// 设置#mainContentDiv标签的HTML内容设置为 htmlCode:红色标题格式的"漫步时代广场"
$('#mainContentDiv').html("<h1><font color='red'>漫步时代广场</font></h1>");
// 根据元素在集合中不同的位置，设置不同的HTML内容
$('p').html(function(index, htmlCode) {
	switch (index) {
		case 0:
			return "<h1>" + htmlCode + "</h1>";
		case 1:
			return "<h2>" + htmlCode + "</h2>";
		default:
			return htmlCode;
	}
});


2.text()
返回 #mainContentDiv标签的文本内容, 即使该标签包含HTML标签， 也会返回标签信息
$('#mainContentDiv').text();
将inputDiscuss内容作为newsDisscuss的文本内容
$('#newsDiscuss').text("<hr/>补充如下：" + $('#inputDiscuss') val() + "<hr/>");


实例演示
html() | text()
/* 获取元素的内容 */


// val()


11-16jQuery事件处理-事件绑定-bind|one|toggle|live|delegate|on|hover 

1. bind() 方法示例

// 绑定click事件
$('p').bind('click',function(){
	alert($(this).text());
});

$('p').bind('mouseenter mouseleave',function(){
	$(this).toggleClass('entered');
});

//对一个对象同时绑定多个事件，每个事件具有单独的处理函数
$('button').bind({
	click:function(){$('p').slideToggle();},
	mouseenter:function(){$('body').css('background-color','red');},
	mouseleave:function(){$('body').css('background-color','#FFFFFF');}
});

/* 事件处理之前传递一些附加参数 */
function handler(e){
	alert(e.date.foo);
}
$('p').bind('click',{foo:'bar'},handler);

/* 事件绑定的简写 */
$('input[type=button]').click(function(){
	$(this).toggleClass('entered');
})

2. one() 方法
$('p').one('click',function()){
	alert($(this).text());
}

4. live()方法
$('div').live('click',function(){
	alert($(this).html());
});

5. delegate() 方法
$('div').delegate('button','click',function(){
	$('p').slideToggle();
});

$('div').delegate('#dataBindBtn','click',{msg:'传递额外数据'},function(){
	alert(e.data.msg);
})

6. on ()方法
// live绑定事件
$('div[id!=leftDiv]').live('click',function(){
	//事务处理函数
});	
//on() 绑定事件,替代live() 方法
$(document).on('click',"div[id!=leftDiv]",function(){
	alert($(this).html());
});

/* delegate 绑定事件 */
$('div').delegate("#dataBindBtn",'click',{msg:'额外传递数据'},function(e){
	alert(e.data.msg);
})
/* on() 绑定事件，并额外传递数据，代替degelate() */
$('.eventBind3').on('click','#dataBindBtn',{msg:'额外传递数据'},function(e){
	alert(e.data.msg);
});


7. hover() 方法
$('td').hover(
	function(){$(this).addClass('hover');},
	function(){$(this).removeClass('hover')};
)


11-19jQuery事件处理-解除事件绑定-unbind|undelegate|off 

//使用bind绑定事件
// 使用delegate 绑定事件
// 使用hover绑定事件
// 使用on ()方法绑定事件

/* 解除事件绑定 */
	$('#removeBindBtn').on('click',function(){
		/* unbind() - off() */
		// 使用unbind解除click事件绑定
		$('#manyBindBtn').unbind('click');
		// 解除该元素上所有的事件绑定
		$('#manyBindBtn').unbind();
		// 使用off()解除事件绑定
		$('#manyBindBtn').off('click');
		$(document).off('click','#manyBindBtn');
		$('#manyBindBtn').off();
		
		/* undelegate() - off */
		// 使用undelegate()方法解除delegate()方法绑定的事件
		$(document).undelegate('#delegateBindBtn','click');
		// 使用off()方法解除delegate()方法绑定的事件
		$(document).off('click','#delegateBindBtn');
		
		/*  */
		// 使用off()解除on()方法绑定的事件
		$('#leftDiv').off('click','#bindBtn');
		// 使用off()方法解除所有按钮上的事件绑定
		$("input[type='button']").off();
	});


    /* 11-20Query事件处理-事件对象 */