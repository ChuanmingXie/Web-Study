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