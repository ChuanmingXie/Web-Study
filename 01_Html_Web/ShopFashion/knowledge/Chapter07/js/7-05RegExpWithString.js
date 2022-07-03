
/* 敏感字符串的替换 */
function replaceContent(replaceText) {
    var replaceReg = /台独|分裂|破坏/g;
    var markStr = "**".fontcolor('blue').bold();
    var result = replaceText.replace(replaceReg, markStr);
    document.write(result);
}

/* 字符串查找 */
function searchContent(searchText) {
    var searchReg = /地铁|公交|轮渡|空运/;
    var result = searchText.search(searchReg);
    searchText = searchText.fontcolor("#ee0000").big(5);
    if (result != -1) {
        document.write(searchText + "中涉及了交通运输方面的信息");
    } else {
        document.write(searchText + "中没有涉及交通运输方面的信息");
    }
}

/* 字符串分割 */
function splitContent(splitText) {
    var splitReg = /,|_|、| |>/;
    var array = splitText.split(splitReg);
    for (let i = 0; i < array.length; i++) {
        document.write(array[i] + "<br />");
    }
}

/* 字符串匹配 */
function matchContent(matchTxt, position) {
    var matchReg = "";
    if (position) {
        matchReg = new RegExp("[\u4e00-\u9fa5]?张[\u4e00-\u9fa5]?三");
        var array = matchTxt.match(matchReg);
        for (let i = 0; i < array.length; i++) {
            document.write("第" + (i + 1) + "次匹配&quot;" + array[i] + "&quot;,位置在" + array.index + ".");
        }
    } else {
        matchReg = new RegExp("[\u4e00-\u9fa5]?张[\u4e00-\u9fa5]?三", "g");
        var array = matchTxt.match(matchReg);
        for (let i = 0; i < array.length; i++) {
            document.write("第" + (i + 1) + "次匹配&quot;" + array[i] + "&quot;,");
        }
    }
}

(function () {
    var replaceTxt = "\"七七事变\"85周年纪念日，全国各地举行了一些列纪念活动,严惩分裂，破坏国家安全分子";
    replaceContent(replaceTxt);
    document.write("<br />");

    var searchText = "\"地铁时铁路运输的一种形式,以地下运行为主要的城市轨道交通系统\"";
    searchContent(searchText);
    document.write("<br />");

    var splitText = "baby,gril,boy,man,woman";
    document.write("乘车人员包括：<br />");
    splitContent(splitText);
    // document.write("<br />");

    var matchText = "醉鬼三张在KTV唱歌,张三在看电影，张小三在斗地主，小张三在踢足球，张府老三在练太极";
    document.write(matchText + "<br/>");
    matchContent(matchText, true);
    document.write('<br />');
    matchContent(matchText);
})();