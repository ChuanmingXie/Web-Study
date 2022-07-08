function checkuserName() {
    var userName = document.getElementById('userName');
    if (userName.value.length == 0) {
        alert('用户名不可以为空');
        userName.focus();
        return false;
    }
    if (userName.value.length < 3 || userName.value.length > 20) {
        alert('用户名长度应介于3-16位,请重新输入');
        userName.focus();
        return false;
    }
    return true;
}

function checkUserPwd() {
    var userPwd = document.myform.userPwd;
    if (userPwd.value.length < 6) {
        alert('密码长度不低于6位');
        userPwd.focus();
        return false;
    }
    for (let i = 0; i < userPwd.value.length; i++) {
        var tmp = userPwd.value[i];
        if (isNaN(tmp)) {
            alert('密码必须使用数字');
            userPwd.focus();
            return false;
        }
    }
    return true;
}

function checkPhone() {
    var mobilePhone = document.forms[0].elements[2];
    var mobilePhoneReg = /^[+]{0,1}\d{1,3}[-| ]?(1[3|4|5|7|8][0-9]{9})$/;

    if (!mobilePhoneReg.test(mobilePhone.value)) {
        alert('手机号码不正确');
        mobilePhone.focus();
        return false;
    }
    return true;
}

function checkEmail() {
    var email = document.forms[0].userMail;
    var emailReg = /^([a-zA-Z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!emailReg.test(email.value)) {
        alert('邮箱格式不正确,请重新输入！');
        email.focus();
        return false;
    }
    return true;
}

function checkForm() {
    return checkuserName() && checkUserPwd() && checkPhone() && checkEmail();
}

function chcekForm1() {
    if (checkuserName() && checkUserPwd() && checkPhone() && checkEmail()) {
        document.myform.action = "http://101.132.152.252";
        document.myform.target = '_blank';
        document.myform.submit();
    }
}