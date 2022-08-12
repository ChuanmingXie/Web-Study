/* 设置图片大小 */
function drawImageSize() {
    var canvasbase = document.getElementById('canvasimgbase');
    var contextbase = canvasbase.getContext('2d');
    var img = new Image();
    img.src = '../img/demo/girl_little.jpg';
    var width = 80;
    var height = 100;
    img.onload = function () {
        contextbase.drawImage(img, 10, 10);
        contextbase.drawImage(img, 120, 10, 80, 120);
        contextbase.drawImage(img, 10, 10, width, height, 210, 10, width, height);
        contextbase.drawImage(img, 10, 10, width, height, 310, 10, width * 1.1, height * 1.1);
        contextbase.drawImage(img, 10, 10, width, height, 410, 10, width * 0.8, height * 0.8);
    }
}

/* 图像平铺 */
function fillImageContext() {
    var contextfill = cavansList[1].getContext('2d');
    var img = new Image();
    img.src = 'img/demo/girl_little.jpg';
    img.onload = function (param) {
        var pattern = contextfill.createPattern(img, 'repeat');
        contextfill.fillStyle = pattern;
        contextfill.fillRect(0, 0, 300, 300);
    }
}

function drawImageBorder() {
    var contextBorder = cavansList[2].getContext('2d');
    contextBorder.lineWidth = 30;
    contextBorder.fillStyle = "#3B818C";
    contextBorder.fillRect(0, 0, 300, 300);
    var img = new Image();
    img.src = 'img/demo/girl_little.jpg';
    img.onload = function () {
        var pattern = contextBorder.createPattern(img, 'repeat');
        contextBorder.strokeStyle = pattern;
        contextBorder.strokeRect(35, 45, 230, 200);
    }
}

var cavansList = document.getElementsByTagName('canvas');
fillImageContext();
drawImageBorder();
showNormalImage();

/* canvas像素处理 */
function showNormalImage() {
    var canvas = document.getElementById('canvasPixel');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, 600, 170);
    var img = new Image();
    img.src = 'img/demo/girl_little.jpg';
    img.onload = function () {
        context.drawImage(img, 10, 10);
    }
}
/* 通道处理 */
function showChannel(channel) {
    var canvas = document.getElementById('canvasPixel');
    var context = canvas.getContext('2d');
    var x = 0, y = 10;
    var img = new Image();
    img.src = 'img/demo/girl_little.jpg';
    img.onload = function () {
        context.drawImage(img, x, y);
        var imgData = context.getImageData(x, y, img.width, img.height);
        // console.log(imgData.data.join(','));
        var num = imgData.data.length;
        console.log(num);
        for (let i = 0; i < num; i = i + 4) {
            switch (channel) {
                case 'red': imgData.data[i + 0] = 225
                    x = 100; break;
                case 'green': imgData.data[i + 1] = 255;
                    x = 200; break;
                case 'blue': imgData.data[i + 2] = 255;
                    x = 300; break;
                case 'reverse':
                    imgData.data[i + 0] = 255 - imgData.data[i + 0];
                    imgData.data[i + 1] = 255 - imgData.data[i + 1];
                    imgData.data[i + 2] = 255 - imgData.data[i + 2];
                    x = 400; break;
                case 'transparent': imgData.data[i + 3] = 125;
                    x = 500; break;
                default: break;
            }
        }
        context.putImageData(imgData, x, y);
    }
}
/* 清空画布 */
function clearCanvas() {
    var canvas = document.getElementById('canvasPixel');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, 600, 170);
}