var canvas = document.getElementById('canvasstrokeRect');
var context = canvas.getContext('2d');
var text = '生命诚可贵qulitity';
context.fillText(text, 10, 30);
/* 填充样式 */
context.fillStyle = 'red';
context.font = 'italic bold 20px 隶书';
context.fillText(text, 100, 30);
/* 设置边框样式及文字背景 */
context.font = '60px 隶书';
context.fillStyle = '#20A162';
context.fillText(text, 10, 90);
context.strokeStyle = 'gold';
context.strokeText(text, 10, 90);

/* 使用图片作为文字边框 */
var img = new Image();
img.src = 'img/demo/text_bg.jpg';
img.onload = function () {
    var pattern=context.createPattern(img,'repeat');
    context.strokeStyle=pattern;
    context.lienWidth=3;
    context.font='60px 宋体';
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.shadowBlur=5;
    context.shadowColor='grey';
    context.strokeText(text,10,190);
}