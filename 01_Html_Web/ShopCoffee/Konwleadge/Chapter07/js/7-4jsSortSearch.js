function SearchLine(params) {
    var arraySrc = arrayItemSearch.value.split(',');
    for (let i = 0; i < arraySrc.length; i++) {
        if (arraySearch.value = arraySrc[i]) {
            alert('元素'+arraySearch.value+'已找到，位置在：'+i);
            break;
        }
    }
}