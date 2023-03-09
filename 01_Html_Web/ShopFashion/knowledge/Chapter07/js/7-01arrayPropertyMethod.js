/* 数组属性演示方法 */
function arrayProperty() {
    var movies = new Array(
        '飓风营救', '复仇者联盟3:无限战争',
        '疯狂的麦克斯:狂暴之路', '分歧者:绝地反击'
    );
    switch (movies.constructor) {
        case String: confirm('movie是一个字符串'); break;
        case Array: confirm('movies是一个数组对象'); break;
        case Date: confirm('movies是一个时间对象'); break;
        default: confirm('movies不是内置对象'); break;
    }
}

function arrayConcat() {
    var movies = new Array(
        '飓风营救', '复仇者联盟3:无限战争',
        '疯狂的麦克斯:狂暴之路', '分歧者:绝地反击'
    );
    var newMovie = '长津湖:水门桥';
    var hotMovie = movies.concat(newMovie);
    var htmlstr = '<p>';
    (function (movieArray, description) {
        // document.write(description + ":");
        htmlstr += description + ":";
        for (let i = 0; i < movieArray.length; i++) {
            // document.write(movieArray[i]);
            htmlstr += movieArray[i];
            if (i != movieArray.length - 1) {
                // document.write('、');
                htmlstr += "、";
            }
        }
    })(movies, '原始影片');
    // document.write('<hr/>');
    htmlstr += '</p><hr/><p>';
    (function (movieArray, description) {
        // document.write(description + ':');
        // document.write(movieArray.join('_'));
        htmlstr += description + ':';
        htmlstr += movieArray.join('_');
    })(hotMovie, '最新热映');
    document.getElementsByClassName('result')[0].innerHTML = htmlstr + "</p>";
}

function arrayjoin() {
    //匿名函数 定一个排序规则
    var sortNumber = function (a, b) {
        return b - a;
    }

    // 匿名函数 定义一个连接字串
    var showFoodsByJoin = function (foods) {
        // document.write('<hr>中国美食：\t');
        // document.write(foods.join(','));
        document.getElementsByClassName('resultMethod')[0].innerHTML+='<hr>中国美食：\t'+foods.join(',');
    }

    var foods = new Array();
    foods[0] = '兰州拉面';
    foods[1] = '肉夹馍';
    foods.push('潍坊火烧');
    var length = foods.push('泰山包子');
    // document.write('<hr>排序前的数组长度：' + foods.length);
    document.getElementsByClassName('resultMethod')[0].innerHTML+='<hr>排序前的数组长度：' + foods.length

    showFoodsByJoin(foods);

    foods.push('周黑鸭');
    foods.push('柳亭猪蹄');
    foods.push('德州扒鸡');

    showFoodsByJoin(foods);

    foods.unshift('淄博烧饼');

    showFoodsByJoin(foods);

    /* 	向数组中添加1-n个元素或者从数组中删除元素，
    index必选，规定添加和删除元素的位置，index<0 时从数组尾部向前计数,-1表示最后一个元素，-2表示导数第二
    howmany必选，表示要删除元素的数量，0代表不删除数据
    [items]可选：表示向数组中添加和替换的元素
    从第二项开始删除两项，替换为‘北京烤鸭’,总数减少一项 */
    foods.splice(2, 2, '北京烤鸭','烧花鸭');

    showFoodsByJoin(foods);

    var betterfood = foods.slice(1, 4);
    //document.write('<hr>获赞的食品：' + betterfood);
    document.getElementsByClassName('resultMethod')[0].innerHTML+='<hr>获赞的食品有：' + betterfood;
    //document.write('<hr>获赞反向的：' + betterfood.reverse());
    document.getElementsByClassName('resultMethod')[0].innerHTML+='<hr>获赞逆向显示：' + betterfood.reverse();

    var prices = [35, 82, 20, 16, 55];
    //document.write('<hr>排序前的数组：' + prices);
    document.getElementsByClassName('resultMethod')[0].innerHTML+='<hr>排序前的数组：' + prices;
    //document.write('<hr>默认的默认方式：' + prices.sort());
    document.getElementsByClassName('resultMethod')[0].innerHTML+='<hr>默认排序方式：' + prices.sort();
    //document.write('<hr>指定排序方式：' + prices.sort(sortNumber));
    document.getElementsByClassName('resultMethod')[0].innerHTML+='<hr>指定排序方式：' + prices.sort(sortNumber);
}

function arrayMatrix() {
    var title = new Array('电影类型', '电影名称', '票价');
    var movies = [
        ['科幻', '流浪地球', 57.9],
        ["动漫", "雾山五行", 27.9],
        ["战争", "长津湖", 87.9],
        ["历史", "我和我的父辈", 97.9],
    ];
    var htmlstr='';
    // document.write('<table border="1px" rules="all">');
    htmlstr+='<table border="1px" rules="all">';
    // document.write("<tr>");
    htmlstr+="<tr>";
    for (let index = 0; index < title.length; index++) {
        // document.write("<th>" + title[index] + "</th>");
        htmlstr+="<th>" + title[index] + "</th>";
    }
    for (let i = 0; i < movies.length; i++) {
        // document.write('<tr>')
        htmlstr+='<tr>';
        for (let j = 0; j < movies[i].length; j++) {
            // document.write("<td>"+ movies[i][j]+"</td>");
            htmlstr+="<td>"+ movies[i][j]+"</td>";
        }
        // document.write('</tr>')
        htmlstr+='</tr>';
    }
    // document.write('</table>');
    htmlstr+='</table>';
    document.getElementsByClassName('resultMatrix')[0].innerHTML=htmlstr;
}
