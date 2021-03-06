function drawPath() {
    var canvas = document.getElementById('canvasPath');
    var context = canvas.getContext('2d');

    context.beginPath();            //创建起始路径
    context.moveTo(30, 30);         //设定起点
    context.lineTo(80, 80);         //绘制直线
    context.lineTo(60, 150);        //绘制直线
    context.closePath();            //关闭路径
    context.fillStyle = 'lightgrey';  //设定填充样式
    context.fill();                 //执行填充

    context.beginPath();            //创建路径起始点
    context.moveTo(100, 30);         //设置起点
    context.lineTo(150, 80);         //绘制折线
    context.lineTo(200, 60);
    context.lineTo(150, 150);
    context.lineWidth = 4;            //设置线宽
    context.strokeStyle = 'black';    //设置颜色
    context.stroke();           //沿着当前路径绘制或画一条直线
    context.fill();             //进行填充

    context.beginPath();        //开始创建
    context.moveTo(230, 30);    //设定起始点
    context.lineTo(300, 150);   //绘制折线
    context.lineTo(350, 60);
    context.closePath();
    context.stroke();           //沿着当前路径绘制或画一条直线

    context.beginPath();
    context.rect(400, 30, 50, 120);
    context.stroke();
    context.fill();

}

function drawCurve() {
    var canvas = document.getElementById('canvasCurve');
    var context = canvas.getContext('2d');

    // 设置绘制样式
    context.fillStyle = 'lightgrey';
    context.lineWidth = 2;

    //从0到Π/2,逆时针绘制
    context.beginPath();
    context.arc(80, 80, 60, 0, Math.PI * 1 / 2, true);
    context.stroke();
    context.fill();

    // 从0到Π/2,顺时针绘制圆弧
    context.beginPath();
    context.arc(180, 50, 60, 0, Math.PI * 1 / 2, false);
    context.stroke();
    context.fill();

    //从Π/2到3Π/2,顺时针绘制扇形
    context.beginPath();
    context.moveTo(350, 100);
    context.arc(350, 100, 60, Math.PI * 3 / 2, false);
    context.closePath();
    context.stroke();
    context.fill();

    // 使用arcTo()方法绘制圆弧
    context.beginPath();
    context.moveTo(400, 10);
    context.arcTo(500, 10, 500, 110, 100);
    context.stroke();
    context.fill();
}

function drawPieChart() {
    var canvas = document.getElementById('canvasPieChart');
    var context = canvas.getContext('2d');

    var color = ["#27255F", "#77D1F6", "#2F368F", "#3666B0", "#2CA8E0"];
    var data = [15, 30, 15, 20, 20];

    var startPoint = 1.5 * Math.PI;
    for (let i = 0; i < data.length; i++) {
        context.fillStyle = color[i];
        context.strokeStyle = color[i];
        context.beginPath();
        context.moveTo(250,100);
        context.arc(250,100,90,startPoint,startPoint-Math.PI*2*(data[i]/100),true);
        context.fill();
        context.stroke();
        startPoint-=Math.PI*2*(data[i]/100);
    }
}

drawPath();
drawCurve();
drawPieChart();