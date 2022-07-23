/* local Storage Web存储 数据 */
var shopCartRecord = document.getElementById('shopCartRecord');
var shopCartShow = document.getElementById('shopCartShow');
var shopCartClear = document.getElementById('shopCartClear');
/* 使用localStorage实现购物车的添加 */
shopCartRecord.onclick = function () {
    var goodName = document.getElementById('goodName');
    var goodPrice = document.getElementById('goodPrice');
    var goodAmount = document.getElementById('goodAmount');
    var msg = {
        name: goodName.value,
        price: goodPrice.value,
        amount: goodAmount.value,
    };
    var time = new Date().getTime();
    localStorage.setItem(time, JSON.stringify(msg));
    goodName.value = "";
    goodPrice.value = "";
    goodAmount.value = "";
    loadCart();
}
/* 将localStorage的数据显示在表格中 */
shopCartShow.onclick = loadCart();
function loadCart() {
    var showBody = document.getElementById("showbody");
    showBody.innerHTML = "";
    if (localStorage.length != 0) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var jsonStr = localStorage.getItem(key);
            var json = JSON.parse(jsonStr);
            var row = showBody.insertRow(i);
            row.insertCell(0).innerHTML = json.name;
            row.insertCell(1).innerHTML = " ￥ " + parseFloat(json.price);
            row.insertCell(2).innerHTML = json.amount;
        }
    }
}
/* 清空购物车 */
shopCartClear.onclick = function () {
    localStorage.clear();
    loadCart();
}