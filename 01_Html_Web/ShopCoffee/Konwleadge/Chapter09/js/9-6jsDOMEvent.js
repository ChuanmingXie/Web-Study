/* DOM 鼠标事件示例 */
function changeImage(event) {
    var e = event || window.event;
    var imgList = document.getElementsByClassName('mouseimg');
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

/* ********************************************************* */

/* DOM 键盘事件示例： */
var rightImages = ["r0.png", "r1.png", "r2.png"];
var leftImages = ["l0.png", "l1.png", "l2.png"];
var downImages = ["d0.png", "d1.png", "d2.png"];
var upImages = ["u0.png", "u1.png", "u2.png"];

var images = rightImages;
var n = 0;

/* 根据键盘信息操作dom对象 */
function doKeyDown(e) {
    var walkDiv = document.getElementById('walkingDiv')
    var walkPerson = document.getElementById('walkPerson');
    var imgWidth = walkDiv.offsetWidth;
    var imgHeight = walkDiv.offsetWidth;

    var x = dealPx(walkDiv.style.left);
    var y = dealPx(walkDiv.style.top);
    var e = e || window.e;
    var keyID = e.keyCode ? e.keyCode : e.which;

    switch (keyID) {
        case 39:
        case 68:
            if (x + imgWidth < window.innerWidth) {
                x += 10;
            }
            images = rightImages;
            break;
        case 37:
        case 65:
            if (x - 10 >= 0) {
                x -= 10;
            }
            images = leftImages;
            break;
        case 38:
        case 87:
            if (y - 10 >= 0) {
                y -= 10;
            }
            images = upImages;
            break;
        case 40:
        case 83:
            if (y + imgHeight < window.innerHeight) {
                y += 10;
            }
            images = downImages;
            break;
        default: break;
    }

    if (n >= rightImages.length) {
        n = 0;
    }
    walkPerson.src = './img/walker/' + images[n];
    walkDiv.style.left = x + 'px';
    walkDiv.style.top = y + 'px';
    n++;
}
/* px单位设置 */
function dealPx(pixeStr) {
    var pixel = pixeStr.substring(0, pixeStr.indexOf('px'));
    if (pixel == "") {
        return 0;
    } else {
        return parseInt(pixel);
    }
}

/* ********************************************************* */

/* DOM 窗口事件示例 */
function initImage() {
    var array = [3, 6, 9];
    array.sort((a, b) => {
        return Math.random() > .5 ? -1 : 1;
    });
    var imgdocList = document.getElementsByClassName('imgdoc');
    for (let i = 0; i < array.length; i++) {
        imgdocList[i].src = "./img/time/num_" + array[i] + ".png";
    }
}

function resizeImage() {
    var scale = 0.2;
    var imgdocList = document.getElementsByClassName('imgdoc');
    var windoWidth = window.innerWidth;
    var resizeWidth = windoWidth * scale;
    if (resizeWidth < 100) {
        resizeWidth = 100;
    }
    for (let i = 0; i < imgdocList.length; i++) {
        imgdocList[i].style.width = resizeWidth + "px";
    }
}
window.onresize = resizeImage;

/* ********************************************************* */

/* DOM 表单事件示例 */
// 表单事件
function submitForm() {
    var userName = document.getElementById('userName').value;
    var userType = document.getElementById('userType').value;
    if (userName == "admin" && userType == "管理员") {
        alert('表单将进行提交');
        return true;
    }
    alert('用户信息有误,表单不进行提交');
    return false;
}
function resetForm() {
    alert('表单将进行重置');
    document.getElementById('userName').value = "";
    document.getElementById('userType').value = "0";
    return false;
}

// 表单元素input事件
function userNameFocus() {
    userName.style.background = "#EEEEEE";

}
function userNameOnBlur() {
    var userName = document.getElementById('userName');
    if (userName.value == "") {
        userName.value = "请输入用户姓名";
    }
    userName.style.border = "1px solid green"
}
function showKeyPress(event) {
    var e = event || window.event;
    var showDiv = document.getElementById('showDiv');
    var char = e.keyCode ? e.keyCode : e.which;
    console.log(String.fromCharCode(char));
    showDiv.innerHTML += String.fromCharCode(char);
}

// 表单元素select 事件
function selectUserType() {
    var userType = document.getElementById('userType');
    alert(userType.value);
}

// 保单元素按钮事件
function btnBoundClick() {
    var inputs = document.getElementsByTagName("input");
    // 此处使用forEach失败，因为它针对数组进行枚举并非对象
    // inputs.forEach(element => {        
    // });
    for (var i in inputs) {
        if (Object.hasOwnProperty.call(inputs, i)) {
            var element = inputs[i];
            if (element.type == "button") {
                element.onclick = function (e) {
                    alert(e.target.value);
                }
            }
        }
    }
}

function onloadAll(){
    btnBoundClick();
    initImage();
}
// 此处还使用了窗体事件
window.onload =onloadAll;
window.onkeydown = doKeyDown;