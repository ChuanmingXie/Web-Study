var data = new Array(2);
onmessage = function (e) {
    console.log(e.data);
    if (e.data == 'get') {
        var message;
        if (data[0] == null) {
            message = '请先发送数据';
        } else if (data[1] == null) {
            message = '请等待对方发送数据';
        } else {
            message = data[1];
        }
        this.postMessage('前' + data[0] + '项和为,' + message);
    } else {
        if (data[0] == null) {
            data[0] = e.data;
        } else {
            data[0] = e.data;
            var message = 0;
            for (let i = 0; i < e.data; i++) {
                message += parseInt(i);
            }
            data[1] = message;
        }
        this.postMessage(data);
    }
};