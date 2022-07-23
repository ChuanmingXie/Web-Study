
/* 创建IndexDB数据访问对象 */
var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
var dbName = 'goodCommentDB';
var dbVersion = 1;
var storeName = 'commentStore';
var idb = null;
/* 代码初始化 */
init();
function init() {
    var dbRequest = indexedDB.open(dbName, dbVersion);
    dbRequest.onsuccess = function (e) {
        idb = e.target.result;
        alert('数据库连接成功');
    }
    dbRequest.onerror = function (e) {
        alert('数据库连接失败');
    }
    dbRequest.onupgradeneeded = function (e) {
        idb = e.target.result;
        if (!idb.objectStoreNames.contains(storeName)) {
            var optionalParameters = {
                keyPath: "id",
                autoIncrement: true
            };
            var objectStore = idb.createObjectStore(storeName, optionalParameters);
            alert('对象仓库创建成功');
        }
        var tx = e.target.transaction;
        alert('数据库版本更新成功！版本' + e.oldVersion + "=>版本" + e.newVersion);
    }
}

function commentDataRecord() {
    var goodNameDB = document.getElementById('goodNameDB');
    var goodContent = document.getElementById('goodContent');
    var goodGrade = document.getElementById('goodGrade');
    var commenttime = new Date().getTime();
    var comment = {
        goodNameDB: goodNameDB.value,
        goodContent: goodContent.value,
        goodGrade: goodGrade.value,
        commentTime: commenttime
    };
    var tx = idb.transaction(storeName, 'readwrite');
    tx.oncomplete = function () {
        alert('数据保存成功');
    }
    tx.onabort = function () {
        alert('数据保存失败');
    };
    var objectStore = tx.objectStore(storeName);
    objectStore.add(comment);
}
function commentDataShow() {
    var resultdiv = document.getElementById('resultindexDB');
    resultdiv.innerHTML = "";
    var result = '<table rules="all">';
    var caption = '<caption>商品评价表</caption>';
    var title = '<thead><tr><th>商品名称</th><th>商品评价</th><th>评价星级</th><th>销售时间</th></tr></thead>'
    result += caption + title;
    result += '<tbody>';
    var tx = idb.transaction(storeName, 'readonly');
    var objectStore = tx.objectStore(storeName);
    var dbRequest = objectStore.openCursor();
    dbRequest.onsuccess = function (e) {
        var cursor = e.target.result;
        if (cursor) {
            result += '<tr><td>' + cursor.value.goodNameDB +
                '</td><td>' + cursor.value.goodContent +
                '</td><td>' + cursor.value.goodGrade +
                '</td><td>' + getFormatTime(cursor.value.commentTime) +
                '</td></tr>';
            cursor.continue();
        } else {
            console.log("检索结束！");
        }
        result += '</tbody></table>';
        resultdiv.innerHTML = result;
    };
    dbRequest.onerror = function (e) {
        console.log('检索失败！');
    }
}
function commentDataClear(databaseName) {
    var dbRequest = indexedDB.deleteDatabase(databaseName);
    var result = document.getElementById('resultindexDB');
    result.innerHTML = "";
}
function createStar(goodGrade) {
    var stars = '';
    for (let i = 0; i < goodGrade; i++) {
        stars += "⭐";
    }
    return stars;
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