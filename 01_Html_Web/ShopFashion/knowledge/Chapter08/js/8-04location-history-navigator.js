/* location对象 */
var url = new URL("http://127.0.0.1:5501/01_Html_Web/ShopFashion/knowledge/Chapter08/8-02windowMethod.html?name=guoqy#myAnchor")
/* var location=Location;
location.href=url; */
document.write("URL:" + url + "对象属性为：<br/>");
document.write("url.protocol：" + url.protocol + "<br/>");
document.write("url.host：" + url.host + "<br/>");
document.write("url.hostname：" + url.hostname + "<br/>");
document.write("url.port：" + url.port + "<br/>");
document.write("url.hash：" + url.hash + "<br/>");
document.write("url.search：" + url.search + "<br/>");
document.write("url.pathname：" + url.pathname + "<br/>");
document.write('<hr />')

/* history对象 */
function goNext() {
    history.go(1);
}
function goPrevious() {
    history.go(-1);
}
function historyForward() {
    history.forward();
}
function historyBack() {
    history.back();
}

/* navigator */
document.write('浏览器：' + navigator.appName + "<br>");
document.write('浏览器版本：' + navigator.appVersion + "<br>");
document.write('浏览器代码：' + navigator.appCodeName + "<br>");
document.write('浏览器平台：' + navigator.platform + "<br>");
document.write('浏览器Cookies启用：' + navigator.cookieEnabled + "<br>");
document.write('浏览器的用户代理报头：' + navigator.userAgent + "<br>");

function browserType() {
    var isExists;
    var typeInfo = ['MSIE', 'Trident', 'Firefox', 'Chrome', 'safari', 'netscape'];
    var explorer = navigator.userAgent;
    for (let i = 0; i < typeInfo.length; i++) {
        if (explorer.indexOf(typeInfo[i]) >= 0) {
            isExists = typeInfo[i];
            break;
        }
    }
    alert('您的浏览器类型为：' + isExists);
}