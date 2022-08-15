/* 自定义对象 */

/* 1. 原始定义法 */
var goodOption = new Object();
goodOption.name = "男士白衬衫";
goodOption.type = '男装';
goodOption.price = '580';
goodOption.color = 'white';
goodOption.showInfo = function () {
    document.write('商品名称为：' + goodOption.name +
        "<br>商品类型" + goodOption.type +
        "<br>商品价格" + goodOption.price +
        "<br>商品颜色" + goodOption.color);
}
goodOption.showColor = showColor;
function showColor() {
    document.write('<br>商品颜色：' + goodOption.color);
}

/* 2. 构造函数法 */
function goodContent(name, type, price, color) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.color = color;
    this.showInfo = function () {
        document.write('商品名称为：' + this.name +
            "<br>商品类型：" + this.type +
            "<br>商品价格" + this.price +
            "<br>商品颜色：" + this.color);
    };
    this.showColor = showColor;
    function showColor() {
        document.write('<br>商品颜色为：' + this.color + "<br>");
    }
}

/* 3. 原型拓展法 */
function goodParams() { };
goodParams.prototype.name = "耐克运动鞋";
goodParams.prototype.type = '鞋类';
goodParams.prototype.price = "1200";
goodParams.prototype.color = "宝石蓝";
goodParams.prototype.showInfo = function () {
    document.write("商品名称：" + this.name +
        "<br>商品分类：" + this.type +
        "<br>商品价格：" + this.price +
        "<br>商品颜色：" + this.color);
};
goodParams.prototype.showColor = showShoesColor;
function showShoesColor(params) {
    document.write('<br>鞋子颜色为：' + this.color);
}

/* 3. 原型拓展法 - 为内置对象项Array添加方法 */
Array.prototype.SortBubble = function () {
    var intArray = [];
    this.forEach(element => {
        intArray.push(+element);
    });
    for (let i = 0; i < intArray.length; i++) {
        for (let j = 0; j < intArray.length - 1 - i; j++) {
            if (intArray[j] > intArray[j + 1]) {
                var temp = intArray[j];
                intArray[j] = intArray[j + 1];
                intArray[j + 1] = temp;
            }
        };
    }
    return intArray;
}

Array.prototype.SortInsert = function () {
    var intArray = [];
    this.forEach(element => {
        intArray.push(+element);
    });
    // 初始时只有一个数据，待排序的数据从0开始
    for (let i = 1; i < intArray.length; i++) {
        var item = intArray[i];
        // 进行一次有条件的交换算法
        var j = i;
        while (j > 0 && item < intArray[j - 1]) {
            intArray[j] = intArray[j - 1];
            j--;
        }
        intArray[j] = item;
    }
    return intArray;
}

Array.prototype.SortSelect = function () {
    var intArray = [];
    this.forEach(element => {
        intArray.push(+element);
    });
    var index = -1;
    for (let i = 0; i < intArray.length; i++) {
        index = i;
        for (let j = i + 1; j < intArray.length; j++) {
            if (intArray[index] > intArray[j]) {
                index = j;
            }
        }
        if (index != i) {
            var temp = intArray[index];
            intArray[index] = intArray[i];
            intArray[i] = temp;
        }
    }
    return intArray;
}


/* 4. 混合定义法 - 以构造函数定义属性,原型拓展定义方法 */
function goodMuddy(name, type, price, color) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.color = color;
}
goodMuddy.prototype.showInfo = function () {
    document.write('商品名称为：' + this.name +
        "<br>商品类型为：" + this.type +
        "<br>商品价格为：" + this.price +
        "<br>商品颜色为：" + this.color);
}
goodMuddy.prototype.showColor = showMuddyColor;
function showMuddyColor() {
    document.write('<br>商品颜色为：' + this.color);
}

/* 5. JSON定义法(直接定义法) */
var goodJSON = {
    name: "儿童潮服",
    type: "童装",
    price: "200",
    color: 'pink',
    showInfo: function () {
        document.write('商品名称为：' + this.name +
            "<br>商品类型为：" + this.type +
            "<br>商品价格为：" + this.price +
            "<br>商品颜色为：" + this.color);
    },
    showColor: function () {
        document.write('<br>商品颜色为：' + this.color);
    }
};

var customerData = {
    name: 'chuamingxie',
    type: 'Member user',
    enjoy: ['看剧', '读书', '创造', '运动'],
    hometown: {
        province: 'anhui',
        city: 'huaibei',
    },
    orders: [
        { name: '男士衬衫', price: '200', type: '男装', numebr: '6' },
        { name: '男士鞋服', price: '180', type: '男装', numebr: '2' },
    ],
    consumption: function () {
        var sum = 0;
        this.orders.forEach(element => {
            sum += element.price * element.numebr;
        });
        return sum;
    },
    userfeature: function () {
        document.write('用户姓名：' + this.name +
            '<br>用户类别：' + this.type +
            '<br>用户家乡：' + this.hometown.province + "省 " + this.hometown.city + "市" +
            '<br>用户爱好：' + this.enjoy.join(','));
    },
};

/* 5. JSON定义法(直接定义法) - 通过JSON字符串解析为对象 */
var movieJsonStr = '{' +
    'name:"长津湖",' +
    'type:"战争",' +
    'price:80,' +
    'showInfo:function(){' +
    'document.write("影片名称："+this.name+",电影类型："+this.type+",票价："+this.price+"<br/>");' +
    '}' +
    '}';