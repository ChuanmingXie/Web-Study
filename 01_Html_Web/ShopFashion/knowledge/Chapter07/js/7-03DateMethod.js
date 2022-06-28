(function () {
    showTime(new Date());
    showTime(new Date(121825316795));
    showTime(new Date(2012, 05, 12));
    showTime(new Date(2021, 10, 2, 12, 08, 12));
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

    var pcontrol = document.getElementsByTagName('p')[2];
    pcontrol.innerHTML +=
        getImg(year) + "年" +
        getImg(month) + "月" +
        getImg(day) + "日 " +
        getImg(hour) + ":" +
        getImg(minute) + ":" +
        getImg(second) + "<br>";
}

function getImg(params) {
    if (params < 10) {
        params = '0' + params;
    }
    params=params.toString(); //必须toString() 否则length 无效

    var picpre = "<img src='img/num_";
    var pixrear = ".png' />";

    var result = '';
    for (let i = 0; i < params.length; i++) {
        result += picpre + params[i] + pixrear;
    }
    return result;
}