onload = function () {
    shopcartInit();
    createCircle();
    bannerSilder();
    bannerControl();
    looksearchAgain();
    showAdviseGood();
    zoomPicture();
}

let bannerIndex = 0;
let bannerImgs = ["banner1.jpg", "banner2.png", "banner3.png"];
function createCircle() {
    let cricleSpan = "";
    for (let i = 0; i < bannerImgs.length; i++) {
        cricleSpan += "<span></span>";
    }
    document.querySelector("#circle").innerHTML = cricleSpan;
}
function bannerSilder() {
    let banner = document.querySelector("#imgBox img");
    let spans = document.querySelectorAll('#circle>span');
    if (++bannerIndex == bannerImgs.length) {
        bannerIndex = 0;
    }
    banner.src = "./img/icon/" + bannerImgs[bannerIndex];
    for (let i = 0; i < spans.length; i++) {
        spans[i].className = "";
    }
    spans[bannerIndex].className = "select";
}

function bannerControl() {
    let box = document.querySelector("#imgBox");
    let index = setInterval(bannerSilder, 1500);
    box.onmouseover = function () {
        clearInterval(index);
    }
    box.onmouseleave = function () {
        index = setInterval(bannerSilder, 1500);
    }
}


/* 
<li>
    <a href="#"><img src="./img/goodadvise/s1.jpg" alt=""></a>
    <p>1件<a href="#"><span class="orange floatright">删除</span></a></p>
</li>
*/
function shopcartInit() {
    var arrayimgs = ['s1.jpg', 's2.jpg', 's3.jpg', 's4.jpg', 's5.jpg', 's6.jpg', 's7.jpg', 's8.jpg', 's9.jpg'];
    var arrayamount = [5, 9, 10, 24, 8, 19, 80, 9, 10];
    var elememt = '';
    for (let i = 0; i < arrayimgs.length; i++) {
        elememt += '<li><a href="#"> <img src="' + "./" + 'img/goodadvise/' + arrayimgs[i] + '" alt=""/></a>'
            + '<p>' + arrayamount[i] + '件<a href="#"><span class="orange floatright">删除</span></a></p>'
            + '</li>';
    }
    document.querySelector(".shop_pic").innerHTML = elememt;
}

function looksearchAgain() {
    var arrayimgs = ["ss1.jpg", "ss2.jpg", "ss3.jpg", "ss4.jpg", "ss5.jpg"];
    var introduce = ["2015新款条纹显瘦V领短袖露背宽松连身裤"
        , "2015女士新款百搭休闲阔腿裤高腰红色短裤"
        , "女版街头个性休闲口袋纯色卫衣吊带哈伦裤"
        , "韩版简约百搭五分袖喇叭袖圆领打底短袖"
        , "卡玛娅秋装新款女装圆领纯棉上衣棉T恤"
    ];
    let element = "";
    for (let i = 0; i < arrayimgs.length; i++) {
        element += '<li><img src="' + "./" + 'img/gooddetail/' + arrayimgs[i]
            + '"title="' + introduce[i]
            + '"><p>' + introduce[i] + '</p></li>';
    }
    document.querySelector(".detail_pic_list").innerHTML = element;
}
function adviseNotice() {
    let arrayimgs = ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg", "s6.jpg", "s7.jpg", "s8.jpg", "s9.jpg", "yifu1.jpg", "yifu2.jpg", "yifu3.jpg", "yifu4.jpg", "yifu5.jpg"];
    let arrayprice = ['56.00', '97.00', '89.00', '93.00', '58.00', '69.00', '78.00', '89.00', '69.00', '89.00', '93.00', '58.00', '69.00', '78.00'];
    let element = '';
    let randomArray = getRandomNum(9, 0, 14);
    console.log(randomArray);
    for (let i = 0; i < randomArray.length; i++) {
        let index = randomArray[i];
        element += '<li><a href="#"><img src="' + "./" + 'img/goodadvise/' + arrayimgs[index]
            + '" alt=""></a><p class="price2">￥' + arrayprice[index] + '元</p></li>';
    }
    document.querySelector(".advise_pic_list").innerHTML = element;
}

function getRandomNum(num, minNum, maxNum) {
    var array = new Array();
    for (let i = 0; i < num; i++) {
        do {
            let random = Math.floor(Math.random() * maxNum + minNum);
            if (!checkNum(array, random)) {
                array.push(random);
                break;
            }
        } while (true);
    }
    return array;
}

function checkNum(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            return true;
        }
    }
    return false;
}

function showAdviseGood() {
    let advise = document.querySelector(".advise_pic_list");
    let index = setInterval(adviseNotice, 2000);
    advise.onmouseover = function () {
        clearInterval(index);
    }
    advise.onmouseleave = function () {
        index = setInterval(adviseNotice, 2000);
    }
}