/* 线性查找 */
function SearchLine(arraySrc, item) {
    var index = -1;
    for (let i = 0; i < arraySrc.length; i++) {
        if (item == arraySrc[i]) {
            index = i + 1;
            break;
        }
    }
    if (index != -1) {
        alert('检索到所查询数据' + index);
    } else {
        alert('未找到检索数据!');
    }
}

/* 二分法查找 */
function SearchBranch(arraySrc, item) {
    var start = 0;
    var end = arraySrc.length;
    var middle;
    var index = -1;
    while (start <= end) {
        middle = parseInt((start + end) / 2);
        item1 = parseInt(item);
        arraySrc1 = parseInt(arraySrc[middle]);
        if (item1 == arraySrc1) {
            index = middle + 1;
            break;
        }
        if (item1 < arraySrc1) {
            end = middle - 1;
        }
        if (item1 > arraySrc1) {
            start = middle + 1;
        }
    }
    if (index != -1) {

        alert("二分法需要先进性排序：" + arraySrc.join(',') + '\r\n检索到所查询数据:' + index);
    } else {
        alert('二分法需要先进性排序：' + arraySrc.join(',') + '\r\n未找到检索数据!');
    }
}

/* 查找最大最小值 */
function SearchMinAndMax(arraySrc) {
    var max = arraySrc[0];
    var min = arraySrc[0];
    for (let i = 0; i < arraySrc.length; i++) {
        if (arraySrc[i] >= max) {
            max = arraySrc[i];
        }
        if (min >= arraySrc[i]) {
            min = arraySrc[i]
        }
    }
    alert('数组中最大最小值分分别为:Max=' + max + 'Min=' + min);

}

/* 触发查找方法 */
btnSearch.onclick = function () {
    var searchMethodArr = document.getElementById('searchMethod');
    var searchMethod = searchMethodArr.options[searchMethodArr.selectedIndex];
    var arraySrc = arrayItemSearch.value.split(',');
    var searchItem = arraySearch.value;
    switch (parseInt(searchMethod.value)) {
        case 0: SearchLine(arraySrc, searchItem); break;
        case 1: SearchBranch(SortInsert(arraySrc).split(','), searchItem); break;
        case 2: SearchMinAndMax(arraySrc); break;
        default: break;
    }
}

/* 触发排序方法 */
btnSort.onclick = function () {
    var sortMethodArr = document.getElementById('sortMethod');
    var sortMethod = sortMethodArr.options[sortMethodArr.selectedIndex];
    var arraySrc = arrayItemSort.value.split(',');
    var sortResult;
    switch (parseInt(sortMethod.value)) {
        case 0: sortResult = SortBubble(arraySrc); break;
        case 1: sortResult = SortSelect(arraySrc); break;
        case 2: sortResult = SortInsert(arraySrc); break;
        default: break;
    }
    arraySort.value = sortResult;
}

/* 冒泡排序 */
function SortBubble(array) {
    var arrayint = [];
    array.forEach(element => {
        arrayint.push(+element);
    });
    for (let i = 0; i < arrayint.length; i++) {
        for (let j = 0; j < arrayint.length - 1 - i; j++) {
            if (arrayint[j] > arrayint[j + 1]) {
                var temp = arrayint[j];
                arrayint[j] = arrayint[j + 1];
                arrayint[j + 1] = temp;
            }
        }
    }
    return arrayint.join(',');
}

/* 选择排序 */
function SortSelect(params) {
    var arrayInt = [];
    params.forEach(function (data, index, arr) {
        arrayInt.push(+data);
    });
    var index = 0;
    // N个数比较N-1轮
    for (let i = 0; i < arrayInt.length - 1; i++) {
        // 记录当前数为最小数
        index = i;
        for (let j = i + 1; j < arrayInt.length; j++) {
            // 当发现最小数时记下下标
            if (arrayInt[index] > arrayInt[j]) {
                index = j;
            }
        }
        if (index != i) {
            var temp = arrayInt[i];
            arrayInt[i] = arrayInt[index];
            arrayInt[index] = temp;
        }
    }
    return arrayInt.join(',');
}

/* 插入排序 */
function SortInsert(params) {
    var arrayInt = [];
    params.forEach(function (data, index, arr) {
        arrayInt.push(+data);
    });

    for (let i = 1; i < arrayInt.length; i++) {
        var temp = arrayInt[i];
        var j = i;
        while (j > 0 && temp < arrayInt[j - 1]) {
            arrayInt[j] = arrayInt[j - 1];
            j--;
        }
        arrayInt[j] = temp;
    }
    return arrayInt.join(',');
}

function PrintPascalTriangle(params) {
    var array = new Array(9);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(i);
        for (let j = 0; j < array[i].length; j++) {
            if (j == 0 || j == i) {
                array[i][j] = 1;
            } else {
                array[i][j] = array[i - 1][j] + array[i - 1][j - 1];
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]+"   ");
        }
        console.log();
    }
}
PrintPascalTriangle();
