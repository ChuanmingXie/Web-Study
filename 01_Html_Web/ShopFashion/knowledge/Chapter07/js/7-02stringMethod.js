(function () {
    var address = '中国 青岛 高新区';
    var name = '漫步时代广场';

    var panel = document.getElementsByTagName('div')[0];
    panel.innerHTML += "<p>name的类型是:" + typeof (name) +
        "<br>address的类型是:" + typeof (address) + "</p> <hr>"

    var movieName = new String('《长津湖》之水门桥');
    var director = String('吴京');

    panel.innerHTML += "<p>movieName的类型是:" + typeof (movieName) +
        "<br>director的类型是：" + typeof (director) + "</p> <hr>";

    var index = movieName.indexOf('津');
    var lastIndex = movieName.lastIndexOf('生', 4);
    if (index != -1) {
        panel.innerHTML += "<p>\"津\"在字符串:" + movieName + " 中的位置是:" + index + "</p> <hr>";
    }
    if (lastIndex != -1) {
        panel.innerHTML += "<p>'生'在字符串" + movieName + "中的位置是:" + lastIndex + "</p>";
    }

    var subName = movieName.substring(1, movieName.length - 5);
    var familyName = director.slice(0, 1);
    panel.innerHTML += "<p>影片的名称为：" + subName + "<br>导演姓氏:" + familyName + "</p>";
})();

function stringMethod() {
    var name = '漫步时代广场';
    var reuslt = "";
    for (let i = 0; i < name.length; i++) {
        var str = name.charAt(i);
        if (i % 2 == 1) {
            str = str.bold();
        }
        str = str.fontsize((i % 7) + 1);
        if (i % 3 == 0) {
            str = str.fontcolor('red');
        }
        if (i % 4 == 0) {
            str = str.anchor('anchor');
        }
        reuslt += str;
    }
    var panel2 = document.getElementsByTagName('div')[1];
    panel2.innerHTML += "<p>处理前的字符串：" + name +
        "<br>处理后的字符串：" + reuslt + "</p><hr>"

    var movieContent = new String('革命年代的将士们,为了刚刚成立的的新中国奋不顾身的开赴抗美援朝前线，没有食物，没有武器装备，克服困难迎难而上，在长津湖英勇战斗...');
    var resultContent = '';
    for (let i = 0; i < movieContent.length; i++) {
        var str = movieContent.charAt(i);
        if (i % 4 == 1) {
            str = str.sup();
        }
        if (i % 6 == 0) {
            str = str.sub();
        }
        resultContent += str;
    }
    panel2.innerHTML += "<p>处理前的字符串：" + movieContent +
        "<br>处理后的字符串：" + resultContent + "</p><hr>";

    var movieName = "《长津湖》由吴京参演陈凯歌导演的优秀战争题材作品";
    panel2.innerHTML += "<p>替换后的字符串：" + movieName.replace(/陈凯歌/, '徐克 林庚年') + "</p><hr>"

    var songWords = "Two roads diverged in a yellow wood；I'd go back and rechoose if I could...";
    var words = songWords.split(' ');
    var resultWords = "";
    for (let index = 0; index < words.length; index++) {
        if (index % 2 == 0) {
            words[index] = words[index].toUpperCase();
        }
        else {
            words[index] = words[index].toLocaleLowerCase();
        }
        resultWords += words[index] + " ";
    }
    panel2.innerHTML += "<p>处理前的字符串：" + songWords + "</p>"
    panel2.innerHTML += "<p>处理后的字符串：" + resultWords + "</p>"
}
