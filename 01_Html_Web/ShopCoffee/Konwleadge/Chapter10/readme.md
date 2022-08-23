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
	iii. 绘制：点线、面、渐变、加载图、坐标转换
		A. 绘制点线
			context.strokesStyle="color";	设置路径颜色
			context.beginPath();	定义一个新的路径
			context.moveTo(x,y);	将路径的点移动至x,y
			context.lineTo(x,y);	从起始点绘制一条直线到x,y
			context.rect(x,y,width,height);	绘制宽高为w,h左上角点(x,y)的矩形框
			context.arc(x,y,r,sAngle,eAngle,counterclockwise);	
			
			p0(x,y) ：（中心圆点）
			r：radius（半径）
			sAngle：（起始角）
			eAngle：（结束角）
			counterclockwise:（方向）,false 代表 顺时针
			context.arcTo(x1,y1,x2,y2,radius)	
			p1(x1,y1)：与p0起点的切线，
			p2(x2,y2):与p1点的切线
			context.closePath();	结束当前定义的路径
			context.stroke();	将颜色描绘在路径上
			a. 自由路径
			cancasDrawLine = document.getElementById('cancasDrawLine');
			var context = cancasDrawLine.getContext('2d');
			// 绘制直线
			context.strokeStyle = '#2983BB';
			context.beginPath();
			context.moveTo(10,10);
			context.lineTo(200,100);
			context.lineTo(400,10);
			context.stroke();
			b. 规则矩形框
			canvasFillRect = document.getElementById('canvasFillRect');
			var context = canvasFillRect.getContext('2d');
			// 绘制矩形边框 方式1
			context.lineWidth=10;
			context.strokeStyle="#EE4866";
			context.lineJoin="round";
			context.strokeRect(320,15,260,90);
			context.strokeStyle='#EF3473';
			context.lineJoin='bevel';
			context.strokeRect(15,120,290,70);
			context.lineJoin='miter';
			context.strokeRect(320,120,260,70);
			// 绘制矩形框 方式2
			context.beginPath();
			context.rect(460, 40, 50, 120);
			context.stroke();
			c. 规则圆弧
		
		B. 绘制填充面
			context.fillStyle='color'	设置区域填充颜色
			context.fill()              	将颜色填充到区域上
			a. 自由填充
			
			b. 填充矩形
			canvasFillRect = document.getElementById('canvasFillRect');
			var context = canvasFillRect.getContext('2d');
			// 绘制矩形区域
			context.fillStyle = '#2983BB';
			context.fillRect(10, 10, 300, 100);
			c. 填充圆弧
			
		C. 绘制渐变
			a. 线性渐变
			b. 径向渐变
		D. 加载图像
			a. 加载示例
			绘制图像时使用drawImage经常出现图片加载不出来的情况，即便是使用缩略图有时也无济于事，这种情况需要使用img.onload() 函数予以处理，如下所示
			var canvasbase = document.getElementById('canvasimgbase');
			var contextbase = canvasbase.getContext('2d');
			var img = new Image();
			img.src = './img/demo/girl_little.jpg';
			var width = 80;
			var height = 100;
			img.onload = function () {
			    contextbase.drawImage(img, 10, 10);
			    contextbase.drawImage(img, 120, 10, 80, 120);
			    contextbase.drawImage(img, 10, 10, width, height, 210, 10, width, height);
			    contextbase.drawImage(img, 10, 10, width, height, 310, 10, width * 1.1, height * 1.1);
			    contextbase.drawImage(img, 10, 10, width, height, 410, 10, width * 0.8, height * 0.8);
			}
			b. 平铺、边框
			c. 像素处理
		E. 绘制文字
		F. 图形坐标变换
			a. 平移
			b. 缩放
			c. 旋转


#### 10.2 绘制图像