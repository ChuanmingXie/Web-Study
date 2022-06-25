/* shift+Alt+A */
/* 
6-12 JS内预定义的函数
整数转化函数
parseInt(string,[radix])

浮点数转换函数
parsetFloat(string)

检查是否为数字函数
isNaN(value)

表达式(算术)执行函数
eval(string)

对话框函数
alert()
confirm()
prompt()
 */

document.write("parseInt('88.9')的执行结果：" + parseInt('88.9') + "<br/>");
document.write("parseInt('8T9')的执行结果：" + parseInt('8T9') + "<br/>");
document.write("parseInt('B89')的执行结果：" + parseInt('B89') + "<br/>");
document.write("parseInt('0x10')的执行结果：" + parseInt('0x10') + "<br/>");
document.write("parseInt('12',16)的执行结果：" + parseInt('12', 16) + "<br/>");
var str = "3000+499*2";
document.write("表达式" + str + "的结果是：" + eval(str));

function predefined() {
    do {
        // var money = prompt('请输入你的存款余额');
        var money = document.getElementsByTagName('input')[0].value;
        // var money = parseFloat(money);
        if (isNaN(money)) {
            alert('数据输入不合法,请重新输入！');
            break;
        }

        switch (parseInt(money / 10000)) {
            case 0:
                if (money < 0) {
                    alert('难以解决温饱问题')
                }
                else {
                    alert('贫下中农,达到低保生活');
                }
                break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                alert('富农，衣食无忧坚守一线');
                break;
            default:
                alert('容易获得');
                break;
        }
    } while (false);
}
