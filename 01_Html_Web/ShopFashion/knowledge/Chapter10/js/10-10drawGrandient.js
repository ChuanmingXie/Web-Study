
function linearGrandient() {
    var canvas = document.getElementById('linearGrandient');
    var content = canvas.getContext('2d');
    /* 创建LinearGradient对象,设置渐变方向 水平向右 */
    var gradient = content.createLinearGradient(20, 20, 300, 20)
    /* 设置渐变色 */
    gradient.addColorStop(0.0, 'yellow');
    gradient.addColorStop(0.25, 'green');
    gradient.addColorStop(0.5, 'yellow');
    gradient.addColorStop(0.75, 'green');
    gradient.addColorStop(1.0, 'yellow');
    content.fillStyle = gradient;
    // 设置渐变区域
    content.fillRect(20, 20, 280, 150);


    /* 创建LinearGradient对象,设置渐变方向 右上角至左下 */
    var gradient = content.createLinearGradient(600, 20, 320, 150)
    /* 设置渐变色 */
    gradient.addColorStop(0.0, 'yellow');
    gradient.addColorStop(0.25, 'green');
    gradient.addColorStop(0.5, 'yellow');
    gradient.addColorStop(0.75, 'green');
    gradient.addColorStop(1.0, 'yellow');
    content.fillStyle = gradient;
    content.fillRect(320, 20, 280, 150)
}

function radialGrandient() {
    var canvas = document.getElementById('radialGrandient');
    var content = canvas.getContext('2d');
    /* 创建RadialGradient 对象-绘制同心圆 */
    var gradient = content.createRadialGradient(160, 95, 10, 160, 95, 70);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.5, 'yellow');
    gradient.addColorStop(1, 'green');
    content.fillStyle = gradient;
    content.fillRect(20, 20, 280, 150);


    /* 创建RadialGradient 对象-绘制同心圆 */
    var gradient = content.createRadialGradient(350, 95, 5, 600, 95, 70);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.7, 'yellow');
    gradient.addColorStop(1, 'green');
    content.fillStyle = gradient;
    content.fillRect(320, 20, 280, 150);
}

linearGrandient();
radialGrandient(); 