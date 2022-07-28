onmessage = function (e) {
    var num = e.data;
    console.log(num);
    var sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    this.postMessage(sum);
    console.log(sum);
}