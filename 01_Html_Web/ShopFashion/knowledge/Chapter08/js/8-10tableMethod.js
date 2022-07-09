function insertFirstRow() {
    appendRow(1);
}
function insertrearRow() {
    var index = document.getElementById('myTable').rows.length;
    appendRow(index);
}

function appendRow(index) {
    var mytable = document.getElementById('myTable');
    var row = mytable.insertRow(index);
    var userIDCell = row.insertCell(0);
    var userNameCell = row.insertCell(1);
    var toolCell = row.insertCell(2);
    userIDCell.innerHTML = document.getElementById('userID').value;
    userNameCell.innerHTML = document.getElementById('userName').value;
    toolCell.innerHTML = '<input type="image" src="./img/filetool/delete.png" alt="删除" onclick="deleteRow(this)"> ' +
        '<input type="image" src="./img/filetool/detail.png" alt="详情"> ' +
        '<input type="image" src="./img/filetool/create.png" alt="编辑">'
}

function deleteRow(btndelete) {
    var currentIndex = btndelete.parentNode.parentNode.rowIndex;
    var mytable = document.getElementById('myTable');
    mytable.deleteRow(currentIndex);
}

function appendCaption() {
    var mytable = myTable;
    var caption = mytable.createCaption();
    caption.innerHTML = '注册会员用户信息表';
}

function removeCaption() {
    var mytable = document.getElementById('myTable');
    mytable.deleteCaption();
}