(function(){
    setInterval("showCurrentTime()",1000);
})()

var timeworker=new Worker('js/8-02windowMethod-worker.js');
function showCurrentTime() {
    var myDate=new Date();
    timeworker.postMessage(myDate);
}
timeworker.onmessage=function(e){
    document.getElementById('timeDiv').innerHTML=e.data;
}