function changeImg(params) {
    document.querySelector("#showPicture").src = params.src;
    document.querySelectorAll(".small_piclist li").forEach(function (current, index) {
        current.querySelector('img').style.borderColor = "";
    });
    params.style.borderColor = "red";
}

function changeTabInfo(params) {
    let currentSelect = 0;
    document.querySelectorAll("#goodTabs li").forEach(function (current, index) {
        current.className = "";
        if (current == params) {
            currentSelect = index;
        }
    });
    params.className = "tab_active";
    document.querySelectorAll("#goodTabs~article").forEach(function (current, index) {
        if (currentSelect == index) {
            current.className = "tab_content" + (index + 1);
        } else {
            current.className = "none tab_content" + (index + 1);
        }
        console.log(current.className);
    })
}

/* 获取元素纵坐标 */
function getTop(e) {
    let event = e || window.e;
    let offset = event.offsetTop;
    if (event.offsetParent != null) {
        offset += getTop(event.offsetParent);
    }
    return offset;
}


/* 获取元素横坐标 */
function getLeft(e) {
    let event = e || window.e;
    let offset = event.offsetLeft;
    if (event.offsetParent != null) {
        offset += getLeft(event.offsetParent);
    }
    return offset;
}

function zoomPicture() {
    let content = document.querySelector("#box");
    let showpic = document.querySelector("#showPicture");
    let shade = document.querySelector("#shade");
    let canvas = document.querySelector("#canvas");
    if (showpic == null) {
        return false;
    }
    content.onmouseout = function () {
        shade.style.display = "none";
        canvas.style.display = "none";
        document.body.style.cursor = "default";
    }
    content.onmouseover = function () {
        shade.style.display = "block";
    }
    content.onmousemove = function (e) {
        document.body.cursor = "move";
        let box = document.querySelector("#box");
        let boxX = getTop(box);
        let boxY = getLeft(box);
        let shadeX = e.pageX - boxX - 100;
        let shadeY = e.pageY - boxY - 100;
        if (shadeX < 0) {
            shadeX = 0;
        } else if (shadeX > 200) {
            shadeX = 200;
        }
        if (shadeY < 0) {
            shadeY = 0;
        } else if (shadeY > 200) {
            shadeY = 200;
        }
        var context = canvas.getContext("2d");
        shade.style.left = shadeX + "px";
        shade.style.top = shadeY + "px";
        canvas.style.display = "inline";
        context.clearRect(0, 0, 400, 400);
        let img = new Image();
        img.src = showpic.src;
        context.drawImage(img, (shade.offsetLeft) * 2, (shade.offsetTop) * 2, 400, 400, 0, 0, 400, 400);
    }
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

addEventListener("load",looksearchAgain,false);
addEventListener("load",zoomPicture,false);