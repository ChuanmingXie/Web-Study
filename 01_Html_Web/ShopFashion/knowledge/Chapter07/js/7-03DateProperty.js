(function () {
    showTime(new Date());
    showTime(new Date(121825316795));
    showTime(new Date(2012,05,12));
    showTime(new Date(2021,10,2,12,08,12));
    showTime(new Date("10/12/2021 9:25:38"));
    showTime(new Date("April 25,2045"));
    showTime(new Date("April 25,2045 18:24:24"));
})();

function showTime(myDate) {
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();

    var pcontrol = document.getElementsByTagName('p')[1];
    pcontrol.innerHTML += year + "年" + month + "月" + day + "日 " + hour + ":" + minute + ":" + second + "<br>";
}