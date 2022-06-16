### Chapter01 HTML语言基础

#### 1.1 Internet 起源
    * 20世纪40年代左右，人们希望计算机设备之间互联，实现网络资源共享，但是受Web和Internet底层基础设施的限制，数据交换都经常受困。
    * 1960年左右，美国军方ARPA计划启动，联合计算机公司和大学共同研制出ARPnet网络，主要用于军事研究，1969年投入使用，ARPnet成为现代网络诞生的标志。
    * 20世纪80年代左右，Internet几经转表，用户由军方变成了教育机构，于是ARPnet分裂成为军用的MILNET和民用的ARPnet。后来广域网和局域网的篷布发展对Internet的进一步发展起到重要作用

#### 1.2 HTML 概述
##### 1.2.1 HTML发展过程
    A. 超文本标记语言（Hyper Text Markup Language，HTML）时Internet上用来编写网页的主要语言，目前为止HTML已经从1.0发展到5.1.并在W3C(万维网联盟)组织的关注下继续不断完善
    B. 2001年1月HTML 4.01版本中增加了更加严格的规则，形成了著名的可扩展超文本标记语言(Extensible Hyper Text Markup Language，XHTML)
    C. 2010年，HTML5.0版本以其极佳的兼容性和市场的受众程度高而广受新项目的追捧，目前已经是最好的选择（其中HTML5.1于2014年10月推出，距今8年左右）

##### 1.2.2 HTML文档结构
    A. HTML的基本组成单位是元素（或者类比其为C#中的控件），语法结构即：<标签> 内容</标签>，如<div>一个简单页面</div>
    B. HTML文档结构由<html>、<head>、<body>三部分组成
		* <html>：HTML文档以<html>标签开始,以</html>标签结束，文档中的所有内容均在此对标签内部
		* <head>：放置页面的头部信息：标题,元信息,CSS样式，JavaScript脚本元素等
		* <body>：网页的正文，是用户在网页窗口中看到信息，图片、表格、段落、视频等内容

##### 1.2.3 编写HTML文件的注意事项
	a. 大小写：HTML不区分大小写，XHTML区分大小写，HTML5又恢复了大小写的区分，在设计页面中应遵守规范，是用小写提高代码的可读性
    b. HTML标签的属性与属性值：标签具有一个或多个属性，属性与其值成对出现，如<img src="walk.jpg" Height="50px" />.理论上简单属性的属性值可以不带引号，也能正常显示，但不带引号使用JS编写脚本时会出问题；XHTML规定必须使用引号。属性值最好用单或双引号引起来。属性值必定要区分大小写，试想WALK.jpg和walk.jpg指向的图片并不一定是一幅图；因为Linux上的Web服务器对文件名区分大小写，而Windows中不区分大小写。
	c. HTML的空格：HTML文档页面中加多少空格制表符都只显示一个空格。需采用&nbsp;特殊字符 或者全角方式输入中文空格的办法进行处理。
	d. HTML中的注释：<!--   注释内容   -->
	e. 标签可以嵌套使用，但不能交叉出现

##### 1.2.4 文档类型和语言版本
	A. 头部第一行的定义
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
		"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		a. 上面的代码被称作DOCTYPE声明，document type (文档类型)的简写，用来说明所使用的xthml或者html是什么版本
		b. DTD叫做文档类型，内部包含了文档规则，浏览器根据DTD解释页面标识并加以展示
		c. 要建立符合标准的页面，DOCTYOPE是必不可少的关键组成部分，是决定CSS等内容是否生效的协议，需要对xhtml进行正确的定义
	B. 头部第二行的定义
	<html xmlns="http://www.w3.org/1999/xhtml">
		a. xmlns是XHTML namespace的缩写，叫做命名空间。为了解决xml允许自己定义的标识和其他人定义的标识名称相同但含义不同而带来的冲突，
		b. 实现了这一技术理念，即xml采用命名空间，允许用户通过一个网址来识别自己的标识
	C. 头部第三行定义
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		a. 为了被浏览器正确解释和通过W3C代码校验，所有的XHTML文档都必须声明它们所使用的编码语言，我们一般使用gb2312（简体中文）或utf-8，
		b. 制作多国语言页面时也可能用到Unicode、ISO-8859-1等
	D. 补充：
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 4.0 Transitional//EN" 
		"http://www.w3.org/TR/xhtml4/DTD/xhtml1-transitional.dtd">
		a. 上述定义表示采用HTML4.01的过度版本。同时XHTML是区分大小写的所以html要小写
		b. 在HTML5中，已经不再需要可以声明版本了，因为W3C希望一份html代码使用所有的HTML版本，代码更加简洁，通用即：<!DOCTYPE html>

