var sendBtn = document.getElementById('sendBtn');
var getBtn = document.getElementById('getBtn');
var worker = new Worker('./10-20withworkerExec.js');
var post = worker.port;
sendBtn.onclick = function () {
    var num = document.getElementById('num').value;
    alert('已发送：' + num);
    worker.postMessage(num);
};
getBtn.onclick = function () {
    worker.postMessage('get');
};
worker.onmessage = function (e) {
    var s = e.data;
    document.getElementById('resultspan').innerHTML = s;
}