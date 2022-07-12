/* drag拖 drop放 - 事件携带数据 初试 */
function divDrag(e) {
    e.dataTransfer.setData('text/plain', "您正在拖动一个具备图片的div");
    document.getElementsByTagName('p')[0].innerHTML += e.dataTransfer.getData('text') + "<br>";
}

/* 拖放事件 - 移动操作  */
function dropByMove(e) {
    var data=e.dataTransfer.getData('text');
    if(e.target.tagName='DIV'){
        e.target.appendChild(document.getElementById(data));
    }else if(e.target.tagName=='IMG'){
        e.target.parentNode.appendChild(document.getElementById(data));
    }
    allowDragByMove(e);
}
function dragByMove(e) {
    e.dataTransfer.effectAllowed='link';
    e.dataTransfer.setData('text',e.target.id);
}
function allowDragByMove(e) {
    e.preventDefault();
    e.stopPropagation();
}

/* 拖放事件 - 复制操作  */
function dropByCopy(e) {
    var data = e.dataTransfer.getData('text');
    e.dataTransfer.dropEffect = 'copy';
    if (e.target.tagName == "DIV") {
        // 如果目标时div，则在其中添加内容
        e.target.appendChild(document.getElementById(data).cloneNode());
    } else if (e.target.tagName == "IMG") {
        // 如果目标是img,则在其父标签内添加内容
        e.target.parentNode.appendChild(document.getElementById(data).cloneNode());
    }
    allowDragByCopy(e);
}
function dragByCopy(e) {
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text', e.target.id);
}
function allowDragByCopy(e) {
    e.preventDefault();
    e.stopPropagation();
}


