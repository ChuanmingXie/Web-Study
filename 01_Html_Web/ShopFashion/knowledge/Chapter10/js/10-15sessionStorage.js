/* session Storage Web存储 数据 */
var i = 1;
var goodRecord = document.getElementById('goodRecord');
var goodShow = document.getElementById('goodShow');
goodRecord.onclick = function () {
    var goodName1 = document.getElementById('goodName1');
    if (goodName1.value == "") {
        alert('商品不能为空');
        return;
    }
    sessionStorage.setItem("goods" + i, goodName1.value);
    i++;
    goodName1.value = "";
}

goodShow.onclick = function () {
    var result = '<table rules="all">';
    var caption = '<caption>录入商品列表</caption>'
    var title = '<thead><tr><th>商品名称</th></tr></thead>'
    result += caption + title;
    result += "<tbody>"
    if (sessionStorage.length == 0) {
        result += "<tr><td>暂无商品</td></tr>";
    } else {
        for (let j = 0; j < sessionStorage.length; j++) {
            var key = sessionStorage.key(j);
            var currentName = sessionStorage.getItem(key);
            result += "<tr><td>" + currentName + "</tr></td>";
        }
    }
    result += '</tbody></table>';
    var resultdiv = document.getElementById('resultdiv');
    resultdiv.innerHTML = result;
}