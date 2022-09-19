// 统计全部金额
function amountProfit() {
    var sum = 0;
    var myTable = document.getElementsByTagName('table')[0];
    var tbodyList = myTable.childNodes;
    for (let i = 0; i < tbodyList.length; i++) {
        var tbody = tbodyList.item(i);
        if (tbody.nodeType == 1) {
            var rowList = tbody.childNodes;
            for (let index = 0; index < rowList.length; index++) {
                var row = rowList[index];
                if (row.nodeType == 1) {
                    var cellList = row.cells;
                    // 3列的表格返回7个元素节点,td元素的前后是换行和制表位
                    var profitCell = cellList[2];
                    if (profitCell != null) {
                        var profit = parseFloat(profitCell.innerHTML);
                        sum += (isNaN(profit)? 0 : profit);
                    }
                }
            }
        }

    }
    var lastRow=myTable.children[2].children.length-1;
    myTable.children[2].children[lastRow].children[1].innerHTML = sum;

    // 统计方式2
    /* var tableRows=document.getElementsByTagName('tr');
    var lastRow=tableRows.get(tableRows.length-1);
    lastRow.lastChild.previousSibling.innerHTML=sum; */
}

// 向最后一行添加新数据
function insertRearRow() {
    var mytable=document.getElementsByTagName('table')[0];
    var index=mytable.rows.length-1;
    var row=mytable.insertRow(index);
    var userIDCell=row.insertCell(0);
    var userNameCell=row.insertCell(1);
    var profitCell=row.insertCell(2);
    
    userIDCell.innerHTML=document.getElementById('userID').value;
    userNameCell.innerHTML=document.getElementById('userName').value;
    profitCell.innerHTML=document.getElementById('profit').value;
    amountProfit();
}