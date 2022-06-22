### 5. CSS页面布局
#### 5.1 盒子模式
	i. 为了将页面元素合理有效的组织在一起，形成一套完整的，行之有效的原则和规范称为盒子模型。
	ii. 盒子模型是一个很重要的概念，它由内容、边框、内边距、外边距四部分组成。
	iii. 盒子的实际宽度也由content、padding、border、margin共同组成。
	而content由width和height共同组成。每个盒子可以对边框、内边距和外边距的“上下左右”统一设置，
	也可以从"上右下左"4个方向分别设置样式

#### 5.2 内容区
	i. 内容区是盒子的中心，包含了盒子的主要信息内容，例如文本、图片等。内容拥有width、height、overflow三个属性。其中overflow属性值：
取值|描述
:--------:|:--------:|
visible|默认值，溢出的部分不会被修剪，回呈现在元素框之外
hidden|溢出的内容将不可见
scroll|溢出的内容会被修剪，但可以通过滚动条查看隐藏的部分
auto|由浏览器决定如何处理溢出部分

#### 5.3 边框
	从CSS2.1开始，元素的背景包括内容、内边距和边框三部分由于元素的边框位于元素的背景之上，
	所以使用间断线类型的边框时，背景会从间断线的缝隙中显露出来。outline是一个备用选择
	简写border ,控制border-width,border-style,border-color.
	正式语法为 line-width,line-style,color.
	注意：此处不能设置radius和box-shadow
##### 5.3.1 边框宽度
	简写 border-width 属性，可控制border-top-width,border-right-width,
	border-bottom-width,border-left-width
	取值为数字或者关键字(thin 细边,medium 中等边,thick 粗边)
参数个数|示例|含义
:--------:|:--------:|:--------:|
4个|div{border-width:10px 20px 30px 40px;}|从12点方向顺时针设置：上->右->下->左(TRBL)
3个|div{border-width:10px 20px 10px;}|中间代替左右两个方向上的宽度：上->左+右->下
2个|div{border-width:10px 20px;}|前者代表上下,后一个代表左右的宽度：上下->左右
1个|div{border-width:10px;}|四周均使用一个宽度值
关键字|div{border-width:thick;}|四周均使用宽边
		1
	2		3
		4
##### 5.3.2 边框样式
	简写 border-style 可控制border-top-style,border-right-style,
	border-bottom-style,border-left-style，
	均可取下表的相关值进行样式设定
取值|描述
:--------:|:--------:|
none|无边框
hidden|隐藏边框
dotted|定义点状边框,在大多数浏览器呈现实线
dashed|定义虚线,在大多数浏览器呈现实线
solid|定义实线
double|定义双线,双线的宽度等于border-width的值
groove|定义3D凹槽.效果取决于border-color的值
ridge|定义3D菱形.效果取决于border-color的值
insert|定义3D凹边.效果取决于border-color的值
outset|定义3D凸边.效果取决于border-color的值

##### 5.3.3 圆角边框
	简写border-radius 控制border-top-right-radius,border-top-left-radius,
	border-bootom-left-radius,border-bottom-right-radius,取值为数字,相关示例如下：
###### 水平半径和垂直半径相等时
参数个数|示例|含义|等价
:------:|:------:|:------:|:------:|
1个|border-radius:10px|四个圆角全部设置大小为10px|border-top-left-radius:10px;<br>border-top-right-radius:10px;<br>border-bottom-right-radius:10px;<br>border-bottom-left-radius:10px
2个|border-radius:10px 20px|top-left和bottom-right方向使用第一个参数值<br>top-right和bottom-left使用第二个参数|border-top-left-radius:10px;<br>border-top-right-radius:20px;<br>border-bottom-right-radius:10px;<br>border-bottom-left-radius:20px
3个|border-radius:10px 20px 30px|top-left取参数1<br>top-right和bottom-left取参数2<br>bottom-right取参数3|border-top-left-radius:10px;<br>border-top-right-radius:20px;<br>border-bottom-right-radius:30px;<br>border-bottom-left-radius:20px
4个|border-radius:10px 20px 30px 40px|从10:45方向顺时针依次赋值参数|border-top-left-radius:10px;<br>border-top-right-radius:20px;<br>border-bottom-right-radius:30px;<br>border-bottom-left-radius:40px

###### 水平半径和垂直半径不等时
参数个数|示例|含义|等价
:------:|:------:|:------:|:------:|
1水平<br>1垂直|border-radius:10px/20px;|水平1/垂直1|每个圆角均赋值10px 20px的水平和垂直的参数
2水平<br>2垂直|border-radius:10px 30px/20px 40px;|水平1 水平2/垂直1 垂直2|从左上角开始顺时针赋值<br>(10,20)、(30,40)、(10,20)、(30,40)
3水平<br>2垂直|border-radius:10px 20px 30px/50px 60px;|水平1 水平2 水平3/垂直1 垂直2|从左上角开始顺时针赋值<br>(10,50)、(20,60)、(30,50)、(20,60)
2水平<br>4垂直|border-radius:10px 20px/30px 40px 50px 60px;|水平1 水平2/垂直1 垂直2 垂直3 垂直4|(10,30)、(20,40)、(10,50)、(20,60)

###### 综上
	圆角数据的赋值仍然遵循顺时针的原则,赋值的顺序变成下图所示 从1->2->3->4
	1(水平,垂直)		2(水平,垂直)

							
	4(水平,垂直)		3(水平,垂直)
##### 5.3.4 边框阴影
	box-shadow 属性
	语法： box-shadow: h-shadow v-shadow [blur][spread][color][inset];
参数|含义
:--------:|:-------:|
h-shadow|指定水平阴影的位置，该值允许为负值
v-shadow|指定垂直阴影的位置，该值允许为负值
blur|指定模糊距离
spread|	指定阴影尺寸
color；|指定阴影颜色
inset|指定外部或内部阴影

##### 5.3.5 图像边框
	简写 border-image 属性，控制 border-image-source,border-image-slice,border-image-width,border-image-repeat
	语法：url(图像的路径) 图像的分割方式(slice)/图像边宽的宽度(width) 图像的平铺方式(repeat)
分类属性|取值
:--------:|:--------:|
border-image-source|url("../img/...jpg")
border-image-slice|遵循TRBL原则的1-4个数值或百分比作为参数,<br>以及可选的fill参数，将内容区域分割成9个部分
border-image-width|图像的宽度
border-image-repeat|图片覆盖方式,repeat、round、stretch

#### 5.4 内边距
	padding：遵循TRBL原则
#### 5.5 外边距
	margin：遵循TRBL原则
##### 5.3.1 外边距基本用法
##### 5.3.2 外边距合并
	w外边距合并是指当俩个垂直外边距相遇时，将形成一个外边距。合并后的外边距高度等于合并前两者最大的
