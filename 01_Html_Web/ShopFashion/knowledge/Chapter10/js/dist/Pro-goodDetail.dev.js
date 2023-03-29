"use strict";

function changeImg(params) {
  document.querySelector("#showPicture").src = params.src;
  document.querySelectorAll(".small_piclist li").forEach(function (current, index) {
    current.querySelector('img').style.borderColor = "";
  });
  params.style.borderColor = "red";
}

function changeTabInfo(params) {
  var currentSelect = 0;
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
  });
}
/* 获取元素纵坐标 */


function getTop(e) {
  var event = e || window.e;
  var offset = event.offsetTop;

  if (event.offsetParent != null) {
    offset += getTop(event.offsetParent);
  }

  return offset;
}
/* 获取元素横坐标 */


function getLeft(e) {
  var event = e || window.e;
  var offset = event.offsetLeft;

  if (event.offsetParent != null) {
    offset += getLeft(event.offsetParent);
  }

  return offset;
}

function zoomPicture() {
  var content = document.querySelector("#box");
  var showpic = document.querySelector("#showPicture");
  var shade = document.querySelector("#shade");
  var canvas = document.querySelector("#canvas");

  if (showpic == null) {
    return false;
  }

  content.onmouseout = function () {
    shade.style.display = "none";
    canvas.style.display = "none";
    document.body.style.cursor = "default";
  };

  content.onmouseover = function () {
    shade.style.display = "block";
  };

  content.onmousemove = function (e) {
    document.body.cursor = "move";
    var box = document.querySelector("#box");
    var boxX = getTop(box);
    var boxY = getLeft(box);
    var shadeX = e.pageX - boxX - 100;
    var shadeY = e.pageY - boxY - 100;

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
    var img = new Image();
    img.src = showpic.src;
    context.drawImage(img, shade.offsetLeft * 2, shade.offsetTop * 2, 400, 400, 0, 0, 400, 400);
  };
}
/* 看了又看列表栏 */

/* 
<li><img src="../Chapter09/img/gooddetail/ss1.jpg" title="2022新款条纹显瘦V领短袖毛衣宽松 oversize">
    <p>2022年新款条纹显瘦V领短袖毛衣宽松</p></li>
*/


function looksearchAgain() {
  var arrayimgs = ["ss1.jpg", "ss2.jpg", "ss3.jpg", "ss4.jpg", "ss5.jpg"];
  var introduce = ["2015新款条纹显瘦V领短袖露背宽松连身裤", "2015女士新款百搭休闲阔腿裤高腰红色短裤", "女版街头个性休闲口袋纯色卫衣吊带哈伦裤", "韩版简约百搭五分袖喇叭袖圆领打底短袖", "卡玛娅秋装新款女装圆领纯棉上衣棉T恤"];
  var element = "";

  for (var i = 0; i < arrayimgs.length; i++) {
    element += '<li><img src="' + "../" + 'Chapter09/img/gooddetail/' + arrayimgs[i] + '"title="' + introduce[i] + '"><p>' + introduce[i] + '</p></li>';
  }

  document.querySelector(".detail_pic_list").innerHTML = element;
}