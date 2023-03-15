"use strict";

onload = function onload() {
  shopcartInit();
  createCricle();
  bannerSilder();
  bannerControl();
  looksearchAgain();
  adviseNotice();
  zoomPicture();
};
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
/* 
<li><a href="#"><img src="../Chapter09/img/goodadvise/s1.jpg" alt=""></a><p class="price2">￥56.38元</p></li>
 */


function adviseNotice() {
  var arrayimgs = ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg", "s6.jpg", "s7.jpg", "s8.jpg", "s9.jpg"];
  var arrayprice = ['56.00', '97.00', '89.00', '69.00', '89.00', '93.00', '58.00', '69.00', '78.00'];
  var element = '';

  for (var i = 0; i < arrayimgs.length; i++) {
    element += '<li><a href="#"><img src="' + "../" + 'Chapter09/img/goodadvise/' + arrayimgs[i] + '" alt=""></a><p class="price2">￥' + arrayprice[i] + '元</p></li>';
  }

  document.querySelector(".advise_pic_list").innerHTML = element;
}