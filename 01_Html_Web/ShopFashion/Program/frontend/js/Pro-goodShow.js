
window.addEventListener("load",goodListInit1,false);//对于FireFox
window.addEventListener("load",goodListInit2,false);//对于FireFox
/* 
<dl>
    <div>
        <a href="Pro-goodDetail.html" target="_blank"><img src="img/goodshow/yifu1.jpg"></a>
    </div>
    <dt>
        <span class="price">$2395.4</span><span class="font12">234购物</span>
    </dt>
    <dd>2022夏季新款韩版 修身上上羽绒服</dd>
</dl>
*/
function goodListInit1(){
    var arrayimgs=["yifu1.jpg","yifu2.jpg","yifu3.jpg","yifu4.jpg","yifu5.jpg","yifu6.jpg","yifu7.jpg","yifu8.jpg"];
    var arrayprice = [827.40, 27.40, 227.40, 876.4, 317.45, 327.45, 1327.23, 827.40];
    var arrayamount = [244, 35, 5645, 3453, 1232, 345, 356, 34];
    var arraydescibe = [
        '2022夏季新款韩版 修身上上羽绒服',
        '2022夏季古风踏青 飘逸秦汉尚武风',
        '2022球衣运动先锋 球场洒脱有灵动',
        '2022夏季新款韩版 修身上上羽绒服',
        '2022夏季新款韩版 修身上上羽绒服',
        '2022夏季古风踏青 飘逸秦汉尚武风',
        '2022球衣运动先锋 球场洒脱有灵动',
        '2022夏季新款韩版 修身上上羽绒服',
    ];
    var imgpre = '<dl><div><a href="goodDetail.html" target="_blank"><img src="img/goodshow/';
    var pricepre = '"></a></div><dt><span class="price">$';
    var amountpre = '</span><span class="font12">';
    var describepre = '购物</span></dt><dd>';
    var element="";
    for (let i = 0; i < arrayimgs.length; i++) {
        element += imgpre + arrayimgs[i] +
            pricepre + arrayprice[i] +
            amountpre + arrayamount[i] +
            describepre + arraydescibe[i] + "</dd></dl>";
    }
    document.querySelector(".pic_list_good").innerHTML=element;
}

/* 
<li>
    <div><a href="#"><img src="img/goodshow/dress1.jpg"></a></div>
    <p>欧美潮牌顶级时装设计师 时装定制 针织衫衬衫大牌</p>
</li>
*/
function goodListInit2(){
    var arrayimgs = ['dress1.jpg', 'dress2.jpg', 'dress3.jpg', 'dress4.jpg']
    var arraydescibe = [
        '欧美潮牌顶级时装设计 时装定制 针织衫polo衫',
        '古风设计复古时装设计 潮流定制 复古风秦汉服',
        '民族特色中西合璧设计 相得益彰 名族传统世界',
        '夏季短裤中的清凉一夏 如沐春风 吸汗透气清凉'
    ];
    var imgpre = ' <li><div><a href="#"><img src="img/goodshow/';
    var describepre = '"></a></div><p>';
    var element="";
    for (let i = 0; i < arrayimgs.length; i++) {
        element += imgpre + arrayimgs[i] +
            describepre + arraydescibe[i] + '</p></li>';
    }
    document.querySelector(".pic_list_good2").innerHTML=element;
}

//window.attachEvent("onload",goodListInit1)//对于IE 
//window.attachEvent("onload",goodListInit2)//对于IE 