#### 1.3 HEAD元素
##### 1.3.1 title元素
    title元素：设计页面是应为每个页面添加标题，标题要与页面内容具有相关性，且要尽可能简洁
##### 1.3.2 meta元素
    用于向客户传递信息和命令，而不是现实内容，一个head内可以包含多个meta 该标签常用的属性特征描述
* name
    * keywords：定义页面的关键词，词之间用逗号隔开
    * description：定义页面描述的内容，描述过长会显示成...
    * robots： 用来告诉搜索引擎页面是否允许索引与查询。content的参数有all,none,index,noindex,follow,nofollow，默认all
    * author：标注网页作者
* http-equiv
    * content-type:设定页面的字符集
    * refresh:自动刷新并转到新页面.使用content属性提供刷新或跳转的时间以及跳转的地址
    * set-cookie:设置页面缓存过期时间。如果网页过期，那么存盘上的cookie将被删除
    * expires:用于设定网页的到期时间。如果网页到期，必须从服务器上从新加载内容
* content:
    * Text:文本描述，一般用于描述name或http-equiv属性的内容





#### 1.4 文本元素
##### 1.4.1 标题 h
##### 1.4.2 文本修饰 font
##### 1.4.3 特殊字符

#### 1.5 文档结构元素
##### 1.5.1 段落 p
##### 1.5.2 换行 br
##### 1.5.3 水平线 hr

#### 1.6 列表元素
##### 1.6.1 有序列表 ol
##### 1.6.2 无序列表 ul
##### 1.6.3 定义列表 dl..dt..dd

#### 1.7 div和span
#### 1.8 img

#### 1.9 URL简介与超链接标签
##### 1.9.1 URL
	i. URL用于指定Web资源所在的位置，如同在网络上的门牌号。URL时Internet上标准的资源地址，又称为网络地址或网址。
	ii. URL包含3个关键部分：协议，主机地址和文件路径。
		
		a. 协议：
			* 网页通常基于HTTP超文本传输协议传递信息，对应网址基本使用http://
			* 安全性要求高的网站使用https://
			§ 文件上传下载时使用ftp://前缀
		b. 主机地址一般时网站的域名，如www.itshixun.com;也可以是IP地址，如115.239.210.27
		c. 文件路径与网站的目录结果相对应。通过文件路径可以找到页面所需的资源。
	iii. 文件路径的绝对路径和绝对路径
		a. 绝对路径：指一个完整的路径。在Internet中，绝对路径又称绝对URL，是唯一的地址。
		b. 相对路径
			* 相同目录：在index.html页面中引用同一目录下文件可以直接访问，如top.jpg
			* 子目录：在站点FShopping中，images是其子目录，index.html引用时需写成 images/top.ipg；每增加一级子目录均要添加一层文件名和"+",如chapter01/branch/subpage.jpg
			* 父目录：访问父目录中的文件时 使用 "../",每增加一级父目录均要添加一层 ../../images/top.jpg
			* 根目录：根目录从"/"开始，如站点下的chapter01和images下的文件使用，/chapter01/branch/subpage.jpg;/images/top.jpg

##### 1.9.2 文本链接和锚点链接
##### 1.6.3 图片链接和图片热区链接
##### 1.6.4 其他超链接
##### 1.6.5 超链接target属性
* _blank: 新窗口打开
* _self: （默认）在当前窗口打开
* _parent: 在父框架集中打开链接
* _top: 在整个窗口中打开
* frameName: 新窗口打开

