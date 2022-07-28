onmessage = function (e) {
    var intArray = JSON.parse(e.data);
    console.log(e.data);
    var luckyType = ['一等奖', '二等奖', '三等奖', '四等奖'];
    var luckyNum = new Array();
    var luckyNums = '';
    var k = 0;
    for (let i = 0; i < intArray.length; i++) {
        if (intArray[i] % 2 == 0 && intArray[i] % 3 == 0 && intArray[i] != 0) {
            luckyNum[k++] = intArray[i];
        }
    }
    k = 0;
    for (let i = 0; i < luckyNum.length; i++) {
        if (i % 6 == 0 && k <= 4) {
            luckyNums += luckyType[k++] + ',';
        }
        luckyNums += luckyNum[i] + ',';
    }
    this.postMessage(luckyNums);
}