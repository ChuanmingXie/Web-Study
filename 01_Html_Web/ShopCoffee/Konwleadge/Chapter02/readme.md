### 第二章 HTML基础

#### 2.1 认识HTML
* HTML
    Hypertext Markup Language超文本标记语言
    文档布局：告诉浏览器如何显示文档（文本、图片、媒体）内容
    超文本链接：可以把文档与其他互联网资源链接起来
* XML
    Extensible Markup Language 可扩展标记语言
    W3C为了满足处理其他类似HTML文档的需求而定义的标记语言
    独立而正式的标记元语言
* XHTML
    一个HTML的重写版本
    为了使XML和HTML相兼容
* HTML的编辑环境
    所见及所得的编辑器，如：Dreamweaver、FrontPage
    文本编辑工具，如：记事本、EditPlus
* HTML的运行环境
    浏览器
    Internet Explorer 6
    FireFox 1.5

##### 2.1.1 HTML基本语法
* 标签
    放在 < 和 >之间
    标签可以有属性
    大多数标签影响文档中的一个独立部分，从开始标签到结束标签
    有的标签没有结束标签
    举例
        <a href="https://github.com/ChuanmingXie/Web-Study">Web-Study</a>
        <br>
* 注释
    <!-- 注释内容 -->
    注释不会在浏览器中显示出来
* 文本
    不是标签也不是注释，就一定是文本了
    就是在浏览器中显示给读者的那一部分

##### 2.1.2 HTML文档的基本结构
<!DOCTYPE>
    最外层是 html
        head 页面头部
            meta meta元素
            title 页面标题
        body 页面主体
