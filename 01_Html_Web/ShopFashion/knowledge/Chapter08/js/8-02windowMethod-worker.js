onmessage = function (e) {
    var myDate = e.data;
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    var dateString = getImg(year) + '年' +
        getImg(month) + '月' +
        getImg(day) + '日 ' +
        getImg(hour) + ':' +
        getImg(minute) + ":" +
        getImg(second);
    postMessage(dateString);
}

function getImg(params) {
    if (params < 10) {
        params = "0" + params;
    }
    params = params.toString();
    var picpre = '<img src="img/time/num_';
    var picrear = '.png"/>';
    var result = '';
    for (let i = 0; i < params.length; i++) {
        result += picpre + params[i] + picrear;
    }
    return result;
}