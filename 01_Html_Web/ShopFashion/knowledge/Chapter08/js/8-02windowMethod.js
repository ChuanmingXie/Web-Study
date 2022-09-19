var x = 0;
var y = 0;
var timer;
var myWindow;
/* 打开窗体 */
function winOpen() {
    x = y = 0;
    myWindow = window.open('', 'self', 'width=200,height=100');
    myWindow.document.write('this is my create window');
}
/* 移动窗口 - 间隔1000ms */
function winStartMove() {
    x += 10;
    y += 5;
    myWindow.moveBy(x, y);
    timer = setTimeout('winStartMove()', 1000);
}
/* 停止移动窗体 */
function winStopMove() {
    clearTimeout(timer);
}
/* 关闭窗体 */
function winClose() {
    myWindow.close();
}