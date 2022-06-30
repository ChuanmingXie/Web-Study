
/* 验证座机号码： */
function telephoneValidate(telephone) {
    /* d{3} 表示匹配3个数字。 座机是 区号-号码 包含3位-8位和4位-7位两种形式*/
    var telephoneReg = /^((\d{3}-\d{8})|(\d{4}-\d{7}))$/;
    return telephoneReg.test(telephone);
}

/* 验证手机号码 */
function mobileValidate(mobile) {
    /* 电话号码是11位，第二位包括3、4、5、6、7、8，第三位取0-9,最后补全9位 */
    var mobileReg = new RegExp("1[3|4|5|7|8][0-9]{9}");
    return mobileReg.test(mobile);
}

/* 判断是否为纯数字串 */
function isDigit(str) {
    var digitReg = new RegExp("^\\d*$");
    var digitReg2 = /^\d* $/;
    return digitReg2.test(str);
}

function contentValidate(content) {
    document.write(content + "<br/>");
    var contentReg = new RegExp('Ea', "gi");
    var i = 1;
    while ((result = contentReg.exec(content)) != null) {
        document.write("第"+i+"次匹配" + result + ",位置在"
            + result.index + "~" + contentReg.lastIndex + "<br />");
    }
}

(function(){
    var telephone="0532-1234-5671234";
    if(telephoneValidate(telephone)){
        document.write(telephone+"座机号码无效<br />");
    }else{
        document.write(telephone+"座机号码无效<br />");
    }
    var mobile="17348594235";
    if(mobileValidate(mobile)){
        document.write(mobile+"手机号码有效<br />");
    }else{
        document.write(mobile+"手机号码无效<br />");
    }

    var num="123a";
    document.write(num+":"+(isDigit(num)?"使出数字":"非出数字")+"<hr />");

    var content="Qingdao,located in the southEast part of Shandong Province,is a beautiful  SEASIDE city with clear air and enchanting SEA view";
    contentValidate(clearInterval);
    document.write("<br />");
})