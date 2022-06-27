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
            htmlstr += movieArray[i]+'、';
            if (i == movieArray.length - 1) {
                // document.write('<br>');
                htmlstr + "<br>";
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
    document.getElementsByClassName('result')[0].innerHTML = htmlstr+"</p>";
}

function arrayjoin(){
    
}