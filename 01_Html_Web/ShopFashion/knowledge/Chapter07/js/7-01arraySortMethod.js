/* 1.数组的普通排序方法-sort()+if条件句 */

/* 1.1普通数组排序 */
var aString = ['banna', 'apple', 'orange'];
var arraySort = aString.sort();
console.log(arraySort);

/* 1.2对象数组排序 */
var aPersonName = [
    { FirstName: 'Ellie', LastName: 'Williams' },
    { FirsName: "Crockford", LastName: "Douglas" },
    { FirsName: "C.Zakas", LastName: "nicholas" },
    { FirsName: "C.Zakas", LastName: "aicholas" },
    { FirsName: "C.Zakas", LastName: "bicholas" },
    { FirstName: "Lara", LastName: "Croft" }
];
// 对象排序 不建议使用将对象属性值相减进行判断
function sortPersonName(x, y) {
    if (x.LastName < y.LastName) {
        return -1;
    }
    if (x.LastName > y.LastName) {
        return 1;
    }
}

var sortResult = aPersonName.sort(sortPersonName);
console.log(sortResult);

var aBookInfo = [
    { name: '《Vue.js实战》', author: '谢传明' },
    { name: '《JavaScript精粹》', author: 'Douglas Crockford' },
    { name: '《JavaScript高级程序设计》', author: 'nicholas C.Zakas' },
    { name: '《CSS样式》', author: '弓也长' },
    { name: '《HTML5》', author: '谢以安' },
    { name: '《React全家桶》', author: '张志伟' },
    { name: '《设计模式》', author: 'D' }
];
var aBookName = [
    { name: 1, author: '谢传明' },
    { name: 20, author: 'Douglas Crockford' },
    { name: "5", author: 'nicholas C.Zakas' },
    { name: 9, author: '弓也长' },
    { name: 8, author: '谢以安' },
    { name: "10", author: '张志伟' },
    { name: 38, author: 'D' }
];
// 对象排序 验证使用属性值直接相减为无效排序操作
function sortBook(x, y) {
    // return x.name-y.name;
    if (x.name < y.name) { return -1; }
    if (x.name > y.name) { return 1; }
}
var sortResult1=aBookInfo.sort(sortBook);
console.log(sortResult1);

var sortResult2=aBookName.sort(sortBook);
console.log(sortResult2);

/* 2.数组的localeCompare()排序方法- sort()+localeCompare()委托 */
// localeCompare()无比较参数下的代理方法
function sortLocaleCompare(x,y){
    return x.author.localeCompare(y.author);
}
var sortResult3=aBookName.sort(sortLocaleCompare);
console.log(sortResult3);
// localeCompare() 使用比较参数下的代理方法:ignorePunctuation忽略标点符号
function sortLocaleCompareOption(x,y) {
    return x.name.localeCompare(y.name,'fr',{ignorePunctuation:true});
}
var sortResult4=aBookInfo.sort(sortLocaleCompareOption);
console.log(sortResult4);

/* 3.数组的Intl.Collator().compare()排序方法-sort()+Collator().compare()委托 */