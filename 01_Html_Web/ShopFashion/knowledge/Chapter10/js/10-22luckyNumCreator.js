onmessage=function(e){
    var intArray=new Array(100);
    for (let i = 0; i < intArray.length; i++) {
         intArray[i]=parseInt(Math.random()*100);
    }
    console.log(JSON.stringify(intArray));
    var worker=new Worker('10-22luckyNumLucky.js');
    worker.postMessage(JSON.stringify(intArray));
    worker.onmessage=function(e){
        this.postMessage("");
    }
}