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

/* 习题1-确认用户退出,关闭窗口 */
function closeWin() {
    if (confirm("确定关闭?")) {
        window.opener = null;
        window.open("", "_self");
        this.close();
    }
}

/* 练习3-根据下拉框更新图片 */
function showImage(e) {
    var index = e.srcElement.selectedIndex;
    pic.src = "./img/card/" + e.srcElement[index].value;
}

/* 习题2-弹出对话框时显示选中的是第几个单选按钮 */
function returnfoo() {
    var radioGroups = document.getElementsByName('radioGroup');
    for (let i = 0; i < radioGroups.length; i++) {
        if (radioGroups[i].checked) {
            alert((i + 1) + "---->" + radioGroups[i].value);
        }
    }
}

/* 练习5-交换多选框内容 */
btnTurnRight.onclick = function TurnRight(params) {
    var srcSelect = document.getElementById("multiSelectLeft");
    var desSelect = document.getElementById("multiSelectRight")
    TurnExchange(srcSelect, desSelect);
}
btnTurnLeft.onclick = function TurnLeft(params) {
    var srcSelect = document.getElementById("multiSelectRight");
    var desSelect = document.getElementById("multiSelectLeft");
    TurnExchange(srcSelect, desSelect);
}

function TurnExchange(srcSelect, desSelect) {
    console.log(srcSelect.selectedIndex);
    if (srcSelect.selectedIndex == -1) {
        alert('请选择移动项');
    }
    for (let i = 0; i < srcSelect.options.length; i++) {
        if (srcSelect.options[i].selected) {
            var exist = false;
            for (let j = 0; j < desSelect.options.length; j++) {
                if (desSelect.options[j].value == srcSelect.options[i].value) {
                    exist = true;
                    break;
                }
            }
            if (!exist) {
                var srcOptions = document.createElement('option');
                srcOptions.value = srcSelect.options[i].value;
                srcOptions.text = srcSelect.options[i].text;
                desSelect.appendChild(srcOptions);

                // srcSelect.options[i]=null;
                // srcSelect.removeChild(srcOptions);
                // srcSelect.removeChild(srcSelect.options[i]);
            }
        }
    }
    var indexArray = [];
    for (let i = 0; i < desSelect.options.length; i++) {
        for (let j = 0; j < srcSelect.options.length; j++) {
            if (srcSelect.options[j].innerText == desSelect.options[i].innerText) {
                indexArray.push(j);
                srcSelect.options[j] = null;
            }
        }
    }
    console.log(indexArray);
}