"use strict";

/* 位广告牌添加动态效果 */
var bannerIndex = 0;
var bannerImgs = ["banner1.jpg", "banner2.png", 'banner3.png'];

function createCricle() {
  var cricleSpan = "";

  for (var i = 0; i < bannerImgs.length; i++) {
    cricleSpan += "<span></span>";
  }

  document.querySelector('#circle').innerHTML = cricleSpan;
}

function bannerSilder() {
  var banner = document.querySelector("#imgBox img");
  var bannberherf = document.querySelector("#imgBox a");
  var spans = document.querySelectorAll("#circle>span"); // console.log(banner.src);

  if (++bannerIndex == bannerImgs.length) {
    bannerIndex = 0;
  }

  banner.src = "../Chapter09/img/icon/" + bannerImgs[bannerIndex];

  for (var i = 0; i < spans.length; i++) {
    spans[i].className = "";
  } // console.log(bannerIndex);


  spans[bannerIndex].className = "select";
}

function bannerControl() {
  var box = document.querySelector("#imgBox");
  var index = setInterval(bannerSilder, 1500);

  box.onmouseover = function () {
    clearInterval(index);
  };

  box.onmouseleave = function () {
    index = setInterval(bannerSilder, 1500);
  };
}
/* 位购物车动态添加内容 方式1 */

/*
<ul class="shop_pic">
    <li><a href="#"><img src="../Chapter09/img/goodadvise/s1.jpg" alt=""></a>
    <p>1件<a href="#"><span class="orange floatright">删除</span></a></p></li>
</ul> 
 */


function shopcartInit() {
  var arrayimgs = ['s1.jpg', 's2.jpg', 's3.jpg', 's4.jpg', 's5.jpg', 's6.jpg', 's7.jpg', 's8.jpg', 's9.jpg'];
  var arrayamount = [5, 9, 10, 24, 8, 19, 80, 9, 10];
  var elememt = '';

  for (var i = 0; i < arrayimgs.length; i++) {
    elememt += '<li><a href="#"> <img src="' + "../" + 'Chapter09/img/goodadvise/' + arrayimgs[i] + '" alt=""/></a>' + '<p>' + arrayamount[i] + '件<a href="#"><span class="orange floatright">删除</span></a></p>' + '</li>';
  }

  document.querySelector(".shop_pic").innerHTML = elememt;
}
/* 
<li><a href="#"><img src="../Chapter09/img/goodadvise/s1.jpg" alt=""></a><p class="price2">￥56.38元</p></li>
 */


function adviseNotice() {
  var arrayimgs = ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg", "s6.jpg", "s7.jpg", "s8.jpg", "s9.jpg", "yifu1.jpg", "yifu2.jpg", "yifu3.jpg", "yifu4.jpg", "yifu5.jpg"];
  var arrayprice = ['56.00', '97.00', '89.00', '69.00', '89.00', '93.00', '97.00', '89.00', '69.00', '89.00', '93.00', '58.00', '69.00', '78.00'];
  var arrayrandom = getRandomNum(9, 0, 14);
  var element = '';

  for (var i = 0; i < arrayrandom.length; i++) {
    var index = arrayrandom[i];
    element += '<li><a href="#"><img src="' + "../" + 'Chapter09/img/goodadvise/' + arrayimgs[index] + '" alt=""></a><p class="price2">￥' + arrayprice[index] + '元</p></li>';
  }

  document.querySelector(".advise_pic_list").innerHTML = element;
}

function getRandomNum(num, minNum, maxNum) {
  var array = new Array();

  for (var i = 0; i < num; i++) {
    do {
      var random = Math.floor(Math.random() * maxNum + minNum);

      if (!checkNum(array, random)) {
        array.push(random);
        break;
      }
    } while (true);
  }

  return array;
}

function checkNum(array, num) {
  for (var i = 0; i < array.length; i++) {
    if (num == array[i]) {
      return true;
    }
  }

  return false;
}

function showgoodAdvise() {
  var advise = document.querySelector(".advise_pic_list");
  var index = setInterval(adviseNotice, 2000);

  advise.onmouseover = function () {
    clearInterval(index);
  };

  advise.onmouseleave = function () {
    index = setInterval(adviseNotice, 2000);
  };
}