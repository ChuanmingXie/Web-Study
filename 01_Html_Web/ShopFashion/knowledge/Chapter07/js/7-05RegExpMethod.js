
/* 验证座机号码： */
function telephoneValidate(telephone) {
    /* d{3} 表示匹配3个数字。 座机是 区号-号码 包含3位-8位和4位-7位两种形式*/
    var telephoneReg=/^((\d{3}-\d{8})|(\d{4}-\d{7}))$/;
    return telephoneReg.test(telephone);
}

/* 验证手机号码 */
function mobileValidate(mobile){
    /* 电话号码是11位，第二位包括3、4、5、6、7、8，第三位取0-9,最后补全9位 */
    var mobileReg=new RegExp("1[3|4|5|7|8][0-9]{9}");
    return mobileReg.test(mobile);
}

/* 判断是否为纯数字串 */
function isDigit(str) {
    var digitReg=new RegExp("^\\d*$");
    var digitReg2=/^\d* $/;
    return digitReg2.test(str);
}