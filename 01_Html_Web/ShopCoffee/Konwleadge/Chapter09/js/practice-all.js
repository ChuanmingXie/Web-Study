/* 
    JS采用事件驱动的响应机制，用户在界面进行交互操作时会触发相应的事件。
    事件（Event）驱动:指页面中相应用户操作的一种处理方式，
    事件（Event）处理:在响应用户操作时所调用的代码。
    事件的产生和响应都是浏览器来完成的，包括HTML代码中设置哪些元素响应哪些事件，JS告诉浏览器如何处理这些响应
 */

/*
    当浏览器检查到事件(鼠标事件、键盘事件、文档事件、表单、表单元素事件)时,
    调用事先指定的事件处理函数进行处理，在此过程中，事件中需要传递的信息都是通过事件对象来完成的。
    Event对象是JS中非常重要的对象,其中包括当前触发事件的状态,键盘、鼠标状态或位置、窗口变化、表单填写和提交等
    大多数event对象的属性是只读的,因为Event是事件动作的快照。
 */
this.onmousemove = function (event) {

    var mouseX = event.screenX;
    var mouseY = event.screenY;
    showMouseInfo.value = mouseX + ',' + mouseY;
};

function closeWin() {
    if (confirm("确定关闭?")) {
        window.opener = null;
        window.open("", "_self");
        this.close();
    }
}

function showImage(e) {
    var index = e.srcElement.selectedIndex;
    pic.src = "./img/card/" + e.srcElement[index].value;
}

function returnfoo() {
    var radioGroups = document.getElementsByName('radioGroup');
    for (let i = 0; i < radioGroups.length; i++) {
        if (radioGroups[i].checked) {
            alert((i+1) + "---->" +radioGroups[i].value);
        }
    }
}