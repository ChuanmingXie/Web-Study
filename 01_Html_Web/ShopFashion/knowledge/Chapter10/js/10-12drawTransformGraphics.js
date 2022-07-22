
/* 1.平移 */
var canvas = document.getElementById('canvastran1');
var context = canvas.getContext('2d');
// 绘制参照图
context.fillStyle = '#ececec';
context.beginPath();
context.arc(60, 60, 60, 0, Math.PI * 2, true);
context.stroke();
context.fill();
// 设置圆的透明度
context.globalAlpha = 0.6;
// 将圆的坐标远点横向平移60个单位,纵向平移30个单位
context.translate(60, 30);
context.fillStyle = "#ababab";
context.beginPath();
context.arc(60, 60, 60, 0, Math.PI * 2, true);
context.stroke();
context.fill();

/* 2.缩放 */
var canvas = document.getElementById('canvastran2');
var context = canvas.getContext('2d');

// 绘制参照图
context.fillStyle = '#ececec';
context.beginPath();
context.arc(60, 60, 60, 0, Math.PI * 2, true);
context.stroke();
context.fill();
// 将图形进项缩放
context.globalAlpha = 0.6;
context.scale(0.4, 0.4);
context.fillStyle = "#ababab";
context.beginPath();
context.arc(60, 60, 60, 0, Math.PI * 2, true);
context.stroke();
context.fill();


/* 3.平移 */
var canvas = document.getElementById('canvastran3');
var context = canvas.getContext('2d');

// 绘制参照图
context.fillStyle = '#ececec';
context.fillRect(0, 0, 150, 100);
/* context.beginPath();
context.arc(60,60,60,0,Math.PI*2,true);
context.stroke();
context.fill(); */
// 将图像顺时针旋转 Π/3
context.rotate(Math.PI / 3);
context.fillStyle = '#ababab';
context.fillRect(0, 0, 150, 100);


/* 4.综合演示 */
var canvas = document.getElementById('canvastran4');
var context = canvas.getContext('2d');

// 绘制参照图
context.fillStyle = '#ececec';
/* context.beginPath();
context.arc(60,60,60,0,Math.PI*2,true); 
context.stroke();
context.fill();*/
context.fillRect(0, 0, 150, 100);
context.fillStyle = '#ababab';
context.translate(80, 140);
context.scale(0.6, 0.6);
context.rotate(-Math.PI / 4);
context.fillRect(0, 0, 150, 100);