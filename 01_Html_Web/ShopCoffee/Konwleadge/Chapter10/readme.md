### 第10章 Canvas画布

#### 10.1 绘制基本图形
    H5设计的初衷是在移动设备上支持多媒体。H5作为开放Web标准的基石，是一个完整的编程环境
    适用于跨平台应用程序，视频和动画、图形、风格、排版和其他数字内容发布工具，广泛的网络功能

##### 10.1.1 认识Canvas
	HTML5的canvas标签仅仅是一块白布，并不是图形绘制，界面设计者需要通过JavaScript脚本对齐进行绘制。该标签的属性与其他HTML标签的属性没有太大区别，通过id属性设置ID名，style，class指定样式和类，width，height设置大小。hidden指定是否隐藏
		A. 绘制的步骤如下：
			§ 在页面中定义<canvas>标签，并为其添加width和Height
			§ 在js脚本中通过getElementById()等方法获得该canvas对象
			§ 调用canvas对象的getContext()方法,返回一个图像上下文对象(GraphicsContext)，Content提供了getcontext("2D")返回一个CanvasRenderingContent2D对象，用于绘制二维图形
			§ 调用CanvasRenderingContent2D响应的绘制方法，实现图形绘制
		B. CanvasRenderingContent2D对象:用来绘制二维图形的对象
		这个对象是通过向canvas.getContext(contextID)方法传递"2d"参数得到的用于绘制二维图形的对象，目前尚不支持3d
	ii. canvas使用准备工作
		A. 在本部分的学习中，发现在对canvas标签设置CSS样式时，内嵌样式可以控制画布的大小，但内部样式和外部样式却不行。目前考虑为：外部样式和内部样式不支持没有单位的长度值。px单位长度对canvas只起到拉伸作用，需要直接为canvas设置width和height属性

##### 10.1.2 Canvas常用属性和方法

#### 10.2 绘制图像