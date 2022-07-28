### 10.HTML5进阶

#### 10.1 Canvas绘图
	i. HTML5的canvas标签仅仅是一块白布，并不是图形绘制，界面设计者需要通过JavaScript脚本对齐进行绘制。该标签的属性与其他HTML标签的属性没有太大区别，通过id属性设置ID名，style，class指定样式和类，width，height设置大小。hidden指定是否隐藏
		A. 绘制的步骤如下：
            ○ 在页面中定义<canvas>标签，并为其添加width和Height
            ○ 在js脚本中通过getElementById()等方法获得该canvas对象
            ○ 调用canvas对象的getContext()方法,返回一个图像上下文对象(GraphicsContext)，Content提供了getcontext("2D")返回一个CanvasRenderingContent2D对象，用于绘制二维图形
            ○ 调用CanvasRenderingContent2D响应的绘制方法，实现图形绘制

##### 10.1.1 canvas标签
##### 10.1.2 CanvasRendingContext2D对象
    用来绘制二维图形的对象
	这个对象是通过向canvas.getContext(contextID)方法传递"2d"参数得到的用于绘制二维图形的对象，目前尚不支持3d
![](./doc/CanvasRenderingContent2D.png)

##### 10.1.3 绘制图形
    i.矩形区域
        fillRect(x,y,width,height)
    ii.矩形边框
        contextstroke.lineWidth = 15;
        //绘制圆角矩形框
        contextstroke.lineJoin = 'round';
        contextstroke.strokeRect(x,y,width,height);
##### 10.1.4 绘制图像
    i. drawImage方法
    drawImage(image, x, y)
    drawImage(image, x, y, width, height)
    drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY,destWidth, destHeight)
         参数               |            含义
:--------------------------:|:--------------------------:|
image                       |所要绘制的图像；
(sourceX,sourceY)           |表示在绘制图像时，从源图像的哪个位置开始绘制；
sourceWidth,sourceHeight    |表示在绘制图像时，需要绘制源图像的宽度和高度；
(destX,destY)               |表示所绘图像区域的左上角的画布坐标；
destWidth,destHeight        |所绘图像区域的宽度与高度。

    绘制图像时使用drawImage经常出现图片加载不出来的情况，即便是使用缩略图有时也无济于事，
    这种情况需要使用img.onload() 函数予以边加载边显示的进行处理，如下所示；    
    img.onload = function () {
        //绘制一幅图像
        context.drawImage(img, 10, 10);
        //绘制一幅图像，并可以调整其宽度与高度
        context.drawImage(img, 120, 10, 80, 120);
        //从原图中进行裁剪，并进行绘制
        context.drawImage(img, 10, 10, width, height, 210, 10, width, height);
        //将裁剪的区域进行放大
        context.drawImage(img, 10, 10, width, height, 310, 10, width * 1.1, height * 1.1);
        //将裁剪的区域进行缩小
        context.drawImage(img, 10, 10, width, height, 410, 10, width * 0.8, height * 0.8);
    }
    ii. 图像平铺
    将图像按照一定的比例缩放后对画布进行平铺。实现平铺的两种方式：
        A. drawImage() 方法循环平铺
        B. 使用createPattern()方法进行平铺
            说明：createPattern()方法用于创建一种图像平铺模式，返回一个CanvasPattern对象,该对象可用作strokeStyle()或fillStyle的属性值,即可进行图像平铺
            语法：var pattern=createPattern(image, repetitionStyle);
            参数repetitionStyle表示平铺方式，取值：
            repeat（双向平铺）、repeat-x（x方向平铺）、repeat-y（y方向平铺）、no-repeat（不平铺）



##### 10.1.5 绘制文字
##### 10.1.6 绘制路径
##### 10.1.7 绘制圆弧
##### 10.1.8 绘制渐变图形
##### 10.1.9 图形坐标系变换

#### 10.2 多媒体播放
##### 10.2.1 H5的多媒体支持
##### 10.2.2 H5多媒体API

#### 10.3 Web存储
    Web 存储指的是Session Storage 和Local Storage
##### 10.3.1 Storage接口

##### 10.3.2 Session Storage
##### 10.3.3 Local Storage
    在HTML4中浏览器的主要功能是负责HTML内容的呈现，当客户端有少量的数据存储时，需要通过cookie技术实现，Cookie有一下几个缺点：
        A. Cookie的小被限制在4KB以内
        B. Cookie会随着Http请求一起发送到服务器，重复多次的发送会导致带宽的浪费。
        C. Cookie信息在网络传输的过程中并未进行加密，存在一定的安全隐患
        D. Cookie操作相对复杂

#### 10.4 本地数据库
##### 10.4.1 SQLite数据库
##### 10.4.2 IndexDB数据库

#### 10.5 Web Worker
##### 10.5.1 Worker 基本应用
##### 10.5.2 Worker 线程嵌套