##### 2.1.3 示例：第一个HTML页面
[2-1-3示例](https://github.com/ChuanmingXie/Web-Study/blob/master/01_Html_Web/ShopCoffee/Konwleadge/Chapter02/2-1-3.html "2-1-3.html")

#### 2.2 HTML常用标签
* 与文本相关的标签是HTML语言中最丰富的一部分
* 用于外观
    <b>粗体</b>
    <i>斜体</i>
    <em>强调</em>
* 用于结构
    <div>division 部分</div>
    <p>paragraph 段落</p>
    <br>line break 换行
    <h1>标题1</h1>
    <hr>水平分隔线
    <pre>预格式化文本</pre>

##### 2.2.1 文本与标签
###### 1. 文本
* 不是标签也不是注释，就一定是文本了，就是在浏览器中显示给读者的那一部分。
* 浏览器总是会截短 HTML页面中的空格。如果在文本中写10个连续的空格，在显示该页面之前，浏览器会删除它们中的9个，换行、缩进只保留一个空格。
* 有特殊意义的字符用于纯文本时
* 键盘无法输入的字符
		&nbsp;         不断行的空格		
		&lt;  			<
		&gt;			>
		&amp;			&
		&quot;			"
		&copy;			©	

###### 2. 标签
    (1)注释标签 <!-- -->
    (2)换行标签 <br/>
    (3)标题标签 <h1></h1> h标签用于显示标题，独自成行，带有默认的字号和段间距
    (4)段落标签 <p></p> p标签的作用是分段（paragraph），每个段落会另起一行，带有默认的段间距。
    (5)div标签 <div></div> div标签的作用是分块（block），每个块会另起一行，一对div标签中间可以放置文本、图片或其它元素，div通常作为样式的容器。
    (6)区间标签 <span></span> span标签的作用是划分区间，通常作为样式的容器，默认不会独立成行，多个区间会在一行上连续显示。
    (7)列表标签 
        有序（ordered）列表：<ol></ol>，用来来定义边界,列表中的项目用<li></li>进行标记,列表可以嵌套.
        无序（unordered）列表 ：<ul></ul>，用来来定义边界,列表中的项目用<li></li>进行标记,列表可以嵌套.
        定义（definition list）列表：<dl><dt></dt><dd></dd></dl>代表，在<dl></dl>标签里可以用<dt>（definition term）表示项目，<dd>（definition description）表示描述。
    (8)图片标签 <img /> 
        我们在网上看到或听到的图像、视频、Flash等多媒体元素不是HTML文档的一部分
            这些多媒体数据与HTML文档分开保存
            通过特殊的标签把这些多媒体元素的引用包括在文档中
            浏览器利用引用加载这些元素，并把它们与文本集成在一起
        <img>允许将外部图像文件（JPEG、GIF、PNG等格式）嵌入文档
        <img> 标签的常见属性
            src 指定图像文件的URL，此属性是必需写的
            id 指定包含嵌入的图像文件的名称。
            width 所插入的图像的宽度
            height 所插入的图像的高度
            align 指定文本字段中嵌入图像的水平对齐
            alt 不显示图像时的替代文本
            border 图像外边框大小
    (9)超链接标签 <a></a> 
        点击某个图标或某段文字，就可以自动连到相对应的文件。
        用<a></a>标签来创建
        href属性： <a></a>标签中的属性，用于指定链接目的地，参数值可以是任何有效的URI，包括相对的和绝对的URL，也可以是JavaScript语句。

##### 2.2.2 示例:介绍学校
[2-2-2示例](https://github.com/ChuanmingXie/Web-Study/blob/master/01_Html_Web/ShopCoffee/Konwleadge/Chapter02/2-2-2.html "2-2-2.html")

#### 2.3 表格元素
##### 2.3.1 表格标签
    表格主要包含下列几项
        <table> 表格标签
            <tr> 行标签
            <td> 单元格标签
            <th> 表头标签
        <tablr>的属性
            align 对齐方式（不建议使用），取值left、center、right
            bgcolor 背景颜色（不建议使用）
            border 边框
            width 表格宽度
        <td>或<th>的属性
            colspan 跨列
            rowspan 跨行

##### 2.3.2 示例:图书统计表
[2-3-2示例](https://github.com/ChuanmingXie/Web-Study/blob/master/01_Html_Web/ShopCoffee/Konwleadge/Chapter02/2-3-2.html "2-3-2.html")

#### 2.4 表单元素
##### 2.4.1 表单及其组成部分标签
    通过<form>和</form>标签，可以在文档中界定表单区域
        表单允许用户输入数据，然后发送给服务器
        服务器处理表单后做出响应
    表单组成部分
        文本框：<input type="text" name="userName">
        密码框：<input type="password" name="passwd">
        单选按钮：
            <input type="radio" name="sex" value="1">男
            <input type="radio" name="sex" value="0">女
        复选框：
            <input type="checkbox" name="hobby" value="1">读书
            <input type="checkbox" name="hobby" value="2">音乐
            <input type="checkbox" name="hobby" value="3">运动
        下拉列表：
            <select name="degree">
                <option value="">--请选择--</option>
                <option value="1">专科</option>
                <option value="2">本科</option>
                <option value="3">硕士</option>
                <option value="4">博士及以上</option>
            </select>
        文本区域：
            <textarea name="comment" rows="5" cols="30"></textarea>
        按钮：
            <input type="submit" value="提交">
            <input type="reset" value="重置">
            <input type="button" value="返回">
        隐藏字段:
            <input type="hidden" name="userId" value="1001">
[2-4-2示例](https://github.com/ChuanmingXie/Web-Study/blob/master/01_Html_Web/ShopCoffee/Konwleadge/Chapter02/2-4-2.html "2-4-2.html")

##### 2.4.2 示例:个人信息统计表

#### 2.5 咖啡商城-商品分类
##### 2.5.1 说明
    属于综合项目中的首页中的全部商品分类部分的实现，需要用到本章所学的列表、超链接等标签。
##### 2.5.2 实现
    使用列表标签定义每一个商品分类；
    使用超链接标签呈现每一项商品分类和分类子项。
