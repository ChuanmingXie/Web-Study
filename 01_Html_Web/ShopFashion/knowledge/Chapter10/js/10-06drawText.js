var canvas = document.getElementById('canvasstrokeRect');
var context = canvas.getContext('2d');

var text = '修己安人KQZ';
context.fillText(text, 10, 30);

/* 设置填充样式font */
context.fillStyle = 'red';
context.font = 'italic bold 20px 楷体';
context.fillText(text, 100, 30);

/* 设置边框stroke样式及文字填充font样式 */
context.font = '80px 楷体';
context.fillStyle = '#20A162';
context.fillText(text, 10, 100);
context.lineWidth=3;
context.strokeStyle = '#856D72';
context.strokeText(text, 10, 100);

/* 使用图片作为文字边框pattern */
var img = new Image();
img.src = 'img/demo/text_bg.jpg';
img.onload = function () {
    var pattern=context.createPattern(img,'repeat');
    context.strokeStyle=pattern;
    context.lineWidth=4;
    context.font='100px 宋体';
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.shadowBlur=5;
    context.shadowColor='grey';
    context.strokeText(text,10,200);
}