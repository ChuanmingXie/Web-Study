/* Docuemnt对象属性 使用 Cookie */
var cookieSplit = "@";

function saveCookie(cookieName) {
    var userName = document.forms[0].userName.value;
    var userPwd = document.forms[0].userPwd.value;
    var saveTime = document.forms[0].saveTime.value;
    var expireDate = new Date();
    if (saveTime != "-1") {
        var day = expireDate.getDate() - 0;
        expireDate.setDate(saveTime + day);
        // 此处获取Day会返回星期数、需要使用getDate()读取当前为第几天
    }
    document.cookie = cookieSplit + cookieName + '='
        + escape(userName) + ',' + escape(userPwd)
        + ",expires=" + expireDate.toDateString() + " "
        + expireDate.toLocaleTimeString() + ";\r\n";
    loadCookie(cookieName);
}

function loadCookie(cookieName) {
    var currentCookie = document.cookie;
    var beginPart = cookieSplit + cookieName + "=";
    var startPosition = currentCookie.indexOf(beginPart);
    var cookieData = '';
    if (startPosition == -1) {
        document.forms[0].userName.value = "";
        document.forms[0].userPwd.value = "";
    } else {
        var endposition = currentCookie.indexOf(';', startPosition);
        if (endposition == -1)
            endposition = currentCookie.length;
        cookieData = currentCookie.substring(startPosition + (beginPart).length, endposition);
        datas = cookieData.split(',');
        document.forms[0].userName.value = unescape(datas[0]);
        document.forms[0].userPwd.value = unescape(datas[1]);
    }
    document.getElementsByClassName('resultDiv')[0].innerHTML =
        document.cookie == "" ? "<font color='red'>暂无cookie信息</font>" : document.cookie;
}


/* ********************************************************* */

/*
 Document对象的 Table 对象的操作 
 */
function insertFirstRow() {
    appendRow(1);
}
function insertRearRow() {
    var index = document.getElementsByTagName('table')[0].rows.length;
    appendRow(index);
}

function appendRow(index) {
    var tabledoc = document.getElementsByTagName('table')[0];
    var row = tabledoc.insertRow(index);
    row.insertCell(0).innerHTML = userID.value;
    row.insertCell(1).innerHTML = userName.value;
    row.insertCell(2).innerHTML = '<input type="image" src="./img/filetool/delete.png" alt="" onclick="deleteRow(event);">' +
        ' <input type = "image" src = "./img/filetool/create.png" alt = "">' +
        ' <input type = "image" src = "./img/filetool/detail.png" alt = "">'
}

function deleteRow(event) {
    var currentIndex = event.srcElement.parentNode.parentNode.rowIndex;
    var tabeldoc = document.getElementsByTagName('table')[0];
    tabeldoc.deleteRow(currentIndex);
}

function appendCaption() {
    var tabeldoc = document.getElementsByTagName('table')[0];
    var caption = tabeldoc.createCaption();
    caption.innerHTML = '注册会员信息表';
}
function removeCaption() {
    var tabeldoc = document.getElementsByTagName('table')[0];
    tabeldoc.deleteCaption();
}

/* document对象的 Form 对象操作 */

function CheckFormSubmit() {
    return checkUserName() && checkUserPwd() && checkPhone() && checkEmai();
}
function CheckFormbyBtn() {
    if (checkUserName() && checkUserPwd() && checkPhone() && checkEmai()) {
        document.myform.action = "http://www.baidu.com";
        document.myform.target = '_blank';
        document.myform.submit();
    }
}
function checkUserName() {
    if (userNameform.value.length == 0) {
        alert('用户名不可为空');
        userNameform.focus();
        return false;
    }
    if (userNameform.value.length < 3 || userNameform.value.length > 16) {
        alert('用户名的长度应介于3-16位,请重新输入');
        userNameform.focus();
        return false;
    }
    return true;
}

function checkUserPwd() {
    if (userPwdform.value.length < 6) {
        alert('密码长度不低于6位');
        userPwdform.focus();
        return false;
    }
    var regletterPwd = /^\w+$/;
    if (!regletterPwd.test(userPwdform.value)) {
        alert('密码的组成学包含数字字母下滑线');
        userPwdform.focus();
        return false;
    }
    // for (let i = 0; i < userPwdform.length; i++) {
    //     var temp = userPwdform.value[i];
    //     if (isNaN(temp)) {
    //         alert("密码必须为数字");
    //         userPwdform.focus();
    //         return false;
    //     }
    // }
    return true;
}

function checkPhone() {
    var regPhone = /^[+]{0,1}\d{1,3}[-| ]?(1[3|4|5|7|8][0-9]{9})$/;
    if (!regPhone.test(userPhone.value)) {
        alert('你输入的电话号码不正确请从新输入');
        userPhone.focus();
        return false;
    }
    return true;
}

function checkEmai() {
    var emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!emailReg.test(userEmail.value)) {
        alert('您输入的邮箱地址不正确,请重新输入');
        userEmail.focus();
        return false;
    }
    return true;
}
