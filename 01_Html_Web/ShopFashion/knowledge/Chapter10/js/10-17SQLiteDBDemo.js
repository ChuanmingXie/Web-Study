//创建SQLite数据库访问对象
var db = openDatabase("goodSQLiteDB", '1.0', 'walking Fashion E&S Database', 2 * 1024 * 1024);
/* 调用初始化函数,表saleDetail不存在时创建 */
initSQLite();
function initSQLite() {
    db.transaction(function (tx) {
        tx.executeSql("Create table if not exists saleDetail("
            + "goodName text not null,"
            + "goodPrice real,"
            + "goodSale int,"
            + "time integer)", []);
    });
}
/* 保存数据函数 */
function saleDataReord() {
    var goodName = document.getElementById('goodNameSQlite');
    var goodPrice = document.getElementById('goodpriceSQlite');
    var goodSale = document.getElementById('goodSaleSQlite');
    var time = new Date().getTime();
    //将数据保存到数据库中
    db.transaction(function (tx) {
        tx.executeSql('insert into saleDetail(goodName,goodPrice,goodSale,time) values(?,?,?,?)',
            [goodName.value, goodPrice.value, goodSale.value, time],
            function (tx, rs) {
                alert('数据保存成功');
                saleDataShow();
                goodName.value = "";
                goodPrice.value = "";
                goodSale.value = "";
            },
            function (tx, error) {
                alert('数据保存失败：' + error.message);
            });
    });
}
/* 显示数据函数 */
function saleDataShow() {
    // 先清空历史内容
    var resultdiv = document.getElementById('resutlSQlite');
    resultdiv.innerHTML = "";
    // 追加HTML内容
    var result = '<table rules="all">';
    var caption = '<caption>销售历史订单</caption>';
    var title = '<thead><tr><th>商品名称</th><th>商品价格</th><th>销售数量</th><th>销售时间</th></tr></thead>'
    result += caption + title;
    result += '<tbody>';
    // 从数据库中查询数据
    db.transaction(function (tx) {
        tx.executeSql("select goodName,goodPrice,goodSale,time as time from saleDetail", [],
            function (tx, rs) {
                for (let i = 0; i < rs.rows.length; i++) {
                    result += '<tr><td>' + rs.rows[i].goodName +
                        '</td><td>' + rs.rows[i].goodPrice +
                        '</td><td>' + rs.rows[i].goodSale +
                        '</td><td>' + getFormatTime(rs.rows[i].time) +
                        '</td></tr>'
                }
                result += '</tbody></table>';
                resultdiv.innerHTML = result;
            }, function (tx, error) {
                alert('数据读取失败：' + error.message);
            });
    });
}
/* 清空数据库中数据 */
function saleDataClear() {
    db.transaction(function (tx) {
        tx.executeSql('delete from saleDetail', [],
            function (tx, rs) {
                alert('销售订单数据清空完成');
                saleDataShow();
            }, function (tx, error) {
                alert('销售订单数据清空失败' + error.message);
            });
    });
}


//将长整形日期数据格式化显示
function getFormatTime(myDateTime) {
    var myDate = new Date(myDateTime);
    var dateStr = "";
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    dateStr = dateStr + year + "年" + month + "月" + date + "日 " + hour + ":" + minute + ":" + second + "<br/>";
    return dateStr;
}