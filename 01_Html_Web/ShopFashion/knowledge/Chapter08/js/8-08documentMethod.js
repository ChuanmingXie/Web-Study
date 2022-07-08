var phtml = document.getElementsByTagName('p')[0];
(function () {
    var menuDivGet = document.getElementById('menuDiv');
    var baseSpanGet = menuDivGet.getElementsByClassName('baseClass');
    var buySpanGet = menuDivGet.getElementsByClassName('buyClass');

    var menuDivQuery = document.querySelector('#menuDiv');
    var baseSpanQuery = document.querySelectorAll('.baseClass');
    var filmSpanQuery = document.querySelector('.filmClass');   //只返回单个元素,没有length属性

    // var menuDivjQuery = $('#menuDiv').get(0);
    // var baseSpanjQuery = $('span.baseClass');
    // var buySpanjQuery = $('span.buyClass');

    phtml.innerHTML += "DOM Get:<br/>具有baseClass特征span的标签个数：" + baseSpanGet.length + "<br/>具有buyClass特征的span标签个数：" + buySpanGet.length + "<br>";
    phtml.innerHTML += "DOM Query:<br/>具有baseClass特征span的标签个数：" + baseSpanQuery.length + "<br/>具有buyClass特征的span标签为：" + filmSpanQuery.innerHTML + " 元素类型为" + filmSpanQuery.nodeType + "<br>";
    // document.write("DOM jQuery:具有baseClass特征span的标签个数：" + baseSpanjQuery.length + "具有buyClass特征的span标签个数：" + buySpanjQuery.length);
})();

function countElement() {
    var userName = document.getElementById('userName');
    var hobby = document.getElementsByName('hobby');
    var inputs = document.getElementsByTagName('input');
    var result = "ID 为userName的元素的值：" + userName.value + '<br> 个人爱好：';
    for (let i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            result += hobby[i].value + "    ";
        }
    }
    phtml.innerHTML += "<br> name 为hobby的元素个数：" + hobby.length + "<br> 标签为inputs的元素个数为：" + inputs.length;
    // document.write(result);
}