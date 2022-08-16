/* DOM 鼠标事件示例 */
function changeImage(event) {
    var e = event || window.event;
    var imgList = document.getElementsByTagName('img');
    var imgchange = imgList[imgList.length - 1];

    var x = e.clientX - imgchange.offsetLeft;
    var y = e.clientY - imgchange.offsetTop;

    if (x < imgchange.width / 2 && y > imgchange.height / 2) {
        imgchange.src = './img/card/11.jpg';
    } else if (x > imgchange.width / 2 && y > imgchange.height / 2) {
        imgchange.src = './img/card/12.jpg';
    } else if (x < imgchange.width / 2 && y < imgchange.height / 2) {
        imgchange.src = './img/card/13.jpg';
    } else {
        imgchange.src = './img/card/14.jpg';
    }
}

/* DOM 键盘事件示例： */


/* DOM 窗口事件示例 */


/* DOM 表单事件示例 */