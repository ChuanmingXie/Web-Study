var cookieSplit = "@";

/* 记录cookie */
function saveCookie(cookieName) {
    var userName = document.forms[0].userName.value;
    var userPwd = document.forms[0].userPwd.value;
    var saveTime = document.forms[0].saveTime.value;
    var expireDate = new Date();
    if (saveTime != "-1") {
        expireDate.setDate(expireDate.getDate() + saveTime);
    }
    document.cookie = cookieSplit +
        cookieName + '=' + escape(userName) + ',' + escape(userPwd) + 
        ";expires=" + expireDate.toGMTString();
    loadCookie(cookieName);
}

/* 读取cookie */
function loadCookie(cookieName){
    var currentCookie=document.cookie;
    var beginPart=cookieSplit+cookieName+'=';
    var startPosition=currentCookie.indexOf(beginPart);
    var cookieData='';
    if(startPosition==-1){
        document.forms[0].userName.value="";
        document.forms[0].userPwd.value="";
    }else{
        var endposition=currentCookie.indexOf(';',startPosition);
        if(endposition==-1){
            endposition=currentCookie.length;
        }
        cookieData=currentCookie.substring(startPosition+(beginPart).length,endposition);
        var datas=cookieData.split(',');
        document.forms[0].userName.value=unescape(datas[0]);
        document.forms[0].userPwd.value=unescape(datas[1]);
    }
    document.getElementsByTagName('p')[0].innerHTML=document.cookie==""?"<font color='red'>暂无cookie信息</font>":document.cookie();
}