var walkGirl = document.getElementById('walkGirl');
var headerDiv = document.getElementsByClassName('walkingDiv')[0];

var rightImages = ["r0.png", "r1.png", "r2.png"];
var leftImages = ["l0.png", "l1.png", "l2.png"];
var downImages = ["d0.png", "d1.png", "d2.png"];
var upImages = ["u0.png", "u1.png", "u2.png"];

var divWidth = headerDiv.style.width;
var imgWidth = headerDiv.offsetWidth;
var imgHeight = headerDiv.offsetHeiht;

var images = rightImages;
var n = 0;

function doKeyDown() {
    var x = dealPx(headerDiv.style.left);
    var y = dealPx(headerDiv.style.top);
    var e = e || window.event;
    var keyID = e.keyCode ? e.keyCode : e.which;
    /* 向右方向走 */
    if (keyID == 39 || keyID == 68) {
        if (x + imgWidth < window.innerWidth) {
            x += 10;
        }
        images = rightImages;
    }
    /* 向左方向走 */
    if (keyID == 37 || keyID == 65) {
        if (x - 10 >= 0) {
            x -= 10;
        }
        images = leftImages;
    }
    /* 向上方向走 */
    if (keyID == 38 || keyID == 87) {
        if (y - 10 >= 10) {
            y -= 10;
        }
        images = upImages;
    }
    /* 向下方向走 */
    if (keyID == 40 || keyID == 83) {
        if (y + imgHeight < window.innerHeight) {
            y += 10;
        }
        images = downImages;
    }
    working(x, y);
}

function working(x, y) {
    if (n >= rightImages.length) {
        n = 0;
    }
    walkGirl.src = 'img/walker/' + images[n];
    headerDiv.style.left = x + 'px';
    headerDiv.style.top = y + 'px';
    n++;
}

function dealPx(pixeStr) {
    var pixel = pixeStr.substring(0, pixeStr.indexOf('px'));
    if (pixel == "") {
        return 0;
    } else {
        return parseInt(pixel);
    }
}

window.onkeydown = doKeyDown;