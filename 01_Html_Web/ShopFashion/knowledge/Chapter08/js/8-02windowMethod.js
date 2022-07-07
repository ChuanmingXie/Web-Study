var x = 0;
var y = 0;
var timer;
var myWindow;

function winOpen() {
    x = y = 0;
    myWindow = window.open('', 'self', 'width=200,height=100');
    myWindow.document.write('this is my create window');
}

function winStartMove() {
    x += 10;
    y += 5;
    myWindow.moveBy(x, y);
    timer = setTimeout('winStartMove()', 1000);
}

function winStopMove() {
    clearTimeout(timer);
}
function winClose() {
    myWindow.close();
}