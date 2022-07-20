
var canvasbase = document.getElementById('canvasbase');
var canvasfill = document.getElementById('canvasfillRect');
var canvasstroke = document.getElementById('canvasstrokeRect');

var contextbase = canvasbase.getContext('2d');
var contextfill = canvasfill.getContext('2d');
var contextstroke = canvasstroke.getContext('2d');

/* canvas标签基本用法 */
contextbase.fillStyle='#CC5595';
contextbase.fillRect(10,10,50,130);

/* canvas 填充矩形区域 */
contextfill.fillStyle='#C06F98';
contextfill.fillRect(10,10,130,50);

/* canvas绘制矩形边框 */
contextstroke.strokeStyle='#7E1671';
contextstroke.lineWidth=15;
//绘制圆角矩形框
contextstroke.lineJoin='round';
contextstroke.strokeRect(10,40,80,80);
//绘制切角矩形框
contextstroke.lineJoin='bevel';
contextstroke.strokeRect(110,40,80,80);
//绘制尖角矩形框
contextstroke.lineJoin='miter';
contextstroke.strokeRect(210,40,80,80);