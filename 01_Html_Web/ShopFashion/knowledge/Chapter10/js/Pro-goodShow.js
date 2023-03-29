/* 页面的一部分的商品列表 */
function showFirstList() {
    var arrayimgs = ['yifu1.jpg', 'yifu2.jpg', 'yifu3.jpg', 'yifu4.jpg', 'yifu5.jpg', 'yifu6.jpg', 'yifu7.jpg', 'yifu8.jpg'];
    var arrayprice = [827.40, 27.40, 227.40, 876.4, 317.45, 327.45, 1327.23, 827.40];
    var arrayamount = [244, 35, 5645, 3453, 1232, 345, 356, 34];
    var arraydescibe = [
        '2023夏季新款韩版 修身上上羽绒服',
        '2023夏季古风踏青 飘逸秦汉尚武风',
        '2023球衣运动先锋 球场洒脱有灵动',
        '2023夏季新款韩版 修身上上羽绒服',
        '2023夏季新款韩版 修身上上羽绒服',
        '2023夏季古风踏青 飘逸秦汉尚武风',
        '2023球衣运动先锋 球场洒脱有灵动',
        '2023夏季新款韩版 修身上上羽绒服',
    ];
    /* 
    <dl>
        <div>
            <a href="Pro-goodDetail.html" target="_blank"><img src="../Chapter09/img/goodshow/yifu1.jpg" alt=""></a>
        </div>
        <dt><span class="price">$2395.4</span><span class="font12">232 已购</span></dt>
        <dd>2023夏季新款韩版 修身上身羽绒服</dd>
    </dl>
    */
    var imgpre = '<dl><div><a href="Pro-goodDetail.html" target="_blank"><img src="' + '../' + 'Chapter09/img/goodshow/';
    var pricepre = '" alt=""></a></div><dt><span class="price">';
    var numberpre = '</span><span class="font12">'
    var desibepre = '已购</span></dt><dd>';
    var htmlInfo = "";
    arrayimgs.forEach(function (s, index, current) {
        htmlInfo += imgpre + current[index] +
            pricepre + arrayprice[index] +
            numberpre + arrayamount[index] +
            desibepre + arraydescibe[index] + "</dd></dl>";
    });
    document.querySelector(".pic_list_good").innerHTML = htmlInfo;
}

/* 页面第二部分的商品列表 */
function showSecondList() {
    var arrayimgs = ['dress1.jpg', 'dress2.jpg', 'dress3.jpg', 'dress4.jpg'];
    var arraydescibe = [
        '欧美潮牌顶级时装设计 时装定制 针织衫polo衫',
        '古风设计复古时装设计 潮流定制 复古风秦汉服',
        '民族特色中西合璧设计 相得益彰 名族传统世界',
        '夏季短裤中的清凉一夏 如沐春风 吸汗透气清凉'
    ];
    /* 
    <li>
        <div><a href="Pro-goodDetail.html"><img src="../Chapter09/img/goodshow/dress1.jpg" alt=""></a></div>
        <p>欧美潮牌顶级时装设计师 时装定制 针织衫衬衫大牌</p>
    </li>
    */
    let imgpre = '<li><div><a href="Pro-goodDetail.html"><img src="' + '../' + 'Chapter09/img/goodshow/';
    let desibepre = '" alt=""></a></div><p>';
    var htmlInfo = "";
    arrayimgs.forEach(function (s, i, element) {
        htmlInfo += imgpre + element[i] +
            desibepre + arraydescibe[i] + "</p></li>";
    });
    document.querySelector(".pic_list_good2").innerHTML = htmlInfo;
}